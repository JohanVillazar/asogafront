import { useState, useEffect } from "react";

export default function UrgentNewsPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar el popup al cargar
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center relative animate-fadeIn">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-red-600 mb-4">
          🚨 Comunicado a la comunidad de Padres.
        </h2>
        <p className="text-gray-700 mb-6">
          La Rifa Solidaria programada para este año ha sido cancelada.
        </p>
           <p className="text-gray-700 mb-6">
          El motivo: no fue posible llegar con el bono solidario a todas las familias, y buscamos siempre garantizar la participación en igualdad de condiciones.
        </p>

              <p className="text-gray-700 mb-6">
                  Con aprecio
                  Asopadres.
              </p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
