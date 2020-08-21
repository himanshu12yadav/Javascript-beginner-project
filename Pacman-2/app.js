document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid');
    const width = 28;
    let score = 0;
    let scoreDisplay = document.querySelector('#score');
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];

    const squares = [];

    function createDashboard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            }
            if (layout[i] === 1) {
                squares[i].classList.add('wall');
            }
            if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair');
            }
            if (layout[i] === 3) {
                squares[i].classList.add('power-pellet');
            }

        }

    }
    createDashboard();
    console.log(squares);

    let pacmancurrentIndex = 489

    squares[pacmancurrentIndex].classList.add('pac-man');

    document.addEventListener('keyup', movePacman);

    function movePacman(e) {
        squares[pacmancurrentIndex].classList.remove('pac-man');
        switch (e.keyCode) {
            case 37:
                if (!squares[pacmancurrentIndex - 1].classList.contains('wall')) {
                    pacmancurrentIndex -= 1;
                }
                break;
            case 38:
                if (!squares[pacmancurrentIndex - width].classList.contains('wall')) {
                    pacmancurrentIndex -= width;
                }
                break;

            case 39:
                if (!squares[pacmancurrentIndex + 1].classList.contains('wall')) {
                    pacmancurrentIndex += 1;
                }
                break;
            case 40:
                if (!squares[pacmancurrentIndex + width].classList.contains('wall')) {
                    pacmancurrentIndex += width;
                }
                break;

        }
        squares[pacmancurrentIndex].classList.add('pac-man');

        pacDotEaten();
        powerPellet();
        // checkForGameOver();
        checkForWin();

    }

    function pacDotEaten() {
        if (squares[pacmancurrentIndex].classList.contains('pac-dot')) {
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmancurrentIndex].classList.remove('pac-dot');
        }

    }

    function powerPellet() {
        if (squares[pacmancurrentIndex].classList.contains('power-pellet')) {
            score += 10;
            ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(unScaredGhosts, 10000);
            squares[pacmancurrentIndex].classList.remove('power-pellet');
        }
    }


    function unScaredGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false);
    }

    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.timerId = NaN;
            this.isScared = false;
        }
    }

    var ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
    });

    ghosts.forEach(ghost => moveGhost(ghost));


    function moveGhost(ghost) {
        const directions = [-1, 1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];

        ghost.timerId = setInterval(() => {
            
            if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
                !squares[ghost.currentIndex + direction].classList.contains('ghost')) {

                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                ghost.currentIndex += direction;

                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');

            } else {
                direction = directions[Math.floor(Math.random() * directions.length)];
            }

            if (ghost.isScared){
                squares[ghost.currentIndex].classList.add('scared-ghost');
            }

            if (ghost.isScared && squares[pacmancurrentIndex].classList.contains('scared-ghost')){
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                score += 100;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }

            checkForGameOver();

        }, ghost.speed);
    }

    function checkForGameOver(){
        if (squares[pacmancurrentIndex].classList.contains('ghost') &&
        (!squares[pacmancurrentIndex].classList.contains('scared-ghost'))){
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            scoreDisplay.innerHTML = 'GAMEOVER'
        }
    }

    function checkForWin(){
        if (score === 274){
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            scoreDisplay.innerHTML = 'You Win';
        }
    }

});

