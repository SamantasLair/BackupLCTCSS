
const dataPenyisihan = [
    {
      "id": "A1",
      "waktu": 3,
      "pertanyaan": "Apa kepanjangan dari CPU dalam ilmu komputer?",
      "jawaban":  ["Central Processing Unit"]
    },
    {
      "id": "A2",
      "waktu": 10,
      "pertanyaan": "Apa fungsi utama dari RAM dalam sistem komputer?",
      "jawaban": ["Menyimpan data sementara", "Temporary data storage", "Menyimpan instruksi sementara"]
    },
    {
      "id": "A3",
      "waktu": 10,
      "pertanyaan": "Sebutkan 4 layer teratas dalam model OSI dari atas ke bawah.",
      "jawaban": ["Application", "Presentation", "Session", "Transport"]
    },
    {
      "id": "A4",
      "waktu": 30,
      "pertanyaan": "Konversi bilangan biner 110101 ke dalam desimal.",
      "jawaban": ["53"]
    },
    {
      "id": "A5",
      "waktu": 30,
      "pertanyaan": "Jika sebuah file berukuran 4 MB disimpan di media dengan bandwidth 2 Mbps, berapa lama waktu minimum untuk mentransfer file tersebut?",
      "jawaban": ["16 detik"]
    },
    {
      "id": "A6",
      "waktu": 10,
      "pertanyaan": "Apa perbedaan utama antara kompilasi dan interpretasi?",
      "jawaban": [
        "Kompilasi menerjemahkan seluruh kode ke bahasa mesin sebelum dijalankan",
        "Interpretasi menjalankan kode baris demi baris tanpa menghasilkan file biner"
      ]
    },
  
    {
      "id": "B1",
      "waktu": 10,
      "pertanyaan": "Apa kepanjangan dari SQL?",
      "jawaban": ["Structured Query Language"]
    },
    {
      "id": "B2",
      "waktu": 10,
      "pertanyaan": "Dalam OOP, sebutkan 4 pilar utama pemrograman berorientasi objek.",
      "jawaban": ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"]
    },
    {
      "id": "B3",
      "waktu": 30,
      "pertanyaan": "Hitung hasil dari operasi logika: (1 AND 0) OR (1 XOR 1).",
      "jawaban": ["0"]
    },
    {
      "id": "B4",
      "waktu": 10,
      "pertanyaan": "Apa perbedaan HTTP dan HTTPS?",
      "jawaban": [
        "HTTPS menggunakan TLS/SSL untuk enkripsi komunikasi",
        "HTTP tidak terenkripsi"
      ]
    },
    {
      "id": "B5",
      "waktu": 30,
      "pertanyaan": "Jika sebuah array berisi 1024 elemen, berapa banyak perbandingan maksimum yang diperlukan untuk mencari sebuah nilai menggunakan binary search?",
      "jawaban": ["10"]
    },
    {
      "id": "B6",
      "waktu": 10,
      "pertanyaan": "Apa itu deadlock dalam sistem operasi?",
      "jawaban": [
        "Situasi di mana dua atau lebih proses saling menunggu sumber daya",
        "Kondisi proses tidak dapat melanjutkan karena menunggu sumber daya yang tidak pernah dilepaskan"
      ]
    },
  
    {
      "id": "C1",
      "waktu": 10,
      "pertanyaan": "Apa kepanjangan dari IP dalam jaringan komputer?",
      "jawaban": ["Internet Protocol"]
    },
    {
      "id": "C2",
      "waktu": 30,
      "pertanyaan": "Konversi bilangan heksadesimal 1F ke biner.",
      "jawaban": ["11111"]
    },
    {
      "id": "C3",
      "waktu": 10,
      "pertanyaan": "Dalam basis data, apa perbedaan antara Primary Key dan Foreign Key?",
      "jawaban": [
        "Primary Key adalah identitas unik di sebuah tabel",
        "Foreign Key adalah kunci yang mereferensikan Primary Key di tabel lain"
      ]
    },
    {
      "id": "C4",
      "waktu": 10,
      "pertanyaan": "Apa itu Big-O notation?",
      "jawaban": [
        "Cara untuk menggambarkan kompleksitas algoritma",
        "Ukuran pertumbuhan waktu/ruang berdasarkan input"
      ]
    },
    {
      "id": "C5",
      "waktu": 30,
      "pertanyaan": "Berapa hasil 2^10 dalam desimal?",
      "jawaban": ["1024"]
    },
    {
      "id": "C6",
      "waktu": 10,
      "pertanyaan": "Sebutkan 3 jenis topologi jaringan komputer.",
      "jawaban": ["Bus", "Star", "Ring", "Mesh", "Tree"]
    },
  
    {
      "id": "D1",
      "waktu": 30,
      "pertanyaan": "Jika sebuah harddisk berkapasitas 500 GB dengan 1 GB = 1024 MB, berapa MB total kapasitasnya?",
      "jawaban": ["512000"]
    },
    {
      "id": "D2",
      "waktu": 10,
      "pertanyaan": "Apa kepanjangan dari DNS?",
      "jawaban": ["Domain Name System"]
    },
    {
      "id": "D3",
      "waktu": 10,
      "pertanyaan": "Apa itu stack overflow dalam struktur data?",
      "jawaban": [
        "Kondisi ketika tumpukan stack penuh dan tidak bisa menerima data baru"
      ]
    },
    {
      "id": "D4",
      "waktu": 10,
      "pertanyaan": "Sebutkan 3 macam bahasa pemrograman tingkat tinggi.",
      "jawaban": ["Python", "Java", "C++", "C#", "JavaScript"]
    },
    {
      "id": "D5",
      "waktu": 30,
      "pertanyaan": "Jika rata-rata waktu akses sebuah harddisk adalah 10 ms, berapa total waktu untuk 1000 akses acak?",
      "jawaban": ["10000 ms", "10 detik"]
    },
    {
      "id": "D6",
      "waktu": 10,
      "pertanyaan": "Apa perbedaan komputasi paralel dan komputasi terdistribusi?",
      "jawaban": [
        "Komputasi paralel menjalankan banyak proses di dalam satu mesin dengan banyak core",
        "Komputasi terdistribusi menjalankan proses di banyak mesin berbeda yang terhubung jaringan"
      ]
    },
    {
      "id": "E6",
      "waktu": 10,
      "pertanyaan": "Apa perbedaan komputasi paralel dan komputasi terdistribusi?",
      "jawaban": [
        "Komputasi paralel menjalankan banyak proses di dalam satu mesin dengan banyak core",
        "Komputasi terdistribusi menjalankan proses di banyak mesin berbeda yang terhubung jaringan"
      ]
    }
  ]
  