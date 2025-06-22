import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './RedesSociales.css';

interface RedSocial {
  id: string;
  nombre: string;
  link: string;
  icono: string;
}

interface RedesSocialesProps {
  redes: RedSocial[];
}

export const RedesSociales: React.FC<RedesSocialesProps> = ({ redes }) => {
  // Función para obtener la clase CSS según la red social
  const getSocialClass = (icono: string) => {
    if (icono.includes('facebook')) return 'facebook';
    if (icono.includes('x')) return 'x';
    if (icono.includes('instagram')) return 'instagram';
    if (icono.includes('youtube')) return 'youtube';
    if (icono.includes('tiktok')) return 'tiktok';
    return '';
  };

  return (
    <div className="redes-sociales">
      {redes.map((red: RedSocial) => (
        <a
          key={red.id}
          href={red.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`red-social ${getSocialClass(red.icono)}`}
          aria-label={red.nombre}
        >
          <i className={`fab ${red.icono}`}></i>
        </a>
      ))}
    </div>
  );
};