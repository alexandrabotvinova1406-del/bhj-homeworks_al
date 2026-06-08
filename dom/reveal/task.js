document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    function checkVisibility() {

        const windowHeight = window.innerHeight;

        for (let element of revealElements) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < windowHeight && rect.bottom > 0;

            if (isVisible) {
                element.classList.add('reveal_active');
            } else {
                element.classList.remove('reveal_active');
            }
        }
    }

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});
