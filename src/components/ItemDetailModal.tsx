import React, { useState } from 'react';
import { MenuItem } from '../data/menuData';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToOrder: (item: MenuItem, quantity: number) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onAddToOrder,
}) => {
  const [qty, setQty] = useState(1);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#D9C9B4] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#F0E8D8] overflow-hidden">
          <img
            src={item.localImagePath}
            alt={item.altText}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== item.fallbackImageUrl) {
                target.src = item.fallbackImageUrl;
              }
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>

          <div className="absolute bottom-3 left-3 bg-[#39251D]/90 backdrop-blur-sm text-[#E5BE38] text-xs font-mono px-2.5 py-1 rounded">
            {item.id.toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#75513B] bg-[#F8F6EF] px-2.5 py-1 rounded">
              {item.categoryLabel}
            </span>
            <span className="font-serif-heading text-xl font-bold text-[#39251D]">
              {item.price}
            </span>
          </div>

          <h3 className="font-serif-heading text-2xl font-bold text-[#39251D] mb-3">
            {item.name}
          </h3>

          <p className="text-sm text-[#777067] leading-relaxed mb-6">
            {item.description}
          </p>

          {item.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#F8F6EF] text-[#777067] px-2.5 py-1 rounded border border-[#F0E8D8]"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Quantity & Add Action */}
          <div className="pt-4 border-t border-[#F0E8D8] flex items-center gap-4">
            <div className="flex items-center border border-[#D9C9B4] rounded-full p-1 bg-[#F8F6EF]">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-8 h-8 rounded-full bg-white text-[#39251D] flex items-center justify-center hover:bg-[#F0E8D8] transition-colors"
              >
                <i className="fa-solid fa-minus text-xs"></i>
              </button>
              <span className="w-8 text-center text-sm font-semibold text-[#39251D]">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-8 h-8 rounded-full bg-white text-[#39251D] flex items-center justify-center hover:bg-[#F0E8D8] transition-colors"
              >
                <i className="fa-solid fa-plus text-xs"></i>
              </button>
            </div>

            <button
              onClick={() => {
                onAddToOrder(item, qty);
                onClose();
              }}
              className="flex-1 py-3 bg-[#39251D] hover:bg-[#75513B] text-white font-medium text-xs sm:text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400 text-base"></i>
              <span>Tambahkan ke Pesanan ({qty})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
