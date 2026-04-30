import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PdfViewerModal = ({ open, onClose, title, pdfUrl }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <iframe
          src={pdfUrl}
          className="w-full h-full border-none"
        />

        <div className="p-4 flex justify-end gap-4 border-t">
          <Button variant="secondary" onClick={onClose}>Cerrar</Button>
          <Button>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              Descargar PDF
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewerModal;
