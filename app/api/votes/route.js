// Votes du carnet de paillasse, stockés dans Upstash Redis (intégration Vercel « Upstash for Redis » / ex-Vercel KV).
import { createHash } from 'crypto';

export const dynamic = 'force-dynamic';

const IDS = ['verveine-menthe', 'menthe-pouliot', 'champignon', 'ortie', 'chataigne', 'mandarine', 'framboise'];
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(...cmd) {
  const r = await fetch(URL_, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd),
    cache: 'no-store',
  });
  if (!r.ok) throw new Error(`redis ${r.status}`);
  return (await r.json()).result;
}

async function counts() {
  const flat = (await redis('HGETALL', 'carnet:votes')) || [];
  const out = {};
  for (let i = 0; i < flat.length; i += 2) out[flat[i]] = Number(flat[i + 1]) || 0;
  return out;
}

export async function GET() {
  if (!URL_ || !TOKEN) return Response.json({ enabled: false, counts: {} });
  try {
    return Response.json({ enabled: true, counts: await counts() });
  } catch (e) {
    return Response.json({ enabled: false, counts: {} });
  }
}

export async function POST(req) {
  if (!URL_ || !TOKEN) return Response.json({ enabled: false }, { status: 503 });
  let id = '';
  try {
    id = (await req.json()).id;
  } catch (e) {}
  if (!IDS.includes(id)) return Response.json({ error: 'formule inconnue' }, { status: 400 });
  // une voix par formule et par visiteur (adresse IP hachée, jamais stockée en clair)
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'inconnu';
  const who = createHash('sha256').update(`${ip}·maison-arnould`).digest('hex').slice(0, 24);
  try {
    const added = await redis('SADD', `carnet:voix:${id}`, who);
    if (added === 1) await redis('HINCRBY', 'carnet:votes', id, 1);
    return Response.json({ enabled: true, counts: await counts(), deja: added !== 1 });
  } catch (e) {
    return Response.json({ error: 'indisponible' }, { status: 503 });
  }
}
