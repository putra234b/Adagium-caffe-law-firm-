import React, { useState } from 'react';
import { MenuItem } from '../data/menuData';

interface AssetManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onUploadCustomImage?: (id: string, fileUrl: string) => void;
  onDownloadStandaloneHtml?: () => void;
}

export const AssetManagerModal: React.FC<AssetManagerModalProps> = ({
  isOpen,
  onClose,
  items,
  onUploadCustomImage,
  onDownloadStandaloneHtml,
}) => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'instructions' | 'export'>('checklist');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#F8F6EF] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-[#D9C9B4] flex flex-col text-left">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#F0E8D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F0E8D8] text-[#75513B] flex items-center justify-center text-lg">
              <i className="fa-solid fa-folder-tree text-[#E5BE38]"></i>
            </div>
            <div>
              <h3 className="font-serif-heading text-lg font-bold text-[#39251D]">
                Panduan &amp; Pemetaan 21 Aset ADAGIUM
              </h3>
              <p className="text-xs text-[#777067]">
                1 Logo Resmi + 20 Foto Menu Resmi
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

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#F0E8D8] bg-[#F0E8D8]/50 px-6 pt-2">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'checklist'
                ? 'border-[#39251D] text-[#39251D] bg-white rounded-t-lg'
                : 'border-transparent text-[#777067] hover:text-[#39251D]'
            }`}
          >
            <i className="fa-solid fa-list-check mr-1.5 text-[#E5BE38]"></i>
            Daftar 21 Aset
          </button>
          <button
            onClick={() => setActiveTab('instructions')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'instructions'
                ? 'border-[#39251D] text-[#39251D] bg-white rounded-t-lg'
                : 'border-transparent text-[#777067] hover:text-[#39251D]'
            }`}
          >
            <i className="fa-solid fa-book-open mr-1.5 text-[#E5BE38]"></i>
            Petunjuk Penggantian &amp; GitHub Pages
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'export'
                ? 'border-[#39251D] text-[#39251D] bg-white rounded-t-lg'
                : 'border-transparent text-[#777067] hover:text-[#39251D]'
            }`}
          >
            <i className="fa-solid fa-file-code mr-1.5 text-[#E5BE38]"></i>
            Ekspor Single file index.html
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {activeTab === 'checklist' && (
            <div>
              <div className="bg-white p-4 rounded-xl border border-[#F0E8D8] mb-5">
                <h4 className="font-serif-heading text-sm font-bold text-[#39251D] mb-1">
                  1. Foto Logo Resmi
                </h4>
                <div className="flex items-center justify-between text-xs text-[#777067]">
                  <span className="font-mono bg-[#F8F6EF] px-2 py-1 rounded">
                    public/assets/images/logo.png
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    Karakter: Emas (#E5BE38), Cokelat (#39251D), Wadah Putih
                  </span>
                </div>
              </div>

              <h4 className="font-serif-heading text-sm font-bold text-[#39251D] mb-3">
                2. Pemetaan 20 Foto Menu (menu-01 s/d menu-20)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-white p-3 rounded-xl border border-[#F0E8D8] flex items-center justify-between gap-3 text-left"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-[#F0E8D8] text-[#75513B] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="font-serif-heading text-xs font-bold text-[#39251D] truncate">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-[#777067] font-mono">
                          {item.localImagePath}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-semibold text-[#75513B] block">
                        {item.price}
                      </span>
                      {onUploadCustomImage && (
                        <label className="text-[10px] text-[#E5BE38] hover:text-[#39251D] underline cursor-pointer">
                          <span>Tes Unggah</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const url = URL.createObjectURL(file);
                                onUploadCustomImage(item.id, url);
                              }
                            }}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-4 text-xs sm:text-sm text-[#777067] leading-relaxed">
              <div className="bg-white p-5 rounded-2xl border border-[#F0E8D8]">
                <h4 className="font-serif-heading text-base font-bold text-[#39251D] mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-folder-open text-[#E5BE38]"></i>
                  <span>Struktur Folder Aset Resmi</span>
                </h4>
                <p className="mb-3">
                  Letakkan file foto Anda pada folder <code className="bg-[#F8F6EF] px-2 py-0.5 rounded text-[#39251D] font-mono">public/assets/images/</code> dengan susunan berikut:
                </p>
                <pre className="bg-[#39251D] text-[#F8F6EF] p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`public/
