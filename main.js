const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('scoreBoard');
const setupButton = document.getElementById('setupBtn');
const quantityInput = document.getElementById('quantity');

let score = 0;

function updateScore() {
    scoreBoard.textContent = `Score: ${score}`;
}

function moveTarget(target) {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

setupButton.addEventListener('click', () => {
    gameArea.innerHTML = ''; 
    score = 0;
    updateScore();

    let numTargets = parseInt(quantityInput.value);
    if (isNaN(numTargets) || numTargets < 1) numTargets = 1;
    if (numTargets > 5) numTargets = 5;

    for (let i = 1; i <= numTargets; i++) {
        const target = document.createElement('div');
        target.classList.add('target');
        target.textContent = i;

        target.addEventListener('click', (e) => {
            e.preventDefault();
            score++;
            updateScore();
            moveTarget(target);
        });

        target.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            score++;
            updateScore();
            moveTarget(target);
        });

        gameArea.appendChild(target);
        moveTarget(target);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
        score = 0;
        updateScore();
        event.preventDefault();
    }
});

moveTarget();