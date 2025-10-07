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
          Comunicado Asopadres GAF
        </h2>

        {/* Contenido */}
        <div className="text-gray-700 text-sm space-y-4 text-justify">
          <p>
          Apreciadas familias:
          </p>

          <p>
           Nos permitimos informarles que el pasado 13 de septiembre no fue posible adelantar la solicitud de sus datos personales para la actualización y consolidación de la base de datos de la Asociación, debido a que no contamos con la autorización de la institución para realizar dicho proceso.
          </p>

          <p>
            De igual manera, lamentamos comunicarles que este año no se llevará a cabo la tradicional Jornada de Integración Familiar, organizada como es habitual por Asopadres GAF. La institución, mediante comunicación escrita, manifestó que no brindará apoyo logístico, institucional ni de personal para la realización del evento, argumentando que el cronograma académico ya se encuentra definido hasta el mes de noviembre. Asimismo, indicó que dicha actividad implica costos locativos y administrativos que no está en posibilidad de asumir en este momento.
            Lamentamos profundamente no poder realizar este espacio de encuentro que año tras año fortalece los lazos entre nuestras familias. Agradecemos su comprensión y reiteramos nuestro compromiso con el bienestar de toda la comunidad educativa.
          </p>

          <p className="text-right font-medium">Cordialmente,<br />Asopadres GAF</p>
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
