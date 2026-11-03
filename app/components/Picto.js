// Petits dessins au trait pour les essais sans photo.
export default function Picto({ kind }) {
  const or = '#E8C547';
  const vert = '#C9CE7A';
  return (
    <svg className="picto" viewBox="0 0 80 80" aria-hidden="true">
      <rect x="0.5" y="0.5" width="79" height="79" fill="none" stroke="#4A5634" />
      {kind === 'verveine' ? (
        <g fill="none" strokeWidth="1.1">
          <path d="M40,70 C40,50 41,32 44,12" stroke={vert} />
          {[[42, 22, -38], [43, 22, 140], [41, 36, -30], [42, 36, 150], [40.5, 50, -24], [41, 50, 156]].map(([x, y, r], i) => (
            <g key={i} transform={`translate(${x},${y}) rotate(${r})`}>
              <path d="M0,0 C6,-5 17,-5 24,0 C17,5 6,5 0,0 Z" stroke={i % 2 ? vert : or} fill={i < 2 ? 'rgba(232,197,71,0.18)' : 'none'} />
            </g>
          ))}
        </g>
      ) : (
        <g fill="none" strokeWidth="1.1" stroke={or}>
          {[[30, 30], [44, 30], [23, 42], [37, 42], [51, 42], [30, 54], [44, 54]].map(([x, y], i) => (
            <path key={i} d={`M${x},${y - 8} l7,4 v8 l-7,4 l-7,-4 v-8 Z`} fill={i === 3 ? 'rgba(232,197,71,0.25)' : 'none'} />
          ))}
          <path d="M58,22 c3,-4 8,-3 8,1 c0,3 -5,4 -8,-1 Z M58,22 c-1,-5 3,-8 6,-6" stroke={vert} />
        </g>
      )}
    </svg>
  );
}
