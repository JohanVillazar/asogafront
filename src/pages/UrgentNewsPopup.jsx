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
          Apreciadas familias:
        </h2>

        {/* Contenido */}
        <div className="text-gray-700 text-sm space-y-4 text-justify">
          <p>Debido a que no se pudo realizar el Bono solidario.</p>A los
          Asociados que colaboraron se les hará devolución de su aporte o
          dinero, dicha devolución se hará por los metodos: Nequi,Daviplata y/o
          cuentas.
          <p></p>
          Pedimos disculpas por las molestias causadas, y lamentamos no poder
          realizar dicho evento.
          <p>
            Cualquier duda o ampliación de esta información se puede comunicar a
            los siguientes medios de contacto :
            <strong>asopadresgaf@gmail.com</strong> o al celular{" "}
            <strong>3208013556</strong>.
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
