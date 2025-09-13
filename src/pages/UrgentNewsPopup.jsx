import { useState, useEffect } from "react";

export default function UrgentNewsPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto text-center relative animate-fadeIn">
        {/* Botón de cierre */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Título */}
        <h2 className="text-xl font-bold text-red-600 mb-4 leading-snug">
          🚨 Comunicado a la comunidad de Padres.
        </h2>

        {/* Contenido */}
        <div className="text-gray-700 text-sm space-y-4 text-justify">
          <p>
            Nos permitimos informarles que el día de hoy estaremos solicitando
            sus datos con el fin de actualizar y consolidar la base de datos de
            la Asociación.
          </p>

          <p>
            Actualmente nos encontramos en un proceso de transición, por lo cual
            en los próximos días les estaremos comunicando el procedimiento
            establecido para la realización del Día de Integración Familiar, a
            la espera de la confirmación por parte de la institución.
          </p>

          <p>
            De conformidad con lo establecido en la Ley 1581 de 2012 y el
            Decreto 1377 de 2013, los datos recolectados serán tratados de
            manera confidencial y utilizados exclusivamente para fines
            institucionales, administrativos y de comunicación con las familias,
            en los asuntos requeridos por Asopadres GAF.
          </p>

          <p className="text-right font-medium">Con aprecio,<br />Asopadres</p>
        </div>

        {/* Botón */}
        <div className="mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
