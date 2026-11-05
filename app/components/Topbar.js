'use client';

import { useEffect, useState } from 'react';
import Medallion from './Medallion';

// L'en-tête passe en vert nuit (texte et logo crème) dès que le fond de page devient vert.
// Couleurs du dégradé « décantation » (mêmes arrêts que .simples dans globals.css)
const STOPS = [
  [0, [244, 236, 214]],
  [70, [201, 206, 142]],
  [150, [127, 146, 72]],
  [215, [52, 73, 28]],
  [260, [31, 42, 20]],
];
function couleur(o) {
  if (o <= 0) return STOPS[0][1];
  for (let i = 1; i < STOPS.length; i++) {
    const [p1, c1] = STOPS[i];
    const [p0, c0] = STOPS[i - 1];
    if (o <= p1) {
      const t = (o - p0) / (p1 - p0);
      return c0.map((v, k) => Math.round(v + (c1[k] - v) * t));
    }
  }
  return STOPS[STOPS.length - 1][1];
}
const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`;

export default function Topbar() {
  const [dark, setDark] = useState(false);
  const [fond, setFond] = useState(null);

  useEffect(() => {
    const zone = document.querySelector('[data-zone="nuit"]');
    if (!zone) return;
    const check = () => {
      const bar = document.querySelector('.topbar');
      const h = bar ? bar.offsetHeight : 80;
      const top = zone.getBoundingClientRect().top; // début du dégradé
      // l'en-tête montre exactement la tranche du dégradé qui passe derrière lui
      const haut = 0 - top;
      const bas = h - top;
      if (bas <= 0) {
        setFond(null);
        setDark(false);
      } else {
        setFond(`linear-gradient(180deg, ${rgb(couleur(haut))}, ${rgb(couleur(bas))})`);
        setDark(haut + h / 2 >= 150);
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <header className={`topbar${dark ? ' topbar--nuit' : ''}${fond ? ' topbar--fondu' : ''}`} style={fond ? { background: fond } : undefined}>
      <a href="#haut" className="topbar__brand" aria-label="maison arnould, retour en haut">
        <Medallion size={44} ink={dark ? '#F4ECD6' : '#1F2A14'} gold={dark ? '#E8C547' : '#A07C30'} />
        <span>maison arnould</span>
      </a>
      <nav aria-label="Navigation principale">
        <ul className="topbar__nav">
          <li><a href="#maison">la maison</a></li>
          <li><a href="#liqueurs">les liqueurs</a></li>
          <li><a href="#methode">la préparation</a></li>
          <li><a href="#simples">les simples</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
