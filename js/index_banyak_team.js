// Daftar tim (bisa tambah/kurangi sesuka hati) ///// belom pkepake
const teams = [{
    name: "A",
    score: 100
},
{
    name: "B",
    score: 200
},
{
    name: "C",
    score: 300
},
{
    name: "D",
    score: 400
},
];

const container = document.getElementById("team-container");

// Atur grid: max 4 per baris biar rapi, sisanya otomatis turun
container.className = `grid grid-cols-${Math.min(teams.length, 4)} gap-4 w-full`;

// Generate otomatis semua tim
teams.forEach(team => {
    const div = document.createElement("div");
    div.className = "category-button rounded-lg overflow-hidden shadow-md h-20 w-24 flex flex-col justify-between";

    div.innerHTML = `
            <!-- Atas: Nama -->
            <div class="bg-gray-700 text-center py-1">
                <span class="text-base font-bold text-white">${team.name}</span>
            </div>
            <!-- Bawah: Skor -->
            <div class="bg-gray-800 text-center py-2">
                <span class="text-lg font-extrabold text-white">${team.score}</span>
            </div>
        `;

    container.appendChild(div);
});