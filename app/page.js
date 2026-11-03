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
    story: [
      'Il y a des souvenirs qui se greffent.',
      'Pendant cinquante ans, une passiflore a couvert la terrasse de Saint-Vincent, en Ardèche.',
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
    img: '/images/etiquette-monticello.jpg',
    w: 700,
    h: 1552,
    alt: "Étiquette rébus verticale : une montagne, un oiseau, un visage et une goutte d'eau",
    story: [
      "Avec l'âge, certains mots prennent des détours.",
      "Celui-ci passe par une montagne, un oiseau, un visage et une goutte d'eau.",
      'Au bout du chemin : le citron de Corse, et le sourire, légèrement enivré, de Dédé.',
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
    story: [
      'Toutes les bouteilles de la maison ont une histoire. Celle-ci commence la sienne.',
      'Au pays de la verveine, il fallait une insolente.',
      "Verte, poivrée, sans ancêtres : c'est la première de sa lignée.",
    ],
  },
];

// Frise : uniquement des faits donnés par Paul. Les années inconnues restent en toutes lettres.
const frise = [
  { quand: 'autrefois', quoi: "À Vals-près-le-Puy, la belle-mère de Dédé rentre chaque automne sa verveine dans un tonneau percé. Les premières boutures sont là." },
  { quand: '1929', quoi: 'Naissance de Dédé, futur grand amoureux des fables de La Fontaine.' },
  { quand: 'puis', quoi: 'Dédé rachète la maison de sa belle-mère et en fait la sienne. La verveine reste.' },
  { quand: 'cinquante étés', quoi: 'À Saint-Vincent, en Ardèche, une passiflore couvre la terrasse de ses vacances.' },
  { quand: 'il y a plus de quinze ans', quoi: "Les ans en étant la cause, le jardin passe entre mes mains. Dédé, lui, ne quitte pas mes gestes des yeux." },
  { quand: '2023', quoi: 'Premières étiquettes : la verveine et le citron.' },
  { quand: '2026', quoi: 'La menthe poivrée rejoint la maison. Naissance de maison arnould.' },
];

const methode = [
  { n: 'i.', t: 'cueillir', d: "Deux fois l'an, au début de l'été et aux premiers jours d'automne, à l'heure où le soleil s'adoucit. La verveine d'abord, la menthe ensuite.", img: '/images/verveine-plant.jpg', alt: 'La verveine au jardin, dans la lumière du soir' },
  { n: 'ii.', t: 'râper', d: "Les citrons, on les râpe ensemble, zeste après zeste, en s'arrêtant avant le blanc, qui est amer.", img: '/images/rape-citrons.jpg', alt: 'Zestes de citron sur la râpe' },
  { n: 'iii.', t: 'macérer', d: "Feuilles et zestes s'abandonnent à l'alcool, à l'abri de la lumière. Lentement, ils lui cèdent leur parfum.", img: '/images/feuilles-zestes.jpg', alt: 'Feuilles de verveine posées sur les zestes de citron' },
  { n: 'iv.', t: 'filtrer', d: "Au linge, on presse ce qui reste de la plante, jusqu'à la dernière goutte.", img: '/images/filtrage-linge.jpg', alt: 'Les zestes pressés dans un linge' },
  { n: 'v.', t: 'soutirer', d: 'Un tuyau, une dame-jeanne : la liqueur quitte son dépôt et repose encore, le temps de s’éclaircir.', img: '/images/soutirage.jpg', alt: 'Le tuyau de soutirage plongé dans la dame-jeanne en osier' },
  { n: 'vi.', t: 'mettre en bouteille', d: 'Chaque bouteille est remplie à la main. Puis on attend, on goûte, on note, on recommence.', img: '/images/mise-en-bouteille.jpg', alt: "Mise en bouteille à l'entonnoir, feuilles de verveine dans le verre" },
];

