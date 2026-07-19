export interface Product {
  id: string;
  name: string;
  category: 'living' | 'bedroom' | 'workspace' | 'dining' | 'outdoor';
  categoryLabel: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  specs: string[];
  stock: number;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'living' | 'bedroom' | 'workspace' | 'dining' | 'outdoor';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
}

export interface FAQItem {
  id: string;
  category: 'Pemesanan' | 'Pengiriman' | 'Kustomisasi' | 'Garansi';
  question: string;
  answer: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Sofa Minimalis Oxford Velvet',
    category: 'living',
    categoryLabel: 'Ruang Tamu',
    price: 8450000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Sofa mewah dengan bahan beludru premium Oxford yang sangat lembut dan rangka kayu jati solid berkualitas tinggi. Dilengkapi dengan busa density tinggi untuk kenyamanan maksimal dan garansi busa hingga 5 tahun.',
    specs: ['Dimensi: 210cm x 90cm x 85cm', 'Bahan Rangka: Kayu Jati Solid Oven', 'Bahan Kain: Velvet Oxford Premium', 'Kapasitas: 3 Seater', 'Garansi: Rangka & Busa 3 Tahun'],
    stock: 5,
    isPopular: true
  },
  {
    id: 'prod-2',
    name: 'Meja Makan Kayu Jati Florence',
    category: 'dining',
    categoryLabel: 'Ruang Makan',
    price: 12500000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    description: 'Rasakan kehangatan alami makan bersama keluarga dengan meja makan Florence. Handcrafted dari kayu jati pilihan dengan coating matte melamin alami yang memperlihatkan serat kayu yang elegan.',
    specs: ['Dimensi: 180cm x 90cm x 75cm', 'Material: 100% Solid Kayu Jati', 'Finishing: Matte Melamine Natural', 'Kapasitas: 6 Kursi', 'Berat: 45 kg'],
    stock: 3,
    isPopular: true
  },
  {
    id: 'prod-3',
    name: 'Kursi Kerja Ergonomis AeroMesh',
    category: 'workspace',
    categoryLabel: 'Ruang Kerja',
    price: 2450000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80',
    description: 'Didesain khusus untuk Anda yang bekerja dalam waktu lama. AeroMesh memiliki penyokong tulang belakang dinamis (lumbar support), sandaran tangan 3D yang dapat disesuaikan, dan material jaring bersirkulasi udara tinggi.',
    specs: ['Lapis Kursi: Mesh Premium Breathable', 'Mekanisme: Tilting Synchronized 4 Kunci', 'Rangka Kaki: Aluminium Brushed Padat', 'Ketahanan Beban: Up to 130kg', 'Sertifikasi: BIFMA Klas 4 Gaslift'],
    stock: 12,
    isPopular: false
  },
  {
    id: 'prod-4',
    name: 'Tempat Tidur Scandinavian Oaken',
    category: 'bedroom',
    categoryLabel: 'Kamar Tidur',
    price: 9800000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    description: 'Hadirkan nuansa ketenangan ala Nordic ke dalam kamar Anda. Tempat tidur Oaken dibuat dari kayu ek putih Amerika Utara dengan desain kepala tempat tidur berlapis kain katun rajut tebal nan estetik.',
    specs: ['Ukuran Bed: King Size (180cm x 200cm)', 'Material: Oak Putih & Kayu Mahoni Lapis', 'Headboard: Katun Rajut & High Density Foam', 'Finishing: Non-toxic Eco Oil', 'Tinggi Kaki: 15cm (Sangat ramah robot vacuum)'],
    stock: 4,
    isPopular: true
  },
  {
    id: 'prod-5',
    name: 'Kursi Santai Rattan Lounge Solas',
    category: 'outdoor',
    categoryLabel: 'Luar Ruangan',
    price: 3600000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    description: 'Dibuat dengan teknik anyaman tangan tradisional menggunakan rotan sintetis premium tahan cuaca ekstrem. Kerangka alloy antarat yang dilapisi powder coating ideal untuk menghias balkon, teras kayu, atau taman kolam renang.',
    specs: ['Dimensi: 85cm x 80cm x 95cm', 'Upholstery: Kain Outdoor Sunbrella (Anti Air & Sinar UV)', 'Material Rangka: Rotan Sintetis + Aluminium Rangka', 'Beban Maksimum: 120kg', 'Finishing: Honey Cedar'],
    stock: 8,
    isPopular: false
  },
  {
    id: 'prod-6',
    name: 'Credenza TV Walnut Symphony',
    category: 'living',
    categoryLabel: 'Ruang Tamu',
    price: 6750000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    description: 'Kabinet hiburan modern dengan struktur kayu Walnut eksklusif bermotif simetris. Memiliki 3 laci penyimpanan soft-close dengan gagang logam kuningan satin gloss serta manajemen kabel tersembunyi.',
    specs: ['Dimensi: 180cm x 42cm x 55cm', 'Material: Kayu Walnut Veneer (HMR Core)', 'Kaki Penyangga: Besi Hitam Doff Anti Karat', 'Sistem Laci: Soft-Closing Slide', 'Beban Maksimum Atas: 80 kg'],
    stock: 6,
    isPopular: true
  },
  {
    id: 'prod-7',
    name: 'Lemari Pakaian Jati 3 Baris Grandeur',
    category: 'bedroom',
    categoryLabel: 'Kamar Tidur',
    price: 15600000,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
    description: 'Puncak kemewahan organisasi pakaian Anda. Lemari pakaian besar bermaterial jati TPK perhutani tahan rayap dengan cermin vertikal kristal beveled penuh di pintu tengah, gantungan tembaga, dan kotak brankas perhiasan mini.',
    specs: ['Dimensi: 160cm x 60cm x 220cm', 'Material: Kayu Jati TPK Grade A', 'Pintu: 3 Pintu Sliding Bebas Suara', 'Fitur Tambahan: Sensor LED Lampu Menyala saat Pintu Dibuka', 'Finishing: Natural Teak Lustre Satin'],
    stock: 2,
    isPopular: false
  },
  {
    id: 'prod-8',
    name: 'Meja Kerja Minimalis Zenith Desk',
    category: 'workspace',
    categoryLabel: 'Ruang Kerja',
    price: 3800000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    description: 'Meja kerja modular ramah ruang kerja modern. Permukaan atas dilapisi HPL anti gores bermotif guratan batu marmer Carrara Carrara yang dipadu kaki hairpin antik berfinishing matte black steel.',
    specs: ['Dimensi: 120cm x 60cm x 75cm', 'Material Atas: Kayu Mahoni Lapis HPL Carrara White', 'Material Kaki: Hairpin Solid Steel 12mm', 'Pelengkap: Slot Charger Wireless Termasuk di Permukaan', 'Berat: 18 kg'],
    stock: 15,
    isPopular: true
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Eksotika Ruang Tamu Kontemporer',
    category: 'living',
    categoryLabel: 'Ruang Tamu',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Kombinasi harmonis antara Sofa Oxford Velvet dengan aksen kuningan, karpet bulu abu-abu, dan pencahayaan gantung hangat dari lampu Edison.'
  },
  {
    id: 'gal-2',
    title: 'Kamar Tidur Utama Bernuansa Skandinavia',
    category: 'bedroom',
    categoryLabel: 'Kamar Tidur',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    description: 'Kasur estetik berbahan dasar dipan Oaken yang diletakkan di dekat jendela vertikal, memperlihatkan siluet pagi hari yang menenangkan.'
  },
  {
    id: 'gal-3',
    title: 'Efisiensi Tinggi Ruang Kerja Mandiri',
    category: 'workspace',
    categoryLabel: 'Ruang Kerja',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'Zenith Desk dipadu AeroMesh ergonomics chair di hadapan dinding hijau pastel dengan rak melayang kayu pinus.'
  },
  {
    id: 'gal-4',
    title: 'Makan Malam Hangat ala Bistro',
    category: 'dining',
    categoryLabel: 'Ruang Makan',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    description: 'Meja kayu Florence dipersiapkan lengkap dengan perlengkapan piring keramik buatan studio lokal dan bunga liar segar.'
  },
  {
    id: 'gal-5',
    title: 'Teras Sore Penuh Kedamaian',
    category: 'outdoor',
    categoryLabel: 'Luar Ruangan',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'Set kursi rattan lounge Solas di atas lantai dek kayu jati outdoor, bersanding dengan tanaman palem kipas.'
  },
  {
    id: 'gal-6',
    title: 'Sudut Baca Elegan Mewah',
    category: 'living',
    categoryLabel: 'Ruang Tamu',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    description: 'Menampilkan credenza Walnut bersanding dengan kursi santai berlengan bulat berlapis kulit cokelat tua.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Zainul Muttakim',
    role: 'Backend Developer',
    image: '/tim.jpeg',
    bio: 'Mengembangkan arsitektur server kokoh, mengelola database secara efisien, serta mengintegrasikan API berkinerja tinggi untuk kelancaran transaksi digital Toko Fornitur.',
    socials: {
      instagram: 'https://instagram.com/zainul_muttakim',
      linkedin: 'https://linkedin.com/in/zainul-muttakim',
      twitter: 'https://github.com/zainul-muttakim'
    }
  },
  {
    id: 'team-2',
    name: 'Baiq Sapriana',
    role: 'UI/UX Designer',
    image: '/tim.jpeg',
    bio: 'Merancang antarmuka pengguna yang anggun, responsif, dan intuitif. Memilih palet warna harmonis dan mengatur tipografi modern demi kenyamanan berbelanja pelanggan.',
    socials: {
      instagram: 'https://instagram.com/baiq_sapriana',
      linkedin: 'https://linkedin.com/in/baiq-sapriana'
    }
  },
  {
    id: 'team-3',
    name: 'Roviza\'ul Hawari Amri',
    role: 'Frontend Developer',
    image: '/tim.jpeg',
    bio: 'Mewujudkan prototipe desain visual ke dalam kode-kode web yang interaktif, mengoptimalkan kecepatan muat halaman, serta menyematkan mikro-animasi premium nan menawan.',
    socials: {
      instagram: 'https://instagram.com/rovizaul_hawari',
      linkedin: 'https://linkedin.com/in/rovizaul-hawari',
      twitter: 'https://github.com/rovizaul-hawari'
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Kunci Menata Furnitur Ruang Tamu Kecil Agar Terasa Luas',
    category: 'Panduan Dekor',
    author: 'Farah Anindya',
    date: '12 Juli 2026',
    readTime: '4 Menit Baca',
    summary: 'Hunian perkotaan kerap terkendala luas ruang tamu. Pelajari tips meletakkan sofa modular, pemilihan warna yang menipu mata, dan fungsi credenza tv gantung.',
    content: `Memiliki ruang tamu berukuran mungil sering kali menimbulkan tantangan besar dalam menata letak perabotan. Salah meletakkan furnitur justru bisa membuat ruangan terasa makin sumpek dan tidak ramah bagi tamu. Namun, dengan trik penataan yang tepat, Anda bisa menghadirkan ilusi visual yang membuat ruang terasa lebih luas secara instan tanpa mengorbankan fungsionalitas.

Berikut adalah 5 kunci utama yang perlu Anda perhatikan:

1. Gunakan Furnitur Berkaki Jenjang (Elevated Legs)
Furnitur dengan kaki-kaki tipis dan ramping, seperti Zenith Desk atau Credenza TV Walnut Symphony, memungkinkan pandangan mata Anda menembus area bawah furnitur. Hal ini menciptakan ilusi ruang lantai yang lebih lapang karena mata memvisualisasikan lebih banyak 'area kosong' di lantai. Hindari sofa boxy yang tebal menapak langsung ke lantai tanpa celah.

2. Maksimalkan Skema Warna Monokromatik atau Earth-Tone Cerah
Warna cream muda, batu alam, abu-abu pucat, dan sentuhan kayu ek hangat membantu memantulkan cahaya matahari alami secara efisien. Ketika dinding dan furnitur besar menggunakan keluarga warna yang senada, transisi sudut ruangan menjadi terkesan samar, melenyapkan kesan sempit pembatas dinamis.

3. Kursi Tambahan Tanpa Sandaran Bahu (Ottoman atau Bench)
Bila kapasitas tempat duduk terasa kurang namun sofa L dirasa terlalu besar, letakkan bangku kayu tanpa sandaran di sisi sudut terbuka. Bangku berstruktur ramping ini tidak menghalangi jalur visual ruangan serta sangat fleksibel diposisikan untuk menjamu kerabat dekat.

4. Pilih Satu atau Dua Furnitur Focal Point
Alih-alih menaruh banyak pajangan berskala kecil yang membuat visual berantakan (cluttered), investasikan pada satu furnitur utama yang elegan dan bertindak dramatis, misalnya Sofa Oxford Velvet. Cukup padukan ia dengan dekorasi gantung tipis dan meja kopi bundar tanpa laci berat.

5. Manfaatkan Dinding Secara Vertikal
Rak layang kayu, instalasi bracket gantung untuk media player, hingga cermin dinding vertikal besar. Memanfaatkan dinding tidak saja mengosongkan beban fungsional di permukaan lantai, tetapi juga merangsang mata orang yang berkunjung untuk melihat ke atas, memberikan rasa silding langit-langit yang tinggi.

Penerapan prinsip di atas akan menjamin kenyamanan tinggal yang luar biasa meski di lahan yang terbatas. Selamat mencoba!`,
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    title: 'Panduan Memilih Jenis Kayu Solid Terbaik Untuk Furnitur Rumah Anda',
    category: 'Materi & Pembuatan',
    author: 'Ki Hajar Sukandar',
    date: '08 Juni 2026',
    readTime: '6 Menit Baca',
    summary: 'Tidak semua kayu solid memiliki karakter yang sama. Mari pelajari perbedaan kekuatan kayu jati, keelokan walnut, serta struktur kayu mahoni untuk ketahanan maksimal.',
    content: `Kayu solid tetap memegang takhta tertinggi sebagai bahan baku pembuatan mebel berkat kekuatan alami, keunikan pola serat kayu, serta kesan prestisius yang tak lekang oleh zaman. Sebagai perajin kayu yang telah bekerja selama puluhan tahun, saya sering sekali ditanya konsumen: "Kayu apa yang paling awet, Pak?"

Jawabannya bergantung pada area kegunaan furnitur tersebut, budget, serta gaya desain yang diincar. Mari kita bedah karakteristik jenis kayu solid terpopuler saat ini:

1. Kayu Jati (Teakwood): Si Raja Kayu Tropis
Kayu Jati legendaris karena memiliki kandungan resin minyak alami melimpah di dalam seratnya. Minyak alami ini bertindak sebagai perisai pelindung bawaan dari serangan rayap, jamur pembusuk, dan perubahan suhu ekstrem akibat cuaca lembap. Jati sangat tepat untuk furnitur yang memikul beban berat (seperti Meja Makan Florence) atau perabotan luar ruangan (outdoor). Gurat seratnya yang berwarna cokelat keemasan akan terlihat semakin bersinar seiring pertambahan usia pakainya.

2. Kayu Walnut (Kenari): Mahkota Keanggunan Modern
Kayu Walnut terkenal secara internasional dengan warna cokelat cokelat gelapnya yang mendalam dan berwibawa. Seratnya sering kali membentuk pola keriting atau gelombang melingkar alami yang sangat dramatis. Walnut adalah kayu keras berserat padat yang tahan terhadap penyusutan kayu akibat AC dingin ruang interior. Sangat populer dalam gaya dekorasi Mid-Century Modern dan Contemporary Luxury, contohnya pada Credenza TV Walnut Symphony kami.

3. Kayu Ek (Oak): Kekuatan Skandinavia yang Estetik
Kayu Ek sangat populer pada ranah desain minimalis kontemporer. Memiliki dua tipe dominan: Red Oak dan White Oak. Karakter khasnya adalah serat lurus sejajar yang tegas dan permukaan berpori bertekstur kasar yang indah bila di-finishing dengan eco-oil matte transparan. Kayu Oak sangat keras, anti-indentasi (tahan penyok dari benturan), menjadikannya pilihan andalan untuk dipan tempat tidur utama maupuan lantai kayu struktural.

4. Kayu Mahoni (Mahogany): Klasik Kemerahan Berkemilau
Kayu mahoni memiliki gurat serat halus berpola kecil-kecil dan warna dasar merah jambu pucat yang lambat laun beranjak merah tua pekat eksotis. Mahoni relatif lebih mudah dipotong dan diukir tanpa mudah pecah, serta memegang sekrup lem perekat dengan performa tinggi. Biasa diolah untuk kabinet dalam ruangan atau meja minimalis berkaki dinamis Zenith Desk yang diberi lapisan finishing HPL atau cat duco berwarna cerah guna fleksibilitas modern.

Mengenal material dasar furnitur Anda adalah langkah pertama merawat peninggalan keluarga yang bernilai investasi jangka panjang. Pilihlah dengan bijaksana!`,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    title: 'Desain Ergonomis: Mengapa Kursi Kerja yang Benar Melindungi Produktivitas',
    category: 'Kesehatan Kerja',
    author: 'Baskoro Yudho',
    date: '24 Mei 2026',
    readTime: '3 Menit Baca',
    summary: 'Mengalami pegal leher saat bekerja dari rumah? Inilah alasan mekanis mengapa berinvestasi pada kursi ergonomis yang memiliki lumbar support mutlak diperlukan.',
    content: `Konsep bekerja jarak jauh dari rumah (Work From Home) memperlihatkan satu fakta krusial: banyak dari kita menghabiskan waktu 8 hingga 10 jam sehari duduk di atas kursi makan biasa, sofa empuk yang amblas, atau bahkan bersandar di karpet lantai. Setelah berbulan-bulan berlalu, keluhan leher kaku, nyeri pinggang belakang bawah, hingga kesemutan di lengan mulai bermunculan.

Mengapa hal ini terjadi? Rangka tubuh manusia didesain untuk bergerak, bukan berdiam diam dalam satu posisi membungkuk untuk jangka panjang. Kursi kerja ergonomis profesional dirancang secara sains mekanika tubuh guna menyelesaikan masalah ini.

Mengapa Kursi Ergonomis Sangat Penting?

1. Penopangan Presisi Tulang Belakang (Lumbar Support)
Tulang belakang bagian bawah kita melengkung secara alami ke arah dalam. Saat kita lelah bekerja di depan laptop, panggul kita akan meluncur ke depan dan tulang lumbar ini melengkung cembung ke belakang (slouching). Kursi dengan lumbar support dinamis akan mengisi lengkungan alami pinggang ini, menjaga sendi tulang tetap tegak lurus seimbang tanpa otot punggung dipaksa tegang berkontraksi lama.

2. Sandaran Tangan yang Dapat Disesuaikan (3D Armrest)
Lengan bawah yang menggantung tanpa tumpuan saat mengetik akan menarik otot bahu atas secara konstan, menyebabkan rasa tegang kronis menjalar dari pundak ke pangkal kepala. Sandaran tangan yang tepat mengizinkan siku Anda bertumpu rileks membentuk sudut 90 derajat sejajar permukaan meja Zenith Desk, membebaskan sendi pundak dari beban gravitasi.

3. Kedalaman Dudukan & Sirkulasi Udara
Dudukan kursi yang terlalu menekan lipatan lutut belakang dapat memperlambat lairan darah balik (vena) dari kaki, memicu pegal linu dan varises. Sudut landai tepi dudukan dipadu jaring mesh berkualitas tinggi AeroMesh melepas tumpukan hawa panas tubuh, menjaga kulit pinggul tetap kering dan sejuk nyaman.

Jangan korbankan kesehatan jangka panjang Anda demi estetika kosmetik semata. Kursi kerja yang ergonomis adalah wujud investasi peningkatan fokus kerja yang nyata. Selamat bekerja secara sehat!`,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pemesanan',
    question: 'Apakah saya bisa memesan furnitur dengan ukuran kustom?',
    answer: 'Tentu saja! Kami memiliki layanan pemesanan custom (kustomisasi dimensi, jenis kayu, warna finishing, hingga kain pembungkus). Anda dapat berdiskusi melalui WhatsApp atau mengisi form kontak, lalu tim desainer kami akan menggambar sketsa 3D untuk persetujuan sebelum diproduksi.'
  },
  {
    id: 'faq-2',
    category: 'Pengiriman',
    question: 'Bagaimana sistem pengiriman untuk area Jabodetabek dan luar kota?',
    answer: 'Untuk wilayah Jabodetabek, kami menyediakan layanan pengiriman dan instalasi gratis menggunakan aramda truk kurir tim Toko Fornitur. Untuk luar Jabodetabek, kami bekerja sama dengan ekspedisi kargo tepercaya yang berpengalaman mengirim kayu solid dengan asuransi penuh dan proteksi packing kayu berlapis.'
  },
  {
    id: 'faq-3',
    category: 'Pemesanan',
    question: 'Berapa lama estimasi proses pembuatan mebel custom?',
    answer: 'Durasi pengerjaan bergantung pada tingkat kerumitan desain dan antrean perajin kayu kami. Mebel standar diproduksi dalam waktu 10-18 hari kerja, sedangkan pesanan kustom berskala besar berkisar antara 20-30 hari kerja.'
  },
  {
    id: 'faq-4',
    category: 'Garansi',
    question: 'Apakah produk Toko Fornitur memiliki garansi resmi?',
    answer: 'Ya, seluruh produk eksklusif kami dilindungi garansi rangka kayu struktural dari keretakan atau pembengkokan selama 3 tahun, serta garansi busa kempes untuk sofa berlapis beludru selama 1 tahun. Cukup simpan nota invoice pembelian digital Anda.'
  },
  {
    id: 'faq-5',
    category: 'Kustomisasi',
    question: 'Bagaimana cara merawat furnitur kayu jati agar tetap mengilap?',
    answer: 'Sangat mudah! Cukup bersihkan debu secara berkala dengan lap microfiber kering. Setahun sekali, Anda bisa memberikan olesan wax lebah (beeswax) alami atau minyak jati tipis menggunakan kain halus untuk mengembalikan kilau protektif serat kayunya.'
  }
];
