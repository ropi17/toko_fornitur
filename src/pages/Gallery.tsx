import React, { useState } from 'react';
import { GALLERY } from '../data/mockData';
import type { GalleryItem } from '../data/mockData';
import { X, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filters = [
    { label: 'Semua Ruang', value: 'all' },
    { label: 'Ruang Tamu', value: 'living' },
    { label: 'Kamar Tidur', value: 'bedroom' },
    { label: 'Ruang Kerja', value: 'workspace' },
    { label: 'Ruang Makan', value: 'dining' },
    { label: 'Luar Ruangan', value: 'outdoor' },
  ];

  const filteredGallery = GALLERY.filter((item) => {
    return selectedFilter === 'all' || item.category === selectedFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-page-enter">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block">Galeri Foto</span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">Inspirasi Ruang Toko Fornitur</h1>
        <div className="w-12 h-0.5 bg-amber-600 mx-auto" />
        <p className="text-stone-500 text-sm leading-relaxed">
          Intip portofolio dekorasi hunian dan ruang komersial yang telah kami tata menggunakan mebel premium kami.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-6">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedFilter(filter.value)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
              selectedFilter === filter.value
                ? 'bg-stone-900 text-amber-50 shadow-md font-semibold'
                : 'text-stone-605 bg-stone-100 hover:bg-stone-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry or Grid Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item) => (
          <div 
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="relative pt-[65%] overflow-hidden bg-stone-100">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay hover panel */}
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-amber-600/90 text-stone-900 rounded-full flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-350">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-stone-100 space-y-1 bg-white">
              <span className="text-[10px] text-amber-705 font-bold uppercase tracking-wider block">{item.categoryLabel}</span>
              <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">{item.title}</h3>
              <p className="text-stone-500 text-xs line-clamp-1 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox zoom wrapper */}
      {activeItem && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity" onClick={() => setActiveItem(null)} />
          <div className="max-w-4xl w-full mx-4 my-8 text-white relative z-10 animate-zoom-in">
            <button 
              onClick={() => setActiveItem(null)}
              className="absolute -top-12 right-0 p-2 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-colors hidden sm:block"
              aria-label="Tutup galeri"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
              <div className="relative pt-[56.25%] bg-stone-900">
                <img 
                  src={activeItem.image} 
                  alt={activeItem.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 sm:p-8 bg-stone-900 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">{activeItem.categoryLabel}</span>
                  <button 
                    onClick={() => setActiveItem(null)}
                    className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg transition-colors sm:hidden text-xs font-semibold"
                  >
                    Tutup
                  </button>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">{activeItem.title}</h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed pt-1">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
