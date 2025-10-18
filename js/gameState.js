/**
 * js/gameState.js (Versi 2)
 * Manajer Status Terpusat untuk LCT CSS 2.0
 * Menyimpan state (skor & soal) terpisah untuk setiap babak.
 */

const LCT_STORAGE_KEY = 'lctGameState_v2';

const GameManager = {
    state: {}, // Tempat menyimpan state yang sedang aktif

    // 1. Muat state dari sessionStorage
    loadState: function() {
        const savedState = sessionStorage.getItem(LCT_STORAGE_KEY);
        if (savedState) {
            this.state = JSON.parse(savedState);
        } else {
            // Jika tidak ada state tersimpan, buat state default
            this.state = {
                // Skor dan soal sekarang dipisah per babak
                penyisihan: {
                    teams: [
                        { name: "A", score: 0 },
                        { name: "B", score: 0 },
                        { name: "C", score: 0 },
                        { name: "D", score: 0 }
                    ],
                    selected: {} // cth: {'A1': true}
                },
                semifinal: {
                    teams: [
                        { name: "A", score: 0 },
                        { name: "B", score: 0 },
                        { name: "C", score: 0 },
                        { name: "D", score: 0 }
                    ],
                    selected: {} // cth: {'B2': true}
                },
                final: { // Siap untuk babak final
                    teams: [
                        { name: "A", score: 0 },
                        { name: "B", score: 0 },
                        { name: "C", score: 0 },
                        { name: "D", score: 0 }
                    ],
                    selected: {}
                }
            };
            this.saveState();
        }
    },

    // 2. Simpan state saat ini ke sessionStorage
    saveState: function() {
        sessionStorage.setItem(LCT_STORAGE_KEY, JSON.stringify(this.state));
    },

    // 3. Reset semua state dan skor ke default
    resetState: function() {
        if (confirm('Apakah Anda yakin ingin mereset SEMUA progres di SEMUA babak?')) {
            sessionStorage.removeItem(LCT_STORAGE_KEY);
            this.loadState();
            location.reload(); 
        }
    },
    
    // 4. Reset state HANYA untuk babak tertentu
    resetBabak: function(namaBabak) {
        if (!this.state[namaBabak]) {
            console.error(`Babak ${namaBabak} tidak ditemukan di state.`);
            return;
        }
        if (confirm(`Apakah Anda yakin ingin mereset skor dan soal HANYA untuk ${namaBabak}?`)) {
            // Reset skor tim di babak itu
            this.state[namaBabak].teams.forEach(t => t.score = 0);
            // Reset soal yang dipilih di babak itu
            this.state[namaBabak].selected = {};
            this.saveState();
            location.reload();
        }
    },

    // 5. Fungsi untuk mengambil data tim DARI BABAK TERTENTU
    getTeams: function(namaBabak) {
        if (!this.state[namaBabak]) {
            console.error(`Babak ${namaBabak} tidak ditemukan.`);
            return []; // Kembalikan array kosong agar tidak error
        }
        return this.state[namaBabak].teams;
    },

    // 6. Fungsi untuk mengubah skor tim DI BABAK TERTENTU
    updateScore: function(namaBabak, teamName, delta) {
        if (!this.state[namaBabak]) {
            console.error(`Babak ${namaBabak} tidak ditemukan.`);
            return;
        }
        const team = this.state[namaBabak].teams.find(t => t.name === teamName);
        if (team) {
            team.score += delta;
            this.saveState(); // Otomatis simpan
        } else {
            console.error(`Tim ${teamName} tidak ditemukan di babak ${namaBabak}!`);
        }
    },

    // 7. Cek apakah soal sudah dipilih DI BABAK TERTENTU
    isSelected: function(namaBabak, cellId) {
        if (!this.state[namaBabak]) {
            console.error(`Babak ${namaBabak} tidak ditemukan.`);
            return false;
        }
        return this.state[namaBabak].selected[cellId] || false;
    },
    
    // 8. Menandai soal telah dipilih DI BABAK TERTENTU
    selectSoal: function(namaBabak, cellId, status = true) {
        if (!this.state[namaBabak]) {
            console.error(`Babak ${namaBabak} tidak ditemukan.`);
            return;
        }
        if (status) {
            this.state[namaBabak].selected[cellId] = true;
        } else {
            delete this.state[namaBabak].selected[cellId];
        }
        this.saveState();
    }
};

// Langsung muat state saat file JavaScript ini dijalankan
GameManager.loadState();