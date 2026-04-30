

import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el mensaje que se enviará a WhatsApp
    const mensaje = `Formulario de contacto:\n\nNombre: ${formData.name}\nCorreo: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`;
    
    // Enlace de WhatsApp con los datos prellenados
    const whatsappUrl = `https://wa.me/573118476543?text=${encodeURIComponent(mensaje)}`;

    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank');

    // Mostrar mensaje de éxito
    toast({
      title: 'Mensaje Enviado',
      description: 'Gracias por contactarnos. Te responderemos a la brevedad.',
      variant: 'default',
    });

    // Limpiar el formulario
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageLayout title="Contáctanos">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-yellow-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-blue">Información de Contacto</CardTitle>
              <CardDescription className="text-gray-600">
                Estamos aquí para ayudarte. No dudes en comunicarte con nosotros.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MapPin className="h-8 w-8 text-brand-blue flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Dirección</h4>
                  <p className="text-gray-600">Carrera 88 C # 54 F-29 Sur, Bosa Brasil Bogotá, Cundinamarca</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Mail className="h-8 w-8 text-brand-blue flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Correo Electrónico</h4>
                  <a href="mailto:info@apafarina.org" className="text-brand-blue hover:text-yellow-600 transition-colors">
                    asopadresgaf@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Phone className="h-8 w-8 text-brand-blue flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Teléfono</h4>
                  <p className="text-gray-600">3118476543</p>
                </div>
              </motion.div>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img className="w-55 h-48 object-cover rounded-lg shadow-md" alt="Fachada del colegio" src="/logoasopadres.png" />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-blue">Envíanos un Mensaje</CardTitle>
              <CardDescription>Llena el formulario y te contactaremos pronto.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Nombre Completo</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 focus:ring-brand-yellow focus:border-brand-yellow"
                    placeholder="Tu Nombre Completo"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Correo Electrónico</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 focus:ring-brand-yellow focus:border-brand-yellow"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700">Asunto</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 focus:ring-brand-yellow focus:border-brand-yellow"
                    placeholder="Motivo de tu contacto"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 focus:ring-brand-yellow focus:border-brand-yellow"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
                <Button type="submit" className="w-full btn-primary py-3 text-base flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
  