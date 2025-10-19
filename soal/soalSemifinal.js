// soalSemifinal.js - Struktur 6x6 = 36 Soal
const questionsData = [
  // Grid A (A1-A6)
  { id: "A1", waktu: 15, pertanyaan: "Apa kepanjangan dari RAM?", jawaban: ["Random Access Memory"] },
  { id: "A2", waktu: 15, pertanyaan: "Sebutkan 2 jenis topologi jaringan fisik!", jawaban: ["Bus", "Star", "Ring", "Mesh", "Tree"] },
  { id: "A3", waktu: 15, pertanyaan: "Fungsi utama dari Motherboard?", jawaban: ["Menghubungkan komponen"] },
  { id: "A4", waktu: 15, pertanyaan: "Shortcut keyboard untuk 'Save'?", jawaban: ["Ctrl + S"] },
  { id: "A5", waktu: 15, pertanyaan: "Sistem bilangan basis 2 disebut?", jawaban: ["Biner"] },
  { id: "A6", waktu: 15, pertanyaan: "Perangkat output yang menghasilkan suara?", jawaban: ["Speaker", "Headphone"] },

  // Grid B (B1-B6)
  { id: "B1", waktu: 15, pertanyaan: "Apa kepanjangan dari CPU?", jawaban: ["Central Processing Unit"] },
  { id: "B2", waktu: 15, pertanyaan: "Alamat unik yang dimiliki setiap perangkat jaringan?", jawaban: ["MAC Address"] },
  { id: "B3", waktu: 15, pertanyaan: "Bagian CPU yang melakukan perhitungan?", jawaban: ["ALU"] },
  { id: "B4", waktu: 15, pertanyaan: "Shortcut keyboard untuk 'Undo'?", jawaban: ["Ctrl + Z"] },
  { id: "B5", waktu: 15, pertanyaan: "Sistem bilangan basis 8 disebut?", jawaban: ["Oktal"] },
  { id: "B6", waktu: 15, pertanyaan: "Perangkat input untuk menggerakkan kursor?", jawaban: ["Mouse", "Touchpad"] },

  // Grid C (C1-C6)
  { id: "C1", waktu: 15, pertanyaan: "Apa kepanjangan dari URL?", jawaban: ["Uniform Resource Locator"] },
  { id: "C2", waktu: 15, pertanyaan: "Protokol standar untuk mengirim email?", jawaban: ["SMTP"] },
  { id: "C3", waktu: 15, pertanyaan: "Komponen yang menyimpan data saat komputer mati?", jawaban: ["HDD", "SSD"] },
  { id: "C4", waktu: 15, pertanyaan: "Shortcut keyboard untuk 'Select All'?", jawaban: ["Ctrl + A"] },
  { id: "C5", waktu: 15, pertanyaan: "Sistem bilangan basis 16 disebut?", jawaban: ["Heksadesimal"] },
  { id: "C6", waktu: 15, pertanyaan: "Perangkat output yang menampilkan gambar?", jawaban: ["Monitor", "Proyektor"] },

  // Grid D (D1-D6)
  { id: "D1", waktu: 15, pertanyaan: "Apa kepanjangan dari OS?", jawaban: ["Operating System"] },
  { id: "D2", waktu: 15, pertanyaan: "Perangkat yang menghubungkan komputer ke internet?", jawaban: ["Modem", "Router"] },
  { id: "D3", waktu: 15, pertanyaan: "Memori cache CPU berfungsi untuk?", jawaban: ["Mempercepat akses data"] },
  { id: "D4", waktu: 15, pertanyaan: "Shortcut keyboard untuk menutup jendela/tab?", jawaban: ["Ctrl + W", "Alt + F4"] },
  { id: "D5", waktu: 15, pertanyaan: "Angka terbesar dalam sistem Oktal?", jawaban: ["7"] },
  { id: "D6", waktu: 15, pertanyaan: "Perangkat input untuk merekam suara?", jawaban: ["Mikrofon"] },

  // Grid E (E1-E6) - Contoh Soal Tambahan
  { id: "E1", waktu: 15, pertanyaan: "Apa itu 'Cloud Computing'?", jawaban: ["Komputasi berbasis internet"] },
  { id: "E2", waktu: 15, pertanyaan: "Bahasa markup standar untuk membuat halaman web?", jawaban: ["HTML"] },
  { id: "E3", waktu: 15, pertanyaan: "Konversi Desimal 10 ke Biner?", jawaban: ["1010"] },
  { id: "E4", waktu: 15, pertanyaan: "Apa itu 'Firewall'?", jawaban: ["Sistem keamanan jaringan"] },
  { id: "E5", waktu: 15, pertanyaan: "Bahasa pemrograman populer untuk web backend?", jawaban: ["PHP", "Python", "Node.js", "Java"] },
  { id: "E6", waktu: 15, pertanyaan: "Konversi Biner 1101 ke Desimal?", jawaban: ["13"] },

  // Grid F (F1-F6) - Contoh Soal Tambahan
  { id: "F1", waktu: 15, pertanyaan: "Apa itu 'Algoritma'?", jawaban: ["Langkah-langkah solusi"] },
  { id: "F2", waktu: 15, pertanyaan: "Teknologi nirkabel jarak dekat untuk transfer data?", jawaban: ["Bluetooth", "NFC"] },
  { id: "F3", waktu: 15, pertanyaan: "Konversi Desimal 25 ke Heksadesimal?", jawaban: ["19"] },
  { id: "F4", waktu: 15, pertanyaan: "Apa itu 'Debugging'?", jawaban: ["Mencari & memperbaiki error"] },
  { id: "F5", waktu: 15, pertanyaan: "Pseudocode digunakan untuk?", jawaban: ["Merancang algoritma"] },
  { id: "F6", waktu: 15, pertanyaan: "Konversi Heksadesimal 'A' ke Desimal?", jawaban: ["10"] }
];