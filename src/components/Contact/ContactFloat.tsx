import { useState } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './ContactFloat.css';

export const ContactFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Comentario sobre la Biblioteca',
    message: ''
  });

  type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const sendEmail = (data: FormData) => {
    const { name, email, subject, message } = data;
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=202300206@upqroo.edu.mx&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleQuickSend = () => {
    sendEmail({
      name: 'Usuario Biblioteca',
      email: 'no-reply@biblioteca.upqroo.edu.mx',
      subject: 'Comentario sobre la Biblioteca',
      message: ''
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(formData);
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-float-container">
      {/* Botón flotante principal */}
      <div className="float-actions">
        <button 
          className="float-btn quick-send"
          onClick={handleQuickSend}
          aria-label="Enviar comentario rápido"
          title="Enviar comentario rápido a biblioteca"
        >
          <FaPaperPlane />
        </button>
        
        <button 
          className="float-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar formulario" : "Abrir formulario completo"}
        >
          <FaComment />
        </button>
      </div>

      {/* Formulario expandible */}
      {isOpen && (
        <div className="contact-form">
          <button 
            className="close-btn" 
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar formulario"
          >
            <FaTimes />
          </button>
          
          <h3>Enviar comentario</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tu nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo"
              />
            </div>
            
            <div className="form-group">
              <label>Tu email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label>Asunto:</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Mensaje:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
              />
            </div>
            
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Abrir en Gmail
            </button>
          </form>
        </div>
      )}
    </div>
  );
};