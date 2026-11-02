// Médaillon m·a — version simple (petites tailles) ou complète avec texte courbe.
export default function Medallion({ size = 76, full = false, ink = '#1F2A14', gold = '#A07C30', title = 'maison arnould, 1929' }) {
  if (!full) {
    return (
      <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={title}>
        <circle cx="100" cy="100" r="94" fill="none" stroke={ink} strokeWidth="3" />
        <circle cx="100" cy="100" r="84" fill="none" stroke={gold} strokeWidth="1.6" />
        <text x="100" y="94" textAnchor="middle" dominantBaseline="central" fill={ink} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 62 }}>
          m·a
        </text>
        <text x="100" y="140" textAnchor="middle" fill={gold} style={{ fontFamily: 'var(--font-text)', fontSize: 18, letterSpacing: 4 }}>
          1929
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={title}>
      <defs>
        <path id="med-top" d="M 27,100 A 73,73 0 0 1 173,100" />
        <path id="med-bot" d="M 21,100 A 79,79 0 0 0 179,100" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke={ink} strokeWidth="2.2" />
      <circle cx="100" cy="100" r="90" fill="none" stroke={gold} strokeWidth="1" />
      <text fill={ink} style={{ fontFamily: 'var(--font-text)', fontSize: 13, letterSpacing: 4.5 }}>
        <textPath href="#med-top" startOffset="50%" textAnchor="middle">maison arnould</textPath>
      </text>
      <text fill={ink} style={{ fontFamily: 'var(--font-text)', fontSize: 11, letterSpacing: 3.2 }}>
        <textPath href="#med-bot" startOffset="50%" textAnchor="middle">le-puy-en-velay</textPath>
      </text>
      <circle cx="18" cy="100" r="2.2" fill={gold} />
      <circle cx="182" cy="100" r="2.2" fill={gold} />
      <circle cx="100" cy="100" r="58" fill="none" stroke={gold} strokeWidth="0.8" />
      <text x="100" y="94" textAnchor="middle" dominantBaseline="central" fill={ink} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 44 }}>
        m·a
      </text>
      <line x1="72" y1="124" x2="84" y2="124" stroke={gold} strokeWidth="0.8" />
      <line x1="116" y1="124" x2="128" y2="124" stroke={gold} strokeWidth="0.8" />
      <text x="100" y="128" textAnchor="middle" fill={gold} style={{ fontFamily: 'var(--font-text)', fontSize: 11, letterSpacing: 2.5 }}>
        1929
      </text>
    </svg>
  );
}
