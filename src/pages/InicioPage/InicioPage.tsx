import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
          {/* QUE OFRECEMOS */}
        <section className="que-ofrecemos">
          <div className="que-ofrecemos-content">
            <h3>¿Que Ofrece la Biblioteca?</h3>
            <p>
              En la Universidad Politécnica de Quintana Roo contamos con un área especial de biblioteca, en apoyo a la enseñanza-aprendizaje e 
              investigación donde nuestros estudiantes encontrarán variedad de libros, los cuales asisten a los diferentes programas educativos.
              Así mismo contamos con equipo de cómputo permitiendo a los usuarios elaborar trabajos académicos, realizar consultas o búsquedas y 
              acceder a recursos de paga y gratuitos
            </p>
          </div>
        </section>

      <section className="franja-contenedor">
      <div className="imagen-fondo">
        <img 
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Biblioteca con libros" 
        />
      </div>
      <div className="texto-superpuesto">
        <div className="contenido-texto">
          <h3>Comprometidos con la educación</h3>
          <p>
            Ofrecemos recursos que nutren la mente y expanden el intelecto. 
            Descubre cómo la lectura puede ser una herramienta poderosa 
            para el aprendizaje continuo.
          </p>
        </div>
      </div>
    </section>

      </div>
    </>
  );
};
