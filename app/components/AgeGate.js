'use client';

import { useEffect, useState } from 'react';
import Medallion from './Medallion';

const KEY = 'ma-age-ok';

export default function AgeGate() {
  const [state, setState] = useState('ask'); // ask | refused | hidden — affiché dès le rendu serveur

  useEffect(() => {
    let ok = false;
    try {
      ok = window.localStorage.getItem(KEY) === '1';
    } catch (e) {
      ok = false;
    }
    if (ok) setState('hidden');
  }, []);

  useEffect(() => {
    document.body.style.overflow = state === 'hidden' ? '' : 'hidden';
  }, [state]);

  if (state === 'hidden') return null;

  const accept = () => {
    try {
      window.localStorage.setItem(KEY, '1');
    } catch (e) {}
    setState('hidden');
  };

  return (
    <div className="agegate" role="dialog" aria-modal="true" aria-labelledby="agegate-title">
      <div className="agegate__box">
        <Medallion size={88} />
        {state === 'ask' ? (
          <>
            <p id="agegate-title" className="agegate__title">
              Avez-vous l'âge légal pour consommer de l'alcool ?
            </p>
            <p className="agegate__text">Ce site présente des liqueurs. Il est réservé aux personnes majeures.</p>
            <div className="agegate__actions">
              <button type="button" className="btn btn--solid" onClick={accept}>
                oui, j'ai 18 ans ou plus
              </button>
              <button type="button" className="btn" onClick={() => setState('refused')}>
                non
              </button>
            </div>
          </>
        ) : (
          <p id="agegate-title" className="agegate__title">
            Revenez nous voir plus tard. La verveine, elle, sait attendre.
          </p>
        )}
        <p className="agegate__legal">L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</p>
      </div>
    </div>
  );
}
