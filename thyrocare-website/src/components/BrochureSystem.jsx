import { useState, useEffect } from "react";
import { X, ZoomIn, ZoomOut, Download, Share2, ChevronLeft, ChevronRight, FileText, CheckCircle2 } from "lucide-react";
import { packagesData } from "../data/packagesData";

// We filter packages that have brochures/PDFs
const brochurePackages = packagesData.filter(p => p.pdf && p.image);

export default function BrochureSystem({ isOpen, onClose, selectedPackage }) {
  const [currentPkg, setCurrentPkg] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [viewMode, setViewMode] = useState("image"); // 'image' or 'pdf'
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setCurrentPkg(selectedPackage);
    } else if (brochurePackages.length > 0 && !currentPkg) {
      setCurrentPkg(brochurePackages[0]);
    }
  }, [selectedPackage, brochurePackages, currentPkg]);

  if (!isOpen || !currentPkg) return null;

  const handleNext = () => {
    const idx = brochurePackages.findIndex(p => p.id === currentPkg.id);
    const nextIdx = (idx + 1) % brochurePackages.length;
    setCurrentPkg(brochurePackages[nextIdx]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    const idx = brochurePackages.findIndex(p => p.id === currentPkg.id);
    const prevIdx = (idx - 1 + brochurePackages.length) % brochurePackages.length;
    setCurrentPkg(brochurePackages[prevIdx]);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleShare = () => {
    const brochureUrl = window.location.origin + currentPkg.pdf;
    if (navigator.share) {
      navigator.share({
        title: `${currentPkg.name} Brochure`,
        text: `Check out the details for Thyrocare's ${currentPkg.name} package.`,
        url: brochureUrl,
      }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(brochureUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gray-900/95 backdrop-blur-md flex flex-col justify-between no-print animate-fade-in-up">
      {/* Top Toolbar */}
      <header className="bg-gray-800 border-b border-gray-700/50 px-4 py-3 sm:px-6 flex items-center justify-between text-white">
        <div className="flex items-center space-x-3 min-w-0">
          <FileText className="w-5 h-5 text-brand-gold shrink-0" />
          <div className="min-w-0">
            <h3 className="font-heading font-black text-sm sm:text-base tracking-tight truncate">
              {currentPkg.name} - Brochure Catalog
            </h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider hidden sm:block">
              Thyrocare Mulund West
            </p>
          </div>
        </div>

        {/* View Selection Tabs */}
        <div className="flex items-center space-x-2 bg-gray-900/60 p-1 rounded-xl border border-gray-700/50">
          <button
            onClick={() => setViewMode("image")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === "image" ? "bg-brand-emerald text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Clinical Flyer
          </button>
          <button
            onClick={() => setViewMode("pdf")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === "pdf" ? "bg-brand-emerald text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            PDF Document
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {viewMode === "image" && (
            <>
              <button
                onClick={handleZoomOut}
                className="p-2 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4.5 h-4.5" />
              </button>
            </>
          )}
          <a
            href={currentPkg.pdf}
            download
            className="p-2 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors flex items-center justify-center"
            title="Download Brochure"
          >
            <Download className="w-4.5 h-4.5" />
          </a>
          <button
            onClick={handleShare}
            className="p-2 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors relative"
            title="Share Link"
          >
            {isCopied ? (
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
            ) : (
              <Share2 className="w-4.5 h-4.5" />
            )}
            {isCopied && (
              <span className="absolute bottom-full right-0 mb-2 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded font-bold whitespace-nowrap">
                Copied Link!
              </span>
            )}
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-gray-700/50 hover:bg-gray-700 rounded-xl text-white transition-colors border border-gray-600/30"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>
      </header>

      {/* Main View Area */}
      <div className="flex-grow relative flex items-center justify-center p-4 overflow-auto">
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 w-11 h-11 bg-gray-800/80 hover:bg-gray-800 text-white border border-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Core Media Renderer */}
        <div className="w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center overflow-auto rounded-2xl">
          {viewMode === "image" ? (
            <div
              className="transition-transform duration-200 ease-out"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={currentPkg.image}
                alt={currentPkg.name}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-gray-800"
              />
            </div>
          ) : (
            <iframe
              src={`${currentPkg.pdf}#toolbar=0`}
              title={`${currentPkg.name} PDF Viewer`}
              className="w-full h-full min-h-[60vh] bg-white rounded-xl shadow-2xl border border-gray-800"
            />
          )}
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 w-11 h-11 bg-gray-800/80 hover:bg-gray-800 text-white border border-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Selector Slider */}
      <footer className="bg-gray-850 border-t border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center space-x-3 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-gray-700">
          {brochurePackages.map(p => (
            <button
              key={p.id}
              onClick={() => {
                setCurrentPkg(p);
                setZoomLevel(1);
              }}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                currentPkg.id === p.id
                  ? "bg-brand-emerald border-brand-emerald text-white shadow"
                  : "bg-gray-800 border-gray-700 text-gray-400 hover:text-white"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
