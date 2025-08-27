import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Fredy Moreno',
      role: 'Presidente',
      image: '/presidente.png',
    },
    {
      name: 'John Chinchilla',
      role: 'Vicepresidente',
      image: '/vice.png',
    },
    {
      name: 'Lina Quiñones',
      role: 'Tesorera',
      image: '/tesorera.png',
    },

      {
      name: 'Adriana Mistres Florez',
      role: 'Secretaria.', 
      image: '/secre.png',
    },

       {
      name: 'Olga Lucia Bernal',
      role: 'Fiscal.', 
      image: '/fiscal.jpg',
    },
        {
      name: 'Josman Cortés',
      role: 'Vocal.', 
      image: '/vocal2.jpg',
    },
        {
      name: 'Vanessa Muñoz',
      role: 'Vocal.', 
      image: '/vocal3.jpg',
    },

         {
      name: 'Sonia Pilar Silva',
      role: 'Vocal.', 
      image: '/vocal4.jpg',
    },
         {
      name: 'Marinella Angulo',
      role: 'Vocal.', 
      image: '/vocal5.jpg',
    },
         {
      name: 'Yoana Ortiz Hernandez',
      role: 'Vocal.', 
      image: '/vocal6.jpg',
    },
  ];

  return (
    <PageLayout title="Nosotros">
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Users className="h-10 w-10 text-brand-blue" />
              <CardTitle className="text-3xl text-brand-blue">Nuestra Asociación</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed">
              Asopadres es una organización sin ánimo de lucro que trabaja en equipo con la Comunidad Farinista
              para aportar en la formación integral de los estudiantes y mantener comunicación activa entre las familias
              y la institución. Con el aporte voluntario de las familias Farinistas, realizamos diferentes actividades
              durante el año que fortalecen la comunidad educativa, reconociendo el valor de todos quienes hacemos parte de ella.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        className="mb-12 grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        <motion.div variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-brand-yellow" />
                <CardTitle className="text-2xl text-brand-blue">Nuestra Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Acompañar y fortalecer el proceso educativo y espiritual de los estudiantes,
                promoviendo valores cristianos, la formación integral y el sentido de comunidad
                a través del trabajo colaborativo entre padres, docentes y directivos.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } }}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-brand-yellow" />
                <CardTitle className="text-2xl text-brand-blue">Nuestra Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Ser una asociación comprometida con la formación de estudiantes íntegros,
                fundamentada en el amor, la fe y el servicio, contribuyendo al fortalecimiento de la comunidad educativa
                y apoyando iniciativas que reflejen los valores del Evangelio en la vida cotidiana.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Conoce a Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <CardContent className="pt-6">
                  <img
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-black"
                    alt={member.name}
                    src={member.image}
                  />
                  <h4 className="text-xl font-semibold text-brand-blue">{member.name}</h4>
                  <p className="text-brand-black font-medium">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </PageLayout>
  );
};

export default AboutPage;
