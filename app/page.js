import Image from 'next/image';
import Medallion from './components/Medallion';
import TonneauTag from './components/TonneauTag';
import { site } from '../site.config';

const liqueurs = [
  {
    id: 'verveine',
    name: 'élixir de verveine',
    legal: 'liqueur de verveine',
    deg: '40 % vol.',
    vol: '70 cl',
    img: '/images/etiquette-verveine.png',
    w: 700,
    h: 917,
    alt: "Étiquette de l'élixir de verveine : cadre baroque et fleur mi-verveine mi-passiflore",
    tone: 'creme',
    story: [
      'Il y a des souvenirs qui se greffent.',
      'Pendant cinquante ans, une passiflore a couvert la terrasse de Dédé, en Ardèche.',
      'Sur cette étiquette, elle fleurit dans la verveine.',
      'Elle ne se cueille pas : elle ne pousse que dans la mémoire.',
    ],
  },
  {
    id: 'monticello',
    name: 'le monticello',
    legal: 'liqueur de citron',
    deg: '30 % vol.',
    vol: '70 cl',
    img: '/images/rebus-monticello.jpg',
    w: 1181,
    h: 452,
    alt: "Étiquette rébus : une montagne, un oiseau, un visage et une goutte d'eau",
    tone: 'citron',
    story: [
      "Avec l'âge, certains mots prennent des détours.",
      "Celui-ci passe par une montagne, un oiseau, un visage et une goutte d'eau.",
      'Au bout du chemin : le citron de Corse, et le sourire, un peu enivré, de Dédé.',
    ],
  },
  {
    id: 'menthe',
    name: 'menthe poivrée',
    legal: 'liqueur de menthe poivrée',
    deg: '35 % vol.',
    vol: '70 cl',
    img: '/images/etiquette-menthe.png',
    w: 700,
    h: 933,
    alt: 'Étiquette ovale de la menthe poivrée, édition 2026',
    tone: 'menthe',
    story: [
      'Toutes les bouteilles de la maison ont une histoire. Celle-ci commence la sienne.',
      'Au pays de la verveine, il fallait une insolente.',
      "Verte, poivrée, sans ancêtres : c'est la première de sa lignée.",
    ],
  },
];

const methode = [
  { n: 'i.', t: 'cueillir', d: "À la main, deux fois l'an : l'été et aux premiers jours d'automne, quand le soleil se couche.", img: '/images/verveine-plant.jpg', alt: 'La verveine au jardin, en fin de journée' },
  { n: 'ii.', t: 'macérer', d: "Feuilles et zestes reposent dans l'alcool, à l'abri de la lumière, le temps qu'il faut.", img: '/images/maceration-bouteilles.jpg', alt: 'Bouteilles de feuilles de verveine en macération' },
  { n: 'iii.', t: 'sucrer autrement', d: "Pour certains essais, le sucre blanc laisse place au miel de sapin du père d'un ami, apiculteur à Craponne-sur-Arzon.", img: null },
  { n: 'iv.', t: 'patienter', d: 'Filtrer au linge, soutirer, décanter, goûter, recommencer. Chaque essai est noté et numéroté.', img: '/images/strates.jpg', alt: 'La liqueur décante en strates vertes' },
];

const essais = [
  { n: '01', name: 'verveine jaune', latin: 'Aloysia citrodora', d: 'Plus douce et plus ronde, à la manière des liqueurs jaunes des monastères.', img: '/images/verveine-plant-2.jpg' },
  { n: '02', name: 'citron verveiné', latin: 'Citrus limon · Aloysia citrodora', d: 'Les zestes du monticello, et quelques feuilles du jardin posées par-dessus.', img: '/images/feuilles-zestes.jpg' },
  { n: '03', name: 'verveine des ruches', latin: 'Aloysia citrodora · miel de sapin', d: 'Le sucre blanc remplacé par le miel de sapin de Craponne-sur-Arzon : une douceur plus ronde, plus boisée, qui change la boisson.', img: '/images/vert-coule.jpg' },
];

const carnet = [
  { name: 'verveine-menthe', d: 'les deux plantes de la maison réunies' },
  { name: 'menthe pouliot', latin: 'Mentha pulegium', d: 'la menthe sauvage des prés humides' },
  { name: 'ortie', latin: 'Urtica dioica', d: 'la plus mal aimée des herbes' },
];

