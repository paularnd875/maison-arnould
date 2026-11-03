'use client';

import { useEffect, useState } from 'react';

const SLOTS = 12;
const EVERY = 3200; // ms entre deux changements
const FADE = 700;

// Affiche 12 mots ; toutes les ~3 s, un mot au hasard s'efface et laisse place à un mot resté en réserve.
export default function Lexique({ mots }) {
  const [shown, setShown] = useState(() => mots.slice(0, SLOTS).map((_, i) => i));
  const [fading, setFading] = useState(-1);

  useEffect(() => {
    if (mots.length <= SLOTS) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let t2;
    const t = setInterval(() => {
      const slot = 1 + Math.floor(Math.random() * (SLOTS - 1)); // « simples » reste toujours affiché (renvoi depuis le labo)
      setFading(slot);
      t2 = setTimeout(() => {
        setShown((cur) => {
          const reserve = mots.map((_, i) => i).filter((i) => !cur.includes(i));
          const next = [...cur];
          next[slot] = reserve[Math.floor(Math.random() * reserve.length)];
          return next;
        });
        setFading(-1);
      }, FADE);
    }, EVERY);
    return () => {
      clearInterval(t);
      clearTimeout(t2);
    };
  }, [mots]);

  return (
    <dl className="lexique__grid">
      {shown.map((idx, slot) => {
        const x = mots[idx];
        return (
          <div key={slot} className={`lex${fading === slot ? ' lex--out' : ''}`}>
            <dt>
              {x.w} <span>[{x.p}] <i>{x.g}</i></span>
            </dt>
            {x.d.map((d, i) => (
              <dd key={i}>{d}</dd>
            ))}
          </div>
        );
      })}
    </dl>
  );
}
