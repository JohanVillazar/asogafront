import { useState, useEffect } from "react";

export default function UrgentNewsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">

        {/* Header */}
        <div className="bg-red-900 px-4 pt-4 pb-3 flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] text-red-200 font-medium tracking-wide mb-0.5">
              ASOCIACIÓN DE PADRES DE FAMILIA
            </p>
            <h2 className="text-[15px] font-medium text-white leading-snug">
              Convocatoria Reunión Ordinaria
            </h2>
            <p className="text-[11px] text-red-200 mt-1">
              Bogotá D.C., 22 de abril de 2026
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white/20 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 hover:bg-white/30"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-4 pt-3">
          <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
            Estimados delegados, reciban un cordial saludo. En mi condición de
            Representación Legal de la Asociación de Padres de Familia GAF, los
            convoco a la reunión ordinaria presencial:
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-gray-50 rounded-xl p-2.5">
              <p className="text-[10px] text-gray-400 font-medium mb-0.5">FECHA</p>
              <p className="text-[12px] text-gray-800 font-medium">
                Viernes 8 de mayo, 2026
              </p>
              <p className="text-[11px] text-gray-500">8:00 a.m.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-2.5">
              <p className="text-[10px] text-gray-400 font-medium mb-0.5">LUGAR</p>
              <p className="text-[12px] text-gray-800 font-medium">
                Colegio Gio. A. Farina
              </p>
              <p className="text-[11px] text-gray-500">
                Cra 88, Cl 54f Bis Sur #29S, Bosa
              </p>
            </div>
          </div>

          {/* Orden del día (toggle) */}
          {showAgenda && (
            <div className="border-t border-gray-100 pt-3 mb-2">
              <p className="text-[11px] font-medium text-gray-700 mb-1.5">
                Orden del día:
              </p>
              <ol className="text-[11px] text-gray-500 pl-4 space-y-1 leading-relaxed list-decimal">
                <li>Verificación del quórum</li>
                <li>Lectura y aprobación del orden del día</li>
                <li>Designación del presidente y secretario</li>
                <li>
                  Lectura del Art. 60 del manual de convivencia y funciones de
                  la Junta Directiva
                </li>
                <li>
                  Postulación y elección de miembros de la Junta Directiva
                </li>
                <li>Postulación y elección del Fiscal</li>
                <li>
                  Informe de gestión con corte al 31 de diciembre de 2025
                </li>
                <li>Aprobación de estados financieros 2025 vs 2024</li>
                <li>Certificación de estados financieros vigencia 2025</li>
                <li>
                  Votación del beneficio neto año gravable 2026 y su destinación
                </li>
                <li>Aprobación del presupuesto para el año 2026</li>
                <li>Proposiciones y varios</li>
                <li>Designación comisión aprobatoria del Acta</li>
                <li>Cierre</li>
              </ol>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 pb-4 pt-2 flex items-center justify-between gap-2">
          <div className="text-[11px] text-gray-500 leading-snug">
            <span className="font-medium text-gray-700">Fredy Moreno Melo</span>
            <br />
            Presidente ASOPADRES GAF 2025
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            <button
              onClick={() => setShowAgenda(!showAgenda)}
              className="text-[11px] px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition whitespace-nowrap"
            >
              {showAgenda ? "Ocultar agenda" : "Ver orden del día"}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[11px] px-2.5 py-1.5 rounded-lg bg-red-900 text-white hover:bg-red-800 transition whitespace-nowrap"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}