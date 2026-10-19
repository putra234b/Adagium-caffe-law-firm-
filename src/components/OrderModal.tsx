import React from 'react';
import { OrderItemEntry } from './ContactSection';
import { BRAND_CONFIG } from '../data/menuData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItemEntry[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  if (!isOpen) return null;

  const totalPrice = orderItems.reduce(
    (sum, entry) => sum + entry.item.numericPrice * entry.quantity,
    0
  );

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const handleCheckoutWhatsApp = () => {
    let msg = `*PESANAN ADAGIUM COFFEE & LAW FIRM*\n\n`;
    msg += `Daftar Menu:\n`;
    orderItems.forEach((entry, idx) => {
      msg += `${idx + 1}. ${entry.item.name} (${entry.item.id}) x ${entry.quantity} = ${formatRupiah(entry.item.numericPrice * entry.quantity)}\n`;
    });
    msg += `\n*TOTAL:* ${formatRupiah(totalPrice)}\n\n`;
    msg += `Mohon konfirmasi pesanan saya. Terima kasih!`;
    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 text-left"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#F8F6EF] max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl border border-[#D9C9B4] flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#F0E8D8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <i className="fa-brands fa-whatsapp text-lg"></i>
            </div>
            <div>
              <h3 className="font-serif-heading text-lg font-bold text-[#39251D]">
                Keranjang Pesanan WhatsApp
              </h3>
              <p className="text-xs text-[#777067]">
                {orderItems.reduce((acc, curr) => acc + curr.quantity, 0)} item dipilih
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F8F6EF] hover:bg-[#F0E8D8] text-[#302820] flex items-center justify-center transition-colors"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Item List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {orderItems.length > 0 ? (
            <>
              {orderItems.map((entry) => (
                <div
                  key={entry.item.id}
                  className="bg-white p-3.5 rounded-xl border border-[#F0E8D8] flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-serif-heading text-sm font-bold text-[#39251D] truncate">
                      {entry.item.name}
                    </p>
                    <p className="text-xs text-[#777067]">
                      {entry.item.id} • {entry.item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(entry.item.id, -1)}
                      className="w-7 h-7 rounded-md bg-[#F8F6EF] hover:bg-[#F0E8D8] text-[#39251D] flex items-center justify-center text-xs"
                    >
                      <i className="fa-solid fa-minus text-[10px]"></i>
                    </button>
                    <span className="w-5 text-center text-xs font-semibold text-[#39251D]">
                      {entry.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(entry.item.id, 1)}
                      className="w-7 h-7 rounded-md bg-[#F8F6EF] hover:bg-[#F0E8D8] text-[#39251D] flex items-center justify-center text-xs"
                    >
                      <i className="fa-solid fa-plus text-[10px]"></i>
                    </button>
                    <button
                      onClick={() => onRemoveItem(entry.item.id)}
                      className="text-[#777067] hover:text-red-600 text-xs ml-1"
                      title="Hapus"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-end pt-2">
                <button
                  onClick={onClearOrder}
                  className="text-xs text-red-600 hover:underline"
                >
                  Kosongkan Keranjang
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-[#D9C9B4] p-6">
              <i className="fa-solid fa-mug-saucer text-3xl text-[#D9C9B4] mb-3 block"></i>
              <p className="text-sm font-serif-heading font-bold text-[#39251D] mb-1">
                Keranjang Masih Kosong
              </p>
              <p className="text-xs text-[#777067] mb-4">
                Pilih menu favorit Anda dari daftar untuk membuat pesanan ke WhatsApp.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#39251D] text-white text-xs font-medium rounded-full"
              >
                Jelajahi Menu
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {orderItems.length > 0 && (
          <div className="bg-white p-6 border-t border-[#F0E8D8] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#777067]">Estimasi Subtotal</span>
              <span className="font-serif-heading text-xl font-bold text-[#39251D]">
                {formatRupiah(totalPrice)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="py-3 text-center bg-[#F8F6EF] hover:bg-[#F0E8D8] text-[#39251D] text-xs font-semibold rounded-full border border-[#D9C9B4] transition-colors"
              >
                Isi Detail &amp; Meja
              </a>

              <button
                onClick={handleCheckoutWhatsApp}
                className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>Kirim WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
