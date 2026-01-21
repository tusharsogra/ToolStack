import { useState } from "react";
import jsPDF from "jspdf";
import { PDFDocument } from "pdf-lib";

export default function PdfToolkit() {
  const [images, setImages] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [splitFile, setSplitFile] = useState(null);

  /* ================= IMAGE TO PDF ================= */
  const convertImageToPDF = async () => {
    if (!images.length) return;

    const pdf = new jsPDF();

    for (let i = 0; i < images.length; i++) {
      const imgData = await readFile(images[i]);
      if (i !== 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", 10, 10, 190, 270);
    }

    pdf.save("image-to-pdf.pdf");
  };

  /* ================= MERGE PDF ================= */
  const mergePDFs = async () => {
    if (pdfFiles.length < 2) return;

    const mergedPdf = await PDFDocument.create();

    for (const file of pdfFiles) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((p) => mergedPdf.addPage(p));
    }

    downloadBlob(await mergedPdf.save(), "merged.pdf");
  };

  /* ================= SPLIT PDF ================= */
  const splitPDF = async () => {
    if (!splitFile) return;

    const bytes = await splitFile.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);

    for (let i = 0; i < pdf.getPageCount(); i++) {
      const newPdf = await PDFDocument.create();
      const [page] = await newPdf.copyPages(pdf, [i]);
      newPdf.addPage(page);

      downloadBlob(await newPdf.save(), `page-${i + 1}.pdf`);
    }
  };

  return (
    <div className="min-h-screen pt-25 bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        PDF Toolkit
      </h1>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* IMAGE TO PDF */}
        <ToolCard title="Image to PDF" desc="Convert multiple images into a single PDF">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setImages([...e.target.files])}
          />
          <button onClick={convertImageToPDF} className="btn bg-white text-black rounded-2xl cursor-pointer h-10 p-2 hover:bg-gray-300 ">
            Convert & Download
          </button>
        </ToolCard>

        {/* MERGE PDF */}
        <ToolCard title="Merge PDFs" desc="Combine multiple PDF files into one">
          <input
            type="file"
            multiple
            accept="application/pdf"
            onChange={(e) => setPdfFiles([...e.target.files])} 
          />
          <button onClick={mergePDFs} className="btn bg-white text-black rounded-2xl cursor-pointer h-10 p-2 hover:bg-gray-300 ">
            Merge & Download
          </button>
        </ToolCard>

        {/* SPLIT PDF */}
        <ToolCard title="Split PDF" desc="Split PDF into individual pages">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setSplitFile(e.target.files[0])}
          />
          <button onClick={splitPDF} className="btn bg-white text-black rounded-2xl cursor-pointer h-10 p-2 hover:bg-gray-300 ">
            Split & Download
          </button>
        </ToolCard>

      </div>
    </div>
  );
}

/* ================= SMALL UI COMPONENT ================= */
function ToolCard({ title, desc, children }) {
  return (
    <div className="border border-gray-700 rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">{desc}</p>
      {children}
    </div>
  );
}

/* ================= HELPERS ================= */
const readFile = (file) =>
  new Promise((res) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.readAsDataURL(file);
  });

const downloadBlob = (bytes, filename) => {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};
