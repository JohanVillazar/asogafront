import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';

const AfiliacionPage = () => {
  const [user, setUser] = useState({ nombre: '', apellido: '', email: '', phone: '' });
  const [numHijos, setNumHijos] = useState(1);
  const [hijos, setHijos] = useState([{ nombre: '', grado: '' }]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser({
        nombre: decoded.nombre || '',
        apellido: decoded.apellido || '',
        email: decoded.email || '',
        phone: decoded.phone || '',
      });
    }
  }, []);

  const handleNumHijosChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumHijos(count);
    const nuevos = Array.from({ length: count }, () => ({ nombre: '', grado: '' }));
    setHijos(nuevos);
  };

  const handleHijoChange = (index, field, value) => {
    const copia = [...hijos];
    copia[index][field] = value;
    setHijos(copia);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://asogafback.onrender.com/afiliacion',
        { hijos },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast({
        title: '✅ Afiliación enviada',
        description: 'Será enviado al formulario de pago.',
      });

      // Abre el modal de pago
      setIsModalOpen(true); // Establece isModalOpen a true para abrir el modal

    } catch (error) {
      toast({
        title: '❌ Error',
        description: error.response?.data?.message || 'Hubo un problema',
        variant: 'destructive',
      });
    }
  };

  return (
    <PageLayout title="Formulario de Afiliación">
      <Card className="shadow-xl max-w-2xl mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">Información del Usuario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Datos del usuario (solo lectura) */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Nombre</Label>
              <Input type="text" value={user.nombre} readOnly className="bg-gray-100" />
            </div>
            <div>
              <Label>Apellido</Label>
              <Input type="text" value={user.apellido} readOnly className="bg-gray-100" />
            </div>
            <div className="md:col-span-2">
              <Label>Correo electrónico</Label>
              <Input type="email" value={user.email} readOnly className="bg-gray-100" />
            </div>
            <div className="md:col-span-2">
              <Label>Telefono</Label>
              <Input type="text" value={user.phone} readOnly className="bg-gray-100" />
            </div>
          </div>

          {/* Formulario de hijos */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <Label>¿Cuántos hijos tiene en el colegio?</Label>
              <select
                value={numHijos}
                onChange={handleNumHijosChange}
                className="mt-1 w-full border p-2 rounded"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            {hijos.map((hijo, index) => (
              <div key={index} className="border p-4 rounded bg-gray-50">
                <h4 className="font-semibold text-gray-700 mb-2">Estudiante #{index + 1}</h4>
                <div className="mb-3">
                  <Label>Nombre completo</Label>
                  <Input
                    type="text"
                    value={hijo.nombre}
                    onChange={(e) => handleHijoChange(index, 'nombre', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>Grado</Label>
                  <Input
                    type="text"
                    value={hijo.grado}
                    onChange={(e) => handleHijoChange(index, 'grado', e.target.value)}
                    required
                  />
                </div>
              </div>
            ))}

            <Button type="submit" className="w-full bg-blue-600 text-white py-3">
              Enviar Afiliacion.
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Modal de pago */}
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} />
    </PageLayout>
  );
};

export default AfiliacionPage;