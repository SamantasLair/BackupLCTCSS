












const dataSemifinal1 = [
  // ===== A =====
  {
    id: "A1",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Apa fungsi utama dari protokol BGP dalam jaringan internet global?",
    jawaban: "Routing antar Autonomous System (AS)"
  },
  {
    id: "A2",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Dalam arsitektur komputer, apa fungsi utama dari cache L1 dan L2?",
    jawaban: "Meningkatkan kecepatan akses data dengan menyimpan data yang sering digunakan di dekat CPU"
  },
  {
    id: "A3",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Perintah Linux apa yang digunakan untuk menampilkan daftar proses yang sedang berjalan?",
    jawaban: "ps atau top"
  },
  {
    id: "A4",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Jelaskan perbedaan utama antara IPv4 dan IPv6 dalam hal struktur alamat dan kapasitas!",
    jawaban: "IPv4 menggunakan 32-bit (≈4,3 miliar alamat), sedangkan IPv6 menggunakan 128-bit (≈3,4×10^38 alamat)"
  },
  {
    id: "A5",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Apa kepanjangan dari URL dalam konteks web?",
    jawaban: "Uniform Resource Locator"
  },
  {
    id: "A6",
    waktu: 20,
    goldenZone: true,
    pertanyaan: "Sebutkan tiga perangkat keras utama yang membentuk sistem komputer!",
    jawaban: "CPU, Memori, dan Perangkat Input/Output"
  },

  // ===== B =====
  {
    id: "B1",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Jelaskan perbedaan antara Virtual Memory dan Physical Memory dalam sistem operasi!",
    jawaban: "Virtual Memory menggunakan ruang penyimpanan sekunder untuk memperluas kapasitas RAM secara logis"
  },
  {
    id: "B2",
    waktu: 10,
    goldenZone: true,
    pertanyaan: "Apa nama algoritma enkripsi yang digunakan dalam protokol HTTPS modern?",
    jawaban: "AES (Advanced Encryption Standard)"
  },
  {
    id: "B3",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Dalam sistem file, apa fungsi dari inode pada Linux?",
    jawaban: "Menyimpan metadata file seperti ukuran, hak akses, dan lokasi blok data"
  },
  {
    id: "B4",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Sebutkan tiga lapisan teratas dalam model OSI dan fungsinya secara singkat!",
    jawaban: "Application, Presentation, dan Session"
  },
  {
    id: "B5",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Jenis jaringan yang mencakup area geografis sangat luas disebut?",
    jawaban: "WAN (Wide Area Network)"
  },
  {
    id: "B6",
    waktu: 25,
    goldenZone: true,
    pertanyaan: "Jelaskan fungsi dan contoh penerapan load balancer!",
    jawaban: "Mendistribusikan lalu lintas ke beberapa server untuk meningkatkan kinerja dan keandalan"
  },

  // ===== C =====
  {
    id: "C1",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Sebutkan dua contoh sistem operasi berbasis UNIX!",
    jawaban: "macOS dan Linux"
  },
  {
    id: "C2",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Apa fungsi utama dari hypervisor dalam virtualisasi?",
    jawaban: "Mengelola dan menjalankan beberapa mesin virtual di atas satu host fisik"
  },
  {
    id: "C3",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Jelaskan secara singkat bagaimana mekanisme DNS mengubah nama domain menjadi alamat IP!",
    jawaban: "DNS mencari catatan A/AAAA yang memetakan domain ke alamat IP tujuan"
  },
  {
    id: "C4",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Kepanjangan dari SSD adalah?",
    jawaban: "Solid State Drive"
  },
  {
    id: "C5",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Dalam konteks pemrograman, apa perbedaan antara compiler dan interpreter?",
    jawaban: "Compiler menerjemahkan seluruh kode menjadi biner sekaligus, interpreter menjalankan baris demi baris"
  },
  {
    id: "C6",
    waktu: 20,
    goldenZone: true,
    pertanyaan: "Protokol apa yang digunakan untuk mengirim file antar komputer dalam jaringan TCP/IP?",
    jawaban: "FTP (File Transfer Protocol)"
  },

  // ===== D =====
  {
    id: "D1",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Sebutkan dua jenis topologi jaringan komputer yang umum digunakan!",
    jawaban: "Star dan Bus"
  },
  {
    id: "D2",
    waktu: 20,
    goldenZone: true,
    pertanyaan: "Jelaskan konsep multitasking preemptive pada sistem operasi!",
    jawaban: "Sistem dapat menghentikan proses sementara untuk memberi CPU ke proses lain"
  },
  {
    id: "D3",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Dalam pemrograman, apa fungsi dari algoritma hashing?",
    jawaban: "Mengubah data menjadi nilai unik dengan panjang tetap"
  },
  {
    id: "D4",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Sebutkan dan jelaskan tiga jenis serangan keamanan jaringan umum!",
    jawaban: "DDoS, Phishing, dan SQL Injection"
  },
  {
    id: "D5",
    waktu: 12,
    goldenZone: false,
    pertanyaan: "Perintah Linux apa yang digunakan untuk mengubah hak akses file?",
    jawaban: "chmod"
  },
  {
    id: "D6",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Sebutkan dua metode autentikasi yang umum digunakan dalam keamanan komputer!",
    jawaban: "Password dan biometrik"
  },

  // ===== E =====
  {
    id: "E1",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Apa kepanjangan dari GUI dan fungsinya?",
    jawaban: "Graphical User Interface — memudahkan interaksi pengguna dengan komputer secara visual"
  },
  {
    id: "E2",
    waktu: 25,
    goldenZone: true,
    pertanyaan: "Jelaskan bagaimana konsep cloud computing bekerja secara umum!",
    jawaban: "Cloud menyediakan sumber daya komputasi melalui internet secara on-demand"
  },
  {
    id: "E3",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Perangkat keras kecil yang digunakan untuk membaca kartu memori disebut?",
    jawaban: "Card Reader"
  },
  {
    id: "E4",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Sebutkan dua contoh layanan cloud yang populer!",
    jawaban: "Google Cloud dan AWS"
  },
  {
    id: "E5",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Apa perbedaan antara model SaaS dan IaaS dalam cloud computing?",
    jawaban: "SaaS menyediakan aplikasi siap pakai, IaaS menyediakan infrastruktur dasar seperti server dan storage"
  },
  {
    id: "E6",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Proses mengubah data menjadi bentuk yang tidak dapat dibaca tanpa kunci disebut?",
    jawaban: "Enkripsi"
  },

  // ===== F =====
  {
    id: "F1",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Apa fungsi utama dari kernel pada sistem operasi?",
    jawaban: "Mengatur komunikasi antara perangkat keras dan perangkat lunak"
  },
  {
    id: "F2",
    waktu: 25,
    goldenZone: true,
    pertanyaan: "Jelaskan konsep containerization dan bedanya dengan virtual machine!",
    jawaban: "Container berbagi kernel OS yang sama, lebih ringan dari VM yang membutuhkan OS terpisah"
  },
  {
    id: "F3",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Perintah dasar di Command Prompt untuk menampilkan daftar file adalah?",
    jawaban: "dir"
  },
  {
    id: "F4",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Teknologi penyimpanan data berbasis blok di cloud disebut?",
    jawaban: "Block Storage"
  },
  {
    id: "F5",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Apa kelebihan utama penggunaan AI berbasis machine learning dibanding rule-based system?",
    jawaban: "AI dapat belajar dari data dan meningkatkan performa tanpa diprogram ulang"
  },
  {
    id: "F6",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Jenis AI yang digunakan untuk mengenali pola gambar disebut?",
    jawaban: "Computer Vision"
  }
];

