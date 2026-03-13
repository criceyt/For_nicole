document.addEventListener('DOMContentLoaded', () => {
    const loveBtn = document.getElementById('loveBtn');

    const triggerLove = (e) => {
        const icons = ['💖', '🎀', '🌸', '🍎', '✨', '🐱'];
        for (let i = 0; i < 15; i++) {
            createFloatingElement(icons);
        }
    };

    loveBtn.addEventListener('click', triggerLove);

    function createFloatingElement(icons) {
        const element = document.createElement('div');
        element.className = 'floating-item';
        element.innerText = icons[Math.floor(Math.random() * icons.length)];

        // Distribución en todo el ancho del móvil
        element.style.left = Math.random() * 90 + 'vw';
        element.style.top = '100vh';
        
        const size = Math.random() * 15 + 20 + 'px';
        element.style.fontSize = size;

        const duration = Math.random() * 1.5 + 2 + 's';
        element.style.animationDuration = duration;

        document.body.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, 3000);
    }
});