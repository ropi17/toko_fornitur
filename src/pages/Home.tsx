import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import { ArrowRight, Star, Quote, Sparkles, Shield, Compass, BadgeCheck } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    title: 'Desain Interior Premium Untuk Hunian Impian Anda',
    subtitle: 'Koleksi Furnitur Kayu Jati Terkurasi & Custom Berkualitas Tinggi'
  },
  {
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80',
    title: 'Keindahan Estetika Skandinavia yang Abadi',
    subtitle: 'Sentuhan Kayu Ek Berkualitas untuk Kamar Tidur Penuh Kedamaian'
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    title: 'Sentuhan Artisan & Desainer Profesional',
    subtitle: 'Mebel Handcrafted Tradisional Dipadu Kebutuhan Hidup Modern'
  }
];

const TESTIMONIALS = [
  {
    name: 'Rian Dewanto',
    role: 'Pemilik Kafe Kopi Sore',
    text: 'Meja makan Floren dan deretan kursi rotan di kafe kami dipuji oleh setiap pengunjung. Struktur kayu jatinya sangat kokoh dan pengerjaannya sangat presisi rapi. Pelayanan kustomisasi ukurannya pun sangat membantu!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Amalia Siregar',
    role: 'Desainer Interior Rumah Tangga',
    text: 'Sofa Oxford velvet yang kami pesan untuk proyek townhouse di BSD tampil luar biasa anggun. Busa sofa ini tebal elastis dan jahitannya berkelas tinggi. Toko Fornitur adalah partner tepercaya saya untuk proyek klien.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Hendry Lim',
    role: 'CEO Coworking Space Hub',
    text: 'Membeli selusin kursi kerja AeroMesh dan meja Zenith untuk kantor cabang baru kami. Karyawan sangat puas dengan kenyamanan penopang pinggangnya. Produktivitas melesat tanpa keluhan sakit punggung lagi.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const Home: React.FC = () => {
  const { setCurrentPage, addToCart, toggleWishlist, wishlist } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto scroll slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const popularProducts = PRODUCTS.slice(0, 4);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-20 pb-20 animate-page-enter">
      {/* 1. Hero Slides Carousel Section */}
      <section className="relative h-[85vh] bg-stone-900 overflow-hidden shadow-lg">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/45 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105 transition-transform duration-10000"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
              <div className="max-w-2xl text-amber-50">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-600/35 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md mb-6 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  Koleksi Baru 2026
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-[1.1] tracking-wide mb-6">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-stone-200/90 leading-relaxed mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setCurrentPage('products')}
                    className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    Eksplorasi Produk
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20 backdrop-blur-md"
                  >
                    Konsultasi Dekor Gratis
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full border border-white/40 transition-all ${
                idx === activeSlide ? 'bg-amber-500 w-8' : 'bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Core Value Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block mb-2">Mengapa Memilih Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900">Standardisasi Kemewahan Mebel Indonesia</h2>
          <div className="w-16 h-1 bg-amber-650 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center text-amber-650 mx-auto border border-stone-150">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-850">Kayu Jati Pilihan</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Kami memproses papan kayu solid grade perhutani berkualitas yang telah melewati oven pengeringan modern guna ketahanan mebel bebas bengkok.
            </p>
          </div>
          <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center text-amber-650 mx-auto border border-stone-150">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-850">Desain Ergonomis</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Setiap mebel, mulai dari sofa keluarga hingga kursi kantor, dikaji secara cermat mengikuti proporsi alami lekuk tubuh manusia demi kenyamanan tinggi.
            </p>
          </div>
          <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center text-amber-650 mx-auto border border-stone-150">
              <BadgeCheck className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-855">Sentuhan Kustomisasi</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Anda berhak memiliki ukuran dan warna yang persis menyatu dengan hunian Anda. Tim desainer kami siap membuat rendering sketsa 3D secara cuma-cuma.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Popular Collection Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block mb-2">Terpopuler</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900">Produk Pilihan Konsumen</h2>
          </div>
          <button
            onClick={() => setCurrentPage('products')}
            className="group px-5 py-2.5 bg-stone-900 hover:bg-stone-810 text-amber-50 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 shadow"
          >
            Lihat Koleksi Lengkap
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative pt-[75%] bg-stone-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-stone-950 text-[10px] font-bold uppercase py-1 px-2.5 rounded-lg shadow-sm">
                    Hot Deal
                  </div>
                  {/* Heart Action */}
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-stone-400 hover:text-rose-600 transition-colors shadow-sm"
                    aria-label="Tambah ke impian"
                  >
                    <Star className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 capitalize block mb-0.5">{product.categoryLabel}</span>
                    <h3 className="font-serif font-bold text-stone-900 text-base line-clamp-1 group-hover:text-amber-750 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-2 mb-3">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-semibold text-stone-700">{product.rating}</span>
                      <span className="text-[10px] text-stone-400">(45 ulasan)</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-stone-950 text-base mb-4">
                      {formatCurrency(product.price)}
                    </p>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-50 text-xs font-medium rounded-lg transition-colors tracking-wide"
                    >
                      Beli Langsung
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Elegant Promo / Consultation Banner */}
      <section className="bg-stone-900 text-amber-50 py-20 relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-amber-500 font-serif italic text-lg block">Wujudkan Rumah Impian Anda</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif max-w-3xl mx-auto leading-tight">
            Konsultasi Desain & Tata Letak Ruang Gratis dengan Desainer Kami
          </h2>
          <p className="text-stone-300 text-base max-w-xl mx-auto leading-relaxed">
            Kirimkan foto ruangan atau denah rumah Anda, kami akan pilihkan koleksi terbaik dan membuat ilustrasi 3D layout gratis lengkap dengan penawaran mebel eksklusif.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-lg transition-colors shadow-lg"
            >
              Hubungi Tim Arsitek Kami
            </button>
          </div>
        </div>
      </section>

      {/* 5. Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block mb-2">Testimoni Klien</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900">Apa Kata Mereka Tentang Kami</h2>
          <div className="w-16 h-1 bg-amber-650 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-0.5">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-500/20 shrink-0" />
                <p className="text-stone-605 text-sm leading-relaxed italic">
                  "{testi.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-stone-100">
                <img 
                  src={testi.avatar} 
                  alt={testi.name} 
                  className="w-10 h-10 rounded-full object-cover shrink-0 bg-stone-100" 
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-stone-900">{testi.name}</h4>
                  <p className="text-[10px] text-stone-500 mt-0.5">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
