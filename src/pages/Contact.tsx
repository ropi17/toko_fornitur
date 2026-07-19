import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Send, MessageSquareCheck, Clock, Share2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const { showToast } = useApp();
  
  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('order');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showToast('Mohon lengkapi kolom nama, email, dan pesan Anda.', 'error');
      return;
    }

    setSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      showToast('Pesan Anda berhasil terkirim! Tim kami akan segera menepis email Anda dalam waktu 1x24 jam.', 'success');
      setName('');
      setEmail('');
      setPhone('');
      setServiceType('order');
      setMessage('');
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-page-enter">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest block font-sans">Hubungi Kami</span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">Kami Siap Mendengar Anda</h1>
        <div className="w-12 h-0.5 bg-amber-600 mx-auto" />
        <p className="text-stone-500 text-sm leading-relaxed">
          Punya pertanyaan tentang garansi, pemesanan kustom kayu jati, atau ingin kolaborasi proyek interior? Layangkan pesan Anda di bawah.
        </p>
      </div>

      {/* Main Grid: Form and Contact Card Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Contact Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-stone-900 text-amber-50 rounded-2xl p-7 shadow-md space-y-6">
            <h3 className="font-serif text-xl font-bold tracking-wide">Toko Fornitur Headquarter</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Kunjungi showroom fisik kami di Jakarta Timur atau silakan koordinasikan pertemuan tatap muka konsultasi interior bersama staf ahli.
            </p>
            
            <div className="w-6 h-0.5 bg-amber-600" />

            <ul className="space-y-5 text-stone-300 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Raya Jati Luhur No.88, Duren Sawit, Jakarta Timur, 13440
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-505 shrink-0" />
                <a href="tel:+622188899222" className="hover:text-amber-400 transition-colors">
                  +62 (21) 8889 9222
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-505 shrink-0" />
                <a href="mailto:info@tokofornitur.co.id" className="hover:text-amber-400 transition-colors">
                  info@tokofornitur.co.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-505 shrink-0 mt-0.5" />
                <span>
                  <strong>Senin - Sabtu:</strong> 09:00 - 18:00 WIB<br />
                  <strong>Minggu & Hari Libur:</strong> Tutup
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Chat WhatsApp Box */}
          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
              <MessageSquareCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-stone-900 text-base">Konsultasi Express</h4>
            <p className="text-stone-500 text-xs leading-relaxed">
              Ingin respon instan dan kirim gambar konsep ruang? Hubungi Sales officer kami langsung di Whatsapp.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Toko%20Fornitur,%20saya%20tertarik%20tanya%20pemesanan%20kustom..."
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg text-xs transition-colors shadow"
            >
              Kirim Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-2 bg-white border border-stone-200 p-6 sm:p-8 rounded-2xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-605 block">Nama Lengkap *</label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-605 block">Alamat Email *</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-605 block">Nomor Telepon / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="08123xxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-605 block">Tujuan Kunjungan / Permintaan</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-xs text-stone-700 bg-stone-50 focus:outline-none focus:ring-1 focus:ring-amber-550 font-medium"
                >
                  <option value="order">Pemesanan Standard / Pembelian</option>
                  <option value="custom">Permintaan Kustom Furnitur</option>
                  <option value="consulting">Konsultasi Layout Ruang Tamu/Kerja</option>
                  <option value="cooperation">Kemitraan Studio B2B Arsitektur</option>
                </select>
              </div>
            </div>

            {/* Message Body */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-605 block">Pesan atau Keterangan Kustomisasi *</label>
              <textarea
                rows={5}
                placeholder="Tuliskan detail pesanan kustom furnitur atau pertanyaan Anda di sini secara rinci..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-y"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-300 text-amber-50 font-medium rounded-lg text-xs tracking-wider uppercase transition-colors shadow flex items-center justify-center gap-2 cursor-pointer ${
                submitting ? 'opacity-80' : ''
              }`}
            >
              {submitting ? (
                <>
                  <span>Mengirimkan Pesan...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Simulated Map / Showroom Address Grid Area */}
      <div className="space-y-4">
        <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
          <Share2 className="w-5 h-5 text-amber-600" />
          Peta Lokasi Showroom
        </h3>
        <div className="bg-stone-150 border border-stone-200 rounded-2xl h-80 relative overflow-hidden flex items-center justify-center text-center p-6 text-stone-500 shadow-inner">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="max-w-md relative z-10 space-y-3">
            <MapPin className="w-8 h-8 text-rose-500 mx-auto animate-bounce" />
            <p className="font-semibold text-stone-800 text-sm">JAKARTA EAST SHOWROOM</p>
            <p className="text-xs">JL. Raya Jati Luhur No.88, Duren Sawit, Jakarta Timur, 13440</p>
            <p className="text-[10px] text-stone-400">
              *Tersedia area parkir luas dan display produk Sofa Oxford, Meja Florence, dan Zenith Desk langsung di lokasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
