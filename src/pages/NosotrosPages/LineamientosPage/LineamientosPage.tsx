import { useState } from 'react';
import { PageHeader } from "../../../components";
import { FaBook, FaUsers, FaRegHandshake, FaFilePdf, FaExclamationTriangle } from "react-icons/fa";
import "./LineamientosPage.css";

export const LineamientosPage = () => {
  const [pdfError, setPdfError] = useState(false);
  const [pdfUrl] = useState("/public/Lineamientos_para_el_funcionamiento_de_la_biblioteca_de_la_Universidad_Politecnica_de_Quintana_roo.pdf");

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <>
      <PageHeader>Lineamientos</PageHeader>
      <div className="lineamientos-container">

      <div className="intro-section">
        <div className="intro-content">
          <div className="intro-text">
            <p>
              Los lineamientos de la biblioteca son el conjunto de normas, políticas y procedimientos que rigen el funcionamiento y uso de los espacios, recursos y servicios de la institución. Estos lineamientos tienen como objetivo principal crear un ambiente propicio para el estudio, la investigación y el aprendizaje, al tiempo que se promueve el respeto, la responsabilidad y la sana convivencia entre los usuarios.
            </p>
            <p>
              Es importante que todos los usuarios conozcan y respeten estos lineamientos, ya que contribuyen a crear un ambiente de aprendizaje productivo y agradable para toda la comunidad.
            </p>
            <div className="call-to-action">
              <FaRegHandshake className="cta-icon" />
              <span>¡Le invitamos a familiarizarse con estos lineamientos para sacar el máximo provecho de los recursos y servicios que ofrece nuestra biblioteca!</span>
            </div>
          </div>
          <div className="intro-image">
            <img 
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Personas usando la biblioteca" 
            />
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Beneficios de seguir los lineamientos</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaBook className="benefit-icon" />
            <h3>Acceso eficiente</h3>
            <p>Optimiza el uso de los recursos bibliográficos para toda la comunidad</p>
          </div>
          <div className="benefit-card">
            <FaUsers className="benefit-icon" />
            <h3>Conviviencia armónica</h3>
            <p>Promueve un ambiente de respeto mutuo entre todos los usuarios</p>
          </div>
        </div>
      </div>

      {/* PDF */}
      <div className="pdf-section">
        <h2>Documento completo de lineamientos</h2>
        <div className="pdf-container">
          {!pdfError ? (
            <>
              <iframe 
                src={pdfUrl}
                title="Lineamientos de la Biblioteca"
                className="pdf-viewer"
                onError={handlePdfError}
              />
              <a 
                href={pdfUrl} 
                download
                className="download-button primary"
              >
                <FaFilePdf /> Descargar PDF
              </a>
            </>
          ) : (
            <div className="pdf-alternative-view">
              <FaExclamationTriangle className="error-icon" />
              <h3>No se pudo cargar el PDF</h3>
              <p>Puedes descargar el documento completo aquí:</p>
              <a 
                href={pdfUrl} 
                download
                className="download-button primary"
              >
                <FaFilePdf /> Descargar PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </div>

    </>    
  );
};
