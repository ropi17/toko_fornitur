import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/mockData';
import type { Product } from '../data/mockData';
import { Search, SlidersHorizontal, Star, Heart, ShoppingBag, Eye, X, Check } from 'lucide-react';

export const Products: React.FC = () => {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number>(20000000); // 20M max
  const [sortOption, setSortOption] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter & Sort Logic
  const categories = [
    { label: 'Semua Koleksi', value: 'all' },
    { label: 'Ruang Tamu', value: 'living' },
    { label: 'Kamar Tidur', value: 'bedroom' },
    { label: 'Ruang Kerja', value: 'workspace' },
    { label: 'Ruang Makan', value: 'dining' },
    { label: 'Outdoor', value: 'outdoor' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0; // Default Featured (as defined in array)
  });

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-page-enter">
      {/* Page Header */}
      <div className="text-center md:text-left space-y-2 border-b border-stone-200 pb-6">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block">Katalog Mebel</span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">Eksplorasi Lini Furnitur Eksklusif</h1>
        <p className="text-stone-500 text-sm max-w-xl leading-relaxed">
          Temukan kehangatan dari material kayu kelas satu yang bermutu tinggi dan nyaman digunakan di setiap aktivitas harian Anda.
        </p>
      </div>

      {/* Toggle Filters Button for Mobile */}
      <div className="lg:hidden flex items-center justify-between bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
        <p className="text-xs font-medium text-stone-500">
          Koleksi: <span className="font-semibold text-stone-900">{filteredProducts.length} produk</span>
        </p>
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-50 text-xs font-semibold rounded-lg shadow transition-colors"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" />
          {showMobileFilters ? 'Tutup Saringan' : 'Saring & Cari'}
        </button>
      </div>

      {/* Catalog Search & Filters Panel */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Filter Settings */}
        <aside className={`${showMobileFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-8 shrink-0`}>
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <h3 className="font-serif font-bold text-stone-850 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-600" />
              Saring Produk
            </h3>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange(20000000);
                setSortOption('featured');
              }}
              className="text-[10px] text-stone-400 hover:text-amber-655 font-semibold uppercase hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Search Box */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-600 block">Cari Produk</label>
            <div className="relative">
              <input
                type="text"
                placeholder="cth: sofa, jati..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Categories Radio/Tabs list */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-stone-605 block">Kategori Ruangan</label>
            <div className="space-y-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? 'bg-amber-600 text-stone-950 font-bold'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-semibold text-stone-600">
              <label>Harga Maksimum</label>
              <span className="font-semibold text-amber-950 font-sans">{formatCurrency(priceRange)}</span>
            </div>
            <input
              type="range"
              min={1000000}
              max={20000000}
              step={500000}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-ew-resize"
            />
            <div className="flex justify-between text-[10px] text-stone-400">
              <span>Rp 1 Jt</span>
              <span>Rp 20 Jt</span>
            </div>
          </div>
        </aside>

        {/* Right Side: Product Catalog Grid */}
        <div className="flex-1 w-full space-y-6">
          {/* Sorting and Grid Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm w-full">
            <p className="text-xs font-medium text-stone-500 hidden lg:block">
              Menampilkan <span className="font-semibold text-stone-900">{filteredProducts.length}</span> produk eksklusif
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs text-stone-500 font-medium whitespace-nowrap">Urutkan:</label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-1.5 border border-stone-200 rounded-lg text-xs text-stone-700 bg-stone-50 focus:outline-none focus:ring-1 focus:ring-amber-500 font-medium"
              >
                <option value="featured">Unggulan</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>
          </div>

          {/* Grid Layout */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-stone-200 rounded-2xl p-16 text-center space-y-4 text-stone-500">
              <p className="font-medium text-stone-700">Mebel Tidak Ditemukan</p>
              <p className="text-xs max-w-sm mx-auto">Kami tidak dapat menemukan produk yang sesuai kriteria pencarian atau batas harga Anda. Cobalah set ulang filter Anda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isWishlisted = wishlist.includes(product.id);
                return (
                  <div 
                    key={product.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="relative pt-[75%] bg-stone-50 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Popular Tag */}
                      {product.isPopular && (
                        <div className="absolute top-3 left-3 bg-amber-600 text-stone-950 text-[10px] font-bold uppercase py-1 px-2.5 rounded-lg shadow-sm">
                          Terpopuler
                        </div>
                      )}

                      {/* Floating actions menu */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <button 
                          onClick={() => toggleWishlist(product.id)}
                          className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-stone-400 hover:text-rose-600 transition-colors shadow-sm"
                          title="Wishlist"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>
                        <button 
                          onClick={() => setSelectedProduct(product)}
                          className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-stone-400 hover:text-amber-600 transition-colors shadow-sm"
                          title="Detail Cepat"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[9px] text-stone-400 capitalize block">{product.categoryLabel}</span>
                        <h4 className="font-serif font-bold text-stone-900 text-sm line-clamp-1 group-hover:text-amber-700 transition-colors">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-1 py-1">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span className="text-xs font-semibold text-stone-700">{product.rating}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <p className="font-sans font-bold text-stone-950 text-sm mb-3">
                          {formatCurrency(product.price)}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="flex-1 py-2 border border-stone-200 hover:bg-stone-50 text-stone-605 font-medium rounded-lg text-xs transition-all text-center"
                          >
                            Spesifikasi
                          </button>
                          <button
                            onClick={() => addToCart(product, 1)}
                            className="p-2 bg-stone-900 hover:bg-stone-800 text-amber-50 rounded-lg hover:shadow transition-colors"
                            title="Masukkan Keranjang"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)} />
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full text-stone-900 shadow-2xl relative overflow-hidden animate-zoom-in grid grid-cols-1 md:grid-cols-2">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-stone-500 hover:text-stone-900 shadow transition-colors"
                aria-label="Tutup detail modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Left Image */}
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

              {/* Modal Right Detail */}
              <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider block">{selectedProduct.categoryLabel}</span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">{selectedProduct.name}</h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-semibold text-stone-700">{selectedProduct.rating} / 5.0</span>
                      <span className="text-[10px] text-stone-400">({selectedProduct.stock > 0 ? `Stok Tersedia: ${selectedProduct.stock} unit` : 'Pre-order'})</span>
                    </div>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold text-stone-800">Spesifikasi Teknis:</h5>
                    <ul className="text-xs text-stone-500 space-y-1.5">
                      {selectedProduct.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-550 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-105 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[10px] text-stone-400 block font-semibold uppercase">Total Harga</span>
                    <span className="text-xl font-bold text-stone-950 font-sans">{formatCurrency(selectedProduct.price)}</span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct, 1);
                      setSelectedProduct(null);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-stone-905 hover:bg-stone-850 text-amber-50 font-medium rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Beli & Masukkan Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
