import React from "react";

const PdfViewerModal = ({ pdfUrl, onClose }) => {
  if (!pdfUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] relative overflow-hidden shadow-xl">

        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute rigth-3 right-3 text-white bg-red-600 px-3 py-1 rounded-md z-50"
        >
          ✕ Cerrar
        </button>

        {/* PDF */}
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default PdfViewerModal;


