// Étiquette d'essai « les simples » : carton kraft en forme de tonneau, noué au col.
export default function TonneauTag({ id, n, name, latin }) {
  const clip = `tg-${id}`;
  const shape = 'M 48,46 Q 100,36 152,46 Q 186,178 152,312 Q 100,322 48,312 Q 14,178 48,46 Z';
  return (
    <svg viewBox="0 0 200 330" className="tag" role="img" aria-label={`Étiquette d'essai n° ${n}, ${name}`}>
      <defs>
        <clipPath id={clip}>
          <path d={shape} />
        </clipPath>
      </defs>
      <path d="M 100,0 C 94,24 92,40 94,60" fill="none" stroke="#8A7F60" strokeWidth="1.3" />
      <path d="M 100,0 C 106,24 108,40 106,60" fill="none" stroke="#8A7F60" strokeWidth="1.3" />
      <path d={shape} fill="#D6BF98" stroke="#1F2A14" strokeWidth="1.6" />
      <g clipPath={`url(#${clip})`} fill="none" stroke="#A07C30" strokeWidth="3">
        <path d="M 0,84 Q 100,98 200,84" />
        <path d="M 0,95 Q 100,109 200,95" />
        <path d="M 0,276 Q 100,290 200,276" />
        <path d="M 0,287 Q 100,301 200,287" />
      </g>
      <circle cx="100" cy="64" r="6" fill="#F4ECD6" stroke="#1F2A14" strokeWidth="1.2" />
      <circle cx="100" cy="64" r="9.5" fill="none" stroke="#A07C30" strokeWidth="1" />
      <text x="100" y="127" textAnchor="middle" fill="#1F2A14" style={{ fontFamily: 'var(--font-display)', fontSize: 15, letterSpacing: 1 }}>les simples</text>
      <text x="100" y="139" textAnchor="middle" fill="#4E5A2A" style={{ fontFamily: 'var(--font-text)', fontSize: 7.2 }}>
        [sɛ̃pl] <tspan fontStyle="italic">n. m. pl.</tspan> — plantes employées
      </text>
      <text x="100" y="149" textAnchor="middle" fill="#4E5A2A" style={{ fontFamily: 'var(--font-text)', fontStyle: 'italic', fontSize: 7.2 }}>
        seules, telles que la nature les donne.
      </text>
      <line x1="62" y1="159" x2="138" y2="159" stroke="#1F2A14" strokeWidth="0.6" />
      <text x="100" y="178" textAnchor="middle" fill="#1F2A14" style={{ fontFamily: 'var(--font-display)', fontSize: 9.5, letterSpacing: 4 }}>ESSAI</text>
      <text x="100" y="212" textAnchor="middle" fill="#1F2A14" style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>
        <tspan style={{ fontSize: 16 }}>N°</tspan> {n}
      </text>
      <text x="100" y="234" textAnchor="middle" fill="#1F2A14" style={{ fontFamily: 'var(--font-text)', fontStyle: 'italic', fontSize: 15 }}>{name}</text>
      <text x="100" y="247" textAnchor="middle" fill="#5C5A44" style={{ fontFamily: 'var(--font-text)', fontStyle: 'italic', fontSize: 8.5 }}>{latin}</text>
      <text x="100" y="264" textAnchor="middle" fill="#1F2A14" style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5 }}>série de 24 · le __/__/__</text>
      <text x="100" y="306" textAnchor="middle" fill="#1F2A14" style={{ fontFamily: 'var(--font-text)', fontSize: 7.5, letterSpacing: 1.5 }}>maison arnould</text>
    </svg>
  );
}
