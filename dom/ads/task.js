document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        if (cases.length === 0) return;

        let activeIndex = cases.findIndex(c => c.classList.contains('rotator__case_active'));
        if (activeIndex === -1) {
            activeIndex = 0;
            cases[0].classList.add('rotator__case_active');
        }

        const applyColor = (element) => {
            if (element.dataset.color) {
                element.style.color = element.dataset.color;
            }
        };

        applyColor(cases[activeIndex]);

        function rotate() {
            
            const current = cases[activeIndex];
            current.classList.remove('rotator__case_active');

            const nextIndex = (activeIndex + 1) % cases.length;
            const next = cases[nextIndex];

            next.classList.add('rotator__case_active');

            applyColor(next);

            activeIndex = nextIndex;

            let speed = parseInt(next.dataset.speed, 10);
            if (isNaN(speed)) speed = 1000; // 1 секунда
            setTimeout(rotate, speed);
        }

        let initialSpeed = parseInt(cases[activeIndex].dataset.speed, 10);
        if (isNaN(initialSpeed)) initialSpeed = 1000;
        setTimeout(rotate, initialSpeed);
    });
});
