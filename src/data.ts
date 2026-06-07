export interface NavLink { label: string; href: string; }
export interface Stat { value: string; label: string; }
export interface FeaturePoint { icon: string; title: string; desc: string; }
export interface Service { icon: string; name: string; desc: string; price?: string; }
export interface Plan { name: string; price: string; unit?: string; desc: string; features: string[]; featured?: boolean; cta?: string; }
export interface GalleryImage { url: string; alt: string; }
export interface Testimonial { name: string; role: string; quote: string; rating: number; avatar?: string; }
export interface SiteData {
  brand: string; logoMark: string; tagline: string; whatsapp: string; phone: string; email: string; address: string; hours: string;
  social: { instagram?: string; facebook?: string; tiktok?: string };
  nav: NavLink[];
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; image: string; stats: Stat[] };
  about: { eyebrow: string; title: string; paragraphs: string[]; points: FeaturePoint[]; image: string };
  services: { eyebrow: string; title: string; subtitle: string; items: Service[] };
  pricing: { eyebrow: string; title: string; subtitle: string; plans: Plan[] };
  gallery: { eyebrow: string; title: string; subtitle: string; images: GalleryImage[] };
  testimonials: { eyebrow: string; title: string; subtitle: string; items: Testimonial[] };
  contact: { eyebrow: string; title: string; subtitle: string };
}

