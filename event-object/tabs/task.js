document.addEventListener('DOMContentLoaded', () => {
    const tabNavigations = document.querySelectorAll('.tab__navigation');

    tabNavigations.forEach(nav => {
        const container = nav.parentElement;
        const tabs = nav.querySelectorAll('.tab');
        const contentsContainer = container.querySelector('.tab__contents');
        
        if (!contentsContainer) return;
        const contents = contentsContainer.querySelectorAll('.tab__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('tab_active'));
                tab.classList.add('tab_active');

                contents.forEach(c => c.classList.remove('tab__content_active'));
                
                if (contents[index]) {
                    contents[index].classList.add('tab__content_active');
                }
            });
        });
    });
});
