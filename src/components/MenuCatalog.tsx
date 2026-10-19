import React, { useState, useMemo } from 'react';
import { MenuItem, CATEGORIES } from '../data/menuData';

interface MenuCatalogProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onAddToOrder: (item: MenuItem) => void;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({
  items,
  onSelectItem,
  onAddToOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'polaroid' | 'grid'>('polaroid');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-[#75513B] mb-2">
            <span className="w-5 h-[1px] bg-[#E5BE38]"></span>
            <span>Daftar 20 Menu Resmi (@adagiumcaffe)</span>
            <span className="w-5 h-[1px] bg-[#E5BE38]"></span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#39251D] font-bold mb-4">
            Curated Drinks &amp; Coffee Menu
          </h2>
          <p className="text-sm sm:text-base text-[#777067]">
            20 pilihan racikan kopi, artisan milk, dan minuman segar autentik sesuai katalog resmi ADAGIUM.
          </p>
        </div>

        {/* Filter Bar, View Mode & Search Input */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E8D8] shadow-sm mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 lg:pb-0" role="tablist">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#39251D] text-white shadow-sm'
                        : 'bg-[#F8F6EF] text-[#777067] hover:text-[#39251D] hover:bg-[#F0E8D8]'
                    }`}
                  >
                    <i className={`${cat.icon} text-xs ${isActive ? 'text-[#E5BE38]' : ''}`}></i>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Controls: Search and View Mode Switcher */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 sm:w-64">
                <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#777067]"></i>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari kopi, taro, latte..."
                  className="w-full bg-[#F8F6EF] text-[#302820] text-xs sm:text-sm pl-9 pr-8 py-2.5 rounded-full border border-[#D9C9B4]/60 focus:outline-none focus:border-[#75513B] focus:ring-1 focus:ring-[#75513B] placeholder:text-[#777067]/70"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777067] hover:text-[#39251D] text-xs p-1"
                    title="Hapus pencarian"
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                )}
              </div>

              {/* View Switcher: Polaroid vs Grid */}
              <div className="hidden sm:flex items-center bg-[#F8F6EF] p-1 rounded-full border border-[#D9C9B4]/60">
                <button
                  onClick={() => setViewMode('polaroid')}
                  title="Tampilan Kartu Polaroid Asli"
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    viewMode === 'polaroid'
                      ? 'bg-[#39251D] text-white'
                      : 'text-[#777067] hover:text-[#39251D]'
                  }`}
                >
                  <i className="fa-regular fa-image text-[11px]"></i>
                  <span>Polaroid</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  title="Tampilan Editorial Bersih"
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#39251D] text-white'
                      : 'text-[#777067] hover:text-[#39251D]'
                  }`}
                >
                  <i className="fa-solid fa-grip text-[11px]"></i>
                  <span>Grid</span>
                </button>
              </div>
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="pt-3 border-t border-[#F0E8D8] flex items-center justify-between text-xs text-[#777067]">
            <span>
              Menampilkan <strong className="text-[#39251D]">{filteredItems.length}</strong> dari 20 menu resmi
            </span>
            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-[#75513B] hover:underline font-medium"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* 20 Menu Cards */}
        {filteredItems.length > 0 ? (
          viewMode === 'polaroid' ? (
            /* Polaroid Collection Layout (Replicating uploaded assets aesthetic) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#5c3e30] rounded-2xl p-4 sm:p-5 relative shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden border border-[#75513B]/40"
                >
                  {/* Subtle Side Brand Line resembling original card */}
                  <div className="absolute left-2.5 top-6 bottom-6 w-[1px] bg-white/15 pointer-events-none hidden sm:block" />
                  <div className="absolute right-2.5 top-6 bottom-6 w-[1px] bg-white/15 pointer-events-none hidden sm:block" />
                  
                  {/* Vertical Instagram tag on side margin */}
                  <span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-mono tracking-widest text-white/50 select-none hidden lg:block">
                    @adagiumcaffe
                  </span>

                  {/* Inner White Polaroid Photo Frame */}
                  <div
                    onClick={() => onSelectItem(item)}
                    className="bg-[#FAF7F2] p-3 sm:p-3.5 pb-6 sm:pb-8 rounded-lg shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
                  >
                    {/* Photo Container */}
                    <div className="relative h-52 sm:h-56 w-full rounded overflow-hidden bg-[#EAE2D5]">
                      <img
                        src={item.localImagePath}
                        alt={item.altText}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== item.fallbackImageUrl) {
                            target.src = item.fallbackImageUrl;
                          }
                        }}
                        loading="lazy"
                      />

                      {/* Item ID Tag */}
                      <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-[#E5BE38] text-[9px] font-mono px-2 py-0.5 rounded">
                        {item.id}
                      </span>
                    </div>

                    {/* Polaroid Handwritten / Italic Title */}
                    <div className="mt-3.5 px-1 flex items-baseline justify-between gap-2">
                      <h3 className="font-editorial italic font-bold text-xl sm:text-2xl text-[#39251D] tracking-tight">
                        {item.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#75513B] font-serif-heading shrink-0">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Controls */}
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-white/90">
                    <span className="text-[11px] font-medium text-[#F0E8D8]/80">
                      {item.categoryLabel}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectItem(item)}
                        className="text-xs text-[#F0E8D8] hover:text-white transition-colors px-2.5 py-1"
                        title="Lihat Detail"
                      >
                        Detail
                      </button>

                      <button
                        onClick={() => onAddToOrder(item)}
                        className="text-xs font-semibold bg-[#E5BE38] hover:bg-[#F2CE4E] text-[#39251D] px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
                      >
                        <i className="fa-brands fa-whatsapp text-emerald-800 text-sm"></i>
                        <span>Pesan</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* Clean Editorial Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl overflow-hidden border border-[#F0E8D8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div
                    className="relative h-48 w-full overflow-hidden bg-[#F0E8D8] cursor-pointer"
                    onClick={() => onSelectItem(item)}
                  >
                    <img
                      src={item.localImagePath}
                      alt={item.altText}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== item.fallbackImageUrl) {
                          target.src = item.fallbackImageUrl;
                        }
                      }}
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#39251D]/90 backdrop-blur-sm text-[#E5BE38] text-[10px] font-mono px-2 py-0.5 rounded">
                      {item.id}
                    </div>
                    {item.isSignature && (
                      <div className="absolute top-2.5 right-2.5 bg-[#E5BE38] text-[#39251D] text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-xs">
                        Signature
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3
                          onClick={() => onSelectItem(item)}
                          className="font-serif-heading text-base font-bold text-[#39251D] hover:text-[#75513B] transition-colors cursor-pointer leading-snug"
                        >
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-semibold text-xs text-[#39251D] bg-[#F8F6EF] px-2 py-0.5 rounded border border-[#F0E8D8]">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-xs text-[#777067] line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0E8D8] flex items-center justify-between gap-2">
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
              ))}
            </div>
          )
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#D9C9B4] max-w-md mx-auto p-8">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#F0E8D8] flex items-center justify-center text-[#75513B] mb-4">
              <i className="fa-solid fa-mug-saucer text-xl"></i>
            </div>
            <h3 className="font-serif-heading text-lg font-bold text-[#39251D] mb-2">
              Menu Tidak Ditemukan
            </h3>
            <p className="text-xs text-[#777067] mb-6">
              Tidak ada menu yang sesuai dengan kata kunci &ldquo;{searchQuery}&rdquo;. Silakan reset atau pilih kategori Semua.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#39251D] text-white text-xs font-medium rounded-full hover:bg-[#75513B] transition-colors"
            >
              Tampilkan Semua 20 Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
