import React from 'react';
import { TEAM } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 animate-page-enter">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block font-sans">Kolektif Kreatif</span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">Di Balik Karya Toko Fornitur</h1>
        <div className="w-12 h-0.5 bg-amber-600 mx-auto" />
        <p className="text-stone-500 text-sm leading-relaxed">
          Temui kolaborasi hebat di balik pengembangan sistem dan desain platform Toko Fornitur. Kami menggabungkan keahlian arsitektur data, desain antarmuka, dan rekayasa web.
        </p>
      </div>

      {/* Hero Showcase Group Photo */}
      <div className="max-w-5xl mx-auto">
        <div className="relative group overflow-hidden rounded-3xl border border-stone-200/80 shadow-md bg-stone-50 p-2 md:p-3 transition-all duration-500 hover:shadow-lg hover:border-amber-700/30">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[21/9]">
            <img
              src="/tim.jpeg"
              alt="Kelompok 6 Toko Fornitur"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent flex flex-col justify-end p-5 md:p-8">
              <span className="text-amber-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">UAS-PW 2026 - TUGAS PERANCANGAN WEB</span>
              <h2 className="text-white text-lg md:text-3xl font-serif font-bold tracking-tight">Kelompok 6</h2>
              <p className="text-stone-300 text-[10px] md:text-sm mt-1 max-w-2xl font-light">
                "Bersama membangun ide, merancang solusi, mewujudkan inovasi."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {TEAM.map((member) => {
          // Get initials
          const initials = member.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .substring(0, 2);

          return (
            <div 
              key={member.id}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between space-y-4 hover:border-amber-600/30"
            >
              <div className="space-y-4">
                {/* Initial Avatar Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center font-serif text-sm font-bold text-amber-800 uppercase tracking-wider shadow-inner group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-amber-700 uppercase tracking-wider block font-sans">
                      {member.role}
                    </span>
                  </div>
                </div>

                <p className="text-stone-600 text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social links */}
              <div className="pt-3 border-t border-stone-100 flex justify-between items-center">
                <span className="text-[9px] text-stone-400 font-semibold tracking-wider uppercase">Hubungi</span>
                <div className="flex gap-2">
                  {member.socials.instagram && (
                    <a 
                      href={member.socials.instagram} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 bg-stone-50 hover:bg-amber-600/10 text-stone-600 hover:text-amber-800 rounded-lg transition-all"
                      aria-label="Instagram"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 bg-stone-50 hover:bg-amber-600/10 text-stone-600 hover:text-amber-800 rounded-lg transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a 
                      href={member.socials.twitter} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 bg-stone-50 hover:bg-amber-600/10 text-stone-600 hover:text-amber-800 rounded-lg transition-all"
                      aria-label="GitHub"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote Banner */}
      <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
        <Sparkles className="w-8 h-8 text-amber-500/30 mx-auto" />
        <h3 className="font-serif text-lg md:text-xl font-semibold text-stone-900 leading-relaxed max-w-2xl mx-auto">
          "Desain bukan hanya tentang keindahan rupa, tetapi tentang bagaimana sebuah fungsionalitas dan kenyamanan dapat dinikmati secara sempurna."
        </h3>
        <p className="text-xs text-amber-805 font-bold uppercase tracking-wider">— Filosofi Tim Toko Fornitur</p>
      </div>
    </div>
  );
};
