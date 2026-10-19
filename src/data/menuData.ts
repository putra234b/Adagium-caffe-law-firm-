export interface MenuItem {
  id: string; // e.g. "menu-01"
  name: string;
  price: string; // e.g. "Rp 25.000" (Placeholder resmi yang siap diubah)
  numericPrice: number; // e.g. 25000 (untuk kalkulasi otomatis WhatsApp)
  category: 'coffee' | 'non-coffee' | 'tea-refresher';
  categoryLabel: string;
  description: string;
  localImagePath: string;
  fallbackImageUrl: string;
  altText: string;
  isSignature?: boolean;
  tags?: string[];
}

export const BRAND_CONFIG = {
  name: "ADAGIUM",
  tagline: "COFFEE & LAW FIRM",
  headline: "A Thoughtful Blend of Coffee & Ideas.",
  description: "Discover a welcoming space where exceptional coffee, meaningful conversations, and thoughtful moments come together.",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp resmi pemilik
  instagramHandle: "@adagiumcaffe",
  instagramUrl: "https://instagram.com/adagiumcaffe",
  address: "Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan", // Placeholder alamat resmi
  googleMapsUrl: "https://maps.google.com/?q=Adagium+Coffee",
  hours: "Senin – Minggu: 08:00 – 22:00 WIB",
  establishedNote: "Tempat bertemunya kopi berkelas dan gagasan bermakna."
};

