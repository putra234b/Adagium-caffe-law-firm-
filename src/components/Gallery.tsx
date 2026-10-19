import React, { useState, useEffect, useCallback } from 'react';
import { MenuItem } from '../data/menuData';

interface GalleryProps {
  items: MenuItem[];
  onAddToOrder: (item: MenuItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ items, onAddToOrder }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const activeItem = activeLightboxIndex !== null ? items[activeLightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % items.length);
    }
  }, [activeLightboxIndex, items.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + items.length) % items.length);
    }
  }, [activeLightboxIndex, items.length]);

  const handleClose = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Keyboard Navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleClose, handleNext, handlePrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeLightboxIndex]);

  return (
    <section id="gallery" className="py-24 bg-[#F8F6EF] border-t border-[#F0E8D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-[#75513B] mb-2.5">
            <span className="w-6 h-[1px] bg-[#E5BE38]"></span>
            <span>Galeri Visual</span>
            <span className="w-6 h-[1px] bg-[#E5BE38]"></span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#39251D] font-bold mb-4">
            A Visual Journey of Flavors
          </h2>
          <p className="text-sm sm:text-base text-[#777067]">
            Klik pada setiap foto menu untuk membuka pratinjau resolusi tinggi dalam mode Lightbox.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden bg-[#F0E8D8] border border-[#F0E8D8] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
              title={`Klik untuk melihat ${item.name}`}
            >
              <img
                src={item.localImagePath}
                alt={item.altText}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== item.fallbackImageUrl) {
                    target.src = item.fallbackImageUrl;
                  }
                }}
                loading="lazy"
              />

              {/* Hover Overlay with Item Name and View Icon */}
              <div className="absolute inset-0 bg-[#39251D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white backdrop-blur-[2px]">
                <div className="w-8 h-8 rounded-full bg-[#E5BE38] text-[#39251D] flex items-center justify-center text-xs mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
                <p className="font-serif-heading text-xs font-semibold line-clamp-1">
                  {item.name}
                </p>
                <span className="text-[10px] text-[#E5BE38] font-mono mt-0.5">
                  {item.id} • {item.price}
                </span>
              </div>

              {/* Corner Asset Number Tag */}
              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                #{String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-[#F8F6EF] rounded-2xl overflow-hidden shadow-2xl border border-[#D9C9B4] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview Side */}
            <div className="md:w-3/5 bg-black/95 relative flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
              <img
                src={activeItem.localImagePath}
                alt={activeItem.altText}
                className="max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== activeItem.fallbackImageUrl) {
                    target.src = activeItem.fallbackImageUrl;
                  }
                }}
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-xs focus:outline-none"
                title="Foto Sebelumnya (Panah Kiri)"
                aria-label="Foto Sebelumnya"
              >
                <i className="fa-solid fa-chevron-left text-sm"></i>
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-xs focus:outline-none"
                title="Foto Berikutnya (Panah Kanan)"
                aria-label="Foto Berikutnya"
              >
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </button>
            </div>

            {/* Details Side */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white text-left">
              <div>
                {/* Header with counter and close button */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E8D8] mb-4">
                  <span className="text-xs font-mono font-medium text-[#777067]">
                    Foto {activeLightboxIndex + 1} dari {items.length} ({activeItem.id})
                  </span>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-[#F8F6EF] text-[#302820] hover:bg-[#F0E8D8] flex items-center justify-center transition-colors"
                    title="Tutup (ESC)"
                    aria-label="Tutup Lightbox"
                  >
                    <i className="fa-solid fa-xmark text-sm"></i>
                  </button>
                </div>

                <div className="inline-block px-2.5 py-1 rounded bg-[#F8F6EF] text-[#75513B] text-[11px] font-semibold mb-2">
                  {activeItem.categoryLabel}
                </div>

                <h3 className="font-serif-heading text-2xl font-bold text-[#39251D] mb-2 leading-snug">
                  {activeItem.name}
                </h3>

                <p className="font-serif-heading font-semibold text-lg text-[#E5BE38] mb-4">
                  {activeItem.price}
                </p>

                <p className="text-sm text-[#777067] leading-relaxed mb-4">
                  {activeItem.description}
                </p>

                {activeItem.tags && activeItem.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {activeItem.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-[#F8F6EF] text-[#777067] px-2 py-0.5 rounded border border-[#F0E8D8]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Action Button */}
              <div className="pt-4 border-t border-[#F0E8D8]">
                <button
                  onClick={() => {
                    onAddToOrder(activeItem);
                  }}
                  className="w-full py-3 bg-[#39251D] hover:bg-[#75513B] text-white font-medium rounded-full transition-all text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-400 text-base"></i>
                  <span>Tambahkan ke Pesanan WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#777067] text-center mt-2">
                  Pesan langsung terhubung dengan staf ADAGIUM via WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
