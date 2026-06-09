document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    let activeTooltip = null;

    tooltipElements.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            if (activeTooltip && activeTooltip.triggerElement === element) {
                activeTooltip.tooltipElement.remove();
                activeTooltip = null;
                return;
            }

            if (activeTooltip) {
                activeTooltip.tooltipElement.remove();
                activeTooltip = null;
            }

            let tooltipText = element.getAttribute('title');
            if (!tooltipText) {
                tooltipText = element.getAttribute('data-original-title');
            }
            if (!tooltipText) return;

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = rect.bottom + 'px';

            tooltip.classList.add('tooltip_active');

            activeTooltip = {
                tooltipElement: tooltip,
                triggerElement: element
            };

            if (element.getAttribute('title')) {
                element.setAttribute('data-original-title', element.getAttribute('title'));
                element.removeAttribute('title');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (activeTooltip && !event.target.closest('.has-tooltip') && !event.target.closest('.tooltip')) {
            activeTooltip.tooltipElement.remove();
            activeTooltip = null;
        }
    });
});
