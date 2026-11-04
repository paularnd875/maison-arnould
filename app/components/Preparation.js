'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const LIQUEURS = [
  { id: 'verveine', label: 'verveine & menthe' },
  { id: 'citron', label: 'citron' },
];

// Une étape : fixe, ou propre à la liqueur choisie (verveine & menthe / citron).
function Step({ step, liqueur }) {
  const v = step.variants ? step.variants[liqueur] : step;
  return (
    <li className="prep__step">
      <div className="prep__img" key={`${step.n}-${v.img}`}>
        <Image src={v.img} alt={v.alt} fill sizes="(max-width: 760px) 86vw, 460px" draggable={false} />
      </div>
      <div className="prep__text" key={`${step.n}-${v.t}-${liqueur}`}>
        <p className="prep__n">
          {step.n}
          {step.variants ? <span className="prep__selon">selon la liqueur</span> : null}
        </p>
        <h3>{v.t}</h3>
        <p className="prep__d">{v.d}</p>
      </div>
    </li>
  );
}

// Le procédé en planches de deux étapes, qui défilent à l'horizontale (doigt, pavé tactile, cliquer-glisser, boutons).
export default function Preparation({ planches }) {
  const track = useRef(null);
  const [pos, setPos] = useState(0);
  const [liqueur, setLiqueur] = useState('verveine');

  const width = () => {
    const el = track.current;
    const card = el.querySelector('.prep__planche');
    return card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0');
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setPos(Math.min(planches.length - 1, Math.round(el.scrollLeft / width())));
    el.addEventListener('scroll', onScroll, { passive: true });

    let down = false;
    let x0 = 0;
    let s0 = 0;
    let moved = false;
    const md = (e) => {
      if (e.pointerType !== 'mouse' || e.target.closest('button')) return;
      down = true;
      moved = false;
      x0 = e.clientX;
      s0 = el.scrollLeft;
      el.classList.add('is-drag');
    };
    const mm = (e) => {
      if (!down) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = s0 - dx;
    };
    const mu = () => {
      if (!down) return;
      down = false;
      el.classList.remove('is-drag');
      if (moved) el.scrollTo({ left: Math.round(el.scrollLeft / width()) * width(), behavior: 'smooth' });
    };
    el.addEventListener('pointerdown', md);
    window.addEventListener('pointermove', mm);
    window.addEventListener('pointerup', mu);
    return () => {
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('pointerdown', md);
      window.removeEventListener('pointermove', mm);
      window.removeEventListener('pointerup', mu);
    };
  }, [planches.length]);

  const go = (i) => {
    const n = Math.max(0, Math.min(planches.length - 1, i));
    track.current.scrollTo({ left: n * width(), behavior: 'smooth' });
  };

  return (
    <div className="prep">
      <div className="prep__choix" role="group" aria-label="Choisir la liqueur">
        <span className="prep__choix-label">la recette de liqueur de</span>
        {LIQUEURS.map((l) => (
          <button key={l.id} type="button" className={liqueur === l.id ? 'on' : ''} aria-pressed={liqueur === l.id} onClick={() => setLiqueur(l.id)}>
            {l.label}
          </button>
        ))}
      </div>

      <div className="prep__track" ref={track} tabIndex={0} aria-label="Les planches de la préparation">
        {planches.map((p, i) => (
          <section key={p.titre} className="prep__planche" aria-label={`Planche ${p.num} : ${p.titre}`}>
            <p className="prep__planche-titre">
              <span>planche {p.num}</span> {p.titre}
            </p>
            <ol className="prep__steps">
              {p.steps.map((s) => (
                <Step key={s.n} step={s} liqueur={liqueur} />
              ))}
            </ol>
          </section>
        ))}
      </div>

      <div className="prep__nav">
        <button type="button" onClick={() => go(pos - 1)} disabled={pos <= 0} aria-label="Planche précédente">←</button>
        <ol className="prep__sommaire">
          {planches.map((p, i) => (
            <li key={p.titre}>
              <button type="button" className={i === pos ? 'on' : ''} onClick={() => go(i)}>
                <span>{p.num}</span> {p.titre}
              </button>
            </li>
          ))}
        </ol>
        <button type="button" onClick={() => go(pos + 1)} disabled={pos >= planches.length - 1} aria-label="Planche suivante">→</button>
      </div>
    </div>
  );
}
