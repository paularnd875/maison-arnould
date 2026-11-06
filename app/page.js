import Image from 'next/image';
import Medallion from './components/Medallion';
import TonneauTag from './components/TonneauTag';
import Lexique from './components/Lexique';
import Topbar from './components/Topbar';
import Preparation from './components/Preparation';
import FriseVigne from './components/FriseVigne';
import ContactForm from './components/ContactForm';
import Picto from './components/Picto';
import Carnet from './components/Carnet';
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
      'Elle ne se cueille pas : elle ne pousse et perdure, que dans les mémoires.',
    ],
    morale: 'Ce qui germe dans le cœur, le temps ne peut l’arracher.',
  },
  {
    id: 'monticello',
    name: 'monticello',
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
      'Au bout du chemin : un citron de Corse, et le sourire, légèrement enivré, du grand-père.',
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
  { quand: 'puis', quoi: 'Dédé rachète la maison de sa belle-mère, à Vals ; la verveine change de mains, sans changer de terre.' },
  { quand: 'plus tard', quoi: 'En Ardèche, à Saint-Vincent, une passiflore couvre sa terrasse cinquante étés durant. C’est elle qui a inspiré l’élixir d’aujourd’hui.' },
  { quand: '2009', quoi: 'Les ans en étant la cause, le jardin passe dans mes mains ; la voix de Dédé, elle, ne le quitte pas.' },
  { quand: '2026', quoi: 'Naissance de maison arnould.' },
];

// Planches de deux étapes ; les étapes qui diffèrent selon la liqueur changent avec le sélecteur.
const planches = [
  {
    num: 'I',
    titre: "du jardin à la bouteille",
    steps: [
      {
        n: 'i.',
        variants: {
          verveine: { t: 'cueillir', d: "Quand l'été s'annonce, puis quand l'automne hésite, à l'heure où la lumière du soir dore les feuilles. La verveine se laisse prendre la première ; la menthe suit.", img: '/images/mains-feuilles.jpg', alt: 'Une main plongée dans les feuilles fraîchement cueillies' },
          citron: { t: 'râper', d: "Le citron garde son âme dans sa peau. On la lui prend à fleur d'écorce, d'un geste qui ne s'apprend qu'à force de saisons.", img: '/images/raper-citrons.jpg', alt: 'Zestes de citron sur la râpe' },
        },
      },
      {
        n: 'ii.',
        variants: {
          verveine: { t: 'macérer', d: "Les feuilles s'abandonnent à l'alcool, à l'abri de la lumière. Jour après jour, elles lui confient leur parfum, comme on livre un secret.", img: '/images/mise-en-bouteille.jpg', alt: "Feuilles de verveine plongées dans l'alcool" },
          citron: { t: 'macérer', d: "Les zestes s'abandonnent à l'alcool, à l'abri de la lumière. Lentement, ils lui cèdent leur parfum, et cet or qu'ils avaient volé au soleil.", img: '/images/maceration-zestes.jpg', alt: "Zestes de citron en macération, d'un jaune profond" },
        },
      },
    ],
  },
  {
    num: 'II',
    titre: 'l’essence, goutte à goutte',
    steps: [
      {
        n: 'iii.',
        variants: {
          verveine: { t: 'filtrer', d: "Le linge garde les feuilles, pâles et vidées de tout ce qu'elles avaient à dire, et ne laisse perler que leur essence.", img: '/images/filtrage-verveine.jpg', alt: 'La liqueur filtrée au travers du linge' },
          citron: { t: 'filtrer', d: "Le linge garde les zestes, pâlis et vidés de tout ce qu'ils avaient à dire, et ne laisse perler que leur essence.", img: '/images/filtrage-zestes-v2.jpg', alt: 'Les zestes pressés dans le linge' },
        },
      },
      { n: 'iv.', t: 'soutirer', d: 'Par un simple tuyau, la liqueur passe de dame-jeanne en dame-jeanne, sans hâte, comme on change de demeure.', img: '/images/soutirage.jpg', alt: 'Le tuyau de soutirage plongé dans la dame-jeanne en osier' },
    ],
  },
  {
    num: 'III',
    titre: 'le sucre et le silence',
    steps: [
      { n: 'v.', t: 'sucrer', d: "L'eau et les cristaux de sucre s'unissent en un sirop incolore, parfois agrémenté d'un filet de miel de sapin, récolté à Craponne-sur-Arzon. Versé dans la liqueur, il sublime l'alcool, en arrondit les angles et en apaise le feu.", img: '/images/sirop-zoom.jpg', alt: 'Le sirop de sucre versé en filet clair' },
      {
        n: 'vi.',
        variants: {
          verveine: { t: 'mettre en bouteille', d: 'Chaque bouteille est remplie à la main, puis laissée au repos : le temps achève ce que le jardin, lui, a commencé.', img: '/images/bouteille-couchant.jpg', alt: 'Une bouteille de liqueur verte levée vers le soleil couchant' },
          citron: { t: 'mettre en bouteille', d: 'Chaque bouteille est remplie à la main, puis laissée au repos : le temps achève ce que le jardin, lui, a commencé.', img: '/images/bouteille-couchant-citron.jpg', alt: 'Une bouteille de liqueur de citron levée vers le soleil couchant' },
        },
      },
    ],
  },
];

