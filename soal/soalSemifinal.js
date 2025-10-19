// soalSemifinal.js - Soal Tingkat Nasional 6x6 = 36 Soal
const questionsData = [
  // Grid A
  { id: "A1", waktu: 15, goldenZone: false, pertanyaan: "Apa fungsi utama dari protokol BGP (Border Gateway Protocol) dalam jaringan internet global?", jawaban: ["Routing antar Autonomous System (AS)", "Pertukaran informasi routing antar AS"] },
  { id: "A2", waktu: 15, goldenZone: false, pertanyaan: "Jelaskan perbedaan mendasar antara model TCP/IP dan model OSI dalam arsitektur jaringan!", jawaban: ["Jumlah layer berbeda (TCP/IP 4/5, OSI 7)", "OSI lebih teoritis, TCP/IP lebih praktis"] },
  { id: "A3", waktu: 15, goldenZone: false, pertanyaan: "Dalam Microsoft Excel, fungsi apa yang digunakan untuk mencari nilai dalam baris pertama sebuah tabel dan mengembalikan nilai dalam kolom yang sama dari baris yang ditentukan?", jawaban: ["HLOOKUP"] },
  { id: "A4", waktu: 15, goldenZone: false, pertanyaan: "Konversikan bilangan Heksadesimal '1A7' ke dalam basis Oktal!", jawaban: ["647"] },
  { id: "A5", waktu: 15, goldenZone: false, pertanyaan: "Apa yang dimaksud dengan 'Deadlock' dalam konteks sistem operasi dan sebutkan salah satu kondisi yang diperlukan agar deadlock terjadi!", jawaban: ["Situasi dimana dua atau lebih proses saling menunggu sumber daya", "Mutual Exclusion / Hold and Wait / No Preemption / Circular Wait"] },
  { id: "A6", waktu: 15, goldenZone: true, pertanyaan: "Tentukan kompleksitas waktu (Big O notation) dari algoritma Binary Search pada array yang sudah terurut!", jawaban: ["O(log n)"] }, // Golden Zone

  // Grid B
  { id: "B1", waktu: 15, goldenZone: false, pertanyaan: "Sebutkan minimal 3 perbedaan antara IPv4 dan IPv6!", jawaban: ["Ukuran alamat (32 vs 128 bit)", "Format header", "Adanya IPsec wajib di IPv6", "Konfigurasi otomatis (SLAAC di IPv6)", "Broadcast (IPv4) vs Multicast/Anycast (IPv6)"] },
  { id: "B2", waktu: 15, goldenZone: false, pertanyaan: "Apa peran 'Cache Coherence Protocol' dalam sistem komputer multiprosesor?", jawaban: ["Menjaga konsistensi data di cache setiap prosesor"] },
  { id: "B3", waktu: 15, goldenZone: false, pertanyaan: "Dalam SQL, perintah apa yang digunakan untuk menghapus sebuah tabel beserta seluruh datanya dari database?", jawaban: ["DROP TABLE nama_tabel"] },
  { id: "B4", waktu: 15, goldenZone: false, pertanyaan: "Hitung hasil dari operasi bitwise: 1101_2 XOR 0111_2!", jawaban: ["1010_2", "10 (desimal)"] },
  { id: "B5", waktu: 15, goldenZone: false, pertanyaan: "Apa perbedaan utama antara 'Process' dan 'Thread' dalam sistem operasi?", jawaban: ["Thread berbagi ruang memori yang sama (dalam satu proses)", "Process memiliki ruang memori terpisah"] },
  { id: "B6", waktu: 15, goldenZone: false, pertanyaan: "Tuliskan pseudocode sederhana untuk mencari nilai maksimum dalam sebuah array A berukuran N!", jawaban: ["max = A[0]; FOR i=1 TO N-1 DO IF A[i] > max THEN max = A[i]; ENDIF; ENDFOR; RETURN max"] },

  // Grid C
  { id: "C1", waktu: 15, goldenZone: false, pertanyaan: "Apa fungsi dari ARP (Address Resolution Protocol) dalam jaringan komputer?", jawaban: ["Memetakan alamat IP ke alamat MAC"] },
  { id: "C2", waktu: 15, goldenZone: false, pertanyaan: "Jelaskan konsep 'Virtual Memory' dalam sistem operasi!", jawaban: ["Teknik menggunakan disk sebagai ekstensi RAM", "Memungkinkan eksekusi program lebih besar dari memori fisik"] },
  { id: "C3", waktu: 15, goldenZone: true, pertanyaan: "Berapakah jumlah minimum edge yang dibutuhkan untuk membuat graf terhubung (connected graph) dengan N simpul (vertices)?", jawaban: ["N-1"] }, // Golden Zone
  { id: "C4", waktu: 15, goldenZone: false, pertanyaan: "Dalam Microsoft Word, fitur apa yang digunakan untuk membuat daftar isi secara otomatis berdasarkan heading?", jawaban: ["Table of Contents", "Daftar Isi"] },
  { id: "C5", waktu: 15, goldenZone: false, pertanyaan: "Sistem bilangan apa yang paling umum digunakan oleh komputer secara internal untuk merepresentasikan data?", jawaban: ["Biner", "Binary"] },
  { id: "C6", waktu: 15, goldenZone: false, pertanyaan: "Apa perbedaan antara kompiler (compiler) dan interpreter?", jawaban: ["Kompiler menerjemahkan seluruh kode sekaligus", "Interpreter menerjemahkan baris per baris saat eksekusi"] },

  // Grid D
  { id: "D1", waktu: 15, goldenZone: false, pertanyaan: "Apa itu subnetting dan sebutkan satu tujuannya!", jawaban: ["Membagi jaringan IP besar menjadi jaringan lebih kecil (subnet)", "Efisiensi alokasi IP / Mengurangi broadcast domain / Keamanan"] },
  { id: "D2", waktu: 15, goldenZone: false, pertanyaan: "Jelaskan fungsi dari DMA (Direct Memory Access) Controller!", jawaban: ["Memungkinkan transfer data antara peripheral dan memori tanpa intervensi CPU"] },
  { id: "D3", waktu: 15, goldenZone: false, pertanyaan: "Dalam basis data relasional, apa yang dimaksud dengan 'Normalisasi'?", jawaban: ["Proses mengurangi redundansi data", "Memastikan dependensi data logis"] },
  { id: "D4", waktu: 15, goldenZone: false, pertanyaan: "Hitung nilai desimal dari bilangan biner two's complement 8-bit: 11110011!", jawaban: ["-13"] },
  { id: "D5", waktu: 15, goldenZone: true, pertanyaan: "Struktur data apa yang paling cocok digunakan untuk mengimplementasikan fungsi Undo/Redo pada aplikasi?", jawaban: ["Stack", "Tumpukan"] }, // Golden Zone
  { id: "D6", waktu: 15, goldenZone: false, pertanyaan: "Apa perbedaan utama antara algoritma sorting Bubble Sort dan Merge Sort dalam hal kompleksitas waktu rata-rata?", jawaban: ["Bubble Sort O(n^2)", "Merge Sort O(n log n)"] },

  // Grid E
  { id: "E1", waktu: 15, goldenZone: false, pertanyaan: "Sebutkan tiga jenis topologi jaringan fisik selain Star dan Bus!", jawaban: ["Ring", "Mesh", "Tree", "Hybrid"] },
  { id: "E2", waktu: 15, goldenZone: false, pertanyaan: "Apa fungsi dari BIOS/UEFI pada saat komputer pertama kali dinyalakan?", jawaban: ["Inisialisasi hardware", "Memuat bootloader sistem operasi", "POST (Power-On Self Test)"] },
  { id: "E3", waktu: 15, goldenZone: false, pertanyaan: "Dalam Microsoft PowerPoint, apa nama tampilan yang memungkinkan pengguna melihat semua slide dalam bentuk thumbnail?", jawaban: ["Slide Sorter"] },
  { id: "E4", waktu: 15, goldenZone: false, pertanyaan: "Konversikan bilangan Desimal 42 ke basis Biner!", jawaban: ["101010"] },
  { id: "E5", waktu: 15, goldenZone: false, pertanyaan: "Apa yang dimaksud dengan 'Thrashing' dalam manajemen memori sistem operasi?", jawaban: ["Kondisi CPU sibuk melakukan page swapping daripada eksekusi proses"] },
  { id: "E6", waktu: 15, goldenZone: false, pertanyaan: "Dalam konteks graf, apa perbedaan antara 'path' dan 'cycle'?", jawaban: ["Cycle adalah path yang simpul awal dan akhirnya sama", "Path tidak harus kembali ke awal"] },

  // Grid F
  { id: "F1", waktu: 15, goldenZone: true, pertanyaan: "Jika sebuah fungsi rekursif memanggil dirinya sendiri tanpa basis kasus (base case), apa yang akan terjadi?", jawaban: ["Stack Overflow Error", "Infinite Recursion"] }, // Golden Zone
  { id: "F2", waktu: 15, goldenZone: false, pertanyaan: "Protokol apa yang digunakan untuk mengirim email?", jawaban: ["SMTP (Simple Mail Transfer Protocol)"] },
  { id: "F3", waktu: 15, goldenZone: false, pertanyaan: "Apa perbedaan antara SSD (Solid State Drive) dan HDD (Hard Disk Drive) dari segi teknologi penyimpanan?", jawaban: ["SSD menggunakan flash memory (chip)", "HDD menggunakan piringan magnetik berputar"] },
  { id: "F4", waktu: 15, goldenZone: false, pertanyaan: "Dalam SQL, klausa apa yang digunakan untuk mengurutkan hasil query?", jawaban: ["ORDER BY"] },
  { id: "F5", waktu: 15, goldenZone: false, pertanyaan: "Representasi BCD (Binary Coded Decimal) dari angka 97 adalah?", jawaban: ["1001 0111"] },
  { id: "F6", waktu: 15, goldenZone: false, pertanyaan: "Algoritma penjadwalan CPU mana yang memberikan prioritas kepada proses dengan waktu eksekusi tersingkat berikutnya?", jawaban: ["SJF (Shortest Job First)", "Shortest Remaining Time First (SRTF)"] }
];