import React from 'react';
import { Logo } from './Logo';
import { BRAND_CONFIG } from '../data/menuData';

interface FooterProps {
  onOpenAssetModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssetModal }) => {
  return (
    <footer className="bg-white border-t border-[#F0E8D8] pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#F0E8D8]">
          
          {/* Kolom 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" />
            
            <p className="font-editorial italic text-base text-[#39251D] max-w-sm mt-3">
              &ldquo;{BRAND_CONFIG.headline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#777067] max-w-sm leading-relaxed">
              Ruang kopi berkonsep santai nan berkelas di mana ketelitian rasa kopi bertemu dengan ketenangan berpikir dan percakapan intelektual yang bermakna.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F8F6EF] hover:bg-[#39251D] text-[#39251D] hover:text-white flex items-center justify-center transition-colors border border-[#F0E8D8]"
                title="WhatsApp Resmi"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F8F6EF] hover:bg-[#39251D] text-[#39251D] hover:text-white flex items-center justify-center transition-colors border border-[#F0E8D8]"
                title="Instagram Resmi"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>

              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F8F6EF] hover:bg-[#39251D] text-[#39251D] hover:text-white flex items-center justify-center transition-colors border border-[#F0E8D8]"
                title="Google Maps"
              >
                <i className="fa-solid fa-location-dot text-sm"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-[#39251D] uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#777067]">
              <li>
                <a href="#hero" className="hover:text-[#39251D] transition-colors">
                  Beranda Utama
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#39251D] transition-colors">
                  Signature Selections
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#39251D] transition-colors">
                  Daftar 20 Menu Resmi
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#39251D] transition-colors">
                  Cerita Brand Adagium
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#39251D] transition-colors">
                  Galeri Visual &amp; Lightbox
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#39251D] transition-colors">
                  Lokasi &amp; Pemesanan
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Jam Kunjungan & Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-[#39251D] uppercase tracking-wider">
              Jam Operasional
            </h4>
            <p className="text-xs sm:text-sm text-[#39251D] font-medium">
              {BRAND_CONFIG.hours}
            </p>
            <p className="text-xs text-[#777067] leading-relaxed">
              Menerima kunjungan perorangan, diskusi kerja, maupun pertemuan santai dengan suasana kondusif.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAssetModal}
                className="text-xs text-[#75513B] hover:text-[#39251D] font-semibold flex items-center gap-1.5 underline underline-offset-4"
              >
                <i className="fa-solid fa-circle-info text-[#E5BE38]"></i>
                <span>Panduan 21 Foto &amp; Integrasi Pemilik</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777067]">
          <p>
            &copy; {new Date().getFullYear()} <strong>ADAGIUM — Coffee &amp; Law Firm</strong>. All rights reserved.
          </p>

          <p className="text-center sm:text-right text-[11px]">
            Dirancang khusus dengan palet Warm Ivory, Signature Gold, dan Deep Brown.
          </p>
        </div>

      </div>
    </footer>
  );
};
