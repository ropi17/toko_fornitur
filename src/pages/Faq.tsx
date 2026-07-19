import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { HelpCircle, ChevronDown, ChevronUp, MessagesSquare } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Open first by default
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Pemesanan', 'Pengiriman', 'Kustomisasi', 'Garansi'];

  const filteredFaqs = FAQS.filter(faq => {
    return selectedCategory === 'all' || faq.category === selectedCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12 animate-page-enter">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block font-sans">Ada Pertanyaan?</span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">FAQ (Pertanyaan Umum)</h1>
        <div className="w-12 h-0.5 bg-amber-650 mx-auto" />
        <p className="text-stone-500 text-sm leading-relaxed max-w-xl mx-auto">
          Temukan jawaban seputar proses pengerjaan kustom, metode pengiriman gratis, keamanan garansi rangka, dan perawatan kayu mebel Anda.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setOpenId(null);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-600 bg-stone-100 hover:bg-stone-200'
            }`}
          >
            {cat === 'all' ? 'Semua Topik' : cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div 
              key={faq.id} 
              className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-stone-900 hover:bg-stone-50/50 transition-colors cursor-pointer gap-4 text-base"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                )}
              </button>
              
              {/* Expandable Panel */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-[300px] border-t border-stone-102' : 'max-h-0'
                }`}
              >
                <div className="p-5 text-stone-605 text-sm leading-relaxed bg-stone-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Assistance CTA Banner */}
      <div className="border border-stone-200 rounded-2xl p-6 bg-stone-900 text-amber-50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <MessagesSquare className="w-10 h-10 text-amber-500 shrink-0" />
          <div className="text-center sm:text-left">
            <h4 className="font-serif font-bold text-base">Tidak Menemukan Jawaban Anda?</h4>
            <p className="text-xs text-stone-300 mt-0.5">Konsultan kami siap membantu menjawab pertanyaan detail Anda di WhatsApp.</p>
          </div>
        </div>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow shrink-0"
        >
          Diskusi via WhatsApp
        </a>
      </div>
    </div>
  );
};