const lexique = [
  { w: 'simples', p: 'sɛ̃pl', g: 'n. m. pl.', d: "Vx. Plantes cultivées au jardin des moines, employées seules, telles que la nature les donne. Par ext. Le laboratoire de maison arnould." },
  { w: 'bouture', p: 'bu.tyʁ', g: 'n. f.', d: 'Fragment de plante qui, mis en terre, reprend racine et redonne la plante entière. Notre verveine en descend.' },
  { w: 'macération', p: 'ma.se.ʁa.sjɔ̃', g: 'n. f.', d: "Le temps où feuilles et zestes reposent dans l'alcool, à l'abri de la lumière, pour lui confier leur parfum." },
  { w: 'soutirage', p: 'su.ti.ʁaʒ', g: 'n. m.', d: 'Transvaser la liqueur pour la séparer de son dépôt. Un tuyau, une dame-jeanne, un peu de patience.' },
  { w: 'nemeton', p: 'ne.me.tɔn', g: 'n. m.', d: 'Chez les Gaulois, clairière ou bois sacré où officiaient les druides.' },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a href="#haut" className="topbar__brand" aria-label="maison arnould, retour en haut">
          <Medallion size={44} />
          <span>maison arnould</span>
        </a>
        <nav aria-label="Navigation principale">
          <ul className="topbar__nav">
            <li><a href="#maison">la maison</a></li>
            <li><a href="#liqueurs">les liqueurs</a></li>
            <li><a href="#methode">la méthode</a></li>
            <li><a href="#simples">les simples</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="haut">
        {/* ——— Ouverture ——— */}
        <section className="hero">
          <div className="hero__text">
            <p className="kicker">liqueurs de plantes · le-puy-en-velay</p>
            <h1 className="hero__title">maison<br />arnould</h1>
            <p className="hero__tagline">{site.tagline}</p>
            <p className="hero__tale">
              Il était une verveine qui refusait l'hiver.<br />
              Chaque automne, on glissait son pot dans un vieux tonneau percé, au fond de la cave.<br />
              L'hiver y sentait le bois mouillé et le citron des feuilles tombées.<br />
              Chaque printemps, on la rendait au soleil.<br />
              Les mains ont changé, la verveine est restée.<br />
              Dans chaque bouteille, c'est encore elle.
            </p>
          </div>
          <figure className="hero__media">
            <div className="fader">
              <Image src="/images/goulot.jpg" alt="Zestes de citron et feuilles de verveine, vus par le goulot" fill priority sizes="(max-width: 900px) 100vw, 440px" />
              <Image src="/images/mains-feuilles.jpg" alt="Une main plongée dans les feuilles du bocal" fill sizes="(max-width: 900px) 100vw, 440px" />
            </div>
            <figcaption>par le goulot · la main dans les feuilles</figcaption>
          </figure>
        </section>

        {/* ——— La maison ——— */}
        <section id="maison" className="maison">
          <Medallion size={168} full />
          <div className="maison__text">
            <p className="kicker">la maison</p>
            <h2>1929</h2>
            <p>
              Dédé est né en 1929. Il aimait les fables de La Fontaine, les étés d'Ardèche et le limoncello de Corse.
              La maison de Vals-près-le-Puy est devenue la sienne ; le jardin, un jour, est passé entre mes mains.
              Plus de dix ans à tailler, cueillir, replanter.
            </p>
            <p>De ces boutures sont nées trois liqueurs, et un carnet d'essais qui ne cesse de s'épaissir.</p>
          </div>
        </section>

        {/* ——— Les liqueurs ——— */}
        <section id="liqueurs" className="liqueurs">
          <div className="section-head">
            <p className="kicker">les liqueurs</p>
            <h2>trois bouteilles, <em>trois histoires</em></h2>
          </div>
          <div className="liqueurs__grid">
            {liqueurs.map((l) => (
              <article key={l.id} className={`liqueur liqueur--${l.tone}`}>
                <div className="liqueur__label">
                  <Image src={l.img} alt={l.alt} width={l.w} height={l.h} sizes="(max-width: 900px) 80vw, 340px" />
                </div>
                <h3>{l.name}</h3>
                <p className="liqueur__meta">{l.legal} · {l.deg} · {l.vol}</p>
                <p className="liqueur__story">
                  {l.story.map((s, i) => (
                    <span key={i}>{s}<br /></span>
                  ))}
                </p>
              </article>
            ))}
          </div>
          <p className="note">Pas de vente en ligne pour le moment.</p>
        </section>

        {/* ——— La méthode ——— */}
        <section id="methode" className="methode">
          <div className="section-head">
            <p className="kicker">la méthode</p>
            <h2>en quatre temps</h2>
          </div>
          <ol className="methode__grid">
            {methode.map((m) => (
              <li key={m.t} className="step">
                {m.img ? (
                  <div className="step__img">
                    <Image src={m.img} alt={m.alt} fill sizes="(max-width: 900px) 100vw, 300px" />
                  </div>
                ) : (
                  <div className="step__img step__img--miel">
                    <span className="step__miel">miel de sapin</span>
                    <span className="step__lieu">craponne-sur-arzon</span>
                  </div>
                )}
                <h3><span>{m.n}</span> {m.t}</h3>
                <p>{m.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ——— Les simples ——— */}
        <section id="simples" className="simples">
          <div className="simples__intro">
            <div>
              <p className="kicker kicker--light">le laboratoire de maison arnould</p>
              <h2>druide <em>d'aujourd'hui</em></h2>
              <p>
                Le laboratoire, c'est l'endroit où je m'essaie à être un druide d'aujourd'hui. Les moines et les herboristes d'antan savaient tirer des plantes
                des liqueurs que plus personne ne fait. J'ouvre leurs carnets, je retourne au jardin et au bord des chemins, et je remets en bouteille les plantes
                qu'on a perdues de vue : celles qu'on arrache sans même les regarder.
              </p>
              <p className="simples__small">Des essais en petites séries, numérotés, qui ne reviennent pas forcément l'année suivante.</p>
            </div>
            <figure className="simples__photo">
              <Image src="/images/maceration-fond.jpg" alt="Feuilles de verveine en macération, vues à travers le verre" fill sizes="(max-width: 900px) 100vw, 560px" />
            </figure>
          </div>

          <div className="definition">
            <p className="definition__word">les simples <span>[sɛ̃pl] <i>n. m. pl.</i></span></p>
            <p>
              <b>1.</b> <i>Vx.</i> Plantes cultivées au jardin des moines, employées seules, telles que la nature les donne. <i>Le jardin des simples.</i><br />
              <b>2.</b> <i>Par ext.</i> Le laboratoire de maison arnould : cuvées d'essai, en petites séries, de plantes connues depuis des siècles, cueillies par nos
              aïeux puis délaissées. Oubliées des jardins, arrachées comme mauvaises herbes.
            </p>
          </div>

          <div className="essais">
            <div className="essais__list">
              <p className="kicker">les essais en cours</p>
              <ul>
                {essais.map((e) => (
                  <li key={e.n} className="essai">
                    <div className="essai__img"><Image src={e.img} alt="" fill sizes="80px" /></div>
                    <div className="essai__text">
                      <p className="essai__name">{e.name} <i>{e.latin}</i></p>
                      <p>{e.d}</p>
                    </div>
                    <span className="essai__n">n° {e.n}</span>
                  </li>
                ))}
              </ul>
              <p className="kicker" style={{ marginTop: 28 }}>dans le carnet, pas encore en bouteille</p>
              <ul className="carnet">
                {carnet.map((c) => (
                  <li key={c.name}><b>{c.name}</b>{c.latin ? <i> {c.latin}</i> : null} · {c.d}</li>
                ))}
              </ul>
            </div>
            <div className="essais__tags" aria-label="Étiquettes d'essai">
              {essais.map((e) => (
                <TonneauTag key={e.n} id={e.n} n={e.n} name={e.name} latin={e.latin} />
              ))}
            </div>
          </div>
          <p className="note">Le druide parle de nature et de savoir-faire, pas de bienfaits : ces liqueurs restent des alcools, à goûter avec modération.</p>
        </section>

        {/* ——— Lexique ——— */}
        <section className="lexique" aria-labelledby="lexique-title">
          <div className="section-head">
            <p className="kicker">petit lexique</p>
            <h2 id="lexique-title">les mots <em>de la maison</em></h2>
          </div>
          <dl className="lexique__grid">
            {lexique.map((x) => (
              <div key={x.w} className="lex">
                <dt>{x.w} <span>[{x.p}] <i>{x.g}</i></span></dt>
                <dd>{x.d}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ——— Contact ——— */}
        <section id="contact" className="contact">
          <Medallion size={96} ink="#F4ECD6" gold="#E8C547" />
          <h2>écrire à la maison</h2>
          {site.email ? (
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          ) : (
            <p>Adresse de contact bientôt disponible.</p>
          )}
          <p>{site.instagram ? <a href={site.instagram}>instagram · maison.arnould</a> : 'Instagram : bientôt.'}</p>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__sig">maison arnould <em>depuis 1929</em></p>
        <p>L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</p>
        <p><a href="/mentions-legales">mentions légales</a> · {site.city}</p>
      </footer>
    </>
  );
}
