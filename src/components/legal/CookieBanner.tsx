'use client';

import { useState, useEffect } from 'react';
import './cookie-banner.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Aquí podrías inicializar servicios que requieren cookies
    // como Google Analytics, etc.
  };

  const rejectNonEssentialCookies = () => {
    localStorage.setItem('cookie-consent', 'essential-only');
    setShowBanner(false);
    
    // Desactivar servicios no esenciales
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
          Al continuar navegando, acepta nuestra{' '}
          <a href="/legal/cookies" target="_blank" rel="noopener noreferrer">
            Política de Cookies
          </a>{' '}
          y nuestra{' '}
          <a href="/legal/privacy" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>.
        </p>
        <div className="cookie-banner-actions">
          <button 
            className="btn-accept"
            onClick={acceptCookies}
          >
            Aceptar todas
          </button>
          <button 
            className="btn-reject"
            onClick={rejectNonEssentialCookies}
          >
            Solo esenciales
          </button>
          <a 
            href="/legal/cookies" 
            className="btn-customize"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Personalizar
          </a>
        </div>
      </div>
    </div>
  );
}
