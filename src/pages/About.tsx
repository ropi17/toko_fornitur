import React from 'react';
import { useApp } from '../context/AppContext';
import { Trees, Users, HeartHandshake, Eye, Target } from 'lucide-react';

const STATS = [
  { value: '20+', label: 'Tahun Pengalaman' },
  { value: '4.5K+', label: 'Hunian Tertata' },
  { value: '80+', label: 'Artisan & Perajin' },
  { value: '15+', label: 'Penghargaan Nasional' }
];

const VALUES = [
  {
    icon: <Trees className="w-6 h-6 text-amber-600" />,
    title: 'Keberlanjutan Alam',
    description: 'Kami berkomitmen hanya menggunakan kayu jati dan oak bersertifikasi SVLK (eco-certified) yang berasal dari daerah hutan tebang-tanam kembali pemerintah.'
  },
  {
    icon: <Users className="w-6 h-6 text-amber-600" />,
    title: 'Dedikasi Kerajinan Tangan',
    description: 'Kami menolak mebel cetak masal berongga. Setiap produk kami dirakit utuh oleh ahli perajin kayu tradisional dengan dedikasi sambungan purus-dan-lubang legendaris.'
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-amber-600" />,
    title: 'Pengalaman Konsumen Eksklusif',
    description: 'Anda tidak saja membeli mebel, Anda sedang berinvestasi kenyamanan hunian jangka panjang. Kami menjamin pemesanan yang transparan dan garansi rangka hingga tahunan.'
  }
];

export const About: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="space-y-20 pb-20 animate-page-enter">
      {/* 1. Header Hero Page */}
      <section className="relative py-28 bg-stone-900 overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest block">Mengenal Kami Lebih Dekat</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
            Warisan Keindahan Kayu Solid & Tata Ruang Nyaman
          </h1>
          <p className="text-stone-300 text-base max-w-2xl mx-auto leading-relaxed pt-2">
            Didirikan oleh sekumpulan arsitek interior dan perajin kayu tradisional pada tahun 2006, Toko Fornitur tumbuh menjadi standar mebel premium di Indonesia.
          </p>
        </div>
      </section>

      {/* 2. Brand Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block">Kisah Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">
            Menyatukan Jiwa Kesenian Tradisional Jepara Dengan Kepraktisan Modern
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Perjalanan kami dimulai dari workshop gergaji kayu kecil di lingkar timur kota Jepara. Kami meyakini mebel bukan sekadar barang pengisi sudut kosong rumah Anda, melainkan cerminan karakter tinggal dan simfoni kenyamanan bagi keluarga yang mendiaminya.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            Seiring waktu berjalan, kami memperluas tim dengan berkolaborasi bersama desainer interior terkemuka lulusan nasional untuk menciptakan mebel modular. Kami melahirkan perkawinan estetis antara kekuatan awetnya mebel jati tradisional dengan keluwesan tata ruang urban modern.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('team')}
              className="px-6 py-3 bg-stone-950 hover:bg-stone-850 text-amber-50 font-medium rounded-lg text-sm transition-colors shadow"
            >
              Lihat Profil Perajin & Desainer
            </button>
          </div>
        </div>
        
        {/* Story Images Mocking */}
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80" 
            alt="Artisan workshop" 
            className="w-full h-64 object-cover rounded-2xl shadow-sm rotate-[-1deg] hover:rotate-0 transition-transform" 
          />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80" 
            alt="Interior design drafting" 
            className="w-full h-64 object-cover rounded-2xl shadow-sm translate-y-6 rotate-[1deg] hover:rotate-0 transition-transform" 
          />
        </div>
      </section>

      {/* 3. Stat Counters Banner */}
      <section className="bg-stone-100 border-y border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-4xl md:text-5xl font-bold text-amber-950 font-sans tracking-tight block">
                {stat.value}
              </span>
              <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 md:p-10 bg-white border border-stone-205 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-650">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">Visi Kami</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Menjadi standar utama mebel kayu jati premium Indonesia yang memimpin inovasi desain modular berkelanjutan tingkat nasional, sekaligus diakui dunia atas keunggulan pengerjaan tangan artisan lokal.
          </p>
        </div>
        <div className="p-8 md:p-10 bg-white border border-stone-205 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-655">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">Misi Kami</h3>
          <p className="text-stone-605 text-sm leading-relaxed">
            Menyediakan produk furnitur berumur panjang dengan bahan bersertifikasi resmi, melestarikan warisan kerajinan teknik purus kayu jati asli daerah Jepara, serta memfasilitasi kebutuhan desain personal yang presisi bagi konsumen melalaui visualisasi teknologi modern.
          </p>
        </div>
      </section>

      {/* 5. Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block mb-2">Nilai Inti</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900">Prinsip Kerja Toko Fornitur</h2>
          <div className="w-16 h-1 bg-amber-650 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((val, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">{val.title}</h3>
              <p className="text-stone-550 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
