'use client';

import { useEffect, useState } from 'react';
import Medallion from './Medallion';

// L'en-tête passe en vert nuit (texte et logo crème) dès que le fond de page devient vert.
export default function Topbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const zone = document.querySelector('[data-zone="nuit"]');
    if (!zone) return;
    const check = () => {
      const bar = document.querySelector('.topbar');
      const h = bar ? bar.offsetHeight : 80;
      const start = zone.getBoundingClientRect().top + parseFloat(zone.dataset.offset || '0');
      setDark(start <= h);
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
    <header className={`topbar${dark ? ' topbar--nuit' : ''}`}>
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
