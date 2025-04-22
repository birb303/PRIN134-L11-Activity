const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('scoreBoard');

let score = 0;

function moveTarget() {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

function updateScore() {
    score++;
    scoreBoard.textContent = `Score: ${score}`;
}

target.addEventListener('click', (e) => {
    e.preventDefault();
    updateScore();
    moveTarget();
});

target.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    updateScore();
    moveTarget();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
        score = 0;
        scoreBoard.textContent = `Score: ${score}`;
        // const maxX = gameArea.clientWidth - target.offsetWidth;
        // const maxY = gameArea.clientHeight - target.offsetHeight;
        // const randomX = Math.floor(Math.random() * maxX);
        // const randomY = Math.floor(Math.random() * maxY);  
        // target.style.left = `${randomX}px`;
        // target.style.top = `${randomY}px`; 
        event.preventDefault();
    }
});

moveTarget();