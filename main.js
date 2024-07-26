document.addEventListener('DOMContentLoaded', () => {
    const solarSystemImage = document.getElementById('solarSystemImage');
    const planetMap = {
        sun: { x: 891, y: 439, r: 395 },
        mercury: { x: 1694, y: 485, r: 93 },
        venus: { x: 2295, y: 484, r: 177 },
        earth: { x: 2922, y: 488, r: 133 },
        mars: { x: 3464, y: 488, r: 161 },
        jupiter: { x: 4177, y: 488, r: 262 },
        saturn: { x: 4964, y: 513, r: 262 },
        uranus: { x: 5683, y: 463, r: 197 },
        neptune: { x: 6310, y: 477, r: 168 },
        pluto: { x: 6904, y: 478, r: 126 }
    };

    solarSystemImage.addEventListener('click', (event) => {
        const rect = solarSystemImage.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const scale = solarSystemImage.naturalWidth / rect.width;

        for (const [planet, { x: px, y: py, r: pr }] of Object.entries(planetMap)) {
            const dx = (x - (px / scale));
            const dy = (y - (py / scale));
            if (dx * dx + dy * dy <= (pr / scale) * (pr / scale)) {
                navigateTo(planet);
                break;
            }
        }
    });

    function navigateTo(planetId) {
        document.getElementById(planetId).scrollIntoView({ behavior: 'smooth' });
    }
});