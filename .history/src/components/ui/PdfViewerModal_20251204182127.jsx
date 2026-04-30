import React from "react";

const PdfViewerModal = ({ open, onClose, title, pdfUrl }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl h-[90vh] overflow-hidden flex flex-col">
        
        {/* HEADER */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="text-red-500 font-bold text-xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* PDF VIEW */}
        <iframe
          src={pdfUrl}
          className="w-full flex-grow border-none"
        ></iframe>

        {/* FOOTER */}
        <div className="p-4 border-t flex justify-end">
          <a
            href={pdfUrl}
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Descargar PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;

