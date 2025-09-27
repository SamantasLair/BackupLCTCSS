<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 2.0 Game Board</title>
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

        /* qPopUp */
        .team-pill {
            border: 1px solid #111; border-radius: .25rem; padding: 0 .35rem; font-size: .75rem;
            background: #eee;
        }

        .team-pill[data-team="A"].active {
            background-color: #ff4444; /* merah */
            color: white;
        }

        .team-pill[data-team="B"].active {
            background-color: #3b82ff; /* biru */
            color: white;
        }

        .team-pill[data-team="C"].active {
            background-color: #ffcf15; /* kuning */
            color: black;
        }

        .team-pill[data-team="D"].active {
            background-color: #22dd5e; /* hijau */
            color: white;
        }


        .team-pill.active { background: #bbb; }
            @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-4px); }
            40%, 80% { transform: translateX(4px); }
        }

        .team-pill.shake {
            animation: shake 0.4s;
        }

    </style>
</head>

<!-- Template -->
<!-- POPUP -->
<dialog id="q-dialog" class="rounded-2xl p-0 backdrop:bg-black/50 opacity-80">
  <form method="dialog" class="bg-gray-300 min-w-[36rem] max-w-[90vw] rounded-2xl">
    <header class="px-4 py-3 text-center">
      <h3 class="font-bold text-lg">Pertanyaan</h3>
    </header>

    <section class="px-4 pb-2 text-center">
      <blockquote id="q-text" class="italic">"soal beneran"</blockquote>
    </section>

    <div class="relative px-4 pb-4 flex items-center justify-center">
      <!-- kiri: tombol cancel -->
      <button class= "absolute left-4" id="q-cancel" value="cancel" class="w-6 h-6 border rounded text-xs grid place-items-center">–</button>

      <!-- tengah: pilihan tim -->
      <div class="space-x-2">
        <button type="button" data-team="A" class="team-pill">A</button>
        <button type="button" data-team="B" class="team-pill">B</button>
        <button type="button" data-team="C" class="team-pill">C</button>
        <button type="button" data-team="D" class="team-pill">D</button>
      </div>

      <!-- kanan: wrong & ok -->
      <div class="absolute right-4 space-x-2 flex justify-between">
        <button id="q-wrong" value="wrong" class="w-6 h-6 border rounded text-xs grid place-items-center">✕</button>
        <button id="q-ok" value="ok" class="w-6 h-6 border rounded text-xs grid place-items-center">✓</button>
      </div>
    </div>
  </form>
</dialog>

<body class="min-h-screen flex flex-col">

    <div class="rounded-2xl py-4 max-w-4xl w-full mx-auto flex flex-col flex-grow">

        <!-- Logo -->
        <div class="fixed top-0 left-0 p-4 flex items-center gap-2">
            <svg class="logo-shield w-10 h-10" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 L85 20 L85 50 Q85 75 50 110 Q15 75 15 50 L15 20 Z"
                    fill="url(#shieldGradient)" stroke="#fbbf24" stroke-width="2" />
                <circle cx="50" cy="35" r="8" fill="#fbbf24" />
                <path d="M35 50 L50 65 L65 50" stroke="#fbbf24" stroke-width="3" fill="none" />
                <text x="50" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">CSS</text>
                <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#374151" />
                        <stop offset="100%" style="stop-color:#1f2937" />
                    </linearGradient>
                </defs>
            </svg>
            <h1 class="text-white text-xl font-bold">CSS<span class="text-sm ml-1">2.0</span></h1>
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
            { name: "A", score: 0 },
            { name: "B", score: 0 },
            { name: "C", score: 0 },
            { name: "D", score: 0 },
        ];

        const container = document.getElementById("team-container");

        container.className = `grid grid-cols-${Math.min(teams.length, 4)} gap-4 w-full`;

        function renderTeams() { // Lmao static
            container.innerHTML = ""; // bersihin
            teams.forEach(team => {
            const div = document.createElement("div");
            div.className = "category-button rounded-lg overflow-hidden shadow-md h-20 w-24 flex flex-col justify-between";
            div.innerHTML = `
                <div class="bg-gray-700 text-center py-1">
                <span class="text-base font-bold text-white">${team.name}</span>
                </div>
                <div class="bg-gray-800 text-center py-2">
                <span id="score-${team.name}" class="text-lg font-extrabold text-white">${team.score}</span>
                </div>`;
            container.appendChild(div);
            });
        }
        // 🔧 Atur grid: game board
        renderTeams();
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
                    button.className = "bg-opacity-50 game-button h-20 rounded-lg text-gray-800 font-bold text-xl hover:scale-105";
                    button.dataset.cell = cellId;
                    button.innerText = cellId;
                    button.onclick = async () => {
                    selectCell(button);                 // toggle visual & Set terpilih 
                    const res = await qPopUp(button);   // buka popup

                    if (res.cancelled) {                // batal? balikin state
                        selectCell(button);
                        return;
                    }

                    // Tambah skor tim terpilih
                    const t = teams.find(x => x.name === res.team);
                    if (t) {
                        t.score += res.delta;
                        // update tampilan skor
                        const el = document.getElementById(`score-${t.name}`);
                        if (el) el.textContent = t.score;
                    }
                    };
                    grid.appendChild(button);
                }
            }
        }

        async function qPopUp(button) {
            const cellId = button.dataset.cell; // A3, B2, C1 dst 
            if (!selectedCells.has(cellId)) return { cancelled: true };
            
            const dlg   = document.getElementById('q-dialog');
            const qText = document.getElementById('q-text');
            const okBtn = document.getElementById('q-ok');
            const wrongBtn   = document.getElementById('q-wrong');
            const cancelBtn   = document.getElementById('q-cancel');
            const pills = Array.from(dlg.querySelectorAll('.team-pill'));
            
            // state popup
            let team = null;
            let delta = 100;        
            let wDelta = -50;
            qText.textContent = `"soal beneran"`; 
            
            // reset UI
            pills.forEach(p => p.classList.remove('active'));
            
            // listeners
            const onPill = (e) => {
                team = e.currentTarget.dataset.team;
                pills.forEach(p => p.classList.toggle('active', p.dataset.team === team));
            };
            pills.forEach(p => p.addEventListener('click', onPill));

            const shakePills = () => {
                pills.forEach(p => {
                    p.classList.add('shake');
                    p.addEventListener('animationend', () => p.classList.remove('shake'), { once: true });
                });
            }
            const onOk = (e) => {
                if (!team) {
                    e.preventDefault();
                    shakePills();
                }
            };
    
            const onWrong = (e) => {
                if (!team) {
                    e.preventDefault();
                    shakePills();
                }
            };
            
            okBtn.addEventListener('click', onOk);
            wrongBtn.addEventListener('click', onWrong);

            // Promise hasil popup
            const result = await new Promise((resolve) => {
                const onClose = () => {
                dlg.removeEventListener('close', onClose);
                pills.forEach(p => p.removeEventListener('click', onPill));
                okBtn.removeEventListener('click', onOk);
                wrongBtn.removeEventListener('click', onWrong);

                if (dlg.returnValue === 'ok' && team) {
                    resolve({ cancelled: false, team, delta, cellId });
                } else if(dlg.returnValue === 'wrong' && team) {
                    resolve({ cancelled: false, team, delta: wDelta, cellId });
                } else if (dlg.returnValue === 'cancel') {
                    resolve({ cancelled: true });
                }
                };

                dlg.addEventListener('close', onClose, { once: true });
                dlg.showModal();
            });

        return result;
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
