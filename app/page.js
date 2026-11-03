import Image from 'next/image';
import Medallion from './components/Medallion';
import TonneauTag from './components/TonneauTag';
import Lexique from './components/Lexique';
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
    morale: 'Ce que le cœur a planté, le temps ne l’arrache pas.',
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
      'Au bout du chemin : un citron de Corse, et un sourire, légèrement enivré, de mon grand-père.',
    ],
    morale: 'Les mots qu’on écorche sont souvent ceux qu’on aime le mieux.',
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
    morale: 'Nul besoin d’aïeux pour avoir du caractère.',
  },
];

// Frise : uniquement des faits donnés par Paul.
const frise = [
  { quand: 'autrefois', quoi: 'À Vals-près-le-Puy, la belle-mère de Dédé cultive une verveine que chaque automne elle rentre à la cave.' },
  { quand: '1929', quoi: 'Naissance de Dédé, futur grand amoureux des fables de La Fontaine.' },
  { quand: 'une vie de jardin', quoi: 'Dédé rachète la maison de sa belle-mère ; la verveine reste. Cinquante étés durant, la passiflore couvre sa terrasse de Saint-Vincent, en Ardèche.' },
  { quand: 'il y a seize ans', quoi: 'Les ans en étant la cause, Dédé me passe la main. Il ne quittera plus mes gestes des yeux.' },
  { quand: '2026', quoi: 'La menthe poivrée rejoint la verveine et le citron : naissance de maison arnould.' },
];

