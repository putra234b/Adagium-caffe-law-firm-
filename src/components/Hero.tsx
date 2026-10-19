import React from 'react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F8F6EF]">
      {/* Subtle architectural gold & cream accents in the background */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-[#F0E8D8]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 left-10 w-80 h-80 bg-[#E5BE38]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Identitas Brand Resmi */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Logo Resmi Ditampilkan Proporsional */}
            <div className="mb-6">
              <Logo variant="hero" />
            </div>

            {/* Tagline / Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D8] border border-[#D9C9B4]/60 text-[#75513B] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#E5BE38]"></span>
              Coffee & Intellectual Sanctuary
            </div>

            {/* Headline Resmi */}
            <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#39251D] tracking-tight leading-[1.15] mb-6">
              A Thoughtful Blend of <span className="italic font-normal text-[#75513B]">Coffee</span> &amp; <span className="underline decoration-[#E5BE38] decoration-2 underline-offset-8">Ideas</span>.
            </h1>

            {/* Deskripsi Resmi */}
            <p className="text-base sm:text-lg text-[#777067] max-w-2xl leading-relaxed mb-8">
              Discover a welcoming space where exceptional coffee, meaningful conversations, and thoughtful moments come together.
            </p>

            {/* Dua Tombol CTA Resmi */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#menu"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-[#39251D] text-white font-medium rounded-full hover:bg-[#75513B] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore Our Menu</span>
                <i className="fa-solid fa-arrow-right text-xs text-[#E5BE38]"></i>
              </a>

              <a
                href="#story"
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-white text-[#39251D] border border-[#D9C9B4] font-medium rounded-full hover:bg-[#F0E8D8] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Discover Adagium</span>
                <i className="fa-solid fa-chevron-right text-xs text-[#75513B]"></i>
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="mt-10 pt-8 border-t border-[#F0E8D8] w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif-heading text-xl sm:text-2xl font-bold text-[#39251D]">20+</p>
                <p className="text-xs text-[#777067] font-medium">Curated Menu</p>
              </div>
              <div>
                <p className="font-serif-heading text-xl sm:text-2xl font-bold text-[#39251D]">08.00</p>
                <p className="text-xs text-[#777067] font-medium">Open Daily</p>
              </div>
              <div>
                <p className="font-serif-heading text-xl sm:text-2xl font-bold text-[#39251D]">Serene</p>
                <p className="text-xs text-[#777067] font-medium">Warm &amp; Thoughtful</p>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Foto Kopi Berkualitas Tinggi */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Bingkai Luar Beraksen Emas & Sudut Melengkung Lembut */}
              <div className="relative rounded-2xl overflow-hidden p-2 bg-white border border-[#F0E8D8] shadow-xl">
                <div className="relative h-80 sm:h-96 lg:h-[460px] rounded-xl overflow-hidden bg-[#F0E8D8]">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                    alt="Sajian Kopi Hangat Premium di Meja Kayu Elegan ADAGIUM"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#39251D]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-lg p-3.5 border border-[#F0E8D8] shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5BE38]">Adagium Specialty</span>
                      <p className="text-xs sm:text-sm font-serif-heading font-semibold text-[#39251D]">Artisanal Brew &amp; Warm Ambiance</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F0E8D8] flex items-center justify-center text-[#75513B]">
                      <i className="fa-solid fa-mug-hot text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Geometric Gold Stamp Accent */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-[#E5BE38] text-[#39251D] flex items-center justify-center font-serif-heading font-bold shadow-md border-2 border-white">
                <i className="fa-solid fa-scale-balanced text-sm"></i>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
