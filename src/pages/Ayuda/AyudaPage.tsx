import { useState } from 'react';
import { PageHeader } from '../../components';
import { FaFilePdf, FaDownload, FaArrowLeft, FaArrowRight, } from 'react-icons/fa';
import './AyudaPage.css';

export const AyudaPage = () => {
  const [activePdf, setActivePdf] = useState(0);
  
  // Lista de PDFs en la carpeta public
  const pdfs = [
    {
      title: "Guía de uso de Digitalia Hispánica",
      file: "Guia-de-uso-Digitalia-Hispanica_compressed_compressed-comprimido-1-1_compressed-compressed-comprimido.pdf",
      downloadName: "manual-usuario-biblioteca.pdf"
    },
    {
      title: "Guía de Acceso de VS PHE", 
      file: "Guia-Acceso-VS_PHE-comprimido.pdf",
      downloadName: "guia-rapida-biblioteca.pdf"
    }
  ];

  const nextPdf = () => setActivePdf((prev) => (prev + 1) % pdfs.length);
  const prevPdf = () => setActivePdf((prev) => (prev - 1 + pdfs.length) % pdfs.length);

  return (

<>
    <PageHeader>Ayuda</PageHeader>
    <div className="ayuda-container">
  
      

      <p className="subtitle">Documentación y guías de la Biblioteca Virtual</p>
      
      <div className="pdf-viewer-container">
        <div className="pdf-header">
          <h2>{pdfs[activePdf].title}</h2>
          <a 
            href={`/${pdfs[activePdf].file}`} 
            download={pdfs[activePdf].downloadName}
            className="download-btn"
          >
            <FaDownload /> <span className="btn-text">Descargar</span>
          </a>
        </div>
        
        <div className="pdf-navigation mobile-nav">
          <button onClick={prevPdf} className="nav-btn">
            <FaArrowLeft />
          </button>
          
          <span className="page-indicator">
            {activePdf + 1}/{pdfs.length}
          </span>
          
          <button onClick={nextPdf} className="nav-btn">
            <FaArrowRight />
          </button>
        </div>
        
        <div className="pdf-viewer">
          <iframe 
            src={`/${pdfs[activePdf].file}#view=fitH`}
            title={pdfs[activePdf].title}
          />
        </div>
        
        <div className="pdf-navigation desktop-nav">
          <button onClick={prevPdf} className="nav-btn">
            <FaArrowLeft /> <span>Anterior</span>
          </button>
          
          <span className="page-indicator">
            Documento {activePdf + 1} de {pdfs.length}
          </span>
          
          <button onClick={nextPdf} className="nav-btn">
            <span>Siguiente</span> <FaArrowRight />
          </button>
        </div>
      </div>
      
      <div className="pdf-thumbnails">
        {pdfs.map((pdf, index) => (
          <div 
            key={index}
            className={`thumbnail ${index === activePdf ? 'active' : ''}`}
            onClick={() => setActivePdf(index)}
          >
            <FaFilePdf className="pdf-icon" />
            <span>{pdf.title}</span>
          </div>
        ))}
      </div>
    </div>
      </>
  );
}