const essais = [
  { n: '01', name: 'verveine jaune', latin: 'Aloysia citrodora', d: 'Plus douce et plus ronde, à la manière des liqueurs jaunes des monastères.', img: '/images/verveine-plant-2.jpg' },
  { n: '02', name: 'citron verveiné', latin: 'Citrus limon · Aloysia citrodora', d: 'Les zestes du monticello, et quelques feuilles du jardin posées par-dessus.', img: '/images/zestes.jpg' },
  { n: '03', name: 'verveine des ruches', latin: 'Aloysia citrodora · miel de sapin', d: 'Une part du sucre cède la place au miel de sapin de Craponne-sur-Arzon : une douceur plus ronde, plus boisée.', img: '/images/vert-coule.jpg' },
];

const carnet = [
  { name: 'verveine-menthe', d: 'les deux plantes de la maison réunies' },
  { name: 'menthe pouliot', latin: 'Mentha pulegium', d: 'la menthe sauvage des prés humides' },
  { name: 'ortie', latin: 'Urtica dioica', d: 'la plus mal aimée des herbes' },
];

const lexique = [
  { w: 'simples', p: 'sɛ̃pl', g: 'n. m. pl.', d: 'Vx. Plantes cultivées au jardin des moines, employées seules, telles que la nature les donne. Par ext. Le laboratoire de maison arnould.' },
  { w: 'bouture', p: 'bu.tyʁ', g: 'n. f.', d: 'Fragment de plante qui, mis en terre, reprend racine et redonne la plante entière. Notre verveine en descend, depuis trois générations à présent.' },
  { w: 'macération', p: 'ma.se.ʁa.sjɔ̃', g: 'n. f.', d: "Lent tête-à-tête entre la plante et l'alcool. À l'abri de la lumière, la feuille se dénoue et lui transmet, jour après jour, tout ce qu'elle sait de son parfum." },
  { w: 'zeste', p: 'zɛst', g: 'n. m.', d: "Fine écorce colorée des agrumes, où dorment leurs huiles parfumées. On le râpe sans jamais toucher le blanc, qui est amer." },
  { w: 'élixir', p: 'e.lik.siʁ', g: 'n. m.', d: "Autrefois, breuvage d'herboriste tiré des plantes et gardé comme un trésor. Ici, notre verveine la plus intense." },
  { w: 'dame-jeanne', p: 'dam.ʒan', g: 'n. f.', d: "Grosse bouteille ventrue, souvent habillée d'osier, où la liqueur repose avant d'être soutirée." },
  { w: 'soutirage', p: 'su.ti.ʁaʒ', g: 'n. m.', d: 'Transvaser la liqueur pour la séparer de son dépôt. Un tuyau, une dame-jeanne, un peu de patience.' },
  { w: 'décanter', p: 'de.kɑ̃.te', g: 'v.', d: 'Laisser le temps faire tomber le trouble au fond, pour ne garder que le clair.' },
  { w: 'miellat', p: 'mjɛ.la', g: 'n. m.', d: "Gouttelettes sucrées laissées sur les aiguilles de sapin par de minuscules insectes. Les abeilles les récoltent : c'est le miel de sapin, sombre et boisé." },
  { w: 'passiflore', p: 'pa.si.flɔʁ', g: 'n. f.', d: 'Liane à la fleur couronnée de filaments, dite aussi fleur de la Passion. Celle de Saint-Vincent fleurit sur notre élixir.' },
  { w: 'druide', p: 'dʁɥid', g: 'n. m.', d: 'Chez les Gaulois, prêtre et savant des plantes, qui cueillait le gui à la serpe.' },
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
            <li><a href="#methode">la préparation</a></li>
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
              Chaque automne, avant les premières gelées, on la sortait de terre pour la mettre en pot ; le pot, on le glissait dans un vieux tonneau percé, fait pour l'accueillir, à la lumière de la cave.<br />
              L'hiver y sentait le bois mouillé et la citronnelle des feuilles qui séchaient.<br />
              Passés les saints de glace, on la rendait au soleil.<br />
              Quatre générations l'ont veillée tour à tour ; elle n'a jamais changé.<br />
              Dans chaque bouteille, c'est encore elle.
            </p>
          </div>
          <figure className="hero__media">
            <div className="fader">
              <Image src="/images/goulot.jpg" alt="Zestes de citron et feuilles de verveine, vus par le goulot" fill priority sizes="(max-width: 900px) 100vw, 440px" />
              <Image src="/images/mains-feuilles.jpg" alt="Une main plongée dans les feuilles du bocal" fill sizes="(max-width: 900px) 100vw, 440px" />
            </div>
            <figcaption className="fader__captions" aria-hidden="true">
              <span>zestes de citron et feuilles de verveine, vus par le goulot</span>
              <span>la main dans les feuilles, au moment de la cueillette</span>
            </figcaption>
          </figure>
        </section>

        {/* ——— La maison : frise ——— */}
        <section id="maison" className="maison">
          <div className="maison__head">
            <p className="kicker">la maison</p>
            <h2>une histoire <em>de famille</em></h2>
            <p className="maison__intro">
              Dédé est né en 1929. Après avoir racheté la maison de sa belle-mère, à Vals-près-le-Puy, il en a fait la sienne.
              Les ans en étant la cause, le jardin est un jour passé entre mes mains ; Dédé, lui, veillait sur chacun de mes gestes.
              Depuis plus de quinze ans, je taille, je cueille, je replante.
            </p>
          </div>
          <ol className="frise">
            {frise.map((f) => (
              <li key={f.quand} className="frise__item">
                <span className="frise__dot" aria-hidden="true" />
                <p className="frise__quand">{f.quand}</p>
                <p className="frise__quoi">{f.quoi}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ——— Les liqueurs ——— */}
        <section id="liqueurs" className="liqueurs">
          <div className="section-head">
            <p className="kicker">les liqueurs</p>
            <h2>trois bouteilles, <em>trois histoires</em></h2>
          </div>
          <div className="liqueurs__grid">
            {liqueurs.map((l) => (
              <article key={l.id} className="liqueur">
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

        {/* ——— La préparation ——— */}
        <section id="methode" className="methode">
          <div className="section-head">
            <p className="kicker">la préparation</p>
            <h2>à quatre <em>mains</em></h2>
            <p className="methode__intro">
              Tout se fait à la main, avec ma mère. On cueille la verveine puis la menthe, on râpe les citrons côte à côte, on filtre, on goûte, on recommence.
            </p>
          </div>
          <ol className="methode__grid">
            {methode.map((m) => (
              <li key={m.t} className="step">
                <div className="step__img">
                  <Image src={m.img} alt={m.alt} fill sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 380px" />
                </div>
                <h3><span>{m.n}</span> {m.t}</h3>
                <p>{m.d}</p>
              </li>
            ))}
          </ol>
          <div className="miel">
            <p className="miel__mot">miel de sapin <span>craponne-sur-arzon</span></p>
            <p>
              Pour certains essais, le sucre blanc n'est plus seul : un peu de miel de sapin, récolté par le père d'un ami à Craponne-sur-Arzon,
              lui prête une douceur plus ronde, plus boisée.
            </p>
          </div>
        </section>

        {/* ——— Les simples ——— */}
        <section id="simples" className="simples">
          <div className="simples__intro">
            <div className="simples__text">
              <p className="kicker kicker--light">le laboratoire de maison arnould</p>
              <h2>druide <em>d'aujourd'hui</em></h2>
              <p>
                Le laboratoire est ma petite officine d'apprenti druide. J'y exhume les recettes des moines et des herboristes d'antan,
                ces savoirs qu'on a laissés s'assoupir. Je bats les talus et les lisières, et je rends leur place aux simples que l'on foule sans les voir.
              </p>
              <p className="simples__small">Des essais en petites séries, numérotés, qui ne reviennent pas forcément l'année suivante.</p>
            </div>
            <figure className="simples__photo">
              <Image src="/images/hero-bouteille.jpg" alt="Une bouteille de verveine levée vers le soleil couchant" fill sizes="(max-width: 900px) 100vw, 460px" />
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
            <p className="lexique__intro">Ceux qu'on emploie à la cave, au jardin et au labo, et qu'on n'entend plus guère ailleurs.</p>
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
