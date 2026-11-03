'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const EVERY = 4200;
const FADE = 700;

// Une étape : soit fixe, soit en deux versions (verveine / citron) qui se relaient.
function Step({ step, index, total }) {
  const variants = step.variants || [step];
  const [cur, setCur] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (variants.length < 2) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let t2;
    const t = setInterval(() => {
      setOut(true);
      t2 = setTimeout(() => {
        setCur((c) => (c + 1) % variants.length);
        setOut(false);
      }, FADE);
    }, EVERY + index * 350);
    return () => {
      clearInterval(t);
      clearTimeout(t2);
    };
  }, [variants.length, index]);

  const v = variants[cur];
  return (
    <li className="prep__card" aria-roledescription="étape" aria-label={`${index + 1} sur ${total}`}>
      <div className={`prep__img${out ? ' is-out' : ''}`}>
        <Image src={v.img} alt={v.alt} fill sizes="(max-width: 760px) 86vw, 520px" draggable={false} />
      </div>
      <div className={`prep__text${out ? ' is-out' : ''}`}>
        <p className="prep__n">{step.n}</p>
        <h3>{v.t}</h3>
        {variants.length > 1 ? (
          <p className="prep__pour">
            {variants.map((x, i) => (
              <span key={x.pour} className={i === cur ? 'on' : ''}>{x.pour}</span>
            ))}
          </p>
        ) : null}
        <p className="prep__d">{v.d}</p>
      </div>
    </li>
  );
}

// Le procédé défile à l'horizontale : au doigt, au pavé tactile, à la souris (cliquer-glisser) ou avec les flèches.
export default function Preparation({ steps }) {
  const track = useRef(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector('.prep__card');
      if (!card) return;
      const w = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0');
      const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      setPos(end ? el.children.length - 1 : Math.round(el.scrollLeft / w));
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    // cliquer-glisser à la souris
    let down = false;
    let x0 = 0;
    let s0 = 0;
    let moved = false;
    const md = (e) => {
      if (e.pointerType !== 'mouse') return;
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
      if (moved) {
        const card = el.querySelector('.prep__card');
        const w = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0');
        el.scrollTo({ left: Math.round(el.scrollLeft / w) * w, behavior: 'smooth' });
      }
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
  }, []);

  const go = (d) => {
    const el = track.current;
    const card = el.querySelector('.prep__card');
    const w = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0');
    el.scrollTo({ left: Math.max(0, Math.min(steps.length - 1, pos + d)) * w, behavior: 'smooth' });
  };

  return (
    <div className="prep">
      <ol className="prep__track" ref={track} tabIndex={0} aria-label="Les étapes de la préparation">
        {steps.map((s, i) => (
          <Step key={s.n} step={s} index={i} total={steps.length} />
        ))}
      </ol>
      <div className="prep__nav">
        <button type="button" onClick={() => go(-1)} disabled={pos <= 0} aria-label="Étape précédente">←</button>
        <div className="prep__progress" aria-hidden="true">
          {steps.map((s, i) => (
            <span key={s.n} className={i === pos ? 'on' : i < pos ? 'past' : ''} />
          ))}
        </div>
        <p className="prep__count">{steps[pos]?.n} <span>/ {steps[steps.length - 1].n}</span></p>
        <button type="button" onClick={() => go(1)} disabled={pos >= steps.length - 1} aria-label="Étape suivante">→</button>
      </div>
    </div>
  );
}
