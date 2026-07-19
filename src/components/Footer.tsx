import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { PageType } from '../context/AppContext';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Terima kasih! Email "${email}" telah terdaftar untuk promo eksklusif bulanan.`, 'success');
    setEmail('');
  };

  const handlePageLink = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <footer className="bg-stone-900 border-t border-stone-800 text-stone-300 font-sans mt-auto">
      {/* Top Banner: Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 bg-stone-850 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-white">Garansi Jati Asli</h4>
            <p className="text-xs text-stone-500 mt-0.5">Jaminan 100% matiral kokoh bersertifikasi.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 bg-stone-855 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
            {/* Free Delivery Icon (custom styling) */}
            <span className="font-bold text-xs uppercase tracking-tight">Free</span>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-white">Gratis Ongkir</h4>
            <p className="text-xs text-stone-500 mt-0.5">Pengiriman Jabodetabek dan perakitan langsung.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 bg-stone-850 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
            {/* Custom Layout Icon */}
            <span className="font-bold text-xs uppercase tracking-tight">3D</span>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-white">Sketsa 3D Gratis</h4>
            <p className="text-xs text-stone-500 mt-0.5">Visualisasi produk kustom sebelum produksi.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 bg-stone-850 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
            {/* Support Icon */}
            <span className="font-bold text-xs uppercase tracking-tight">24h</span>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-white">Customer Support</h4>
            <p className="text-xs text-stone-500 mt-0.5">Konsultasi desain dengan tim interior ahli.</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center font-serif text-base font-bold text-stone-900">
              TF
            </div>
            <span className="font-serif text-xl font-semibold tracking-wide text-white block uppercase">Toko Fornitur</span>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed">
            Menghadirkan kenyamanan kelas dunia ke dalam hunian Anda sejak tahun 2006. Setiap karya kayu kami merefleksikan dedikasi, material terbaik, dan pengerjaan artisan yang tak bercela.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-500 hover:bg-stone-750 transition-all shadow-sm" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-500 hover:bg-stone-750 transition-all shadow-sm" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-500 hover:bg-stone-750 transition-all shadow-sm" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Sitemap Navigation Links */}
        <div>
          <h3 className="font-serif text-base font-semibold text-white tracking-wide mb-6">Peta Situs</h3>
          <ul className="space-y-3.5 text-sm">
            <li>
              <button onClick={() => handlePageLink('home')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                Halaman Utama (Home)
              </button>
            </li>
            <li>
              <button onClick={() => handlePageLink('about')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                Tentang Toko Fornitur
              </button>
            </li>
            <li>
              <button onClick={() => handlePageLink('products')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                Katalog Produk & Layanan
              </button>
            </li>
            <li>
              <button onClick={() => handlePageLink('gallery')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                Galeri Inspirasi Ruang
              </button>
            </li>
            <li>
              <button onClick={() => handlePageLink('team')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                Tim & Perajin Kayu Kami
              </button>
            </li>
            <li>
              <button onClick={() => handlePageLink('blog')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                Blog Tips Interior
              </button>
            </li>
            <li>
              <button onClick={() => handlePageLink('faq')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                FAQ (Tanya Jawab Pengiriman)
              </button>
            </li>
            <li>
              <button onClick={() => handlePageLink('contact')} className="hover:text-amber-500 transition-colors text-stone-400 hover:underline">
                Hubungi Kami
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="font-serif text-base font-semibold text-white tracking-wide mb-6">Informasi Kontak</h3>
          <ul className="space-y-4 text-sm text-stone-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>
                Jl. Raya Jati Luhur No.88, Duren Sawit, Jakarta Timur, 13440
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-500 shrink-0" />
              <a href="tel:+622188899222" className="hover:text-white transition-colors">
                +62 (21) 8889 9222
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-500 shrink-0" />
              <a href="mailto:info@tokofornitur.co.id" className="hover:text-white transition-colors">
                info@tokofornitur.co.id
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="space-y-4">
          <h3 className="font-serif text-base font-semibold text-white tracking-wide mb-6">Warta Toko Fornitur</h3>
          <p className="text-sm text-stone-400 leading-relaxed">
            Dapatkan berita tren dekorasi terkini, diskon khusus pelanggan terdaftar, dan informasi peluncuran furnitur edisi terbatas langsung di inbox Anda.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 pt-2">
            <input
              type="email"
              placeholder="Masukkan email Anda..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-stone-800 rounded-lg text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-550 border border-stone-750"
              required
            />
            <button
              type="submit"
              className="p-2.5 bg-amber-600 text-stone-900 rounded-lg font-medium hover:bg-amber-500 transition-colors flex items-center justify-center"
              aria-label="Kirim langganan"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Ground */}
      <div className="bg-stone-950 border-t border-stone-850 py-6 text-center text-xs text-stone-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Toko Fornitur. Hak Cipta Dilindungi Undang-Undang.</span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:underline hover:text-stone-400">Kebijakan Privasi</a>
            <a href="#terms" className="hover:underline hover:text-stone-400">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