/**
 * Pemetaan 20 Foto Menu Resmi ADAGIUM (@adagiumcaffe)
 * Diambil langsung dari 20 foto kartu menu bertema Polaroid yang diunggah pemilik:
 * 1. Espresso coffe
 * 2. Butterscotch Latte
 * 3. Lecy Tea
 * 4. Blue ocean
 * 5. Vietnam Driv
 * 6. Taro ice
 * 7. Matcha
 * 8. Yakul lecy
 * 9. Banana latte
 * 10. Capucino latte
 * 11. Caramel latte
 * 12. Taro
 * 13. Lemon Tea
 * 14. Strawberry milk
 * 15. Americano
 * 16. Hazelnut latte
 * 17. Vanila latte
 * 18. Chocolate milk
 * 19. V60
 * 20. Black Tea
 */
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "menu-01",
    name: "Espresso coffe",
    price: "Rp 22.000",
    numericPrice: 22000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Ekstraksi kopi murni bertekanan tinggi dengan lapisan crema keemasan yang tebal, rasa pekat dan berkarakter kuat.",
    localImagePath: "/assets/images/menu-01.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    altText: "Espresso coffe - Sajian single shot espresso dalam gelas kaca kecil dengan sendok perak",
    isSignature: true,
    tags: ["Hot", "Single Shot", "Bold Crema"]
  },
  {
    id: "menu-02",
    name: "Butterscotch Latte",
    price: "Rp 32.000",
    numericPrice: 32000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Perpaduan elegan espresso dengan fresh milk dan sirup butterscotch gurih karamel berpadu es batu segar.",
    localImagePath: "/assets/images/menu-02.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    altText: "Butterscotch Latte - Gelas tinggi dengan gradasi susu creamy dan espresso berpadu butterscotch",
    isSignature: true,
    tags: ["Signature", "Iced", "Sweet & Creamy"]
  },
  {
    id: "menu-03",
    name: "Lecy Tea",
    price: "Rp 25.000",
    numericPrice: 25000,
    category: "tea-refresher",
    categoryLabel: "Teh & Segar",
    description: "Seduhan teh hitam aromatik dipadu buah leci manis asli dan daun mint segar yang menyegarkan dahaga.",
    localImagePath: "/assets/images/menu-03.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    altText: "Lecy Tea - Es teh buah leci dingin dengan garnish daun mint segar",
    isSignature: false,
    tags: ["Iced", "Real Lychee", "Refreshing"]
  },
  {
    id: "menu-04",
    name: "Blue ocean",
    price: "Rp 28.000",
    numericPrice: 28000,
    category: "tea-refresher",
    categoryLabel: "Teh & Segar",
    description: "Mocktail biru cerah berkilau dengan sensasi soda berkarbonasi dingin, irisan lemon segar, dan aroma citrus tropis.",
    localImagePath: "/assets/images/menu-04.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    altText: "Blue ocean - Minuman sparkling biru segar dalam gelas tinggi dengan garnish lemon dan mint",
    isSignature: true,
    tags: ["Signature", "Sparkling", "Tropical Mocktail"]
  },
  {
    id: "menu-05",
    name: "Vietnam Driv",
    price: "Rp 26.000",
    numericPrice: 26000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Kopi seduh tetes lambat tradisional menggunakan saringan phin stainless steel di atas krimer kental manis legit.",
    localImagePath: "/assets/images/menu-05.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    altText: "Vietnam Driv - Kopi tetes Vietnam Drip dengan lapisan kental manis putih di dasar gelas",
    isSignature: false,
    tags: ["Traditional", "Phin Drip", "Sweet & Rich"]
  },
  {
    id: "menu-06",
    name: "Taro ice",
    price: "Rp 26.000",
    numericPrice: 26000,
    category: "non-coffee",
    categoryLabel: "Susu & Artisan",
    description: "Sajian minuman talas ungu lembut berpadu susu segar dingin dengan tekstur velvety yang gurih manis pas.",
    localImagePath: "/assets/images/menu-06.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    altText: "Taro ice - Gelas kaca berisi minuman taro ungu lembut berbusa di atas tatakan kayu",
    isSignature: false,
    tags: ["Iced", "Non-Coffee", "Velvety"]
  },
  {
    id: "menu-07",
    name: "Matcha",
    price: "Rp 28.000",
    numericPrice: 28000,
    category: "non-coffee",
    categoryLabel: "Susu & Artisan",
    description: "Bubuk teh hijau Jepang murni berpadu susu segar lembut, menghasilkan harmoni rasa earthy, manis, dan creamy.",
    localImagePath: "/assets/images/menu-07.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    altText: "Matcha - Sajian iced matcha latte hijau cerah dalam gelas can dengan buih lembut",
    isSignature: true,
    tags: ["Japanese Green Tea", "Creamy", "Calming"]
  },
  {
    id: "menu-08",
    name: "Yakul lecy",
    price: "Rp 26.000",
    numericPrice: 26000,
    category: "tea-refresher",
    categoryLabel: "Teh & Segar",
    description: "Kombinasi probiotik Yakult dingin yang asam segar dengan kelembutan sirup buah leci dan mint aromatik.",
    localImagePath: "/assets/images/menu-08.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    altText: "Yakul lecy - Minuman segar Yakult leci dengan es batu dan hiasan mint di atas tatakan rotan",
    isSignature: false,
    tags: ["Yakult", "Sweet & Tangy", "Iced"]
  },
  {
    id: "menu-09",
    name: "Banana latte",
    price: "Rp 30.000",
    numericPrice: 30000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Racikan inovatif espresso dengan susu segar, kelembutan rasa pisang alami, dan taburan crumble lezat.",
    localImagePath: "/assets/images/menu-09.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    altText: "Banana latte - Iced latte berlayer dengan rasa pisang manis dan taburan remah renyah di atasnya",
    isSignature: true,
    tags: ["Specialty", "Banana Note", "Layered Latte"]
  },
  {
    id: "menu-10",
    name: "Capucino latte",
    price: "Rp 28.000",
    numericPrice: 28000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Espresso klasik dengan perbandingan seimbang antara steamed milk dingin dan busa susu lembut di atas es.",
    localImagePath: "/assets/images/menu-10.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    altText: "Capucino latte - Gelas tinggi berisi sajian es kapusino dengan busa lembut dan es batu",
    isSignature: false,
    tags: ["Classic", "Frothy", "Smooth"]
  },
  {
    id: "menu-11",
    name: "Caramel latte",
    price: "Rp 30.000",
    numericPrice: 30000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Kopi susu dingin dengan ulir sirup karamel bakar kental yang memberikan aksen manis gurih menggoda.",
    localImagePath: "/assets/images/menu-11.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    altText: "Caramel latte - Sajian kopi es karamel dengan motif lelehan karamel di dinding gelas kristal",
    isSignature: false,
    tags: ["Caramel Swirl", "Sweet", "Iced"]
  },
  {
    id: "menu-12",
    name: "Taro",
    price: "Rp 25.000",
    numericPrice: 25000,
    category: "non-coffee",
    categoryLabel: "Susu & Artisan",
    description: "Varian taro klasik kaya rasa dengan perpaduan susu murni dan aroma talas yang harum memanjakan.",
    localImagePath: "/assets/images/menu-12.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    altText: "Taro - Minuman taro dingin berbusa ungu disajikan di atas nampan kayu",
    isSignature: false,
    tags: ["Non-Coffee", "Taro Flavor", "Sweet"]
  },
  {
    id: "menu-13",
    name: "Lemon Tea",
    price: "Rp 22.000",
    numericPrice: 22000,
    category: "tea-refresher",
    categoryLabel: "Teh & Segar",
    description: "Teh hitam seduh dingin dengan perasan buah lemon segar asli, memberikan kesegaran asam manis alami.",
    localImagePath: "/assets/images/menu-13.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    altText: "Lemon Tea - Gelas tinggi es lemon tea dengan irisan buah lemon segar dan es batu melimpah",
    isSignature: false,
    tags: ["Real Lemon", "Citrus", "Refreshing"]
  },
  {
    id: "menu-14",
    name: "Strawberry milk",
    price: "Rp 28.000",
    numericPrice: 28000,
    category: "non-coffee",
    categoryLabel: "Susu & Artisan",
    description: "Susu murni segar dengan selai stroberi buah asli di dasar gelas, manis alami dan asam buah yang segar.",
    localImagePath: "/assets/images/menu-14.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    altText: "Strawberry milk - Minuman susu stroberi artisan dengan layer buah stroberi merah segar",
    isSignature: true,
    tags: ["Real Strawberry", "Creamy", "Artisan Milk"]
  },
  {
    id: "menu-15",
    name: "Americano",
    price: "Rp 24.000",
    numericPrice: 24000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Double shot espresso kaya aroma dipadukan dengan air dingin dan balok es kristal, menyegarkan dan bebas gula.",
    localImagePath: "/assets/images/menu-15.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    altText: "Americano - Gelas bulat berisi es americano hitam pekat dengan butiran embun dingin",
    isSignature: false,
    tags: ["Double Shot", "Sugar Free", "Clean Finish"]
  },
  {
    id: "menu-16",
    name: "Hazelnut latte",
    price: "Rp 30.000",
    numericPrice: 30000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Espresso harum dipadu susu segar dingin dan aroma kacang hazelnut panggang dengan rasa gurih yang legit.",
    localImagePath: "/assets/images/menu-16.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    altText: "Hazelnut latte - Minuman kopi latte hazelnut dengan taburan kacang sangrai di atasnya",
    isSignature: false,
    tags: ["Roasted Hazelnut", "Nutty", "Creamy"]
  },
  {
    id: "menu-17",
    name: "Vanila latte",
    price: "Rp 30.000",
    numericPrice: 30000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Kombinasi klasik kopi espresso, susu segar lembut, dan ekstrak vanila manis aromatik di atas tatakan teraso.",
    localImagePath: "/assets/images/menu-17.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    altText: "Vanila latte - Sajian es vanilla latte berlelehan indah di atas tatakan keramik",
    isSignature: false,
    tags: ["Vanilla Essence", "Iced", "Mellow"]
  },
  {
    id: "menu-18",
    name: "Chocolate milk",
    price: "Rp 26.000",
    numericPrice: 26000,
    category: "non-coffee",
    categoryLabel: "Susu & Artisan",
    description: "Minuman cokelat hitam pekat dipadukan dengan susu segar, menghasilkan cita rasa kakao murni yang kental memikat.",
    localImagePath: "/assets/images/menu-18.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    altText: "Chocolate milk - Gelas tinggi es cokelat kental dengan motif sirup cokelat pekat di dinding gelas",
    isSignature: false,
    tags: ["Rich Cocoa", "Comforting", "Non-Coffee"]
  },
  {
    id: "menu-19",
    name: "V60",
    price: "Rp 30.000",
    numericPrice: 30000,
    category: "coffee",
    categoryLabel: "Kopi",
    description: "Seduhan kopi manual pour-over menggunakan dripper kerucut V60 untuk mengeluarkan karakter rasa bersih dan buah segar.",
    localImagePath: "/assets/images/menu-19.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    altText: "V60 - Alat seduh manual brew V60 dengan decanter kaca bening berisi tetesan kopi hangat",
    isSignature: true,
    tags: ["Manual Brew", "Single Origin", "Floral & Fruity"]
  },
  {
    id: "menu-20",
    name: "Black Tea",
    price: "Rp 20.000",
    numericPrice: 20000,
    category: "tea-refresher",
    categoryLabel: "Teh & Segar",
    description: "Teh hitam seduh dingin klasik dengan busa lembut dan balok es batu melimpah, cita rasa teh murni yang melegakan.",
    localImagePath: "/assets/images/menu-20.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    altText: "Black Tea - Es teh hitam segar disajikan di gelas bersegi dengan es batu kristal",
    isSignature: false,
    tags: ["Classic Tea", "Brisk", "Iced"]
  }
];

export const CATEGORIES = [
  { id: "all", label: "Semua Menu", icon: "fa-solid fa-mug-saucer" },
  { id: "coffee", label: "Kopi", icon: "fa-solid fa-coffee" },
  { id: "non-coffee", label: "Susu & Artisan", icon: "fa-solid fa-glass-water" },
  { id: "tea-refresher", label: "Teh & Minuman Segar", icon: "fa-solid fa-leaf" }
];
