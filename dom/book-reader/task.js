document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    
    function setFontSize(size) {
        book.classList.remove('book_fs-big', 'book_fs-small');
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    }

    function activateFontSize(activeLink) {
        fontSizeControls.forEach(link => {
            link.classList.remove('font-size_active');
        });
        activeLink.classList.add('font-size_active');
    }

    fontSizeControls.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const size = link.dataset.size;
            setFontSize(size);
            activateFontSize(link);
        });
    });

    const colorControls = document.querySelectorAll('.book__control_color .color');
    if (colorControls.length) {
        function setTextColor(color) {
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            if (color && color !== 'black') {
                book.classList.add(`book_color-${color}`);
            }
        }

        function activateColor(activeLink) {
            colorControls.forEach(link => {
                link.classList.remove('color_active');
            });
            activeLink.classList.add('color_active');
        }

        colorControls.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const color = link.dataset.textColor;
                setTextColor(color);
                activateColor(link);
            });
        });
    }

    const bgControls = document.querySelectorAll('.book__control_background .color');
    if (bgControls.length) {
        function setBackgroundColor(color) {
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
            if (color && color !== 'white') {
                book.classList.add(`book_bg-${color}`);
            }
        }

        function activateBg(activeLink) {
            bgControls.forEach(link => {
                link.classList.remove('color_active');
            });
            activeLink.classList.add('color_active');
        }

        bgControls.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const bgColor = link.dataset.bgColor;
                setBackgroundColor(bgColor);
                activateBg(link);
            });
        });
    }
});
