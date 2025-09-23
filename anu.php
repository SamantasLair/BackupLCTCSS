<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elegant Orbit Animation</title>
    <style>
        body {
            background:
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at center, #7f1d1d 0%, #1f2937 50%, #111827 100%);
            background-size: 20px 20px, 20px 20px, auto;
            background-position: 0 0, 0 0, center;
            font-family: 'Arial', sans-serif;
            overflow: hidden;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .orbit-container {
            position: relative;
            width: 400px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .center-point {
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #fbbf24 0%, #f59e0b 100%);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.6);
            z-index: 10;
        }

        .orbit {
            position: absolute;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: rotateCounterClockwise 8s linear infinite;
        }

        .orbit-red {
            width: 300px;
            height: 300px;
            top: 50px;
            left: 50px;
        }

        .orbit-blue {
            width: 250px;
            height: 250px;
            top: 75px;
            left: 75px;
            animation-duration: 6s;
        }

        .planet {
            position: absolute;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            filter: drop-shadow(0 0 10px currentColor);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .planet-red {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%);
            color: #ef4444;
            top: -12.5px;
            left: -160px; /* Posisi di barat/kiri */
            animation: planetPulse 3s ease-in-out infinite;
        }

        .planet-blue {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
            color: #3b82f6;
            top: -137.5px; /* Posisi di utara/atas */
            left: -12.5px;
            animation: planetPulse 2.5s ease-in-out infinite;
        }

        @keyframes rotateCounterClockwise {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(-360deg);
            }
        }

        @keyframes planetPulse {
            0%, 100% {
                transform: scale(1);
                filter: drop-shadow(0 0 10px currentColor);
            }
            50% {
                transform: scale(1.2);
                filter: drop-shadow(0 0 20px currentColor);
            }
        }

        .attract-mode .planet {
            animation-duration: 12s;
        }

        .attract-mode .orbit-red {
            width: 200px;
            height: 200px;
            top: 100px;
            left: 100px;
        }

        .attract-mode .orbit-blue {
            width: 180px;
            height: 180px;
            top: 110px;
            left: 110px;
        }

        .attract-mode .planet-red {
            left: -110px;
        }

        .attract-mode .planet-blue {
            top: -102.5px;
        }

        .control-panel {
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(17, 24, 39, 0.9);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(156, 163, 175, 0.3);
            border-radius: 15px;
            padding: 20px;
            color: white;
        }

        .control-button {
            background: linear-gradient(135deg, rgba(107, 114, 128, 0.9) 0%, rgba(75, 85, 99, 1) 100%);
            border: 2px solid rgba(156, 163, 175, 0.3);
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 5px 0;
            width: 100%;
        }

        .control-button:hover {
            background: linear-gradient(135deg, rgba(156, 163, 175, 0.9) 0%, rgba(107, 114, 128, 1) 100%);
            transform: translateY(-2px);
        }

        .control-button.active {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            color: #1f2937;
            font-weight: bold;
        }

        .info-panel {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(17, 24, 39, 0.9);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(156, 163, 175, 0.3);
            border-radius: 15px;
            padding: 15px;
            color: white;
            font-size: 14px;
            max-width: 250px;
        }

        .trail {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            opacity: 0.6;
            pointer-events: none;
        }

        .trail-red {
            background: #ef4444;
            box-shadow: 0 0 5px #ef4444;
        }

        .trail-blue {
            background: #3b82f6;
            box-shadow: 0 0 5px #3b82f6;
        }

        .fade-out {
            animation: fadeTrail 2s ease-out forwards;
        }

        @keyframes fadeTrail {
            to {
                opacity: 0;
                transform: scale(0);
            }
        }
    </style>
</head>
<body>
    <div class="orbit-container" id="orbitContainer">
        <div class="center-point"></div>
        
        <!-- Orbit Merah (Barat) -->
        <div class="orbit orbit-red">
            <div class="planet planet-red" id="planetRed"></div>
        </div>
        
        <!-- Orbit Biru (Utara) -->
        <div class="orbit orbit-blue">
            <div class="planet planet-blue" id="planetBlue"></div>
        </div>
    </div>

    <div class="control-panel">
        <h3 style="margin-top: 0; color: #fbbf24;">Orbit Controls</h3>
        <button class="control-button active" id="normalMode">Mode Normal</button>
        <button class="control-button" id="attractMode">Mode Mendekat</button>
        <button class="control-button" id="trailMode">Toggle Jejak</button>
    </div>

    <div class="info-panel">
        <h4 style="margin-top: 0; color: #fbbf24;">Info Animasi</h4>
        <p><span style="color: #ef4444;">●</span> Planet Merah: Orbit barat, 8 detik</p>
        <p><span style="color: #3b82f6;">●</span> Planet Biru: Orbit utara, 6 detik</p>
        <p>Rotasi: Berlawanan arah jarum jam</p>
        <p>Mode mendekat: Planet saling mendekat secara acak</p>
    </div>

    <script>
        const orbitContainer = document.getElementById('orbitContainer');
        const planetRed = document.getElementById('planetRed');
        const planetBlue = document.getElementById('planetBlue');
        const normalModeBtn = document.getElementById('normalMode');
        const attractModeBtn = document.getElementById('attractMode');
        const trailModeBtn = document.getElementById('trailMode');

        let isAttractMode = false;
        let isTrailMode = false;
        let trailInterval;

        function toggleMode(mode) {
            // Reset active buttons
            document.querySelectorAll('.control-button').forEach(btn => btn.classList.remove('active'));
            
            if (mode === 'attract') {
                attractModeBtn.classList.add('active');
                orbitContainer.classList.add('attract-mode');
                isAttractMode = true;
                
                // Add random attraction animation
                setTimeout(() => {
                    if (isAttractMode) {
                        planetRed.style.transform = `scale(1.3) rotate(${Math.random() * 360}deg)`;
                        planetBlue.style.transform = `scale(1.3) rotate(${Math.random() * 360}deg)`;
                    }
                }, 1000);
                
            } else {
                normalModeBtn.classList.add('active');
                orbitContainer.classList.remove('attract-mode');
                isAttractMode = false;
                planetRed.style.transform = '';
                planetBlue.style.transform = '';
            }
        }

        function toggleTrail() {
            isTrailMode = !isTrailMode;
            if (isTrailMode) {
                trailModeBtn.classList.add('active');
                startTrail();
            } else {
                trailModeBtn.classList.remove('active');
                stopTrail();
            }
        }

        function createTrail(planet, color) {
            const trail = document.createElement('div');
            trail.className = `trail trail-${color} fade-out`;
            
            const rect = planet.getBoundingClientRect();
            const containerRect = orbitContainer.getBoundingClientRect();
            
            trail.style.left = (rect.left - containerRect.left + rect.width/2) + 'px';
            trail.style.top = (rect.top - containerRect.top + rect.height/2) + 'px';
            
            orbitContainer.appendChild(trail);
            
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 2000);
        }

        function startTrail() {
            trailInterval = setInterval(() => {
                if (isTrailMode) {
                    createTrail(planetRed, 'red');
                    createTrail(planetBlue, 'blue');
                }
            }, 100);
        }

        function stopTrail() {
            if (trailInterval) {
                clearInterval(trailInterval);
            }
            // Remove existing trails
            document.querySelectorAll('.trail').forEach(trail => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            });
        }

        // Event listeners
        normalModeBtn.addEventListener('click', () => toggleMode('normal'));
        attractModeBtn.addEventListener('click', () => toggleMode('attract'));
        trailModeBtn.addEventListener('click', toggleTrail);

        // Random attraction effect in attract mode
        setInterval(() => {
            if (isAttractMode) {
                const randomDelay = Math.random() * 3000 + 2000;
                setTimeout(() => {
                    if (isAttractMode) {
                        // Random scale and slight position changes
                        const redScale = 0.8 + Math.random() * 0.6;
                        const blueScale = 0.8 + Math.random() * 0.6;
                        
                        planetRed.style.transform = `scale(${redScale})`;
                        planetBlue.style.transform = `scale(${blueScale})`;
                        
                        // Reset after a moment
                        setTimeout(() => {
                            if (isAttractMode) {
                                planetRed.style.transform = 'scale(1)';
                                planetBlue.style.transform = 'scale(1)';
                            }
                        }, 1000);
                    }
                }, randomDelay);
            }
        }, 4000);
    </script>
</body>
</html>