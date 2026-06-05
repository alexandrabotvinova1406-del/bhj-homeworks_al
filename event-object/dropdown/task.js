//чисто что бы убегало.
const style = document.createElement('style');
style.textContent = `
    .dropdown {
        display: inline-block;
        width: auto;
    }
    .dropdown__list {
        left: 0;
        min-width: 100%;
        width: max-content;
        right: auto;
    }
`;
document.head.appendChild(style);


//Вот тут задание
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueDiv = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');


    valueDiv.addEventListener('click', (event) => {
        event.stopPropagation();
        list.classList.toggle('dropdown__list_active');
    });


    items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const selectedText = link.textContent.trim();
            valueDiv.textContent = selectedText;
            list.classList.remove('dropdown__list_active');
        });
    });
});


document.addEventListener('click', (event) => {
    dropdowns.forEach(dropdown => {
        const list = dropdown.querySelector('.dropdown__list');
        if (list.classList.contains('dropdown__list_active')) {
            if (!dropdown.contains(event.target)) {
                list.classList.remove('dropdown__list_active');
            }
        }
    });
});
