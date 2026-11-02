import Medallion from '../components/Medallion';

export const metadata = { title: 'mentions légales', robots: { index: false } };

export default function MentionsLegales() {
  return (
    <main className="page">
      <a href="/" aria-label="Retour à l'accueil"><Medallion size={72} /></a>
      <h1>mentions légales</h1>
      <h2>éditeur</h2>
      <p>maison arnould, projet personnel de Paul Arnould, Le Puy-en-Velay. [Statut, adresse et numéro SIRET à compléter avant toute activité commerciale.]</p>
      <h2>hébergement</h2>
      <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
      <h2>vente</h2>
      <p>Aucune vente n'est réalisée sur ce site pour le moment.</p>
      <h2>alcool</h2>
      <p>Ce site est réservé aux personnes majeures. L'abus d'alcool est dangereux pour la santé, à consommer avec modération. La consommation de boissons alcoolisées pendant la grossesse, même en faible quantité, peut avoir des conséquences graves sur la santé de l'enfant.</p>
      <h2>données</h2>
      <p>Ce site ne dépose aucun cookie de suivi. Seul votre choix sur l'écran de vérification d'âge est gardé dans votre navigateur.</p>
    </main>
  );
}
