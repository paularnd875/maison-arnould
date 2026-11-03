import Image from 'next/image';
import Medallion from './components/Medallion';
import TonneauTag from './components/TonneauTag';
import Lexique from './components/Lexique';
import Topbar from './components/Topbar';
import Preparation from './components/Preparation';
import FriseVigne from './components/FriseVigne';
import ContactForm from './components/ContactForm';
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
      'Elle ne se cueille pas : elle ne pousse et perdure, que dans la mémoire.',
    ],
    morale: 'Ce qui germe dans le cœur, le temps ne peut l’arracher.',
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
      'Celui-ci passe par une montagne, un oiseau, un visage, puis enfin un ruisseau.',
      'Au bout du chemin : un citron de Corse, et le sourire, légèrement enivré, de mon grand-père.',
    ],
    morale: 'Les mots qu’on invente sont souvent ceux qui nous ressemblent le plus.',
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
  { quand: '1929', quoi: 'Naissance d’un des plus grands disciples de La Fontaine.' },
  { quand: 'puis', quoi: 'Dédé rachète la maison de sa belle-mère, à Vals ; la verveine reste au jardin.' },
  { quand: 'plus tard', quoi: 'En Ardèche, à Saint-Vincent, une passiflore couvre sa terrasse cinquante étés durant. C’est elle qui fleurit aujourd’hui sur l’élixir.' },
  { quand: '2009', quoi: 'Les ans en étant la cause, Dédé m’abandonne son jardin saison après saison, comme on transmet un savoir : par le regard, plus que par les mots.' },
  { quand: '2026', quoi: 'Naissance de maison arnould.' },
];

// Planches de deux étapes ; les étapes qui diffèrent selon la liqueur changent avec le sélecteur.
const planches = [
  {
    num: 'I',
    titre: "du jardin à l'alcool",
    steps: [
      {
        n: 'i.',
        variants: {
          verveine: { t: 'cueillir', d: "Deux fois l'an, quand l'été s'annonce et quand l'automne hésite, à l'heure où le soleil baisse la voix. La verveine se laisse prendre la première ; la menthe suit.", img: '/images/mains-feuilles.jpg', alt: 'Une main plongée dans les feuilles fraîchement cueillies' },
          citron: { t: 'râper', d: "Le citron garde son âme dans sa peau. On la lui prend à fleur d'écorce, d'un geste qui ne s'apprend qu'à force de saisons.", img: '/images/rape-citrons.jpg', alt: 'Zestes de citron sur la râpe' },
        },
      },
      {
        n: 'ii.',
        variants: {
          verveine: { t: 'macérer', d: "Les feuilles s'abandonnent à l'alcool, à l'abri de la lumière. Lentement, elles lui cèdent leur parfum.", img: '/images/mise-en-bouteille.jpg', alt: "Feuilles de verveine plongées dans l'alcool" },
          citron: { t: 'macérer', d: "Les zestes s'abandonnent à l'alcool, à l'abri de la lumière. Lentement, ils lui cèdent leur or et leur parfum.", img: '/images/maceration-zestes.jpg', alt: "Zestes de citron en macération, d'un jaune profond" },
        },
      },
    ],
  },
  {
    num: 'II',
    titre: 'le temps de séparer',
    steps: [
      { n: 'iii.', t: 'filtrer', d: "Le linge retient la plante et ne laisse passer que le meilleur de l'alcoolature.", img: '/images/filtrage-zoom.jpg', alt: 'La liqueur filtrée au travers du linge' },
      { n: 'iv.', t: 'soutirer', d: 'La liqueur laisse son trouble au fond de la dame-jeanne et repart, plus claire, par le tuyau.', img: '/images/soutirage.jpg', alt: 'Le tuyau de soutirage plongé dans la dame-jeanne en osier' },
    ],
  },
  {
    num: 'III',
    titre: 'la douceur et le repos',
    steps: [
      { n: 'v.', t: 'sucrer', d: "L'eau et le saccharose s'unissent en un sirop incolore, parfois relevé d'un filet de miel de sapin, récolté à Craponne-sur-Arzon. Versé dans la liqueur, il sublime l'alcool : il en arrondit les angles et en apaise le feu.", img: '/images/sirop-zoom.jpg', alt: 'Le sirop de sucre versé en filet clair' },
      { n: 'vi.', t: 'mettre en bouteille', d: 'Chaque bouteille est remplie à la main, puis laissée au repos : le temps achève ce que le jardin a commencé.', img: '/images/mise-en-bouteille-degrade.jpg', alt: 'La liqueur en bouteille, du vert profond au blanc' },
    ],
  },
];

