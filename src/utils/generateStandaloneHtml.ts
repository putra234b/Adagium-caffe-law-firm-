import { MENU_ITEMS, BRAND_CONFIG } from '../data/menuData';

export function getStandaloneHtmlString(): string {
  const itemsJson = JSON.stringify(MENU_ITEMS, null, 2);

  return `<!doctype html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ADAGIUM — Coffee & Law Firm | A Thoughtful Blend of Coffee & Ideas</title>
  <meta name="description" content="Discover a welcoming space where exceptional coffee, meaningful conversations, and thoughtful moments come together. ADAGIUM — Coffee & Law Firm." />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'warm-ivory': '#F8F6EF',
            'pure-white': '#FFFFFF',
            'soft-cream': '#F0E8D8',
            'signature-gold': '#E5BE38',
            'deep-brown': '#39251D',
            'coffee-brown': '#75513B',
            'muted-sage': '#A5AE94',
            'main-text': '#302820',
            'secondary-text': '#777067',
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
          }
        }
      }
    }
  </script>

  <style>
    body {
      background-color: #F8F6EF;
      color: #302820;
      font-family: 'Plus Jakarta Sans', sans-serif;
      overflow-x: hidden;
    }
    .font-serif-heading { font-family: 'Playfair Display', Georgia, serif; }
    .font-editorial { font-family: 'Cormorant Garamond', Georgia, serif; }
  </style>
</head>
<body class="bg-[#F8F6EF] text-[#302820] antialiased">

  <!-- NAVBAR -->
  <header id="navbar" class="fixed top-0 left-0 right-0 z-40 bg-[#F8F6EF]/95 backdrop-blur-md border-b border-[#F0E8D8] py-3.5 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
      <!-- LOGO -->
      <a href="#hero" class="flex items-center">
        <div class="bg-white border border-[#F0E8D8] px-3.5 py-1.5 rounded-md flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" class="shrink-0">
            <rect x="2" y="2" width="96" height="96" rx="4" stroke="#39251D" stroke-width="2.5" fill="#FFFFFF" />
            <line x1="16" y1="20" x2="84" y2="20" stroke="#E5BE38" stroke-width="4" stroke-linecap="round" />
            <circle cx="16" cy="20" r="3" fill="#E5BE38" />
            <circle cx="84" cy="20" r="3" fill="#E5BE38" />
            <line x1="28" y1="22" x2="18" y2="40" stroke="#E5BE38" stroke-width="1.8" />
            <line x1="28" y1="22" x2="38" y2="40" stroke="#E5BE38" stroke-width="1.8" />
            <line x1="16" y1="40" x2="40" y2="40" stroke="#E5BE38" stroke-width="2" stroke-linecap="round" />
            <line x1="14" y1="45" x2="42" y2="45" stroke="#E5BE38" stroke-width="2.5" stroke-linecap="round" />
            <line x1="72" y1="22" x2="62" y2="40" stroke="#E5BE38" stroke-width="1.8" />
            <line x1="72" y1="22" x2="82" y2="40" stroke="#E5BE38" stroke-width="1.8" />
            <line x1="60" y1="40" x2="84" y2="40" stroke="#E5BE38" stroke-width="2" stroke-linecap="round" />
            <line x1="58" y1="45" x2="86" y2="45" stroke="#E5BE38" stroke-width="2.5" stroke-linecap="round" />
            <path d="M40 26 L40 68 L45 72 L45 26 Z" fill="#E5BE38" />
            <path d="M60 26 L60 68 L55 72 L55 26 Z" fill="#E5BE38" />
            <path d="M45 26 L50 38 L55 26 L50 44 Z" fill="#E5BE38" />
            <rect x="47.5" y="44" width="5" height="26" fill="#E5BE38" />
            <path d="M45 70 L50 80 L55 70 Z" fill="#E5BE38" />
          </svg>
          <div class="text-left leading-none">
            <span class="font-serif-heading font-black tracking-[0.14em] text-[#39251D] text-base block">ADAGIUM</span>
            <span class="font-editorial font-bold tracking-[0.2em] text-[#39251D] text-[8.5px] mt-0.5 block">—COFFEE &amp; LAW FIRM—</span>
          </div>
        </div>
      </a>

      <!-- NAV LINKS -->
      <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
        <a href="#hero" class="text-[#302820] hover:text-[#75513B] transition-colors">Beranda</a>
        <a href="#signature" class="text-[#302820] hover:text-[#75513B] transition-colors">Signature</a>
        <a href="#menu" class="text-[#302820] hover:text-[#75513B] transition-colors">Katalog 20 Menu</a>
        <a href="#story" class="text-[#302820] hover:text-[#75513B] transition-colors">Cerita Brand</a>
        <a href="#gallery" class="text-[#302820] hover:text-[#75513B] transition-colors">Galeri</a>
        <a href="#contact" class="text-[#302820] hover:text-[#75513B] transition-colors">Kontak &amp; Lokasi</a>
      </nav>

      <!-- CTA -->
      <div class="flex items-center gap-3">
        <a href="#contact" class="inline-flex items-center gap-2 bg-[#39251D] hover:bg-[#75513B] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm">
          <i class="fa-brands fa-whatsapp text-emerald-400"></i>
          <span>Pesan via WhatsApp</span>
        </a>
        <button id="mobileMenuBtn" class="md:hidden p-2 text-[#39251D]">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>

    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden md:hidden px-4 pt-3 pb-4 space-y-2 bg-[#F8F6EF] border-t border-[#F0E8D8] mt-3">
      <a href="#hero" class="block py-2 text-sm text-[#302820]">Beranda</a>
      <a href="#signature" class="block py-2 text-sm text-[#302820]">Signature</a>
      <a href="#menu" class="block py-2 text-sm text-[#302820]">Katalog 20 Menu</a>
      <a href="#story" class="block py-2 text-sm text-[#302820]">Cerita Brand</a>
      <a href="#gallery" class="block py-2 text-sm text-[#302820]">Galeri</a>
      <a href="#contact" class="block py-2 text-sm text-[#302820]">Kontak &amp; Pemesanan</a>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="hero" class="pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 text-left">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0E8D8] border border-[#D9C9B4]/60 text-[#75513B] text-xs font-semibold uppercase mb-5">
          <span class="w-2 h-2 rounded-full bg-[#E5BE38]"></span>
          COFFEE & LAW FIRM
        </div>
        <h1 class="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#39251D] leading-[1.15] mb-6">
          A Thoughtful Blend of <span class="italic font-normal text-[#75513B]">Coffee</span> &amp; <span class="underline decoration-[#E5BE38]">Ideas</span>.
        </h1>
        <p class="text-base sm:text-lg text-[#777067] max-w-xl leading-relaxed mb-8">
          Discover a welcoming space where exceptional coffee, meaningful conversations, and thoughtful moments come together.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#menu" class="px-7 py-3.5 bg-[#39251D] text-white font-medium rounded-full hover:bg-[#75513B] transition-all flex items-center gap-2 shadow-sm">
            <span>Explore Our Menu</span>
            <i class="fa-solid fa-arrow-right text-xs text-[#E5BE38]"></i>
          </a>
          <a href="#story" class="px-7 py-3.5 bg-white text-[#39251D] border border-[#D9C9B4] font-medium rounded-full hover:bg-[#F0E8D8] transition-all">
            <span>Discover Adagium</span>
          </a>
        </div>
      </div>
      <div class="lg:col-span-5">
        <div class="rounded-2xl p-2 bg-white border border-[#F0E8D8] shadow-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" alt="Sajian Kopi ADAGIUM" class="w-full h-80 sm:h-96 object-cover rounded-xl" />
        </div>
      </div>
    </div>
  </section>

  <!-- SIGNATURE MENU -->
  <section id="signature" class="py-20 bg-[#F0E8D8]/40 border-y border-[#F0E8D8]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-2xl mx-auto mb-12">
        <span class="text-xs font-semibold tracking-widest uppercase text-[#75513B]">Pilihan Unggulan</span>
        <h2 class="font-serif-heading text-3xl font-bold text-[#39251D] mt-1 mb-3">Signature Selections</h2>
        <p class="text-sm text-[#777067]">Racikan istimewa yang mencerminkan harmoni cita rasa berkelas.</p>
      </div>
      <div id="signatureGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"></div>
    </div>
  </section>

  <!-- MENU CATALOG -->
  <section id="menu" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="text-xs font-semibold tracking-widest uppercase text-[#75513B]">Daftar 20 Menu Resmi (@adagiumcaffe)</span>
      <h2 class="font-serif-heading text-3xl sm:text-4xl font-bold text-[#39251D] mt-1 mb-3">Curated Food &amp; Beverage</h2>
      <p class="text-sm text-[#777067]">20 racikan minuman kopi dan artisan sesuai kartu Polaroid asli ADAGIUM.</p>
    </div>

    <!-- Filters & Search -->
    <div class="bg-white p-4 rounded-2xl border border-[#F0E8D8] mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      <div class="flex flex-wrap gap-2" id="categoryButtons">
        <button onclick="filterCategory('all')" class="cat-btn active px-4 py-2 rounded-full text-xs font-medium bg-[#39251D] text-white">Semua</button>
        <button onclick="filterCategory('coffee')" class="cat-btn px-4 py-2 rounded-full text-xs font-medium bg-[#F8F6EF] text-[#777067]">Kopi</button>
        <button onclick="filterCategory('non-coffee')" class="cat-btn px-4 py-2 rounded-full text-xs font-medium bg-[#F8F6EF] text-[#777067]">Susu &amp; Artisan</button>
        <button onclick="filterCategory('tea-refresher')" class="cat-btn px-4 py-2 rounded-full text-xs font-medium bg-[#F8F6EF] text-[#777067]">Teh &amp; Segar</button>
      </div>
      <div class="relative min-w-[240px]">
        <input type="text" id="searchInput" oninput="handleSearch()" placeholder="Cari kopi, taro, latte..." class="w-full bg-[#F8F6EF] text-xs px-4 py-2.5 rounded-full border border-[#D9C9B4]" />
      </div>
    </div>

    <!-- 20 Menu Items Polaroid Grid -->
    <div id="menuGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
  </section>

  <!-- BRAND STORY -->
  <section id="story" class="py-20 bg-[#F0E8D8]/50 border-t border-[#F0E8D8]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
      <div class="lg:col-span-5">
        <div class="rounded-2xl p-2 bg-white border border-[#F0E8D8] shadow-md">
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" alt="Suasana ADAGIUM" class="w-full h-80 object-cover rounded-xl" />
        </div>
      </div>
      <div class="lg:col-span-7">
        <span class="text-xs uppercase font-semibold tracking-widest text-[#75513B]">Cerita Brand</span>
        <h2 class="font-serif-heading text-3xl font-bold text-[#39251D] mt-1 mb-5">A Space Built for Reflection &amp; Meaningful Discourse</h2>
        <div class="space-y-4 text-sm text-[#777067] leading-relaxed">
          <p>ADAGIUM lahir dari keyakinan sederhana bahwa secangkir kopi istimewa dapat menjadi perantara lahirnya dialog yang jujur, pemikiran yang jernih, dan ketenangan di tengah rutinitas.</p>
          <p>Kecintaan mendalam terhadap dunia kopi berpadu harmonis dengan atmosfer yang bermartabat dan hangat, menyambut Anda dengan kehangatan tulus.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- GALLERY & LIGHTBOX -->
  <section id="gallery" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span class="text-xs font-semibold tracking-widest uppercase text-[#75513B]">Galeri Visual</span>
    <h2 class="font-serif-heading text-3xl font-bold text-[#39251D] mt-1 mb-10">20 Menu Photo Gallery</h2>
    <div id="galleryGrid" class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3"></div>
  </section>

  <!-- CONTACT & WHATSAPP -->
  <section id="contact" class="py-20 bg-[#F0E8D8]/30 border-t border-[#F0E8D8]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="text-xs font-semibold tracking-widest uppercase text-[#75513B]">Kontak Resmi</span>
      <h2 class="font-serif-heading text-3xl font-bold text-[#39251D] mt-1 mb-8">Pemesanan Langsung via WhatsApp</h2>
      
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-[#F0E8D8] shadow-sm text-left max-w-xl mx-auto">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div>
            <p class="text-xs uppercase font-bold text-[#75513B]">Nomor WhatsApp Resmi</p>
            <p class="font-serif-heading text-lg font-bold text-[#39251D]">+62 812-3456-7890</p>
            <p class="text-[11px] text-[#777067]">Instagram: @adagiumcaffe</p>
          </div>
        </div>
        <p class="text-xs text-[#777067] mb-6">
          Klik tombol di bawah untuk terhubung langsung dengan staf ADAGIUM guna konfirmasi menu atau reservasi meja santai.
        </p>
        <a href="https://wa.me/6281234567890?text=Halo%20ADAGIUM,%20saya%20ingin%20memesan%20kopi." target="_blank" class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full flex items-center justify-center gap-2 text-sm transition-all shadow-sm">
          <i class="fa-brands fa-whatsapp text-lg"></i>
          <span>Kirim Chat WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-white border-t border-[#F0E8D8] py-8 text-center text-xs text-[#777067]">
    <p>&copy; 2026 <strong>ADAGIUM — Coffee &amp; Law Firm</strong> (@adagiumcaffe). Seluruh hak cipta dilindungi.</p>
  </footer>

  <!-- DATA & SCRIPTS -->
  <script>
    const MENU_DATA = ${itemsJson};
    let currentCat = 'all';
    let searchQuery = '';

    function renderSignature() {
      const container = document.getElementById('signatureGrid');
      const sigs = MENU_DATA.filter(i => i.isSignature).slice(0, 4);
      container.innerHTML = sigs.map(item => \`
        <div class="bg-white rounded-xl overflow-hidden border border-[#F0E8D8] shadow-xs hover:shadow-md transition-shadow">
          <img src="\${item.localImagePath}" onerror="this.src='\${item.fallbackImageUrl}'" alt="\${item.altText}" class="w-full h-48 object-cover" />
          <div class="p-4">
            <span class="text-[10px] bg-[#39251D] text-[#E5BE38] px-2 py-0.5 rounded font-mono uppercase">\${item.id}</span>
            <h3 class="font-serif-heading font-bold text-[#39251D] mt-2">\${item.name}</h3>
            <p class="text-xs text-[#777067] mt-1 line-clamp-2">\${item.description}</p>
            <div class="mt-4 pt-3 border-t border-[#F0E8D8] flex items-center justify-between">
              <span class="font-bold text-xs text-[#39251D]">\${item.price}</span>
              <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20\${encodeURIComponent(item.name)}" target="_blank" class="text-xs text-emerald-600 font-semibold hover:underline">Pesan WA &rarr;</a>
            </div>
          </div>
        </div>
      \`).join('');
    }

    function renderMenu() {
      const container = document.getElementById('menuGrid');
      const filtered = MENU_DATA.filter(item => {
        const matchesCat = currentCat === 'all' || item.category === currentCat;
        const matchesQ = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQ;
      });

      if (filtered.length === 0) {
        container.innerHTML = '<div class="col-span-full py-12 text-center text-sm text-[#777067]">Menu tidak ditemukan.</div>';
        return;
      }

      container.innerHTML = filtered.map(item => \`
        <div class="bg-[#5c3e30] rounded-2xl p-4 shadow-md text-left flex flex-col justify-between">
          <div class="bg-[#FAF7F2] p-3 pb-6 rounded-lg shadow-sm">
            <div class="h-44 w-full rounded overflow-hidden bg-[#EAE2D5]">
              <img src="\${item.localImagePath}" onerror="this.src='\${item.fallbackImageUrl}'" alt="\${item.altText}" class="w-full h-full object-cover" />
            </div>
            <div class="mt-3 flex items-baseline justify-between gap-1">
              <h3 class="font-editorial italic font-bold text-lg text-[#39251D]">\${item.name}</h3>
              <span class="text-xs font-semibold text-[#75513B]">\${item.price}</span>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-white text-xs">
            <span class="text-[10px] text-white/70 uppercase font-mono">\${item.id}</span>
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20\${encodeURIComponent(item.name)}" target="_blank" class="font-semibold text-[#E5BE38] hover:underline">Pesan WA</a>
          </div>
        </div>
      \`).join('');
    }

    function renderGallery() {
      const container = document.getElementById('galleryGrid');
      container.innerHTML = MENU_DATA.map((item, idx) => \`
        <div class="h-36 rounded-xl overflow-hidden bg-[#F0E8D8] border border-[#F0E8D8] relative group cursor-pointer" onclick="alert('\${item.name} - \${item.price}')">
          <img src="\${item.localImagePath}" onerror="this.src='\${item.fallbackImageUrl}'" alt="\${item.altText}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <span class="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">\${item.id}</span>
        </div>
      \`).join('');
    }

    function filterCategory(cat) {
      currentCat = cat;
      document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-[#39251D]', 'text-white');
        btn.classList.add('bg-[#F8F6EF]', 'text-[#777067]');
      });
      event.target.classList.remove('bg-[#F8F6EF]', 'text-[#777067]');
      event.target.classList.add('bg-[#39251D]', 'text-white');
      renderMenu();
    }

    function handleSearch() {
      searchQuery = document.getElementById('searchInput').value;
      renderMenu();
    }

    document.getElementById('mobileMenuBtn').onclick = () => {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    };

    renderSignature();
    renderMenu();
    renderGallery();
  </script>
</body>
</html>`;
}
