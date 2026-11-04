'use client';

import { useEffect, useRef, useState } from 'react';
import Picto from './Picto';

// Carnet de paillasse : quand on arrive dessus, il « s'écrit » — le dessin se trace,
// la ligne s'encre de gauche à droite, un mot est raturé puis corrigé à la main.
export default function Carnet({ items }) {
  const ref = useRef(null);
  const [ecrit, setEcrit] = useState(false);

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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={ref} className={`carnet${ecrit ? ' is-ecrit' : ''}`}>
      {items.map((c, i) => (
        <li key={c.name} style={{ '--i': i }}>
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
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
