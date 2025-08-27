
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import EventsPage from '@/pages/EventsPage';
import JoinUsPage from '@/pages/JoinUsPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';
import AfiliacionPage from '@/pages/AfiliacionPage';
import UrgentNewsPopup from "./pages/UrgentNewsPopup";

function App() {
  return (
    
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
         <UrgentNewsPopup />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/eventos" element={<EventsPage />} />
              <Route path="/afiliate" element={<JoinUsPage />} />
              <Route path="/galeria" element={<GalleryPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/afiliacion" element={<AfiliacionPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
        <a
          href="https://wa.me/573118476543?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20Afiliacion%20a%20Asopadres"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-105"
          aria-label="WhatsApp"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12c0 2.079.531 4.063 1.537 5.834L0 24l6.395-1.671A11.942 11.942 0 0 0 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 21.938a9.929 9.929 0 0 1-5.078-1.388l-.363-.213-3.79.99.999-3.683-.235-.377A9.942 9.942 0 1 1 12 21.938zm5.4-7.401c-.297-.149-1.755-.867-2.026-.967-.272-.099-.47-.148-.669.15-.198.297-.767.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.256-.463-2.392-1.475-.884-.79-1.48-1.765-1.652-2.062-.173-.297-.018-.457.13-.606.134-.133.297-.347.446-.52.148-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.075-.148-.669-1.611-.916-2.208-.242-.583-.487-.504-.669-.514l-.57-.01a1.1 1.1 0 0 0-.795.372C5.1 7.938 4.5 9.245 4.5 10.5c0 1.255.906 2.47 1.033 2.637.124.165 1.783 2.715 4.32 3.803.603.26 1.074.415 1.44.531.604.192 1.15.165 1.584.1.483-.073 1.48-.604 1.692-1.188.212-.584.212-1.084.149-1.187-.062-.102-.247-.165-.519-.297z" />
          </svg>
        </a>


      </div>
    </Router>
  );
}

export default App;
  