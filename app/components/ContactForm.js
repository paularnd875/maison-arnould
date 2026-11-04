'use client';

import { useState } from 'react';

const OCCASIONS = [
  'une question',
  'un cadeau de Noël',
  'un mariage (bidon ou mignonnettes)',
  'un anniversaire, une fête',
  'une collaboration',
  'une idée de liqueur',
  'une plante oubliée à souffler',
  'un grimoire à me faire découvrir',
  'la recette de la potion magique',
  'autre chose',
];

// Formulaire compatible Formspree / Web3Forms : l'adresse d'envoi se règle dans site.config.js (formEndpoint).
export default function ContactForm({ endpoint }) {
  const [state, setState] = useState('idle'); // idle | sending | ok | error

  const submit = async (e) => {
    e.preventDefault();
    if (!endpoint) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._gotcha) return; // robot
    setState('sending');
    try {
      const r = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error(String(r.status));
      form.reset();
      setState('ok');
    } catch (err) {
      setState('error');
    }
  };

  if (state === 'ok') {
    return <p className="form__done">Merci. Votre message est bien arrivé à la maison ; je vous réponds au plus vite.</p>;
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <label>
          <span>nom</span>
          <input name="nom" required autoComplete="name" />
        </label>
        <label>
          <span>e-mail</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        <span>c'est pour</span>
        <select name="occasion" defaultValue={OCCASIONS[0]}>
          {OCCASIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label>
        <span>votre mot</span>
        <textarea name="message" rows={5} required placeholder="Racontez-moi l’occasion, la saison, la liqueur qui vous fait de l’œil… le reste, nous le trouverons ensemble." />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form__hp" aria-hidden="true" />
      <p className="form__rgpd">Vos coordonnées servent uniquement à vous répondre. Elles ne sont ni conservées au-delà, ni transmises.</p>
      <button type="submit" className="btn btn--solid" disabled={!endpoint || state === 'sending'}>
        {state === 'sending' ? 'envoi…' : endpoint ? 'envoyer' : 'ouverture très prochaine'}
      </button>
      {state === 'error' ? <p className="form__err">L'envoi n'a pas abouti. Réessayez dans un instant.</p> : null}
    </form>
  );
}
