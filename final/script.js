const size = 5; 
const board = document.getElementById("board");
let tiles = [];

// Create board
function createBoard() {
    board.innerHTML = "";
    tiles = [];

    for (let r = 0; r < size; r++) {
        tiles[r] = [];
        for (let c = 0; c < size; c++) {

            let div = document.createElement("div");
            div.classList.add("tile");
            div.dataset.r = r;
            div.dataset.c = c;

            div.addEventListener("click", () => clickTile(r, c));

            board.appendChild(div);
            tiles[r][c] = div;
        }
    }
}

// Toggle a tile (on/off)
function toggle(r, c) {
    if (r < 0 || c < 0 || r >= size || c >= size) return;
    tiles[r][c].classList.toggle("on");
}

// Game move: toggle clicked + neighbors
function clickTile(r, c) {
    toggle(r, c);
    toggle(r - 1, c);
    toggle(r + 1, c);
    toggle(r, c - 1);
    toggle(r, c + 1);

    checkWin();
}

// Check if all tiles are OFF
function checkWin() {
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (tiles[r][c].classList.contains("on")) {
                return false;
            }
        }
    }
    alert("You win!");
    return true;
}

// Make board solvable by simulating random clicks
function randomSolvableStart() {
    createBoard();

    let randomClicks = 12;
    for (let i = 0; i < randomClicks; i++) {
        let rr = Math.floor(Math.random() * size);
        let cc = Math.floor(Math.random() * size);
        clickTile(rr, cc);
    }
}

// Start game
randomSolvableStart();
