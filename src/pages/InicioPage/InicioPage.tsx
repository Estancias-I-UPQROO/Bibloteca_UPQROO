import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { PageHeader } from '../../components';
import './styles.css';

export const InicioPage = () => {
  const imagenesBiblioteca = [
    'https://preview.redd.it/vo9vm1fcqrp71.jpg?auto=webp&s=cb4016edf50a37cf06dbe9e975ed9410b253bff0',
    'https://www.taisa-designer.com/wp-content/uploads/2019/09/anton-darius-thesollers-xYIuqpHD2oQ-unsplash.jpg',
    'https://cf-assets.www.cloudflare.com/slt3lc6tev37/3HvNfky6HzFsLOx8cz4vdR/1c6801dde97ae3c8685553db5a4fb8ff/example-image-compressed-70-kb.jpeg'
  ];

  const eventos = [
    { id: 1, imagen: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg', titulo: 'Taller de Investigación' },
    { id: 2, imagen: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg', titulo: 'Feria del Libro' },
    { id: 3, imagen: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg', titulo: 'Conferencia Magistral' },
    { id: 4, imagen: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg', titulo: 'Presentación de Libros' },
    { id: 5, imagen: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg', titulo: 'Club de Lectura' },
    { id: 6, imagen: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg', titulo: 'Exposición Literaria' }
  ];

  const redesSociales = [
    { id: 1, nombre: 'Facebook', icono: 'fa-facebook', link: 'https://facebook.com/upqroo' },
    { id: 2, nombre: 'X', icono: 'fa-x', link: 'https://x.com/upqroo' },
    { id: 3, nombre: 'Instagram', icono: 'fa-instagram', link: 'https://instagram.com/upqroo' },
    { id: 4, nombre: 'YouTube', icono: 'fa-youtube', link: 'https://youtube.com/upqroo' }
  ];

  const [centerPercent, setCenterPercent] = useState(33.33);

  useEffect(() => {
    const actualizarCentro = () => {
      const width = window.innerWidth;
      if (width < 480) setCenterPercent(100);
      else if (width < 768) setCenterPercent(80);
      else if (width < 1024) setCenterPercent(50);
      else setCenterPercent(33.33);
    };
    actualizarCentro();
    window.addEventListener('resize', actualizarCentro);
    return () => window.removeEventListener('resize', actualizarCentro);
  }, []);

  return (
    <>
      <div className="inicio-container">

        {/* HERO */}
        <section className="hero-biblioteca">
          <div className="contenido-hero">
            <h1>BIBLIOTECA VIRTUAL KAXÁANT</h1>
            <h2>UNIVERSIDAD POLITÉCNICA DE QUINTANA ROO</h2>
          </div>

          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop
            autoPlay
            interval={5000}
            showArrows={false}
            transitionTime={2000}
            swipeable={false}
            stopOnHover={false}
            dynamicHeight={false}
            animationHandler="fade"
            emulateTouch={false}
          >
            {imagenesBiblioteca.map((src, idx) => (
              <div key={idx} className="slide-biblio">
                <img src={src} alt={`background-${idx}`} />
              </div>
            ))}
          </Carousel>

          <div className="redes-sociales">
            {redesSociales.map(red => (
              <a
                key={red.id}
                href={red.link}
                target="_blank"
                rel="noopener noreferrer"
                className="red-social"
                aria-label={red.nombre}
              >
                <i className={`fab ${red.icono}`}></i>
              </a>
            ))}
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="quienes-somos">
          <div className="quienes-somos-content">
            <h3>Quiénes Somos</h3>
            <p>
              La Biblioteca Virtual Kaxáant de la Universidad Politécnica de Quintana Roo es un espacio
              dedicado al conocimiento, la investigación y el aprendizaje. Nuestro objetivo es brindar
              acceso a recursos educativos de calidad y fomentar la cultura en nuestra comunidad universitaria.
              Con un amplio acervo digital y actividades culturales, buscamos ser el corazón académico de la UPQROO.
            </p>
          </div>
        </section>

        {/* EVENTOS */}
        <section className="carrusel-eventos">
          <h3>Eventos y Actividades</h3>
          <div className="custom-carousel-container">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={3000}
              transitionTime={800}
              centerMode
              centerSlidePercentage={centerPercent}
              emulateTouch
              swipeable
              stopOnHover={false}
              dynamicHeight={false}
              axis="horizontal"
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="carousel-arrow carousel-arrow-left"
                  >
                    ‹
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="carousel-arrow carousel-arrow-right"
                  >
                    ›
                  </button>
                )
              }
            >
              {[...eventos, ...eventos].map((evento, index) => (
                <div key={`${evento.id}-${index}`} className="evento-card">
                  <img src={evento.imagen} alt={evento.titulo} />
                  <div className="evento-info">
                    <p>{evento.titulo}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </>
  );
};
