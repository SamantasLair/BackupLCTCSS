<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CS 2.0 Game Board</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background:
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at center, #7f1d1d 0%, #1f2937 50%, #111827 100%);
            background-size: 20px 20px, 20px 20px, auto;
            font-family: 'Arial', sans-serif;
        }

        .game-button {
            transition: all 0.3s ease;
            background: linear-gradient(135deg, rgba(156, 163, 175, 0.8) 0%, rgba(107, 114, 128, 0.9) 100%);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(156, 163, 175, 0.3);
        }

        .game-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            background: linear-gradient(135deg, rgba(209, 213, 219, 0.9) 0%, rgba(156, 163, 175, 1) 100%);
        }

        .game-button.selected {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            border-color: #d97706;
            color: #1f2937;
            font-weight: bold;
        }

        .category-button {
            background: linear-gradient(135deg, rgba(107, 114, 128, 0.9) 0%, rgba(75, 85, 99, 1) 100%);
            border: 2px solid rgba(156, 163, 175, 0.3);
        }

        .category-button:hover {
            background: linear-gradient(135deg, rgba(156, 163, 175, 0.9) 0%, rgba(107, 114, 128, 1) 100%);
        }

        .logo-shield {
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }
    </style>
</head>

<body class="min-h-screen flex flex-col">

    <div class="rounded-2xl py-4 max-w-4xl w-full mx-auto flex flex-col flex-grow">

        <!-- Logo -->
        <div class="fixed top-0 left-0 p-4 flex items-center gap-2">
            <svg class="logo-shield w-10 h-10" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 L85 20 L85 50 Q85 75 50 110 Q15 75 15 50 L15 20 Z"
                    fill="url(#shieldGradient)" stroke="#fbbf24" stroke-width="2" />
                <circle cx="50" cy="35" r="8" fill="#fbbf24" />
                <path d="M35 50 L50 65 L65 50" stroke="#fbbf24" stroke-width="3" fill="none" />
                <text x="50" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">CS</text>
                <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#374151" />
                        <stop offset="100%" style="stop-color:#1f2937" />
                    </linearGradient>
                </defs>
            </svg>
            <h1 class="text-white text-xl font-bold">CS<span class="text-sm ml-1">2.0</span></h1>
        </div>

        <!-- Konten -->
        <div class="flex flex-col items-center justify-center flex-grow">
            <div class="flex justify-center mb-6">
                <div id="team-container" class="grid gap-4"></div>
            </div>
            <div id="game-grid" class="grid gap-4 mb-8"></div>
        </div>

        <!-- Reset Button -->
        <div class="fixed bottom-0 left-0 p-4">
            <button onclick="resetBoard()"
                class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105">
                Reset
            </button>
        </div>
    </div>

    <script>
        // Daftar tim
        const teams = [
            { name: "A", score: 100 },
            { name: "B", score: 200 },
            { name: "C", score: 300 },
            { name: "D", score: 400 },
        ];

        const container = document.getElementById("team-container");

        container.className = `grid grid-cols-${Math.min(teams.length, 4)} gap-4 w-full`;

        teams.forEach(team => {
            const div = document.createElement("div");
            div.className = "category-button rounded-lg overflow-hidden shadow-md h-20 w-24 flex flex-col justify-between";

            div.innerHTML = `
                <div class="bg-gray-700 text-center py-1">
                    <span class="text-base font-bold text-white">${team.name}</span>
                </div>
                <div class="bg-gray-800 text-center py-2">
                    <span class="text-lg font-extrabold text-white">${team.score}</span>
                </div>
            `;
            container.appendChild(div);
        });

        // 🔧 Atur grid: game board
        const rows = 4;
        const cols = 6;
        let selectedCells = new Set();

        function createGrid() {
            const grid = document.getElementById('game-grid');
            grid.innerHTML = "";
            grid.style.gridTemplateColumns = `repeat(${cols}, 6rem)`;

            for (let r = 0; r < rows; r++) {
                const rowLetter = String.fromCharCode(65 + r);
                for (let c = 1; c <= cols; c++) {
                    const cellId = rowLetter + c;
                    const button = document.createElement('button');
                    button.className = "game-button h-20 rounded-lg text-gray-800 font-bold text-xl hover:scale-105";
                    button.dataset.cell = cellId;
                    button.innerText = cellId;
                    button.onclick = () => selectCell(button);
                    grid.appendChild(button);
                }
            }
        }

        function selectCell(button) {
            const cellId = button.dataset.cell;
            if (selectedCells.has(cellId)) {
                button.classList.remove('selected');
                selectedCells.delete(cellId);
            } else {
                button.classList.add('selected');
                selectedCells.add(cellId);
            }
            button.style.transform = 'scale(0.95)';
            setTimeout(() => button.style.transform = '', 150);
        }

        function resetBoard() {
            selectedCells.clear();
            document.querySelectorAll('.game-button').forEach(button => button.classList.remove('selected'));
        }

        document.addEventListener('keydown', function (e) {
            if (e.key.toLowerCase() === 'r') resetBoard();
        });

        window.addEventListener('load', function () {
            createGrid();
            const buttons = document.querySelectorAll('.game-button');
            buttons.forEach((button, index) => {
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    button.style.transition = 'all 0.5s ease';
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
    </script>

</body>

</html>