└── assets/
    └── images/
        ├── logo.svg       <- Foto/SVG logo resmi ADAGIUM (wadah putih, rasio dijaga)
        ├── menu-01.jpg    <- Espresso coffe
        ├── menu-02.jpg    <- Butterscotch Latte
        ├── menu-03.jpg    <- Lecy Tea
        ├── menu-04.jpg    <- Blue ocean
        ├── menu-05.jpg    <- Vietnam Driv
        ├── menu-06.jpg    <- Taro ice
        ├── menu-07.jpg    <- Matcha
        ├── menu-08.jpg    <- Yakul lecy
        ├── menu-09.jpg    <- Banana latte
        ├── menu-10.jpg    <- Capucino latte
        ├── menu-11.jpg    <- Caramel latte
        ├── menu-12.jpg    <- Taro
        ├── menu-13.jpg    <- Lemon Tea
        ├── menu-14.jpg    <- Strawberry milk
        ├── menu-15.jpg    <- Americano
        ├── menu-16.jpg    <- Hazelnut latte
        ├── menu-17.jpg    <- Vanila latte
        ├── menu-18.jpg    <- Chocolate milk
        ├── menu-19.jpg    <- V60
        └── menu-20.jpg    <- Black Tea`}
                </pre>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#F0E8D8]">
                <h4 className="font-serif-heading text-base font-bold text-[#39251D] mb-2">
                  Cara Mengganti Nama, Harga, dan Nomor WhatsApp Resmi
                </h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Buka file <strong>src/data/menuData.ts</strong>.
                  </li>
                  <li>
                    Untuk mengganti nomor WhatsApp resmi, ubah nilai <code className="bg-[#F8F6EF] px-1.5 py-0.5 rounded text-[#39251D] font-mono">whatsappNumber: &quot;6281234567890&quot;</code> dengan nomor resmi pemilik (gunakan format internasional tanpa tanda +, misalnya 628...).
                  </li>
                  <li>
                    Untuk mengganti harga atau nama menu, ubah properti <code className="bg-[#F8F6EF] px-1 py-0.5 rounded text-[#39251D] font-mono">name</code>, <code className="bg-[#F8F6EF] px-1 py-0.5 rounded text-[#39251D] font-mono">price</code>, dan <code className="bg-[#F8F6EF] px-1 py-0.5 rounded text-[#39251D] font-mono">numericPrice</code> pada array <code className="bg-[#F8F6EF] px-1 py-0.5 rounded text-[#39251D] font-mono">MENU_ITEMS</code>.
                  </li>
                </ol>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-900 text-xs">
                <strong>Catatan Integrasi &amp; Data Tambahan:</strong>
                <p className="mt-1">
                  Fitur konsultasi hukum formal tidak dibuat karena belum dikonfirmasi pemilik. Website ini murni berfokus pada pengalaman coffee shop premium berkonsep intelektual &amp; profesional. Sistem pemesanan menggunakan direct WhatsApp resmi yang aman dan nyata, tanpa mockup gateway pembayaran.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-[#F0E8D8] text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F0E8D8] text-[#75513B] flex items-center justify-center text-2xl mb-4">
                  <i className="fa-solid fa-cloud-arrow-down text-[#E5BE38]"></i>
                </div>
                <h4 className="font-serif-heading text-xl font-bold text-[#39251D] mb-2">
                  Ekspor Satu File Standalone (GitHub Pages)
                </h4>
                <p className="text-xs sm:text-sm text-[#777067] max-w-lg mx-auto mb-6">
                  Sesuai instruksi butir 13, website ini juga telah kami siapkan dalam versi 1 file tunggal <code className="bg-[#F8F6EF] px-1.5 py-0.5 rounded text-[#39251D] font-mono">index.html</code> lengkap dengan CSS dan JavaScript di dalamnya untuk memudahkan deploy ke GitHub Pages dan pengelolaan lewat HP.
                </p>

                {onDownloadStandaloneHtml ? (
                  <button
                    onClick={onDownloadStandaloneHtml}
                    className="px-6 py-3 bg-[#39251D] hover:bg-[#75513B] text-white font-medium text-xs sm:text-sm rounded-full transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <i className="fa-solid fa-download text-xs text-[#E5BE38]"></i>
                    <span>Unduh File index.html Standalone</span>
                  </button>
                ) : (
                  <span className="text-xs text-[#777067]">
                    File standalone siap diunduh.
                  </span>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-3.5 border-t border-[#F0E8D8] flex items-center justify-between">
          <span className="text-[11px] text-[#777067]">
            ADAGIUM — Coffee &amp; Law Firm • Business Grade Edition
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#39251D] text-white text-xs font-semibold rounded-full hover:bg-[#75513B] transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
