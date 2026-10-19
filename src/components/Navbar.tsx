import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  orderCount: number;
  onOpenOrderModal: () => void;
  onOpenAssetModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ orderCount, onOpenOrderModal, onOpenAssetModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Signature", href: "#signature" },
    { label: "Katalog Menu", href: "#menu" },
    { label: "Cerita Brand", href: "#story" },
    { label: "Galeri", href: "#gallery" },
    { label: "Kontak & Lokasi", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6EF]/95 backdrop-blur-md shadow-sm border-b border-[#F0E8D8] py-2.5'
          : 'bg-[#F8F6EF] border-b border-[#F0E8D8]/70 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#hero" className="inline-block transition-transform duration-200 hover:scale-[1.01]">
            <Logo variant="navbar" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#302820] hover:text-[#75513B] px-3 py-1.5 rounded-md transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E5BE38] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Actions & WhatsApp Order Pill */}
          <div className="flex items-center gap-2.5">
            {/* Asset checklist button */}
            <button
              onClick={onOpenAssetModal}
              title="Kelola 21 Aset & Foto"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs text-[#75513B] bg-[#F0E8D8]/60 hover:bg-[#F0E8D8] px-3 py-1.5 rounded-full border border-[#D9C9B4]/50 transition-colors"
            >
              <i className="fa-solid fa-images text-[11px] text-[#E5BE38]"></i>
              <span>Cek 21 Aset</span>
            </button>

            {/* Tombol Pesanan WhatsApp */}
            <button
              onClick={onOpenOrderModal}
              className="relative inline-flex items-center gap-2 bg-[#39251D] hover:bg-[#75513B] text-white text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-2 rounded-full transition-all duration-200 shadow-sm active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400 text-base"></i>
              <span className="hidden sm:inline">Pesanan</span>
              {orderCount > 0 && (
                <span className="bg-[#E5BE38] text-[#39251D] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center -mr-1">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#39251D] hover:bg-[#F0E8D8] focus:outline-none focus:ring-2 focus:ring-[#E5BE38]"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-lg' : 'fa-bars text-lg'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F6EF] border-b border-[#F0E8D8] px-4 pt-3 pb-5 space-y-1 shadow-lg transition-all">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#302820] hover:bg-[#F0E8D8] hover:text-[#39251D] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#F0E8D8] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssetModal();
              }}
              className="w-full text-center text-xs text-[#75513B] bg-[#F0E8D8] py-2 rounded-lg font-medium"
            >
              <i className="fa-solid fa-images mr-1.5 text-[#E5BE38]"></i>
              Cek 21 Foto & Aset
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
