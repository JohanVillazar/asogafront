import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Home, Users, CalendarDays, Newspaper,
  UserPlus, Image, Mail, Menu, X
} from 'lucide-react';

const navItems = [
  { name: 'Inicio', path: '/', icon: <Home className="h-5 w-5" /> },
  { name: 'Nosotros', path: '/nosotros', icon: <Users className="h-5 w-5" /> },
  { name: 'Eventos y Noticias', path: '/eventos', icon: <Newspaper className="h-5 w-5" /> },
  { name: 'Afíliate', path: '/afiliate', icon: <UserPlus className="h-5 w-5" /> },
  { name: 'Galería', path: '/galeria', icon: <Image className="h-5 w-5" /> },
  { name: 'Contacto', path: '/contacto', icon: <Mail className="h-5 w-5" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-brand-yellow hover:text-brand-blue";
  const activeLinkClasses = "bg-brand-yellow text-brand-blue";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 shadow-md ${
        scrolled ? 'bg-gray-100' : 'bg-gradient-to-r from-brand-white to-blue-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img alt="Logo APA" className="h-12 w-auto" src="logoasopadres.png" />
            <span className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-black'}`}>
              Asopadres
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `${linkClasses} ${scrolled ? 'text-black' : 'text-black'} ${isActive ? activeLinkClasses : 'hover:bg-opacity-20 hover:bg-white'}`
                }
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className={`hover:bg-opacity-20 hover:bg-white ${scrolled ? 'text-black' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-blue-600 pb-3"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkClasses} text-white block ${isActive ? activeLinkClasses : 'hover:bg-opacity-20 hover:bg-white'}`
                }
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
