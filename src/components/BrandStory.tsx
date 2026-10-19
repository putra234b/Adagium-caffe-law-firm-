import React from 'react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#F0E8D8]/50 border-t border-[#F0E8D8] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Foto Suasana / Kopi Berkualitas Tinggi */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#F0E8D8] shadow-lg bg-white p-2">
                <div className="relative h-80 sm:h-96 lg:h-[440px] rounded-xl overflow-hidden bg-[#F0E8D8]">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
                    alt="Suasana tenang dan hangat di ADAGIUM Coffee & Law Firm"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#39251D]/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating quote label */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-[#F0E8D8]">
                    <p className="font-editorial italic text-base text-[#39251D] leading-snug">
                      &ldquo;Where contemplation meets craftsmanship in every pour.&rdquo;
                    </p>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#E5BE38] block mt-1">
                      Adagium Sanctuary
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Badge */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-2xl bg-[#39251D] text-white flex flex-col items-center justify-center p-2 shadow-lg border-2 border-white text-center">
                <i className="fa-solid fa-mug-hot text-[#E5BE38] text-base mb-0.5"></i>
                <span className="text-[9px] font-bold tracking-widest uppercase">ADAGIUM</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Teks & Narasi Brand Cerita */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-[#75513B] mb-3">
              <span className="w-5 h-[1px] bg-[#E5BE38]"></span>
              <span>Cerita Brand</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#39251D] tracking-tight leading-[1.2] mb-6">
              A Space Built for Reflection &amp; Meaningful Discourse
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#777067] leading-relaxed max-w-xl">
              <p>
                ADAGIUM lahir dari sebuah keyakinan sederhana: bahwa secangkir kopi istimewa dapat menjadi perantara lahirnya dialog yang jujur, pemikiran yang jernih, dan ketenangan di tengah hiruk-pikuk keseharian.
              </p>
              
              <p>
                Di sini, kecintaan mendalam terhadap dunia kopi berpadu harmonis dengan atmosfer yang bermartabat, tenang, dan berkelas. Setiap sudut dirancang sebagai ruang yang ramah bagi para penikmat kopi yang menghargai ketelitian rasa sekaligus mencari ruang nyaman untuk membaca, berdiskusi, atau sekadar mengambil jeda.
              </p>

              <p className="font-medium text-[#39251D]">
                Menghadirkan sajian yang dipersiapkan dengan rasa hormat, menyambut Anda dengan kehangatan yang tulus.
              </p>
            </div>

            {/* Core Values / Pillar */}
            <div className="mt-8 pt-6 border-t border-[#D9C9B4]/60 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="p-3.5 bg-white rounded-xl border border-[#F0E8D8]">
                <div className="w-8 h-8 rounded-lg bg-[#F8F6EF] flex items-center justify-center text-[#75513B] mb-2">
                  <i className="fa-solid fa-scale-balanced text-sm text-[#E5BE38]"></i>
                </div>
                <h4 className="font-serif-heading text-sm font-bold text-[#39251D] mb-1">Integritas Rasa</h4>
                <p className="text-xs text-[#777067]">Penyajian jujur dengan standar rasa konsisten.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#F0E8D8]">
                <div className="w-8 h-8 rounded-lg bg-[#F8F6EF] flex items-center justify-center text-[#75513B] mb-2">
                  <i className="fa-solid fa-book-open text-sm text-[#E5BE38]"></i>
                </div>
                <h4 className="font-serif-heading text-sm font-bold text-[#39251D] mb-1">Ruang Teduh</h4>
                <p className="text-xs text-[#777067]">Suasana tenang kondusif untuk membaca &amp; bertukar ide.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#F0E8D8]">
                <div className="w-8 h-8 rounded-lg bg-[#F8F6EF] flex items-center justify-center text-[#75513B] mb-2">
                  <i className="fa-solid fa-handshake-simple text-sm text-[#E5BE38]"></i>
                </div>
                <h4 className="font-serif-heading text-sm font-bold text-[#39251D] mb-1">Pelayanan Santun</h4>
                <p className="text-xs text-[#777067]">Sambutan hangat penuh etika dan keramahan.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
