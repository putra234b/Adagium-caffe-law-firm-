import React, { useState } from 'react';
import { BRAND_CONFIG, MenuItem } from '../data/menuData';

export interface OrderItemEntry {
  item: MenuItem;
  quantity: number;
}

interface ContactSectionProps {
  orderItems: OrderItemEntry[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
  allItems: MenuItem[];
  onQuickAddItem: (item: MenuItem) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
  allItems,
  onQuickAddItem,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [tableOrType, setTableOrType] = useState('Dine In (Makan di Tempat)');
  const [specialNotes, setSpecialNotes] = useState('');
  const [quickSelectId, setQuickSelectId] = useState('');

  // Hitung total harga
  const totalPrice = orderItems.reduce(
    (sum, entry) => sum + entry.item.numericPrice * entry.quantity,
    0
  );

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  // Buat pesan WhatsApp otomatis yang rapi dan terstruktur
  const generateWhatsAppUrl = () => {
    let message = `*HALO ADAGIUM COFFEE & LAW FIRM*\n`;
    message += `Saya ingin melakukan pemesanan:\n\n`;

    if (customerName.trim()) {
      message += `*Nama Pemesan:* ${customerName.trim()}\n`;
    }
    message += `*Tipe Pesanan:* ${tableOrType}\n\n`;
    message += `*DAFTAR MENU:*\n`;

    orderItems.forEach((entry, idx) => {
      message += `${idx + 1}. ${entry.item.name} (${entry.item.id}) x ${entry.quantity} = ${formatRupiah(
        entry.item.numericPrice * entry.quantity
      )}\n`;
    });

    message += `\n*TOTAL PERKIRAAN:* ${formatRupiah(totalPrice)}\n`;

    if (specialNotes.trim()) {
      message += `\n*Catatan Khusus:* ${specialNotes.trim()}\n`;
    }

    message += `\nMohon konfirmasi ketersediaan menu. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encoded}`;
  };

  const handleQuickAdd = () => {
    if (!quickSelectId) return;
    const found = allItems.find((i) => i.id === quickSelectId);
    if (found) {
      onQuickAddItem(found);
      setQuickSelectId('');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-[#75513B] mb-2.5">
            <span className="w-6 h-[1px] bg-[#E5BE38]"></span>
            <span>Kontak &amp; Pemesanan</span>
            <span className="w-6 h-[1px] bg-[#E5BE38]"></span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#39251D] font-bold mb-4">
            Connect &amp; Visit Adagium
          </h2>
          <p className="text-sm sm:text-base text-[#777067]">
            Pemesanan langsung terhubung ke staf kami melalui WhatsApp resmi tanpa perantara sistem pembayaran palsu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Kolom Kiri: Informasi Kontak & Lokasi */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#F0E8D8] shadow-xs hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#75513B]">
                    WhatsApp Resmi
                  </span>
                  <h4 className="font-serif-heading text-lg font-bold text-[#39251D]">
                    +62 812-3456-7890
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#777067] mb-4 leading-relaxed">
                Nomor kontak resmi untuk konsultasi menu, reservasi meja, atau pesanan langsung.
              </p>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Halo Adagium Coffee & Law Firm, saya ingin bertanya seputar menu & kunjungan.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full transition-colors"
              >
                <span>Chat Langsung WhatsApp</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>

            {/* Jam Operasional */}
            <div className="bg-white p-6 rounded-2xl border border-[#F0E8D8] shadow-xs text-left">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#F8F6EF] text-[#75513B] flex items-center justify-center text-xl shrink-0">
                  <i className="fa-regular fa-clock text-[#E5BE38]"></i>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#75513B]">
                    Jam Buka Resmi
                  </span>
                  <h4 className="font-serif-heading text-lg font-bold text-[#39251D]">
                    {BRAND_CONFIG.hours}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#777067]">
                Melayani pesanan santap di tempat (Dine In), bawa pulang (Take Away), dan pertemuan santai.
              </p>
            </div>

            {/* Alamat & Google Maps */}
            <div className="bg-white p-6 rounded-2xl border border-[#F0E8D8] shadow-xs text-left">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#F8F6EF] text-[#75513B] flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-location-dot text-[#E5BE38]"></i>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#75513B]">
                    Alamat Fisik (Placeholder)
                  </span>
                  <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#39251D] leading-snug">
                    {BRAND_CONFIG.address}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#777067] mb-4">
                Mudah diakses dengan area parkir dan suasana interior yang tenang.
              </p>
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#75513B] bg-[#F8F6EF] hover:bg-[#F0E8D8] px-4 py-2 rounded-full border border-[#D9C9B4]/60 transition-colors"
              >
                <i className="fa-solid fa-map-pin text-[11px] text-[#E5BE38]"></i>
                <span>Buka Petunjuk di Google Maps</span>
              </a>
            </div>

            {/* Media Sosial */}
            <div className="bg-white p-5 rounded-2xl border border-[#F0E8D8] flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-700 flex items-center justify-center text-lg">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <p className="text-xs text-[#777067]">Instagram Resmi</p>
                  <p className="font-medium text-sm text-[#39251D]">{BRAND_CONFIG.instagramHandle}</p>
                </div>
              </div>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#75513B] hover:text-[#39251D] font-semibold flex items-center gap-1"
              >
                <span>Ikuti</span>
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Interactive WhatsApp Order Builder */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#F0E8D8] shadow-sm text-left">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#F0E8D8] mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5BE38]">
                  Pemesanan Cepat
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#39251D]">
                  Format Pesanan WhatsApp
                </h3>
              </div>
              {orderItems.length > 0 && (
                <button
                  onClick={onClearOrder}
                  className="text-xs text-red-600 hover:text-red-800 transition-colors"
                >
                  Reset Daftar
                </button>
              )}
            </div>

            {/* Quick Add Dropdown */}
            <div className="mb-6 bg-[#F8F6EF] p-4 rounded-xl border border-[#F0E8D8]">
              <label className="block text-xs font-semibold text-[#75513B] mb-2">
                Pilih Menu Cepat untuk Ditambahkan:
              </label>
              <div className="flex gap-2">
                <select
                  value={quickSelectId}
                  onChange={(e) => setQuickSelectId(e.target.value)}
                  className="flex-1 bg-white border border-[#D9C9B4]/80 text-[#302820] text-xs sm:text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#75513B]"
                >
                  <option value="">-- Pilih dari 20 Menu Resmi --</option>
                  {allItems.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.id.toUpperCase()} - {i.name} ({i.price})
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleQuickAdd}
                  disabled={!quickSelectId}
                  className="px-4 py-2 bg-[#39251D] disabled:opacity-40 hover:bg-[#75513B] text-white text-xs font-medium rounded-lg transition-colors shrink-0"
                >
                  + Tambah
                </button>
              </div>
            </div>

            {/* Selected Items List */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#75513B] mb-3">
                Item yang Dipilih ({orderItems.length})
              </h4>

              {orderItems.length > 0 ? (
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {orderItems.map((entry) => (
                    <div
                      key={entry.item.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#F8F6EF] border border-[#F0E8D8]"
                    >
                      <div className="flex-1 min-w-0 pr-3">
                        <p className="text-xs sm:text-sm font-semibold text-[#39251D] truncate">
                          {entry.item.name}
                        </p>
                        <p className="text-[11px] text-[#777067]">
                          {entry.item.id} • {entry.item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(entry.item.id, -1)}
                          className="w-7 h-7 rounded-md bg-white border border-[#D9C9B4] text-[#39251D] flex items-center justify-center text-xs hover:bg-[#F0E8D8] transition-colors"
                          title="Kurangi"
                        >
                          <i className="fa-solid fa-minus text-[10px]"></i>
                        </button>
                        <span className="font-semibold text-xs text-[#39251D] w-5 text-center">
                          {entry.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(entry.item.id, 1)}
                          className="w-7 h-7 rounded-md bg-white border border-[#D9C9B4] text-[#39251D] flex items-center justify-center text-xs hover:bg-[#F0E8D8] transition-colors"
                          title="Tambah"
                        >
                          <i className="fa-solid fa-plus text-[10px]"></i>
                        </button>
                        <button
                          onClick={() => onRemoveItem(entry.item.id)}
                          className="text-[#777067] hover:text-red-600 text-xs ml-1 p-1"
                          title="Hapus"
                        >
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-[#F8F6EF] rounded-xl border border-dashed border-[#D9C9B4] p-4">
                  <i className="fa-solid fa-basket-shopping text-2xl text-[#D9C9B4] mb-2 block"></i>
                  <p className="text-xs text-[#777067]">
                    Belum ada menu yang dipilih. Klik tombol &ldquo;Pesan&rdquo; pada menu atau pilih dari dropdown di atas.
                  </p>
                </div>
              )}
            </div>

            {/* Customer Details Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-[#75513B] mb-1.5">
                  Nama Anda (Opsional):
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Pak Budi"
                  className="w-full bg-[#F8F6EF] text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#D9C9B4]/80 text-[#302820] focus:outline-none focus:ring-1 focus:ring-[#75513B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#75513B] mb-1.5">
                  Tipe Pesanan:
                </label>
                <select
                  value={tableOrType}
                  onChange={(e) => setTableOrType(e.target.value)}
                  className="w-full bg-[#F8F6EF] text-xs sm:text-sm px-3 py-2.5 rounded-lg border border-[#D9C9B4]/80 text-[#302820] focus:outline-none focus:ring-1 focus:ring-[#75513B]"
                >
                  <option value="Dine In (Makan di Tempat)">Dine In (Makan di Tempat)</option>
                  <option value="Take Away (Bawa Pulang)">Take Away (Bawa Pulang)</option>
                  <option value="Reservasi Meja & Diskusi">Reservasi Meja &amp; Diskusi</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#75513B] mb-1.5">
                Catatan Khusus (Opsional):
              </label>
              <textarea
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="Contoh: Less sweet, susu oat, disajikan panas..."
                rows={2}
                className="w-full bg-[#F8F6EF] text-xs sm:text-sm p-3 rounded-lg border border-[#D9C9B4]/80 text-[#302820] focus:outline-none focus:ring-1 focus:ring-[#75513B]"
              />
            </div>

            {/* Total & Submit Button */}
            <div className="pt-4 border-t border-[#F0E8D8]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-[#777067]">Estimasi Total Biaya</span>
                  <p className="font-serif-heading text-2xl font-bold text-[#39251D]">
                    {formatRupiah(totalPrice)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#777067] block">
                    {orderItems.reduce((acc, curr) => acc + curr.quantity, 0)} item terpilih
                  </span>
                </div>
              </div>

              {orderItems.length > 0 ? (
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all text-sm flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Kirim Pesanan ke WhatsApp Resmi</span>
                </a>
              ) : (
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Halo Adagium Coffee & Law Firm, saya ingin bertanya seputar ketersediaan menu.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#39251D] hover:bg-[#75513B] text-white font-semibold rounded-full transition-all text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-400 text-lg"></i>
                  <span>Hubungi Staf via WhatsApp</span>
                </a>
              )}

              <p className="text-[11px] text-[#777067] text-center mt-3">
                *Tombol ini akan membuka aplikasi WhatsApp Anda dengan pesan pesanan terformat otomatis.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
