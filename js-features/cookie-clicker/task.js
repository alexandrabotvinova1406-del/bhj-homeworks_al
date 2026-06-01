const cookieImage = document.getElementById('cookie');
const wrapper = document.createElement('div');
wrapper.style.height = '200px';
wrapper.style.display = 'flex';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';
cookieImage.parentNode.insertBefore(wrapper, cookieImage);
wrapper.appendChild(cookieImage);

let speedSpan = document.getElementById('click_speed');
if (!speedSpan) {
    const speedDiv = document.createElement('div');
    speedDiv.className = 'clicker__speed';
    speedDiv.style.marginTop = '10px';
    speedDiv.style.textAlign = 'center';
    speedDiv.innerHTML = 'Скорость клика: <span id="click_speed">0</span> кликов/сек';
    wrapper.parentNode.insertBefore(speedDiv, wrapper.nextSibling);
    speedSpan = document.getElementById('click_speed');
}


const counterElement = document.getElementById('clicker__counter');
let clickCount = 0;
let isBig = true;
let lastClickTime = null;

cookieImage.onclick = function() {
    clickCount++;
    counterElement.textContent = clickCount;

    if (isBig) {
        cookieImage.width = 150;
        cookieImage.height = 150;
    } else {
        cookieImage.width = 200;
        cookieImage.height = 200;
    }
    isBig = !isBig;

    // Скорость
    const now = new Date();
    if (lastClickTime !== null) {
        const delta = (now - lastClickTime) / 1000;
        if (delta > 0) {
            speedSpan.textContent = (1 / delta).toFixed(2);
        }
    }
    lastClickTime = now;
};
