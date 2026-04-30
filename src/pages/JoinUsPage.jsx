
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { UserPlus, ListChecks, Send } from 'lucide-react';
import BeneficiosAPA from '../components/BeneficiosAPA';
import axios from 'axios';
 import { useNavigate } from 'react-router-dom'; // descomenta si usas react-router

const JoinUsPage = () => {
  const { toast } = useToast();
   const navigate = useNavigate(); // descomenta si usas react-router

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://asogafback.onrender.com/auth/register', formData);
      const { token, user } = res.data;

      localStorage.setItem('token', token);

      toast({
        title: '✅ Registro exitoso',
        description: `Bienvenido/a ${user.nombre}.`,
      });

      // Redirigir a afiliación (si ya tienes esa ruta)
       navigate('/afiliacion');
    } catch (error) {
      toast({
        title: '❌ Error al registrar',
        description: error.response?.data?.message || 'Ocurrió un error inesperado.',
        variant: 'destructive',
      });
    }
  };

  const steps = [
    "Completa el formulario con tu información personal.",
    "Revisa que todos los datos estén correctos.",
    "Haz clic en 'Registrarse'.",
    "Serás redirigido al área de afiliación.",
    "allí completa los datos de tus hijos.",
    "Realiza y confirma el pago"
  ];

  return (
    <PageLayout title="Afíliate  Asopadres">
      <BeneficiosAPA />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Lado izquierdo: pasos */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <ListChecks className="h-8 w-8 text-brand-blue" />
                <CardTitle className="text-2xl text-brand-blue">Pasos para Afiliarte</CardTitle>
              </div>
              <CardDescription className="text-gray-600">Sigue estos sencillos pasos para comenzar:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="flex-shrink-0 h-6 w-6 bg-brand-yellow text-gray-800 rounded-full flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-8 p-4 bg-yellow-100 border-l-4 border-brand-yellow text-yellow-800 rounded-r-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h4 className="font-bold">¡Importante!</h4>
                <p className="text-sm">
                 Valor de la Afiliacion. $35.000.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Lado derecho: formulario */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <UserPlus className="h-8 w-8 text-brand-blue" />
                <CardTitle className="text-2xl text-brand-blue">Formulario de Registro</CardTitle>
              </div>
              <CardDescription>Completa tus datos personales para iniciar Afiliacion.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-gray-700">Nombre</Label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej: María"
                  />
                </div>
                <div>
                  <Label htmlFor="apellido" className="text-gray-700">Apellido</Label>
                  <Input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Rodríguez"
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
                    placeholder="Ej: maria@email.com"
                  />
                </div>
                   <div>
                  <Label htmlFor="email" className="text-gray-700">Telefono</Label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ej: 302123456"
                  />
                </div>


                <div>
                  <Label htmlFor="password" className="text-gray-700">Contraseña</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                  />
                </div>
                <Button type="submit" className="w-full btn-primary py-3 text-base flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Regsitrarse
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default JoinUsPage;
