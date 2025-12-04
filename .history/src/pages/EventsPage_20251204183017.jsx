import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CalendarDays, Newspaper } from 'lucide-react';
import PdfViewerModal from '@/components/ui/PdfViewerModal';

const events = [
  {
    id: 1,
    title: 'Dia de las Madres ',
    date: '25 de Mayo de 2025',
    description: 'Este día especial está acompañado...',
    category: 'Pasado',
    imageKey: '/madredia.png'
  },
  {
    id: 3,
    title: 'Dia de Los Niños',
    date: '25 de Abril de 2025',
    description: 'El Día del Niño es una fecha...',
    category: 'Pasado',
    imageKey: '/dianino.png'
  },
  {
    id: 2,
    title: 'Bono Solidario',
    date: '23 Agosto 2025',
    description: 'Lo más emocionante de esta campaña...',
    category: 'Cancelado',
    imageKey: '/bono.jpg'
  },
  {
    id: 4,
    title: 'Dia del Profesor',
    date: '',
    description: 'En esta campaña las familias...',
    category: 'Pasado',
    imageKey: '/maestro.jpg'
  },
  {
    id: 5,
    title: 'COMUNICADO',
    date: '',
    description: 'Debido a que no se pudo realizar...',
    category: 'AVISO!',
    imageKey: 'https://cdn.pixabay.com/photo/2024/12/23/17/21/ai-generated-9287024_1280.png'
  },
  {
    id: 6,
    title: 'Informe Junta Directiva',
    date: '',
    description: `INFORME JUNTA DIRECTIVA ASOPADRES AÑO 2025`,
    category: 'Documento',
    imageKey:
      'https://cdn.pixabay.com/photo/2024/12/23/17/21/ai-generated-9287024_1280.png',
    pdfUrl: '/junta.pdf'
  }
];

const EventsPage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <PageLayout title="Eventos Proximos y Pasados">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">

              {/* CLICK PARA VER PDF SI EXISTE */}
              <div
                className="relative cursor-pointer"
                onClick={() => item.pdfUrl && setSelectedPdf(item.pdfUrl)}
              >
                {item.pdfUrl ? (
                  <img
                    src={item.imageKey}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <img
                    className="w-full h-48 object-cover"
                    alt={item.title}
                    src={item.imageKey}
                  />
                )}

                <div className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold text-white rounded-full 
                  ${item.category === 'Proximo' ? 'bg-brand-blue' : 'bg-brand-yellow text-gray-900'}`}>
                  {item.category}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">{item.title}</CardTitle>
                <CardDescription className="text-sm text-yellow-600 flex items-center">
                  {item.category === 'Evento'
                    ? <CalendarDays className="mr-2 h-4 w-4" />
                    : <Newspaper className="mr-2 h-4 w-4" />}
                  {item.date}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-700 text-sm">{item.description}</p>

                {/* BOTÓN VER PDF */}
                {item.pdfUrl && (
                  <button
                    onClick={() => setSelectedPdf(item.pdfUrl)}
                    className="mt-4 w-full bg-brand-blue text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Ver PDF
                  </button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* MODAL PDF */}
      <PdfViewerModal
        pdfUrl={selectedPdf}
        onClose={() => setSelectedPdf(null)}
      />
    </PageLayout>
  );
};

export default EventsPage;

