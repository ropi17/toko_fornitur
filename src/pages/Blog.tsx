import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const { selectedArticleId, setSelectedArticleId } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Panduan Dekor', 'Materi & Pembuatan', 'Kesehatan Kerja'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    return activeCategory === 'all' || post.category === activeCategory;
  });

  const activeArticle = BLOG_POSTS.find(post => post.id === selectedArticleId);

  // Suggestions for other articles
  const otherArticles = BLOG_POSTS.filter(post => post.id !== selectedArticleId).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-page-enter">
      {activeArticle ? (
        /* SINGLE ARTICLE DETAIL VIEW */
        <article className="max-w-3xl mx-auto space-y-8 animate-zoom-in">
          {/* Back Action */}
          <button
            onClick={() => setSelectedArticleId(null)}
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 text-sm font-semibold transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Kembali ke Semua Artikel
          </button>

          {/* Meta Info */}
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-55/70 border border-amber-250 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-md">
              {activeArticle.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-905 leading-[1.15]">
              {activeArticle.title}
            </h1>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-450 border-y border-stone-150 py-3.5">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-500" />
                <span>Oleh <strong className="text-stone-700">{activeArticle.author}</strong></span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>{activeArticle.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>{activeArticle.readTime}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow bg-stone-100">
            <img 
              src={activeArticle.image} 
              alt={activeArticle.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Rich Content Paragraphs Parsing */}
          <div className="text-stone-700 text-base leading-relaxed space-y-6 font-serif tracking-wide">
            {activeArticle.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('Berikut adalah') || paragraph.startsWith('Mengapa Kursi')) {
                return <p key={index} className="font-semibold text-stone-900 my-4 text-sm font-sans uppercase tracking-wider">{paragraph}</p>;
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <div key={index} className="pl-4 border-l-2 border-amber-500 my-4 py-1.5 bg-stone-50 rounded-r-xl">
                    <p className="font-sans font-semibold text-stone-900 text-base">{paragraph.split('\n')[0]}</p>
                    <p className="text-sm text-stone-550 pt-1 font-sans">{paragraph.split('\n').slice(1).join(' ')}</p>
                  </div>
                );
              }
              return (
                <p key={index} className="indent-4 md:indent-8">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Board */}
          <div className="border border-stone-200 rounded-2xl p-6 bg-stone-50 flex gap-4 items-center">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center font-serif text-sm font-bold text-stone-950">
              {activeArticle.author.split(' ').map(n=>n[0]).join('')}
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Ditulis oleh {activeArticle.author}</h4>
              <p className="text-[11px] text-stone-400 mt-0.5">Spesialis Tim Kreatif & Konsultan Interior Toko Fornitur.</p>
            </div>
          </div>

          {/* Suggested Reads */}
          <div className="border-t border-stone-200 pt-10 space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900">Artikel Pilihan Lainnya</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherArticles.map(post => (
                <div 
                  key={post.id}
                  onClick={() => setSelectedArticleId(post.id)}
                  className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <img src={post.image} alt={post.title} className="w-full h-36 object-cover" />
                  <div className="p-4 space-y-2 flex-1">
                    <span className="text-[9px] text-amber-700 font-bold uppercase tracking-wider block">{post.category}</span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm line-clamp-2 group-hover:text-amber-800 transition-colors">{post.title}</h4>
                    <p className="text-stone-450 text-[10px]">{post.date} &bull; {post.readTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      ) : (
        /* BLOG POSTS ARCHIVE GRID VIEW */
        <>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block">Blog & Ide Dekor</span>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">Inspirasi & Tips Mebel Modern</h1>
            <div className="w-12 h-0.5 bg-amber-600 mx-auto" />
            <p className="text-stone-500 text-sm leading-relaxed">
              Dapatkan pengetahuan seputar merawat kayu solid, desain hemat ruang, serta mebel ergonomis dari tim spesialis kami.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-stone-950 font-bold'
                    : 'text-stone-600 bg-stone-100 hover:bg-stone-200'
                }`}
              >
                {cat === 'all' ? 'Semua Topik' : cat}
              </button>
            ))}
          </div>

          {/* Grid Archive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => setSelectedArticleId(post.id)}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div className="relative pt-[60%] overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/85 text-amber-50 text-[9px] font-semibold py-1 px-2.5 rounded-lg shadow-sm border border-stone-800">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] text-stone-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight group-hover:text-amber-800 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
