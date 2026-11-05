'use client';

import { useEffect, useRef, useState } from 'react';
import Picto from './Picto';

const KEY = 'ma-carnet-voix';

function lireVoix() {
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || '[]');
  } catch (e) {
    return [];
  }
}

// Carnet de paillasse : quand on arrive dessus, il « s'écrit » — le dessin se trace,
// la ligne s'encre de gauche à droite, un mot est raturé puis corrigé à la main.
// Chaque formule peut recevoir une voix (+1) ; les compteurs sont partagés entre visiteurs.
export default function Carnet({ items }) {
  const ref = useRef(null);
  const [ecrit, setEcrit] = useState(false);
  const [counts, setCounts] = useState({});
  const [voix, setVoix] = useState([]);

  useEffect(() => {
    setVoix(lireVoix());
    fetch('/api/votes', { cache: 'no-store' })
      .then((r) => r.json())
      .then((j) => setCounts(j.counts || {}))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEcrit(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setEcrit(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const voter = async (id) => {
    if (voix.includes(id)) return;
    const next = [...voix, id];
    setVoix(next);
    setCounts((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch (e) {}
    try {
      const r = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const j = await r.json();
      if (j.counts) setCounts(j.counts);
    } catch (e) {}
  };

  const piste = useRef(null);
  const [bords, setBords] = useState({ g: true, d: false });
  useEffect(() => {
    const el = piste.current;
    if (!el) return;
    const maj = () => setBords({ g: el.scrollLeft <= 2, d: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
    maj();
    el.addEventListener('scroll', maj, { passive: true });
    window.addEventListener('resize', maj);
    return () => {
      el.removeEventListener('scroll', maj);
      window.removeEventListener('resize', maj);
    };
  }, []);
  const defiler = (d) => {
    const el = piste.current;
    if (!el) return;
    const li = el.querySelector('li');
    const w = li ? li.getBoundingClientRect().width + 20 : 300;
    el.scrollBy({ left: d * w, behavior: 'smooth' });
  };

  return (
    <div className="carnet__defile">
    <button type="button" className="carnet__fleche carnet__fleche--g" onClick={() => defiler(-1)} disabled={bords.g} aria-label="Formules précédentes">←</button>
    <div className="carnet__piste" ref={piste}>
    <ul ref={ref} className={`carnet${ecrit ? ' is-ecrit' : ''}`}>
      {items.map((c, i) => {
        const a = voix.includes(c.id);
        const n = counts[c.id] || 0;
        return (
          <li key={c.id} style={{ '--i': i }}>
            <Picto kind={c.picto} />
            <span className="carnet__encre">
              <b>{c.name}</b>
              {c.latin ? <i>{c.latin}</i> : null}
              <span className="carnet__d">
                {c.avant}
                <span className="carnet__rature">
                  <s>{c.rature}</s>
                  <span className="carnet__main">{c.fix}</span>
                </span>
                {c.apres}
                {c.note ? <sup className="carnet__ast">*</sup> : null}
              </span>
              {c.note ? <span className="carnet__note"><sup>*</sup> {c.note}</span> : null}
            </span>
            <button
              type="button"
              className={`carnet__voix${a ? ' is-on' : ''}`}
              onClick={() => voter(c.id)}
              aria-pressed={a}
              aria-label={a ? `Vous avez voté pour ${c.name}` : `Voter pour ${c.name}`}
              title={a ? 'Votre voix est notée au carnet' : 'J’y goûterais volontiers'}
            >
              <span className="carnet__plus">{a ? '✓' : '+1'}</span>
              <span className="carnet__n">{String(n).padStart(2, '0')}</span>
            </button>
          </li>
        );
      })}
    </ul>
    </div>
    <button type="button" className="carnet__fleche carnet__fleche--d" onClick={() => defiler(1)} disabled={bords.d} aria-label="Formules suivantes">→</button>
    </div>
  );
}