const essais = [
  { n: '01', name: 'verveine jaune', latin: 'Aloysia citrodora', d: 'Plus douce et plus ronde, à la manière des liqueurs jaunes des monastères.', img: '/images/verveine-jaune-bidon4.jpg' },
  { n: '02', name: 'citron verveiné', latin: 'Citrus limon · Aloysia citrodora', d: 'Des zestes gorgés du soleil de Corse, rafraîchis par la verveine du jardin.', img: '/images/feuilles-zestes.jpg' },
  { n: '03', name: 'verveine des ruches', latin: 'Aloysia citrodora · miel de sapin', d: 'Un miel de sapin des hauteurs de Craponne s’y glisse en secret : il lui prête un voile d’ambre, et la verveine y prend comme un accent de sous-bois.', img: '/images/verveine-ruches.jpg' },
];

const carnet = [
  { id: 'chataigne', name: 'châtaigne', latin: 'Castanea sativa', picto: 'chataigne', avant: 'le fruit de l’arbre ', rature: 'à pain', fix: 'à liqueur', apres: ' des Ardéchois', note: 'En Ardèche, on surnommait le châtaignier « l’arbre à pain » : ses fruits ont longtemps nourri les familles tout l’hiver.' },
  { id: 'champignon', name: 'liqueur de champignon', latin: 'espèces encore à l’étude', picto: 'champignon', avant: 'le sous-bois ', rature: 'en omelette', fix: 'en flacon', apres: '' },
  { id: 'menthe-pouliot', name: 'menthe pouliot', latin: 'Mentha pulegium', picto: 'pouliot', avant: 'la menthe sauvage, ', rature: 'plus sage', fix: 'plus vive', apres: ' que sa cousine poivrée' },
  { id: 'verveine-menthe', name: 'verveine-menthe', latin: 'Aloysia citrodora · Mentha × piperita', picto: 'verveine-menthe', avant: 'les deux plantes de la maison ', rature: 'mélangées', fix: 'réunies', apres: '' },
  { id: 'ortie', name: 'ortie', latin: 'Urtica dioica', picto: 'ortie', avant: 'de toutes les herbes, la plus ', rature: 'mal aimée', fix: 'méconnue', apres: '' },
  { id: 'mandarine', name: 'mandarine', latin: 'Citrus reticulata', picto: 'mandarine', avant: 'le petit soleil ', rature: 'd’été', fix: 'd’hiver', apres: ' des corbeilles de Noël' },
  { id: 'framboise', name: 'framboise', latin: 'Rubus idaeus', picto: 'framboise', avant: 'le petit rubis ', rature: 'des confitures', fix: 'des forêts', apres: '' },
];

