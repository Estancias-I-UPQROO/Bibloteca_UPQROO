import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';


interface Evento {
  id: number;
  imagen: string;
  titulo: string;
}

export const InicioPage = () => {
  // Imágenes para el hero banner
  const imagenesBiblioteca = [
    'https://preview.redd.it/vo9vm1fcqrp71.jpg?auto=webp&s=cb4016edf50a37cf06dbe9e975ed9410b253bff0',
    'https://www.taisa-designer.com/wp-content/uploads/2019/09/anton-darius-thesollers-xYIuqpHD2oQ-unsplash.jpg',
    'https://cf-assets.www.cloudflare.com/slt3lc6tev37/3HvNfky6HzFsLOx8cz4vdR/1c6801dde97ae3c8685553db5a4fb8ff/example-image-compressed-70-kb.jpeg'
  ];

  // Datos para el carrusel de eventos (como Crunchyroll)
  const eventos: Evento[] = [
    { id: 1, imagen: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', titulo: 'Taller de Investigación' },
    { id: 2, imagen: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg', titulo: 'Feria del Libro' },
    { id: 3, imagen: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', titulo: 'Conferencia Magistral' },
    { id: 4, imagen: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg', titulo: 'Presentación de Libros' },
    { id: 5, imagen: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', titulo: 'Club de Lectura' },
    { id: 6, imagen: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg', titulo: 'Exposición Literaria' },
    { id: 7, imagen: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', titulo: 'Taller de Escritura' },
    { id: 8, imagen: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg', titulo: 'Maratón de Lectura' }
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuración para el hero banner (se mantiene igual)
  const settingsHero = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false
  };

  // Nueva configuración estilo Crunchyroll
  const settingsJustinMind = {
  infinite: true,
  speed: 500,
  slidesToShow: windowWidth > 768 ? 3 : 2,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  draggable: windowWidth <= 768,
  swipe: windowWidth <= 768,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        draggable: true,
        swipe: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        draggable: true,
        swipe: true,
      }
    }
  ]
};

const irADetalle = (evento: Evento) => {
  window.location.href = `/evento/${evento.id}`; // Puedes cambiar por useNavigate() si usas React Router
};

  return (
    <div className="inicio-container">
      {/* Hero Banner (se mantiene igual) */}
      <section className="hero-biblioteca">
        <div className="contenido-hero">
          <h1>BIBLIOTECA VIRTUAL KAXÁANT</h1>
          <h2>UNIVERSIDAD POLITÉCNICA DE QUINTANA ROO</h2>
        </div>
        <Slider {...settingsHero} className="hero-slider">
          {imagenesBiblioteca.map((src, idx) => (
            <div key={idx} className="slide-biblio">
              <img src={src} alt={`Imagen biblioteca ${idx}`} />
              <div className="slide-overlay"></div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="slider-jmind">
  <Slider {...settingsJustinMind} className="slider-container">
  {eventos.map((evento) => (
  <div
    key={evento.id}
    className="slider-card"
    onClick={() => irADetalle(evento)}
  >
    <img src={evento.imagen} alt={evento.titulo} />
    <div className="slider-hover-box">
      <h3>{evento.titulo}</h3>
      <p>Haz clic para más información</p>
    </div>
  </div>
))}


  </Slider>
</section>

    </div>
  );
}; 