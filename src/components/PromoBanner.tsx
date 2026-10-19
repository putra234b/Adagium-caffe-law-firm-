import React from 'react';

export const PromoBanner: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#F0E8D8] border border-[#D9C9B4]/80 shadow-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Teks Editorial */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#75513B] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#D9C9B4]">
                <i className="fa-solid fa-gem text-[#E5BE38]"></i>
                <span>Artisan Experience</span>
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#39251D] leading-tight mb-4">
                Nikmati Momen Ketenangan di Setiap Seduhan.
              </h3>

              <p className="text-sm sm:text-base text-[#777067] leading-relaxed max-w-lg mb-8">
                Dari seduhan manual pour-over hingga racikan signature cold drip, temukan kenikmatan kopi sejati dalam suasana yang dirancang untuk kenyamanan Anda.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#menu"
                  className="px-6 py-3.5 bg-[#39251D] text-white text-sm font-medium rounded-full hover:bg-[#75513B] transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Pilih Menu Sekarang</span>
                  <i className="fa-solid fa-arrow-right text-xs text-[#E5BE38]"></i>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-white text-[#39251D] text-sm font-medium rounded-full border border-[#D9C9B4] hover:bg-[#F8F6EF] transition-all inline-flex items-center gap-2"
                >
                  <i className="fa-regular fa-clock text-xs text-[#75513B]"></i>
                  <span>Cek Jam Buka</span>
                </a>
              </div>
            </div>

            {/* Gambar Kopi Berukuran Besar yang Proporsional & Utuh di Mobile */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[320px] w-full overflow-hidden bg-[#E9DEC9]">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                alt="Secangkir Kopi Manual Brew Hangat dengan Cerek Tembaga di ADAGIUM"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F0E8D8]/70 lg:from-[#F0E8D8] via-transparent to-transparent pointer-events-none" />
              
              {/* Gold Ribbon Badge */}
              <div className="absolute top-4 right-4 bg-[#E5BE38] text-[#39251D] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                ADAGIUM COFFEE
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
