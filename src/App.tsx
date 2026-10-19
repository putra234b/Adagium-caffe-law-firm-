/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MENU_ITEMS, MenuItem } from './data/menuData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureMenu } from './components/SignatureMenu';
import { MenuCatalog } from './components/MenuCatalog';
import { BrandStory } from './components/BrandStory';
import { PromoBanner } from './components/PromoBanner';
import { Gallery } from './components/Gallery';
import { ContactSection, OrderItemEntry } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ItemDetailModal } from './components/ItemDetailModal';
import { OrderModal } from './components/OrderModal';
import { AssetManagerModal } from './components/AssetManagerModal';
import { getStandaloneHtmlString } from './utils/generateStandaloneHtml';

export default function App() {
  const [items, setItems] = useState<MenuItem[]>(MENU_ITEMS);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItemEntry[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp Order Basket Management
  const handleAddToOrder = (item: MenuItem, quantity: number = 1) => {
    setOrderItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry
        );
      } else {
        return [...prev, { item, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter((entry): entry is OrderItemEntry => entry !== null);
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  // Test Upload Preview handler for 21 assets
  const handleUploadCustomImage = (itemId: string, fileUrl: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            localImagePath: fileUrl,
            fallbackImageUrl: fileUrl,
          };
        }
        return item;
      })
    );
  };

  // One-click Download Standalone index.html
  const handleDownloadStandaloneHtml = () => {
    const htmlContent = getStandaloneHtmlString();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const totalOrderCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#302820] flex flex-col relative selection:bg-[#E5BE38]/20 selection:text-[#39251D]">
      
      {/* Top Banner Notice for Business Owner / Asset Checklist */}
      <aside className="bg-[#39251D] text-white text-[11px] sm:text-xs py-2 px-4 text-center border-b border-[#E5BE38]/30 flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <i className="fa-solid fa-mug-hot text-[#E5BE38]"></i>
          <span>Official Preview: <strong>ADAGIUM — Coffee &amp; Law Firm</strong></span>
        </span>
        <span className="hidden sm:inline text-white/40">•</span>
        <button
          onClick={() => setIsAssetModalOpen(true)}
          className="underline text-[#E5BE38] hover:text-white transition-colors cursor-pointer font-semibold"
        >
          Lihat Pemetaan 21 Foto &amp; Panduan Penggantian Aset
        </button>
      </aside>

      {/* Sticky Navbar */}
      <Navbar
        orderCount={totalOrderCount}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenAssetModal={() => setIsAssetModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Signature Menu Section (Curated Editorial 4 Cards) */}
        <SignatureMenu
          items={items}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToOrder={(item) => handleAddToOrder(item, 1)}
        />

        {/* 20 Menu Catalog with Live Filters & Search */}
        <MenuCatalog
          items={items}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToOrder={(item) => handleAddToOrder(item, 1)}
        />

        {/* Brand Story (2-column layout with dignified warm copy) */}
        <BrandStory />

        {/* Horizontal Luxury Banner */}
        <PromoBanner />

        {/* Interactive Gallery & Lightbox */}
        <Gallery
          items={items}
          onAddToOrder={(item) => handleAddToOrder(item, 1)}
        />

        {/* Professional Contact & Interactive WhatsApp Order Generator */}
        <ContactSection
          orderItems={orderItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearOrder={handleClearOrder}
          allItems={items}
          onQuickAddItem={(item) => handleAddToOrder(item, 1)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenAssetModal={() => setIsAssetModalOpen(true)} />

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToOrder={(item, qty) => handleAddToOrder(item, qty)}
      />

      {/* WhatsApp Cart Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

      {/* 21 Asset Manager & Guide Modal */}
      <AssetManagerModal
        isOpen={isAssetModalOpen}
        onClose={() => setIsAssetModalOpen(false)}
        items={items}
        onUploadCustomImage={handleUploadCustomImage}
        onDownloadStandaloneHtml={handleDownloadStandaloneHtml}
      />

      {/* Floating Bottom Quick Order Bar when items are selected */}
      {totalOrderCount > 0 && !isOrderModalOpen && (
        <aside
          aria-label="Notifikasi pesanan aktif"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 bg-[#39251D] text-white px-5 py-3 rounded-full shadow-2xl border border-[#E5BE38]/40 flex items-center gap-4 transition-all duration-300 animate-bounce-subtle"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#E5BE38] text-[#39251D] font-bold text-xs flex items-center justify-center">
              {totalOrderCount}
            </span>
            <span className="text-xs sm:text-sm font-medium">Item Terpilih</span>
          </div>

          <div className="h-4 w-[1px] bg-white/20" />

          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="text-xs sm:text-sm font-semibold text-[#E5BE38] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Lihat Pesanan &amp; Chat WA</span>
            <i className="fa-brands fa-whatsapp text-emerald-400 text-sm"></i>
          </button>
        </aside>
      )}

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white text-[#39251D] border border-[#D9C9B4] shadow-lg hover:bg-[#F0E8D8] flex items-center justify-center transition-all duration-300 active:scale-95"
          title="Kembali ke atas"
          aria-label="Kembali ke atas halaman"
        >
          <i className="fa-solid fa-arrow-up text-xs"></i>
        </button>
      )}

    </div>
  );
}
