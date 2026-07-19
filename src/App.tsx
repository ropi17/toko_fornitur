import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

// Import Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Gallery } from './pages/Gallery';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { Faq } from './pages/Faq';
import { Contact } from './pages/Contact';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  // Dynamic SEO Page Title update
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Home | Toko Fornitur - Mebel Jati & Premium Furniture',
      about: 'Tentang Kami | Toko Fornitur - Warisan Teknik Kayu Solid',
      products: 'Produk & Layanan | Toko Fornitur - Sofa & Meja Jati Premium',
      gallery: 'Galeri Inspirasi Ruang | Toko Fornitur - Portfolio Desain Interior',
      team: 'Kolektif Tim Maker | Toko Fornitur - Desainer & Perajin Kayu Jepara',
      blog: 'Blog & Tips Interior | Toko Fornitur - Inspirasi Penataan Ruang',
      faq: 'FAQ Hub & Garansi | Toko Fornitur - Tanya Jawab Pengiriman',
      contact: 'Hubungi Kontak Showroom | Toko Fornitur - Konsultasi Gratis',
    };
    
    document.title = titles[currentPage] || 'Toko Fornitur - Mebel Jati & Premium';
  }, [currentPage]);

  // Render components based on active page states
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'gallery':
        return <Gallery />;
      case 'team':
        return <Team />;
      case 'blog':
        return <Blog />;
      case 'faq':
        return <Faq />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="flex-1 w-full min-h-[60vh] bg-stone-50">
      {renderPage()}
    </main>
  );
};

export const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent />
      <Footer />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
