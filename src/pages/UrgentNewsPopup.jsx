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
          COMUNICADO A LOS PADRES DE FAMILIA
        </h2>

        {/* Contenido */}
        <div className="text-gray-700 text-sm space-y-4 text-justify">

          <p>Respetados padres de familia:</p>

<p>
  La Asociación de Padres de Familia del Colegio Giovanni Antonio
  Farina <strong>(ASOPADRES GAF)</strong> informa que el valor de la afiliación
  correspondiente al año 2026 ha sido establecido en treinta y cinco
  mil pesos <strong>($35.000)</strong> por familia.
</p>

<p>
  El recaudo de este valor se llevará a cabo los días 
  <strong> 22 y 27 de noviembre </strong>
  del presente año, directamente por los miembros de la Asociación, quienes
  estarán ubicados en las instalaciones del colegio durante la jornada escolar.
</p>

<p>
  Agradecemos su compromiso y participación activa en esta labor que busca 
  el bienestar común de nuestra comunidad educativa.
</p>



          <p className="text-right font-medium">
            Cordialmente,
            <br />
            Asopadres GAF
          </p>
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