const methode = [
  { n: 'i.', t: 'cueillir', d: "Deux fois l'an, quand l'été s'annonce et quand l'automne hésite, à l'heure où le soleil baisse la voix. La verveine se laisse prendre la première ; la menthe suit.", img: '/images/mains-feuilles.jpg', alt: 'Une main plongée dans les feuilles de verveine' },
  { n: 'ii.', t: 'râper', d: "Le citron garde son âme dans sa peau. On la lui prend à fleur d'écorce, sans jamais toucher le blanc, qui garde pour lui l'amertume.", img: '/images/rape-citrons.jpg', alt: 'Zestes de citron sur la râpe' },
  { n: 'iii.', t: 'macérer', d: "Feuilles et zestes s'abandonnent à l'alcool, à l'abri de la lumière. Lentement, ils lui cèdent leur parfum.", img: '/images/mise-en-bouteille.jpg', alt: "Feuilles de verveine dans l'alcool, à l'entonnoir" },
  { n: 'iv.', t: 'filtrer', d: 'Vient le temps de séparer : le linge retient les feuilles et ne laisse passer que leur souvenir.', img: '/images/filtrage-cotons.jpg', alt: 'La liqueur verte versée sur le linge de filtrage' },
  { n: 'v.', t: 'sucrer', d: "L'eau et le sucre s'unissent en un sirop clair, parfois relevé de miel de sapin. Il adoucit l'alcool sans rien lui ôter.", img: '/images/sirop.jpg', alt: 'Le sirop de sucre versé de la casserole dans un pichet' },
  { n: 'vi.', t: 'soutirer', d: 'La liqueur laisse son trouble au fond de la dame-jeanne et repart, plus claire, par le tuyau.', img: '/images/soutirage.jpg', alt: 'Le tuyau de soutirage plongé dans la dame-jeanne en osier' },
  { n: 'vii.', t: 'mettre en bouteille', d: 'Chaque bouteille est remplie à la main, puis laissée au repos : le temps achève ce que le jardin a commencé.', img: '/images/mise-en-bouteille-entonnoir.jpg', alt: "Bouteille remplie à l'entonnoir, la liqueur verte en strates" },
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
  { w: 'simples', p: 'sɛ̃pl', g: 'n. m. pl.', d: ['Vx. Plantes cultivées au jardin des moines, employées seules, telles que la nature les donne. Par ext. Le laboratoire de maison arnould.'] },
  { w: 'monticello', p: 'mɔ̃.ti.tʃɛ.lo', g: 'n. m.', d: ['1. Liqueur de citron de la maison, à la manière du limoncello, mais à la sauce auvergnate : plus forte.', '2. Chez Dédé. Le limoncello lui-même, tel qu’il le prononçait, épris de la Corse sur ses vieux jours. D’où le rébus : mont · Titi · Che · l’eau.'] },
  { w: 'bouture', p: 'bu.tyʁ', g: 'n. f.', d: ['Fragment de plante qui, mis en terre, reprend racine et redonne la plante entière. Notre verveine en descend, depuis quatre générations à présent.'] },
  { w: 'macération', p: 'ma.se.ʁa.sjɔ̃', g: 'n. f.', d: ["Lent tête-à-tête entre la plante et l'alcool. À l'abri de la lumière, la feuille se dénoue et lui transmet, jour après jour, tout ce qu'elle sait de son parfum."] },
  { w: 'saints de glace', p: 'sɛ̃ d(ə) glas', g: 'n. m. pl.', d: ['Saint Mamert, saint Pancrace et saint Servais, les 11, 12 et 13 mai, réputés ramener les dernières gelées. Passés ceux-là, la verveine retourne au jardin.'] },
  { w: 'zeste', p: 'zɛst', g: 'n. m.', d: ['Fine écorce colorée des agrumes, où dorment leurs huiles parfumées. On le râpe sans jamais toucher le blanc, qui est amer.'] },
  { w: 'élixir', p: 'e.lik.siʁ', g: 'n. m.', d: ["Autrefois, breuvage d'herboriste tiré des plantes et gardé comme un trésor. Ici, notre verveine la plus intense."] },
  { w: 'dame-jeanne', p: 'dam.ʒan', g: 'n. f.', d: ["Grosse bouteille ventrue, souvent habillée d'osier, où la liqueur repose avant d'être soutirée."] },
  { w: 'rincette', p: 'ʁɛ̃.sɛt', g: 'n. f. fam.', d: ['Fond d’eau-de-vie versé dans la tasse de café encore tiède, pour la « rincer ». Suivie parfois de la surrincette, et c’est là qu’il faut savoir s’arrêter.'] },
  { w: 'soutirage', p: 'su.ti.ʁaʒ', g: 'n. m.', d: ['Transvaser la liqueur pour la séparer de son dépôt. Un tuyau, une dame-jeanne, un peu de patience.'] },
  { w: 'miellat', p: 'mjɛ.la', g: 'n. m.', d: ["Gouttelettes sucrées laissées sur les aiguilles de sapin par de minuscules insectes. Les abeilles les récoltent : c'est le miel de sapin, sombre et boisé."] },
  { w: 'nemeton', p: 'ne.me.tɔn', g: 'n. m.', d: ['Chez les Gaulois, clairière ou bois sacré où officiaient les druides.'] },
  { w: 'décanter', p: 'de.kɑ̃.te', g: 'v.', d: ['Laisser le temps faire tomber le trouble au fond, pour ne garder que le clair.'] },
  { w: 'passiflore', p: 'pa.si.flɔʁ', g: 'n. f.', d: ['Liane à la fleur couronnée de filaments, dite aussi fleur de la Passion. Celle de Saint-Vincent fleurit sur notre élixir.'] },
  { w: 'druide', p: 'dʁɥid', g: 'n. m.', d: ['Chez les Gaulois, prêtre et savant des plantes, qui cueillait le gui à la serpe.'] },
  { w: 'canard', p: 'ka.naʁ', g: 'n. m. fam.', d: ['Morceau de sucre qu’on trempe dans le café ou l’eau-de-vie avant de le croquer, comme le canard plonge la tête sous l’eau.'] },
  { w: 'officine', p: 'ɔ.fi.sin', g: 'n. f.', d: ['Arrière-boutique de l’apothicaire, où l’on préparait les remèdes. Par ext. Le coin du labo où l’apprenti druide fait ses essais.'] },
  { w: 'tonneau', p: 'tɔ.no', g: 'n. m.', d: ['Fût de bois cerclé. Le nôtre, vieux et percé, abritait la verveine des premières gelées.'] },
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
              Chaque automne, avant les premières gelées, on la sortait de terre pour la mettre en pot, que l'on glissait ensuite dans un vieux tonneau, percé pour l'accueillir, dans l'intimité de la cave.<br />
              L'hiver y sentait le bois mouillé et la citronnelle des feuilles qui séchaient.<br />
              Passés les saints de glace, on la rendait au soleil.<br />
              Quatre générations l'ont veillée tour à tour ; aucun hiver ne l'a prise.<br />
              Dans chaque bouteille, c'est encore elle.
            </p>
          </div>
          <figure className="hero__media">
            <div className="fader">
              <Image src="/images/goulot.jpg" alt="Zestes de citron et feuilles de verveine, vus par le goulot" fill priority sizes="(max-width: 900px) 100vw, 440px" />
            </div>
            <figcaption>l'été, vu par le goulot</figcaption>
          </figure>
        </section>

        {/* ——— La maison : frise ——— */}
        <section id="maison" className="maison">
          <div className="maison__head">
            <p className="kicker">la maison</p>
            <h2>une histoire <em>de famille</em></h2>
            <p className="maison__intro">
              Il était une fois, à Vals-près-le-Puy, un jardin qui changeait de mains sans jamais changer d'âme.
              On s'y passait la verveine comme on se passe un secret, de génération en génération, à voix basse.
              Aujourd'hui, c'est moi qui taille, qui cueille et qui replante.
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
                <p className="liqueur__morale">{l.morale}</p>
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
              Il était une fois deux paires de mains et un seul jardin. Ma mère et moi cueillons à la même heure, râpons à la même table,
              et chaque saison, la plante nous confie un peu plus de ce qu'elle sait.
            </p>
          </div>
          <ol className="methode__grid">
            {methode.map((m) => (
              <li key={m.t} className="step">
                <div className="step__img">
                  <Image src={m.img} alt={m.alt} fill sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 300px" />
                </div>
                <h3><span>{m.n}</span> {m.t}</h3>
                <p>{m.d}</p>
              </li>
            ))}
            <li className="step step--miel" aria-label="Le miel de sapin">
              <p className="miel__mot">miel de sapin <span>craponne-sur-arzon</span></p>
              <p>
                Récolté par le père d'un ami, il remplace une part du sucre dans certains essais.
                Il ne le chasse jamais tout à fait : il lui prête une douceur plus ronde, plus boisée.
              </p>
            </li>
          </ol>
        </section>

        {/* ——— Les simples ——— */}
        <section id="simples" className="simples">
          <div className="simples__intro">
            <div className="simples__text">
              <p className="kicker kicker--light">le laboratoire de maison arnould</p>
              <h2>druide <em>d'aujourd'hui</em></h2>
              <p>
                Le laboratoire est ma petite officine d'apprenti druide. Les patrimoines anciens du terroir m'ont toujours captivé :
                j'y suis la trace des plantes perdues et des savoirs oubliés, j'exhume les recettes des moines et des herboristes d'antan,
                tout ce qu'on a laissé s'assoupir. Puis je bats les talus et les lisières, et je rends leur place aux simples que l'on foule sans les voir.
              </p>
              <p className="simples__small">Des essais en petites séries, numérotés, qui ne reviennent pas forcément l'année suivante.</p>
            </div>
            <figure className="simples__photo">
              <Image src="/images/maceration-bouteilles.jpg" alt="Bouteilles de verveine en macération, rangées à la cave" fill sizes="(max-width: 900px) 100vw, 460px" />
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
          <Lexique mots={lexique} />
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
