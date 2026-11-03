// Vigne minimaliste qui s'enroule autour de la ligne de la frise : verveine, passiflore, menthe, et une pointe de feuille en guise de flèche.
const G = '#A07C30';
const V = '#4E6A1E';

function Feuille({ rot = 0, s = 1, fill = 'none' }) {
  return (
    <g transform={`rotate(${rot}) scale(${s})`}>
      <path d="M0,0 C8,-7 24,-7 34,0 C24,7 8,7 0,0 Z" fill={fill} stroke={V} strokeWidth="1" />
      <path d="M2,0 L30,0" stroke={V} strokeWidth="0.6" />
    </g>
  );
}

function Passiflore() {
  const petales = Array.from({ length: 10 }, (_, i) => i * 36);
  const fils = Array.from({ length: 28 }, (_, i) => (i * 360) / 28);
  return (
    <g>
      {petales.map((a) => (
        <ellipse key={a} cx="0" cy="-11" rx="4" ry="10" transform={`rotate(${a})`} fill="#F4ECD6" stroke={G} strokeWidth="0.9" />
      ))}
      {fils.map((a) => (
        <line key={a} x1="0" y1="-4" x2="0" y2="-12" transform={`rotate(${a})`} stroke={V} strokeWidth="0.6" />
      ))}
      <circle r="4" fill="#F4ECD6" stroke={G} strokeWidth="0.9" />
      <circle r="1.4" fill={G} />
    </g>
  );
}

function Citron({ rot = 0 }) {
  return (
    <g transform={`rotate(${rot})`}>
      <path d="M-13,0 C-12,-9 12,-9 13,0 C12,9 -12,9 -13,0 Z" fill="#F1E3A0" stroke={G} strokeWidth="0.9" />
      <path d="M-13,0 l-3,0 M13,0 l3,0" stroke={G} strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="-4" cy="-3" r="0.7" fill={G} /><circle cx="3" cy="2" r="0.7" fill={G} /><circle cx="6" cy="-3" r="0.7" fill={G} />
      <g transform="translate(14,-2) rotate(-40) scale(0.45)">
        <path d="M0,0 C8,-7 24,-7 34,0 C24,7 8,7 0,0 Z" fill="none" stroke={V} strokeWidth="1.8" />
      </g>
    </g>
  );
}

function Orn({ left, children, w = 80, h = 60 }) {
  return (
    <svg className="vigne__orn" style={{ left: `${left}%`, width: w, height: h, marginLeft: -w / 2 }} viewBox={`${-w / 2} ${-h / 2} ${w} ${h}`} aria-hidden="true">
      {children}
    </svg>
  );
}

export default function FriseVigne() {
  let d = 'M0,30';
  for (let x = 0; x < 1000; x += 125) d += ` C${x + 31},18 ${x + 94},42 ${x + 125},30`;
  return (
    <div className="vigne" aria-hidden="true">
      <svg className="vigne__tige" viewBox="0 0 1000 60" preserveAspectRatio="none">
        <path d={d} fill="none" stroke={V} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.7" />
      </svg>
      <Orn left={7}>
        <Feuille rot={-28} s={0.8} />
        <g transform="translate(-6,4)"><Feuille rot={150} s={0.7} /></g>
      </Orn>
      <Orn left={21.5}>
        <g transform="translate(0,9)"><Citron rot={-12} /></g>
      </Orn>
      <Orn left={36}>
        <g transform="translate(-10,0)"><Feuille rot={22} s={0.75} fill="#E6E2B0" /></g>
        <g transform="translate(4,2)"><Feuille rot={-160} s={0.6} /></g>
      </Orn>
      <Orn left={50} w={64} h={64}>
        <Passiflore />
      </Orn>
      <Orn left={64}>
        <Feuille rot={-20} s={0.8} />
        <g transform="translate(2,4)"><Feuille rot={200} s={0.65} fill="#E6E2B0" /></g>
      </Orn>
      <Orn left={79}>
        <g transform="translate(-8,0)">
          <path d="M0,0 C4,-9 16,-11 22,-6 C16,1 6,3 0,0 Z" fill="#DDE3B5" stroke={V} strokeWidth="0.9" />
          <path d="M0,0 C4,9 16,11 22,6 C16,-1 6,-3 0,0 Z" fill="none" stroke={V} strokeWidth="0.9" />
        </g>
      </Orn>
      <Orn left={91}>
        <g transform="translate(0,-9)"><Citron rot={14} /></g>
      </Orn>
      <svg className="vigne__fleche" viewBox="0 0 26 20" aria-hidden="true">
        <path d="M0,10 C8,2 18,2 26,10 C18,18 8,18 0,10 Z" fill={G} opacity="0.9" />
        <path d="M2,10 L22,10" stroke="#F4ECD6" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
