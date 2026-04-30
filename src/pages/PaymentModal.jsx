import React from 'react';

const PaymentModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null; // No renderiza el modal si isOpen es false o si user es undefined

  // Formato del mensaje para WhatsApp
  const message = `Hola, se ha realizado una nueva afiliacion a Asopadres, Datos: ${user.nombre} ${user.apellido} ${user.email} Telefono: ${user.phone}, verificar la transaccion y procesar la afiliacion.`;

  // Número de WhatsApp al que se enviará el mensaje (reemplázalo con el número de tu elección)
  const whatsappNumber = '573118476543'; // Número en formato internacional (sin el '+')
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Cierra el modal al hacer clic fuera de él
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Impide que el modal se cierre al hacer clic dentro
      >
        <h2 className="text-xl font-semibold mb-4">
          Se han guardado tus datos, procede con el pago
        </h2>
        <p className="mb-6">
          Realiza el pago de tu afiliación a los siguientes números de Nequi o Daviplata:
          <span className="font-bold text-lg">3118476543</span>, una vez realizado el pago:
        </p>
        <div className="flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Da clic aquí para enviar el comprobante
          </a>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;