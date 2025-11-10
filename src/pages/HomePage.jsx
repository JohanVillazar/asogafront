
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, CalendarDays, Newspaper, ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: 'Comunidad Unida',
      description: 'Fortalecemos los lazos entre padres, alumnos y el colegio.',
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-brand-blue" />,
      title: 'Eventos Emocionantes',
      description: 'Organizamos actividades para enriquecer la vida escolar.',
      link: '/eventos',
    },
    {
      icon: <Newspaper className="h-10 w-10 text-brand-blue" />,
      title: 'Mantente Informado',
      description: 'Noticias y actualizaciones importantes de la asociación.',
      link: '/eventos',
    },
  ];

  const upcomingEvents = [
        {
      id: 1,
      title:"Detalle Graduados",
      description:"Jardin,Transicion,Quinto,Noveno",
      image: "detalles1.jpeg", // Ajusta la ruta a tu carpeta public
    },
            {
      id: 2,
      title:"Buffet y Recordatorio",
      description:"A los Grados 11",
      image: "/buffet.jpeg", // Ajusta la ruta a tu carpeta public
     
    },
               {
      id: 3,
      title:"Entrega de Anchetas",
      description:"A los Docentes y Personal Administrativo",
      image: "/detalles.jpeg", // Ajusta la ruta a tu carpeta public
     
    },
  ];

  return (
    <PageLayout>
      {/* Sección Hero */}
      <motion.section
        className="text-center py-16 bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="page-container">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="gradient-text">Bienvenido a AsoPadres</span>
            <br />
            Colegio Giovanni Antonio Farina
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Asopadres es una organización sin ánimo de lucro, que trabaja en
            equipo con la Comunidad Farinista para aportar en la formación
            integral de los estudiantes y mantener una comunicación activa entre
            las familias y la institución. Con el aporte voluntario de las
            familias Farinistas, realizamos diferentes actividades durante el
            año que fortalecen la comunidad educativa.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
              <Link to="/afiliate">¡Únete Ahora!</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-lg px-8 py-6"
            >
              <Link to="/nosotros">Conócenos Más</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Pilares */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Nuestros Pilares
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index + 0.8 }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-shadow duration-300 bg-white transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto bg-gradient-to-br from-yellow-300 to-brand-yellow p-4 rounded-full inline-block mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl text-brand-blue">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  {feature.link && (
                    <div className="p-6 pt-0">
                      <Button
                        asChild
                        variant="link"
                        className="text-brand-blue hover:text-yellow-500"
                      >
                      </Button>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Eventos en Grid */}
  <section className="py-16 bg-blue-50 rounded-lg shadow-xl">
  <div className="page-container">
    <h2 className="text-3xl font-bold text-center mb-10 gradient-text">
      Próximos Eventos
    </h2>
    {/* Si solo hay un evento, lo centramos en la pantalla */}
    <div className={`grid ${upcomingEvents.length === 1 ? 'place-items-center' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'} gap-8`}>
      {upcomingEvents.map((evento) => (
        <Card
          key={evento.id}
          className="shadow-md overflow-hidden flex flex-col max-w-lg"
        >
          <img
            src={evento.image}
            alt={evento.title}
            className="w-full h-full object-contain"
          />
          <CardHeader>
            <CardTitle className="text-brand-blue">
              {evento.title}
            </CardTitle>
            <CardDescription className="text-yellow-600">
              {evento.date}
            </CardDescription>
            <CardDescription className="text-black-900">
              {evento.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
    <div className="text-center mt-10 align items-center">
      <Button asChild className="btn-primary px-6 py-3 text-lg">
        <Link to="/eventos">Ver Todos los Eventos</Link>
      </Button>
    </div>
  </div>
</section>
    
    </PageLayout>
  );
};

export default HomePage;
