
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 section-padding">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-brand-yellow mb-4">Asopadres</h3>
            <p className="text-sm">Promoviendo la colaboración entre padres, estudiantes y el colegio para un futuro brillante.</p>
           
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-brand-yellow transition-colors">Nosotros</Link></li>
              <li><Link to="/eventos" className="hover:text-brand-yellow transition-colors">Eventos y Noticias</Link></li>
              <li><Link to="/afiliate" className="hover:text-brand-yellow transition-colors">Afíliate</Link></li>
              <li><Link to="/galeria" className="hover:text-brand-yellow transition-colors">Galería</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-yellow transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <p className="text-sm">Colegio Giovany Antonio Farina</p>
            <p className="text-sm">Carrera 88 C # 54 F-29 Sur, Bosa Brasil Bogotá, Cundinamarca</p>
            <p className="text-sm">Email: <a href="asopadresgaf@gmail.com " className="hover:text-brand-yellow">asopadresgaf@gmail.com </a></p>
            <p className="text-sm">Teléfono:3118476543</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Asopadres Colegio Giovanni Antonio Farina. Todos los derechos reservados.</p>
          <p>
            Diseñado con pasion por <span className="text-red-500">&hearts;</span>{' '}
            <a
              href="https://simulagency.com/" // 🔁 Reemplaza con el enlace real
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              Simul
            </a>
          </p>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
  