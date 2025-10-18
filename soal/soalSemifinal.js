// soalSemifinal.js - Struktur 4x(3x3) = 36 Soal
const questionsData = [
  // Grid A (A1-A9)
  { id: "A1", pertanyaan: "Apa kepanjangan dari RAM?", jawaban: ["Random Access Memory"] },
  { id: "A2", pertanyaan: "Sebutkan 2 jenis topologi jaringan fisik!", jawaban: ["Bus", "Star", "Ring", "Mesh", "Tree"] },
  { id: "A3", pertanyaan: "Fungsi utama dari Motherboard?", jawaban: ["Menghubungkan komponen"] },
  { id: "A4", pertanyaan: "Shortcut keyboard untuk 'Save'?", jawaban: ["Ctrl + S"] },
  { id: "A5", pertanyaan: "Sistem bilangan basis 2 disebut?", jawaban: ["Biner"] },
  { id: "A6", pertanyaan: "Perangkat output yang menghasilkan suara?", jawaban: ["Speaker", "Headphone"] },
  { id: "A7", pertanyaan: "Apa itu 'Cloud Computing'?", jawaban: ["Komputasi berbasis internet"] },
  { id: "A8", pertanyaan: "Bahasa markup standar untuk membuat halaman web?", jawaban: ["HTML"] },
  { id: "A9", pertanyaan: "Konversi Desimal 10 ke Biner?", jawaban: ["1010"] },

  // Grid B (B1-B9)
  { id: "B1", pertanyaan: "Apa kepanjangan dari CPU?", jawaban: ["Central Processing Unit"] },
  { id: "B2", pertanyaan: "Alamat unik yang dimiliki setiap perangkat jaringan?", jawaban: ["MAC Address"] },
  { id: "B3", pertanyaan: "Bagian CPU yang melakukan perhitungan?", jawaban: ["ALU"] },
  { id: "B4", pertanyaan: "Shortcut keyboard untuk 'Undo'?", jawaban: ["Ctrl + Z"] },
  { id: "B5", pertanyaan: "Sistem bilangan basis 8 disebut?", jawaban: ["Oktal"] },
  { id: "B6", pertanyaan: "Perangkat input untuk menggerakkan kursor?", jawaban: ["Mouse", "Touchpad"] },
  { id: "B7", pertanyaan: "Apa itu 'Firewall'?", jawaban: ["Sistem keamanan jaringan"] },
  { id: "B8", pertanyaan: "Bahasa pemrograman populer untuk web backend?", jawaban: ["PHP", "Python", "Node.js", "Java"] },
  { id: "B9", pertanyaan: "Konversi Biner 1101 ke Desimal?", jawaban: ["13"] },

  // Grid C (C1-C9)
  { id: "C1", pertanyaan: "Apa kepanjangan dari URL?", jawaban: ["Uniform Resource Locator"] },
  { id: "C2", pertanyaan: "Protokol standar untuk mengirim email?", jawaban: ["SMTP"] },
  { id: "C3", pertanyaan: "Komponen yang menyimpan data saat komputer mati?", jawaban: ["HDD", "SSD"] },
  { id: "C4", pertanyaan: "Shortcut keyboard untuk 'Select All'?", jawaban: ["Ctrl + A"] },
  { id: "C5", pertanyaan: "Sistem bilangan basis 16 disebut?", jawaban: ["Heksadesimal"] },
  { id: "C6", pertanyaan: "Perangkat output yang menampilkan gambar?", jawaban: ["Monitor", "Proyektor"] },
  { id: "C7", pertanyaan: "Apa itu 'Algoritma'?", jawaban: ["Langkah-langkah solusi"] },
  { id: "C8", pertanyaan: "Teknologi nirkabel jarak dekat untuk transfer data?", jawaban: ["Bluetooth", "NFC"] },
  { id: "C9", pertanyaan: "Konversi Desimal 25 ke Heksadesimal?", jawaban: ["19"] },

  // Grid D (D1-D9)
  { id: "D1", pertanyaan: "Apa kepanjangan dari OS?", jawaban: ["Operating System"] },
  { id: "D2", pertanyaan: "Perangkat yang menghubungkan komputer ke internet?", jawaban: ["Modem", "Router"] },
  { id: "D3", pertanyaan: "Memori cache CPU berfungsi untuk?", jawaban: ["Mempercepat akses data"] },
  { id: "D4", pertanyaan: "Shortcut keyboard untuk menutup jendela/tab?", jawaban: ["Ctrl + W", "Alt + F4"] },
  { id: "D5", pertanyaan: "Angka terbesar dalam sistem Oktal?", jawaban: ["7"] },
  { id: "D6", pertanyaan: "Perangkat input untuk merekam suara?", jawaban: ["Mikrofon"] },
  { id: "D7", pertanyaan: "Apa itu 'Debugging'?", jawaban: ["Mencari & memperbaiki error"] },
  { id: "D8", pertanyaan: "Pseudocode digunakan untuk?", jawaban: ["Merancang algoritma"] },
  { id: "D9", pertanyaan: "Konversi Heksadesimal 'A' ke Desimal?", jawaban: ["10"] }
];