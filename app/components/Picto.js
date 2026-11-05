// Petits dessins au trait (or et tilleul sur vert nuit) pour le carnet de paillasse.
const OR = '#E8C547';
const VERT = '#C9CE7A';

function Lanceole({ x, y, r, s = 1, c = OR, fill = 'none' }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${r}) scale(${s})`}>
      <path d="M0,0 C6,-5 17,-5 24,0 C17,5 6,5 0,0 Z" stroke={c} fill={fill} />
      <path d="M1,0 L22,0" stroke={c} strokeWidth="0.6" />
    </g>
  );
}

function Ovale({ x, y, r, s = 1, c = VERT, fill = 'none' }) {
  // feuille de menthe : ovale, bord légèrement denté
  return (
    <g transform={`translate(${x},${y}) rotate(${r}) scale(${s})`}>
      <path d="M0,0 C3,-7 9,-9 13,-8 l1,1.5 l1.5,-0.5 l1,1.6 l1.6,0 l0.8,1.8 l1.6,0.4 C20,-1 19,1 17,2.5 C12,7 4,6 0,0 Z" stroke={c} fill={fill} />
      <path d="M1,0 L17,-2" stroke={c} strokeWidth="0.6" />
    </g>
  );
}

export default function Picto({ kind, size = 52 }) {
  return (
    <svg className="picto" viewBox="0 0 80 80" width={size} height={size} aria-hidden="true">
      <rect x="0.5" y="0.5" width="79" height="79" fill="none" stroke="#4A5634" />
      <g fill="none" strokeWidth="1.1">
        {kind === 'verveine-menthe' ? (
          <>
            <path d="M32,70 C32,52 30,34 26,14" stroke={OR} />
            <Lanceole x={30} y={26} r={-120} s={0.8} />
            <Lanceole x={31} y={40} r={-60} s={0.8} fill="rgba(232,197,71,0.18)" />
            <path d="M48,70 C48,56 50,42 54,30" stroke={VERT} />
            <Ovale x={52} y={40} r={-30} s={0.9} />
            <Ovale x={50} y={52} r={200} s={0.85} fill="rgba(201,206,122,0.2)" />
          </>
        ) : kind === 'champignon' ? (
          <>
            <path d="M18,40 C18,22 30,14 40,14 C50,14 62,22 62,40 C52,37 28,37 18,40 Z" stroke={OR} fill="rgba(232,197,71,0.15)" />
            {[26, 32, 38, 44, 50, 56].map((x) => (
              <path key={x} d={`M${x},38.5 L${40 + (x - 40) * 0.45},43`} stroke={OR} strokeWidth="0.6" />
            ))}
            <path d="M35,42 C34,52 33,62 31,70 L49,70 C47,62 46,52 45,42" stroke={VERT} />
            <path d="M34,52 C38,54 42,54 46,52" stroke={VERT} strokeWidth="0.7" />
            <circle cx="32" cy="26" r="1.6" stroke={OR} /><circle cx="46" cy="22" r="1.2" stroke={OR} /><circle cx="52" cy="30" r="1.4" stroke={OR} />
            <path d="M24,70 C30,67 50,67 58,70" stroke={VERT} strokeWidth="0.7" />
          </>
        ) : kind === 'chataigne' ? (
          <>
            <path d="M40,18 C30,26 22,38 22,50 C22,62 30,68 40,68 C50,68 58,62 58,50 C58,38 50,26 40,18 Z" stroke={OR} fill="rgba(232,197,71,0.15)" />
            <path d="M24,56 C32,60 48,60 56,56" stroke={OR} strokeWidth="0.7" />
            <path d="M40,18 L40,13" stroke={OR} />
            {[[24, 30], [56, 30], [18, 46], [62, 46], [30, 20], [50, 20]].map(([x, y], i) => (
              <path key={i} d={`M${x},${y} l${x < 40 ? -5 : 5},-4 M${x},${y} l${x < 40 ? -6 : 6},1`} stroke={VERT} strokeWidth="0.7" />
            ))}
          </>
        ) : kind === 'mandarine' ? (
          <>
            <circle cx="40" cy="46" r="20" stroke={OR} fill="rgba(232,197,71,0.18)" />
            {[0, 1, 2, 3, 4, 5].map((k) => (
              <circle key={k} cx={34 + (k % 3) * 6} cy={40 + Math.floor(k / 3) * 9} r="0.8" fill={OR} />
            ))}
            <path d="M40,26 L41,20" stroke={VERT} />
            <path d="M41,21 C46,13 56,13 60,18 C54,23 46,23 41,21 Z" stroke={VERT} fill="rgba(201,206,122,0.2)" />
            <path d="M42,21 L58,18" stroke={VERT} strokeWidth="0.6" />
          </>
        ) : kind === 'framboise' ? (
          <>
            {[[34, 40], [40, 37], [46, 40], [31, 47], [37, 46], [43, 46], [49, 47], [34, 53], [40, 53], [46, 53], [37, 59], [43, 59], [40, 64]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3.6" stroke={OR} fill={i % 3 === 0 ? 'rgba(232,197,71,0.18)' : 'none'} />
            ))}
            <path d="M33,34 C36,30 44,30 47,34" stroke={VERT} />
            <path d="M40,31 L40,18" stroke={VERT} />
            <path d="M40,22 C33,16 26,18 24,22 C30,26 36,25 40,22 Z" stroke={VERT} />
          </>
        ) : kind === 'pouliot' ? (
          <>
            <path d="M40,72 L40,10" stroke={VERT} />
            {[18, 32, 46, 60].map((y, i) => (
              <g key={y}>
                <Ovale x={40} y={y} r={-20} s={0.55} />
                <Ovale x={40} y={y} r={200} s={0.55} />
                {i < 3 ? <circle cx="40" cy={y + 7} r="4.2" stroke={OR} strokeDasharray="1.4 1.2" fill={i === 1 ? 'rgba(232,197,71,0.2)' : 'none'} /> : null}
              </g>
            ))}
          </>
        ) : (
          <>
            <path d="M40,72 L40,10" stroke={VERT} />
            {[[22, -40], [22, 220], [42, -35], [42, 215]].map(([y, r], i) => (
              <g key={i} transform={`translate(40,${y}) rotate(${r})`}>
                <path d="M0,0 C4,-6 8,-8 11,-8 l1,-2 l1.5,2 l2,-1.5 l0.6,2.5 l2.4,-0.6 l-0.2,2.6 l2.4,0.6 l-1.2,2.2 l2,1.4 C18,6 8,6 0,0 Z" stroke={i % 2 ? OR : VERT} fill={i === 2 ? 'rgba(201,206,122,0.2)' : 'none'} />
              </g>
            ))}
            {[30, 50, 58].map((y) => (
              <path key={y} d={`M40,${y} l-6,4 M40,${y} l6,4`} stroke={OR} strokeWidth="0.8" strokeDasharray="1 1.4" />
            ))}
          </>
        )}
      </g>
    </svg>
  );
}