const dataSemifinal2 = [
  // ===== A =====
  {
    id: "A1",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Apa fungsi utama dari protokol BGP dalam jaringan internet global?",
    jawaban: "Routing antar Autonomous System (AS)"
  },
  {
    id: "A2",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Dalam arsitektur komputer, apa fungsi utama dari cache L1 dan L2?",
    jawaban: "Meningkatkan kecepatan akses data dengan menyimpan data yang sering digunakan di dekat CPU"
  },
  {
    id: "A3",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Perintah Linux apa yang digunakan untuk menampilkan daftar proses yang sedang berjalan?",
    jawaban: "ps atau top"
  },
  {
    id: "A4",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Jelaskan perbedaan utama antara IPv4 dan IPv6 dalam hal struktur alamat dan kapasitas!",
    jawaban: "IPv4 menggunakan 32-bit (≈4,3 miliar alamat), sedangkan IPv6 menggunakan 128-bit (≈3,4×10^38 alamat)"
  },
  {
    id: "A5",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Apa kepanjangan dari URL dalam konteks web?",
    jawaban: "Uniform Resource Locator"
  },
  {
    id: "A6",
    waktu: 20,
    goldenZone: true,
    pertanyaan: "Sebutkan tiga perangkat keras utama yang membentuk sistem komputer!",
    jawaban: "CPU, Memori, dan Perangkat Input/Output"
  },

  // ===== B =====
  {
    id: "B1",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Jelaskan perbedaan antara Virtual Memory dan Physical Memory dalam sistem operasi!",
    jawaban: "Virtual Memory menggunakan ruang penyimpanan sekunder untuk memperluas kapasitas RAM secara logis"
  },
  {
    id: "B2",
    waktu: 10,
    goldenZone: true,
    pertanyaan: "Apa nama algoritma enkripsi yang digunakan dalam protokol HTTPS modern?",
    jawaban: "AES (Advanced Encryption Standard)"
  },
  {
    id: "B3",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Dalam sistem file, apa fungsi dari inode pada Linux?",
    jawaban: "Menyimpan metadata file seperti ukuran, hak akses, dan lokasi blok data"
  },
  {
    id: "B4",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Sebutkan tiga lapisan teratas dalam model OSI dan fungsinya secara singkat!",
    jawaban: "Application, Presentation, dan Session"
  },
  {
    id: "B5",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Jenis jaringan yang mencakup area geografis sangat luas disebut?",
    jawaban: "WAN (Wide Area Network)"
  },
  {
    id: "B6",
    waktu: 25,
    goldenZone: true,
    pertanyaan: "Jelaskan fungsi dan contoh penerapan load balancer!",
    jawaban: "Mendistribusikan lalu lintas ke beberapa server untuk meningkatkan kinerja dan keandalan"
  },

  // ===== C =====
  {
    id: "C1",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Sebutkan dua contoh sistem operasi berbasis UNIX!",
    jawaban: "macOS dan Linux"
  },
  {
    id: "C2",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Apa fungsi utama dari hypervisor dalam virtualisasi?",
    jawaban: "Mengelola dan menjalankan beberapa mesin virtual di atas satu host fisik"
  },
  {
    id: "C3",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Jelaskan secara singkat bagaimana mekanisme DNS mengubah nama domain menjadi alamat IP!",
    jawaban: "DNS mencari catatan A/AAAA yang memetakan domain ke alamat IP tujuan"
  },
  {
    id: "C4",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Kepanjangan dari SSD adalah?",
    jawaban: "Solid State Drive"
  },
  {
    id: "C5",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Dalam konteks pemrograman, apa perbedaan antara compiler dan interpreter?",
    jawaban: "Compiler menerjemahkan seluruh kode menjadi biner sekaligus, interpreter menjalankan baris demi baris"
  },
  {
    id: "C6",
    waktu: 20,
    goldenZone: true,
    pertanyaan: "Protokol apa yang digunakan untuk mengirim file antar komputer dalam jaringan TCP/IP?",
    jawaban: "FTP (File Transfer Protocol)"
  },

  // ===== D =====
  {
    id: "D1",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Sebutkan dua jenis topologi jaringan komputer yang umum digunakan!",
    jawaban: "Star dan Bus"
  },
  {
    id: "D2",
    waktu: 20,
    goldenZone: true,
    pertanyaan: "Jelaskan konsep multitasking preemptive pada sistem operasi!",
    jawaban: "Sistem dapat menghentikan proses sementara untuk memberi CPU ke proses lain"
  },
  {
    id: "D3",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Dalam pemrograman, apa fungsi dari algoritma hashing?",
    jawaban: "Mengubah data menjadi nilai unik dengan panjang tetap"
  },
  {
    id: "D4",
    waktu: 25,
    goldenZone: false,
    pertanyaan: "Sebutkan dan jelaskan tiga jenis serangan keamanan jaringan umum!",
    jawaban: "DDoS, Phishing, dan SQL Injection"
  },
  {
    id: "D5",
    waktu: 12,
    goldenZone: false,
    pertanyaan: "Perintah Linux apa yang digunakan untuk mengubah hak akses file?",
    jawaban: "chmod"
  },
  {
    id: "D6",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Sebutkan dua metode autentikasi yang umum digunakan dalam keamanan komputer!",
    jawaban: "Password dan biometrik"
  },

  // ===== E =====
  {
    id: "E1",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Apa kepanjangan dari GUI dan fungsinya?",
    jawaban: "Graphical User Interface — memudahkan interaksi pengguna dengan komputer secara visual"
  },
  {
    id: "E2",
    waktu: 25,
    goldenZone: true,
    pertanyaan: "Jelaskan bagaimana konsep cloud computing bekerja secara umum!",
    jawaban: "Cloud menyediakan sumber daya komputasi melalui internet secara on-demand"
  },
  {
    id: "E3",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Perangkat keras kecil yang digunakan untuk membaca kartu memori disebut?",
    jawaban: "Card Reader"
  },
  {
    id: "E4",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Sebutkan dua contoh layanan cloud yang populer!",
    jawaban: "Google Cloud dan AWS"
  },
  {
    id: "E5",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Apa perbedaan antara model SaaS dan IaaS dalam cloud computing?",
    jawaban: "SaaS menyediakan aplikasi siap pakai, IaaS menyediakan infrastruktur dasar seperti server dan storage"
  },
  {
    id: "E6",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Proses mengubah data menjadi bentuk yang tidak dapat dibaca tanpa kunci disebut?",
    jawaban: "Enkripsi"
  },

  // ===== F =====
  {
    id: "F1",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Apa fungsi utama dari kernel pada sistem operasi?",
    jawaban: "Mengatur komunikasi antara perangkat keras dan perangkat lunak"
  },
  {
    id: "F2",
    waktu: 25,
    goldenZone: true,
    pertanyaan: "Jelaskan konsep containerization dan bedanya dengan virtual machine!",
    jawaban: "Container berbagi kernel OS yang sama, lebih ringan dari VM yang membutuhkan OS terpisah"
  },
  {
    id: "F3",
    waktu: 10,
    goldenZone: false,
    pertanyaan: "Perintah dasar di Command Prompt untuk menampilkan daftar file adalah?",
    jawaban: "dir"
  },
  {
    id: "F4",
    waktu: 15,
    goldenZone: false,
    pertanyaan: "Teknologi penyimpanan data berbasis blok di cloud disebut?",
    jawaban: "Block Storage"
  },
  {
    id: "F5",
    waktu: 15,
    goldenZone: true,
    pertanyaan: "Apa kelebihan utama penggunaan AI berbasis machine learning dibanding rule-based system?",
    jawaban: "AI dapat belajar dari data dan meningkatkan performa tanpa diprogram ulang"
  },
  {
    id: "F6",
    waktu: 20,
    goldenZone: false,
    pertanyaan: "Jenis AI yang digunakan untuk mengenali pola gambar disebut?",
    jawaban: "Computer Vision"
  }
];


