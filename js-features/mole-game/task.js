const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let gameInterval = null;
let isGameActive = true;


function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function moveMole() {
    if (!isGameActive) return;
    
    for (let i = 1; i <= 9; i++) {
        getHole(i).classList.remove('hole_has-mole');
    }
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    getHole(randomIndex).classList.add('hole_has-mole');
}

function resetGame() {
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
    
    if (gameInterval) {
        clearInterval(gameInterval);
    }
    isGameActive = true;
    gameInterval = setInterval(moveMole, 800); // крот прыгает 0.8 сек
    moveMole();
}


function checkGameStatus() {
    const dead = parseInt(deadCounter.textContent, 10);
    const lost = parseInt(lostCounter.textContent, 10);

    if (dead >= 10) {
        alert('Победа! Вы убили 10 кротов!');
        isGameActive = false;
        clearInterval(gameInterval);
        resetGame();
    } else if (lost >= 5) {
        alert('Поражение! 5 промахов.');
        isGameActive = false;
        clearInterval(gameInterval);
        resetGame();
    }
}


for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    if (hole) {
        hole.onclick = function() {
            if (!isGameActive) return;
            
            const hasMole = hole.classList.contains('hole_has-mole');
            
            if (hasMole) {
                let dead = parseInt(deadCounter.textContent, 10);
                dead++;
                deadCounter.textContent = dead;
                hole.classList.remove('hole_has-mole');
            } else {
                let lost = parseInt(lostCounter.textContent, 10);
                lost++;
                lostCounter.textContent = lost;
            }
            
            checkGameStatus();
        };
    }
}
resetGame();