const essais = [
  { n: '01', name: 'verveine jaune', latin: 'Aloysia citrodora', d: 'Plus douce et plus ronde, à la manière des liqueurs jaunes des monastères.', img: '/images/verveine-jaune.jpg' },
  { n: '02', name: 'citron verveiné', latin: 'Citrus limon · Aloysia citrodora', d: 'Les zestes du monticello, et quelques feuilles du jardin posées par-dessus.', img: '/images/feuilles-zestes.jpg' },
  { n: '03', name: 'verveine des ruches', latin: 'Aloysia citrodora · miel de sapin', d: 'Un miel de sapin des hauteurs de Craponne s’y glisse en secret ; la verveine en revient avec des airs de sous-bois.', img: '/images/vert-coule.jpg' },
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
  { w: 'alcoolature', p: 'al.kɔ.la.tyʁ', g: 'n. f.', d: ['Vieux mot d’officine : ce que l’alcool a tiré d’une plante fraîche longuement macérée. L’âme de la liqueur, avant le sucre et le temps.'] },
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
      <Topbar />

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
              L'hiver, y sentait le bois mouillé et la citronnelle des feuilles qui séchaient.<br />
              Passés les saints de glace, on la rendait au soleil.<br />
              Quatre générations l'ont veillée tour à tour ; jamais elle n'a péri.<br />
              Dans chaque bouteille, c'est encore elle.
            </p>
          </div>
          <figure className="hero__media">
            <div className="fader">
              <Image src="/images/goulot.jpg" alt="Zestes de citron et feuilles de verveine, vus par le goulot" fill priority sizes="(max-width: 900px) 100vw, 440px" />
            </div>
            <figcaption>par le goulot, un jardin qui ne fane pas</figcaption>
          </figure>
        </section>

        {/* ——— La maison : frise ——— */}
        <section id="maison" className="maison">
          <div className="maison__head">
            <p className="kicker">la maison</p>
            <h2>une histoire <em>de famille</em></h2>
            <p className="maison__intro">
              Il était une fois, à Vals-près-le-Puy, un jardin qui passait de mains en mains, sans jamais changer d'âme.
              En son cœur, une verveine que chacun, à son tour, a gardée comme on garde une promesse.
              Aujourd'hui, c'est entre mes mains que celle-ci est taillée, cueillie, bouturée, et replantée.
            </p>
          </div>
          <div className="frise__wrap">
          <ol className="frise">
            {frise.map((f) => (
              <li key={f.quand} className="frise__item">
                <span className="frise__dot" aria-hidden="true" />
                <p className="frise__quand">{f.quand}</p>
                <p className="frise__quoi">{f.quoi}</p>
              </li>
            ))}
            <li className="frise__line" aria-hidden="true"><FriseVigne /></li>
          </ol>
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
              <article key={l.id} className="liqueur">
                <div className="liqueur__label">
                  <Image src={l.img} alt={l.alt} width={l.w} height={l.h} sizes="(max-width: 900px) 80vw, 340px" />
                </div>
                <h3>{l.name}</h3>
                <p className="liqueur__meta">{l.legal} · {l.deg} · {l.vol}</p>
                <p className="liqueur__story">{l.story.join(' ')}</p>
                <p className="liqueur__morale">{l.morale}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ——— La préparation ——— */}
        <section id="methode" className="methode">
          <div className="section-head">
            <p className="kicker">la préparation</p>
            <h2>à quatre <em>mains</em></h2>
            <p className="methode__intro">
              Ici, la liqueur se fait à quatre mains : celles de ma mère et les miennes. On cueille au même rang, on râpe à la même table,
              et les gestes se répondent sans qu'on ait besoin de se les dire.
            </p>
          </div>
          <Preparation planches={planches} />
        </section>

        {/* ——— Les simples ——— */}
        <section id="simples" className="simples" data-zone="nuit" data-offset="190">
          <div className="simples__intro">
            <div className="simples__text">
              <p className="kicker kicker--light">le laboratoire</p>
              <h2>druide <em>d'aujourd'hui</em></h2>
              <p>
                Le laboratoire est ma petite officine d'apprenti druide. L'héritage des terroirs m'a toujours interpellé :
                j'essaie d'y retracer les plantes perdues et les savoirs oubliés, de retrouver les recettes des moines et des herboristes d'antan,
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
              <p className="kicker" style={{ marginTop: 28 }}>carnet de paillasse · formules à l'étude</p>
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
          <p className="note">Le druide parle de plantes et de gestes anciens, jamais de vertus.</p>
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
          <p className="contact__intro">
            Pour Noël, un mariage (en bidon ou en mignonnettes), un anniversaire ou un cadeau qui a une histoire :
            écrivez-nous, nous verrons ensemble ce que le jardin peut offrir.
          </p>
          <ContactForm endpoint={site.formEndpoint} />
          {site.email ? <p className="contact__alt">ou directement : <a href={`mailto:${site.email}`}>{site.email}</a></p> : null}
          <p className="contact__alt">{site.instagram ? <a href={site.instagram}>instagram · maison.arnould</a> : 'Instagram : bientôt.'}</p>
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
