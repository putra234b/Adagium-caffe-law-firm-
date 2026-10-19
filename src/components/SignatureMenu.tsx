import React from 'react';
import { MenuItem } from '../data/menuData';

interface SignatureMenuProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onAddToOrder: (item: MenuItem) => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({
  items,
  onSelectItem,
  onAddToOrder,
}) => {
  const signatureItems = items.filter((item) => item.isSignature).slice(0, 4);

  return (
    <section id="signature" className="py-20 bg-[#F0E8D8]/40 border-y border-[#F0E8D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-[#75513B] mb-2.5">
            <span className="w-6 h-[1px] bg-[#E5BE38]" />
            <span>Pilihan Unggulan</span>
            <span className="w-6 h-[1px] bg-[#E5BE38]" />
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#39251D] font-bold mb-4">
            Signature Selections
          </h2>
          <p className="text-sm sm:text-base text-[#777067] leading-relaxed">
            Kurasi hidangan dan racikan kopi yang mencerminkan harmoni cita rasa, ketelitian, dan kehangatan ruang kami.
          </p>
        </div>

        {/* 4 Cards Grid - Editorial Magazine Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {signatureItems.map((item) => {
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden border border-[#F0E8D8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Editorial Aspect Ratio */}
                <div
                  className="relative h-60 sm:h-52 w-full overflow-hidden bg-[#F0E8D8] cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.localImagePath}
                    alt={item.altText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to high-res aesthetic culinary photo if local image is not yet on disk
                      const target = e.target as HTMLImageElement;
                      if (target.src !== item.fallbackImageUrl) {
                        target.src = item.fallbackImageUrl;
                      }
                    }}
                    loading="lazy"
                  />

                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 bg-[#39251D]/90 backdrop-blur-sm text-[#E5BE38] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                    {item.id.toUpperCase()}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#39251D] text-[11px] font-medium px-2.5 py-0.5 rounded shadow-xs">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        onClick={() => onSelectItem(item)}
                        className="font-serif-heading text-lg font-bold text-[#39251D] hover:text-[#75513B] cursor-pointer transition-colors leading-snug"
                      >
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-serif-heading font-semibold text-sm text-[#39251D] bg-[#F8F6EF] px-2 py-0.5 rounded border border-[#F0E8D8]">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#777067] line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Actions: Detail & WhatsApp Order Button */}
                  <div className="pt-3 border-t border-[#F0E8D8] flex items-center justify-between gap-2 mt-auto">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs text-[#75513B] hover:text-[#39251D] font-medium flex items-center gap-1 transition-colors"
                    >
                      <i className="fa-regular fa-eye text-[11px]"></i>
                      <span>Detail</span>
                    </button>

                    <button
                      onClick={() => onAddToOrder(item)}
                      className="text-xs font-medium bg-[#F8F6EF] hover:bg-[#39251D] text-[#39251D] hover:text-white px-3 py-1.5 rounded-full border border-[#D9C9B4] transition-all flex items-center gap-1.5 active:scale-95"
                    >
                      <i className="fa-brands fa-whatsapp text-emerald-600 group-hover:text-emerald-400"></i>
                      <span>Pesan</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#75513B] hover:text-[#39251D] py-2 px-4 rounded-full hover:bg-white transition-colors"
          >
            <span>Lihat Seluruh 20 Menu Kami</span>
            <i className="fa-solid fa-arrow-down text-xs text-[#E5BE38]"></i>
          </a>
        </div>

      </div>
    </section>
  );
};