export const site: SiteData = {
  brand: 'Senyum Sehat',
  logoMark: 'SS',
  tagline: 'Klinik gigi keluarga yang ramah & modern',
  whatsapp: '6281234567807',
  phone: '0812-3456-7807',
  email: 'halo@senyumsehat.id',
  address: 'Jl. Pakuan No. 7, Bogor, Jawa Barat',
  hours: 'Senin – Sabtu 09.00 – 20.00',
  social: { instagram: '@senyumsehat.id', facebook: 'Klinik Senyum Sehat' },
  nav: [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Biaya', href: '#pricing' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Janji Temu', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Ramah anak · Alat modern · Booking online',
    title: 'Senyum sehat,',
    highlight: 'percaya diri terjaga',
    subtitle:
      'Senyum Sehat merawat kesehatan gigi seluruh keluarga dengan dokter yang ramah, alat steril modern, dan suasana yang menenangkan — bahkan untuk yang takut ke dokter gigi.',
    ctaPrimary: 'Buat Janji Temu',
    ctaSecondary: 'Lihat Layanan',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { value: '10rb+', label: 'Pasien terlayani' },
      { value: 'Steril', label: 'Alat tersertifikasi' },
      { value: '4.9/5', label: 'Kepuasan pasien' },
    ],
  },
  about: {
    eyebrow: 'Tentang Senyum Sehat',
    title: 'Perawatan gigi tanpa rasa takut',
    paragraphs: [
      'Kami paham banyak orang menunda ke dokter gigi karena takut. Karena itu Senyum Sehat dirancang menenangkan: dokter yang sabar menjelaskan, ruang yang nyaman, dan pendekatan ramah anak.',
      'Dengan peralatan modern dan sterilisasi ketat, setiap perawatan dilakukan aman dan nyaman untuk seluruh anggota keluarga.',
    ],
    points: [
      { icon: 'tooth', title: 'Dokter Ramah', desc: 'Sabar menjelaskan tiap tindakan.' },
      { icon: 'shield', title: 'Steril & Aman', desc: 'Sterilisasi alat sesuai standar medis.' },
      { icon: 'heart', title: 'Ramah Anak', desc: 'Pendekatan lembut agar anak tak takut.' },
      { icon: 'clock', title: 'Booking Online', desc: 'Janji temu fleksibel tanpa antre lama.' },
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  },
  services: {
    eyebrow: 'Layanan',
    title: 'Perawatan gigi lengkap',
    subtitle: 'Dari pemeriksaan rutin sampai estetika senyum.',
    items: [
      { icon: 'tooth', name: 'Pemeriksaan & Konsultasi', desc: 'Cek menyeluruh + saran perawatan.', price: 'mulai Rp75.000' },
      { icon: 'sparkle', name: 'Scaling / Bersih Karang', desc: 'Hilangkan karang & noda gigi.', price: 'mulai Rp250.000' },
      { icon: 'tooth', name: 'Tambal Gigi', desc: 'Penambalan gigi berlubang sewarna gigi.', price: 'mulai Rp200.000' },
      { icon: 'razor', name: 'Cabut Gigi', desc: 'Pencabutan gigi aman dengan bius lokal.', price: 'mulai Rp150.000' },
      { icon: 'star', name: 'Behel / Kawat Gigi', desc: 'Perapian gigi dengan konsultasi ortodonti.', price: 'mulai Rp4.000.000' },
      { icon: 'sparkle', name: 'Pemutihan Gigi', desc: 'Bleaching untuk senyum lebih cerah.', price: 'mulai Rp800.000' },
    ],
  },
  pricing: {
    eyebrow: 'Paket Perawatan',
    title: 'Paket hemat keluarga',
    subtitle: 'Investasi untuk kesehatan gigi jangka panjang.',
    plans: [
      { name: 'Cek Rutin', price: 'Rp75rb', unit: '/kunjungan', desc: 'Pemeriksaan dasar', features: ['Konsultasi dokter', 'Cek gigi & gusi', 'Saran perawatan', 'Tanpa biaya tersembunyi'], cta: 'Buat Janji' },
      { name: 'Paket Bersih', price: 'Rp299rb', unit: '/paket', desc: 'Paling diminati', features: ['Scaling lengkap', 'Pemeriksaan menyeluruh', 'Polish gigi', 'Konsultasi gratis'], featured: true, cta: 'Buat Janji' },
      { name: 'Paket Keluarga', price: 'Rp899rb', unit: '/4 orang', desc: 'Hemat untuk keluarga', features: ['Cek + scaling 4 orang', 'Diskon 20% tindakan lanjut', 'Kartu kontrol berkala', 'Prioritas jadwal'], cta: 'Konsultasi' },
    ],
  },
  gallery: {
    eyebrow: 'Galeri',
    title: 'Klinik & suasana kami',
    subtitle: 'Ruang yang bersih, modern, dan menenangkan.',
    images: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop', alt: 'Ruang praktik dokter gigi modern' },
      { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop', alt: 'Pemeriksaan gigi pasien' },
      { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop', alt: 'Peralatan dental yang steril' },
      { url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop', alt: 'Dokter gigi tersenyum ramah' },
      { url: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop', alt: 'Pasien senyum sehat' },
      { url: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=800&auto=format&fit=crop', alt: 'Ruang tunggu klinik nyaman' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimoni',
    title: 'Kata pasien Senyum Sehat',
    subtitle: 'Kepercayaan keluarga untuk senyum yang sehat.',
    items: [
      { name: 'Wulan Dari', role: 'Ibu dua anak', rating: 5, quote: 'Anak saya yang biasanya takut, di sini malah nggak nangis. Dokternya sabar dan lembut banget.' },
      { name: 'Agus Setiawan', role: 'Karyawan', rating: 5, quote: 'Scaling-nya nyaman, dijelasin detail kondisi gigi saya. Booking online-nya praktis.' },
      { name: 'Nadia Putri', role: 'Mahasiswa', rating: 5, quote: 'Pasang behel di sini, prosesnya jelas dan dokternya komunikatif. Hasilnya rapi!' },
    ],
  },
  contact: {
    eyebrow: 'Janji Temu & Kontak',
    title: 'Jadwalkan kunjungan Anda',
    subtitle: 'Buat janji temu lewat WhatsApp. Sebutkan keluhan agar kami siapkan perawatan yang tepat.',
  },
};