const lexique = [
  { w: 'simples', p: 'sɛ̃pl', g: 'n. m. pl.', d: ['Vx. Du Moyen Âge au XVIIIe siècle, les plantes du « jardin des simples » des monastères, employées seules, telles que la nature les donne. Par ext. Le laboratoire de maison arnould.'] },
  { w: 'monticello', p: 'mɔ̃.ti.tʃɛ.lo', g: 'n. m.', d: ['1. Liqueur de citron de la maison, à la manière du limoncello, mais à la sauce auvergnate : plus forte.', '2. Chez Dédé. Le limoncello lui-même, tel qu’il le prononçait, épris de la Corse sur ses vieux jours. D’où le rébus : mont · Titi · Che · l’eau.'] },
  { w: 'bouture', p: 'bu.tyʁ', g: 'n. f.', d: ['Fragment de plante qui, mis en terre, reprend racine et redonne la plante entière. La verveine du jardin en descend, depuis quatre générations à présent.'] },
  { w: 'macération', p: 'ma.se.ʁa.sjɔ̃', g: 'n. f.', d: ["Lent tête-à-tête entre la plante et l'alcool. À l'abri de la lumière, la feuille se dénoue et lui transmet, jour après jour, tout ce qu'elle sait de son parfum."] },
  { w: 'marc', p: 'maʁ', g: 'n. m.', d: ['Ce qui reste des feuilles et des zestes quand l’alcool leur a tout pris : une dépouille pâle, sans parfum ni saveur. Le linge la retient ; la liqueur, elle, s’en va.'] },
  { w: 'essence', p: 'e.sɑ̃s', g: 'n. f.', d: ['Ce qu’une plante a de plus intime : son parfum, sa saveur, ce qui demeure quand on lui a ôté tout le reste.'] },
  { w: 'saints de glace', p: 'sɛ̃ d(ə) glas', g: 'n. m. pl.', d: ['Saint Mamert, saint Pancrace et saint Servais, les 11, 12 et 13 mai, réputés ramener les dernières gelées. Passés ceux-là, la verveine retourne au jardin.'] },
  { w: 'zeste', p: 'zɛst', g: 'n. m.', d: ['Fine écorce colorée des agrumes, où dorment leurs huiles parfumées. On le râpe sans jamais toucher le blanc, qui est amer.'] },
  { w: 'élixir', p: 'e.lik.siʁ', g: 'n. m.', d: ["Autrefois, breuvage d'herboriste tiré des plantes et gardé comme un trésor. Ici, la verveine de la maison, dans sa version la plus intense."] },
  { w: 'dame-jeanne', p: 'dam.ʒan', g: 'n. f.', d: ["Grosse bouteille ventrue, souvent habillée d'osier, où la liqueur repose avant d'être soutirée."] },
  { w: 'mignonnette', p: 'mi.ɲɔ.nɛt', g: 'n. f.', d: ['1. Petite bouteille de quelques centilitres, réplique en miniature de la grande. Au mariage, on en glisse une près de chaque assiette.', '2. Aussi : poivre grossièrement concassé. Ici, on parle du flacon.'] },
  { w: 'rincette', p: 'ʁɛ̃.sɛt', g: 'n. f. fam.', d: ['Fond d’eau-de-vie versé dans la tasse de café encore tiède, pour la « rincer ». Suivie parfois de la surrincette, et c’est là qu’il faut savoir s’arrêter.'] },
  { w: 'soutirage', p: 'su.ti.ʁaʒ', g: 'n. m.', d: ['Transvaser la liqueur pour la séparer de son dépôt. Un tuyau, une dame-jeanne, un peu de patience.'] },
  { w: 'miellat', p: 'mjɛ.la', g: 'n. m.', d: ["Gouttelettes sucrées laissées sur les aiguilles de sapin par de minuscules insectes. Les abeilles les récoltent : c'est le miel de sapin, sombre et boisé."] },
  { w: 'nemeton', p: 'ne.me.tɔn', g: 'n. m.', d: ['Chez les Gaulois, clairière ou bois sacré où officiaient les druides.'] },
  { w: 'décanter', p: 'de.kɑ̃.te', g: 'v.', d: ['Laisser le temps faire tomber le trouble au fond, pour ne garder que le clair.'] },
  { w: 'passiflore', p: 'pa.si.flɔʁ', g: 'n. f.', d: ['Liane à la fleur couronnée de filaments, dite aussi fleur de la Passion. Celle de Saint-Vincent fleurit sur l’élixir.'] },
  { w: 'druide', p: 'dʁɥid', g: 'n. m.', d: ['Chez les Gaulois, prêtre et savant des plantes, qui cueillait le gui à la serpe.'] },
  { w: 'canard', p: 'ka.naʁ', g: 'n. m. fam.', d: ['Morceau de sucre qu’on trempe dans le café ou l’eau-de-vie avant de le croquer, comme le canard plonge la tête sous l’eau.'] },
  { w: 'officine', p: 'ɔ.fi.sin', g: 'n. f.', d: ['Arrière-boutique de l’apothicaire, où l’on préparait les remèdes. Par ext. Le coin du labo où l’apprenti druide fait ses essais.'] },
  { w: 'tonneau', p: 'tɔ.no', g: 'n. m.', d: ['Fût de bois cerclé. Celui du jardin, vieux et percé, abritait la verveine des premières gelées.'] },
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
              Chaque automne, avant les premières gelées, on la rempotait dans un vieux tonneau percé, au secret d'une cave.<br />
              L'hiver, y sentait le bois mouillé et la citronnelle, des feuilles desséchées encore accrochées à sa tige.<br />
              Passés les saints de glace, on la rendait au soleil.<br />
              Quatre générations l'ont veillée tour à tour ; jamais elle n'a péri.<br />
              Dans chaque bouteille, c'est encore elle, <em className="hero__echo">que l'hiver n'a pas pris</em>.
            </p>
          </div>
          <figure className="hero__media">
            <div className="fader">
              <Image src="/images/goulot-v5.jpg" alt="Zestes de citron et feuilles de verveine, vus par le goulot" fill priority sizes="(max-width: 900px) 100vw, 440px" />
            </div>
            <figcaption>éch. n° 02 · <i>Citrus limon</i> &amp; <i>Aloysia citrodora</i></figcaption>
          </figure>
        </section>

        {/* ——— La maison : frise ——— */}
        <section id="maison" className="maison">
          <div className="maison__head">
            <p className="kicker">la maison</p>
            <h2>une histoire <em>de famille</em></h2>
            <p className="maison__intro">
              Il était une fois, à Vals-près-le-Puy, un jardin qui passait de mains en mains, sans jamais changer d'âme.
              En son cœur, une verveine que chacun, à son tour, a gardée, comme on garde une promesse.
              Aujourd'hui, c'est entre mes mains qu'elle est taillée, cueillie, bouturée, et replantée.
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
              Ici, la liqueur se fait à quatre mains : celles de ma mère et les miennes. Côte à côte, au jardin comme à l'officine,
              nos gestes, mille fois répétés, ont appris à se répondre sans un mot.
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
                Le laboratoire est ma petite officine d'apprenti druide. Ici, au pays des volcans, les Vellaves vénéraient, dit-on, les pierres et les sources,
                bien avant qu'on y bâtisse des cathédrales. Cet héritage, volcanique et spirituel, m'habite depuis toujours.
                J'essaie d'y retracer les plantes perdues et les gestes que plus personne ne transmet, de retrouver les recettes des moines et des herboristes d'antan,
                ces secrets que le temps a recouverts de mousse. Puis je bats les talus et les lisières, et je rends leur place aux <a href="#lexique" className="renvoi">simples<sup>*</sup></a> que l'on foule sans les voir.
              </p>
              <p className="simples__renvoi"><sup>*</sup> voir le lexique, plus bas.</p>
              <p className="simples__small">Des essais en petites séries, numérotés ; certains ne connaîtront qu'une saison, comme les fleurs qui les ont faits.</p>
            </div>
            <figure className="simples__photo">
              <video className="simples__video" src="/videos/labo-gouttes-v5.mp4" poster="/videos/labo-gouttes-v5.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Gouttes de liqueur verte qui tombent au fond du verre" />
            </figure>
          </div>

          <div className="definition">
            <p className="definition__word">les simples <span>[sɛ̃pl] <i>n. m. pl.</i></span></p>
            <p>
              <b>1.</b> <i>Vx.</i> Du Moyen Âge au XVIII<sup>e</sup> siècle, plantes cultivées par les moines au <i>jardin des simples</i>, ainsi nommées parce qu'on les employait seules, sans artifice ni mélange, dans leur vérité première, telles que la nature les donne.<br />
              <b>2.</b> <i>Par ext.</i> Le laboratoire de maison arnould : cuvées d'essai, en petites séries, de plantes connues depuis des siècles, cueillies par les
              anciens puis délaissées. Oubliées des jardins, arrachées, reléguées au rang de mauvaises herbes.
            </p>
          </div>

          <div className="essais">
            <div className="essais__list">
              <p className="kicker">les essais en cours</p>
              <ul>
                {essais.map((e) => (
                  <li key={e.n} className="essai">
                    <div className="essai__img">{e.img ? <Image src={e.img} alt="" fill sizes="80px" /> : <Picto kind={e.picto} />}</div>
                    <div className="essai__text">
                      <p className="essai__name">{e.name} <i>{e.latin}</i></p>
                      <p>{e.d}</p>
                    </div>
                    <span className="essai__n">n° {e.n}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="essais__tags" aria-label="Étiquettes d'essai">
              {essais.map((e) => (
                <TonneauTag key={e.n} id={e.n} n={e.n} name={e.name} latin={e.latin} />
              ))}
            </div>
          </div>
          <div className="carnet__bloc">
            <p className="kicker">carnet de paillasse · formules à l'étude</p>
            <Carnet items={carnet} />
            <p className="carnet__suite">D'autres pages restent à écrire ; le carnet, lui, n'est jamais tout à fait refermé.</p>
          </div>
          <p className="note">Si la nature nous a confié ces plantes, c’est qu’il nous revient de les comprendre : le druide les interroge, les éprouve, et cherche patiemment ce que chacune a de meilleur à offrir.</p>
        </section>

        {/* ——— Lexique ——— */}
        <section id="lexique" className="lexique" aria-labelledby="lexique-title">
          <div className="section-head">
            <p className="kicker">petit lexique</p>
            <h2 id="lexique-title">les mots <em>de la maison</em></h2>
            <p className="lexique__intro">Ceux qu'on emploie à la cave, au jardin et au labo, et qu'on n'entend plus guère ailleurs.</p>
          </div>
          <Lexique mots={lexique} />
        </section>

        {/* ——— Contact ——— */}
        <section id="contact" className="contact">
          <div className="contact__wrap">
            <div className="contact__texte">
              <Medallion size={80} ink="#F4ECD6" gold="#E8C547" />
              <p className="kicker kicker--light">contact</p>
              <h2>écrire à la <em>maison</em></h2>
              <p className="contact__intro">
                Un Noël à préparer, un mariage ou un anniversaire à célébrer<a href="#note-mariage" className="renvoi renvoi--doux"><sup>*</sup></a>,
                un accord mets et digestifs, ou l'envie de transmettre, à votre tour, une histoire en bouteille ? Il y a toujours, au fond de l'officine, de quoi y répondre.
              </p>
              <p className="contact__intro">
                La porte de l'officine reste aussi entrouverte à qui voudrait cheminer un peu avec moi : une collaboration à imaginer,
                une liqueur à rêver, une plante oubliée à me souffler, ou quelque vieux grimoire à me faire découvrir.
              </p>
              <p id="note-mariage" className="contact__note"><sup>*</sup> en bidon ou en mignonnettes</p>
              <p className="contact__alt">{site.instagram ? <a href={site.instagram}>instagram · maison.arnould</a> : 'Instagram : bientôt.'}</p>
            </div>
            <ContactForm accessKey={site.web3formsKey} />
          </div>
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
