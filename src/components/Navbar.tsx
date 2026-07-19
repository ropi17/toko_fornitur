import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { PageType } from '../context/AppContext';
import { ShoppingBag, Heart, Menu, X, Trash2, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart,
    wishlist,
    showToast
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const navLinks: { label: string; value: PageType }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Tentang Kami', value: 'about' },
    { label: 'Produk & Layanan', value: 'products' },
    { label: 'Galeri', value: 'gallery' },
    { label: 'Tim', value: 'team' },
    { label: 'Blog', value: 'blog' },
    { label: 'FAQ', value: 'faq' },
    { label: 'Kontak', value: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCartDrawerOpen(false);
    showToast('Pemesanan simulasi berhasil dikirim! Tim sales kami akan segera menghubungi Anda.', 'success');
    clearCart();
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-stone-900/90 backdrop-blur-md text-amber-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center font-serif text-xl font-bold text-stone-900 group-hover:bg-amber-500 transition-colors shadow">
                TF
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold tracking-wide block uppercase leading-none">Toko Fornitur</span>
                <span className="text-[10px] text-amber-500/80 tracking-widest block uppercase font-sans mt-0.5">Eksklusif & Premium</span>
              </div>
            </div>

            {/* Desktop Navigation Link */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    currentPage === link.value
                      ? 'text-amber-500 bg-stone-800'
                      : 'text-stone-300 hover:text-amber-400 hover:bg-stone-800/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* User Interaction Actions */}
            <div className="flex items-center gap-3">
              {/* Wishlist Button */}
              <button 
                onClick={() => showToast(`Anda memiliki ${wishlist.length} produk impian di daftar wishlist Anda.`, 'info')}
                className="p-2.5 text-stone-300 hover:text-rose-500 hover:bg-stone-800 rounded-full transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-stone-900">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Cart Button */}
              <button 
                onClick={() => setCartDrawerOpen(true)}
                className="p-2.5 text-stone-300 hover:text-amber-500 hover:bg-stone-800 rounded-full transition-colors relative"
                aria-label="Keranjang belanja"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-stone-950 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-stone-900">
                    {totalCartItems}
                  </span>
                )}
              </button>

              {/* Hamburger Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-400 hover:text-amber-500 focus:outline-none"
                aria-label="Buka menu navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-t border-stone-800 animate-slide-in">
            <div className="px-2 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                    currentPage === link.value
                      ? 'text-amber-500 bg-stone-850'
                      : 'text-stone-300 hover:text-amber-400 hover:bg-stone-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Cart Slider Drawer Overlay */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setCartDrawerOpen(false)} />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-stone-50 text-stone-900 flex flex-col shadow-2xl animate-fade-in-right">
              {/* Drawer Header */}
              <div className="p-6 border-b border-stone-200 bg-stone-900 text-stone-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-500" />
                  <h3 className="font-serif text-lg font-semibold tracking-wide">Keranjang Belanja</h3>
                </div>
                <button 
                  onClick={() => setCartDrawerOpen(false)}
                  className="p-1 text-stone-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4 text-stone-500">
                    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-700">Keranjang Anda Kosong</p>
                      <p className="text-sm mt-1">Eksplorasi koleksi furnitur premium kami dan tambahkan kemewahan ke rumah Anda.</p>
                    </div>
                    <button 
                      onClick={() => { setCartDrawerOpen(false); setCurrentPage('products'); }}
                      className="mt-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-50 text-sm font-medium rounded-lg transition-colors shadow"
                    >
                      Mulai Belanja
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-stone-200 shadow-sm relative overflow-hidden group">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-20 h-20 object-cover rounded-lg shrink-0 bg-stone-100" 
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-stone-900 text-sm truncate">{item.product.name}</h4>
                          <p className="text-xs text-stone-500 capitalize mt-0.5">{item.product.categoryLabel}</p>
                          <div className="flex items-center justify-between mt-2.5">
                            <span className="text-xs font-semibold text-amber-950 font-sans">
                              {formatCurrency(item.product.price)}
                            </span>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                              <button 
                                onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                                className="px-2.5 py-1 text-stone-500 hover:text-stone-950 hover:bg-stone-200/50 transition-colors font-medium"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-semibold text-stone-800 w-6 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                                className="px-2.5 py-1 text-stone-500 hover:text-stone-950 hover:bg-stone-200/50 transition-colors font-medium"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 text-stone-400 hover:text-rose-600 rounded-md transition-colors hover:bg-stone-50"
                          title="Hapus item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="border-t border-stone-200 p-6 bg-white space-y-4">
                  <div className="flex justify-between items-center text-stone-600 text-sm">
                    <span>Jumlah Subtotal</span>
                    <span className="font-semibold text-stone-900 font-sans">{formatCurrency(totalCartPrice)}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={clearCart}
                      className="px-4 py-3 border border-stone-200 hover:bg-stone-50 text-stone-600 font-medium rounded-lg text-sm transition-colors text-center flex items-center justify-center"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleCheckout}
                      className="flex-1 py-3 bg-stone-950 hover:bg-stone-850 text-amber-50 font-medium rounded-lg text-sm transition-colors shadow flex items-center justify-center gap-1.5"
                    >
                      Pesan Sekarang (WhatsApp)
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-stone-400">
                    *Pesanan akan dialihkan langsung ke customer care untuk kemudahan kustomisasi dan nego pengiriman.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
