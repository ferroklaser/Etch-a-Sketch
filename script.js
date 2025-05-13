
const grid = document.querySelector(".grid");
const size = 16;
const gridSize = 800;
const reset = document.querySelector(".reset");
const randomise = document.querySelector(".randomise");
let rainbow = false;

reset.addEventListener("click", () => resetGrid());
randomise.addEventListener("click", () => {
    rainbow = !rainbow;
})

populate(size);

function populate(size) {
    const squareSize = gridSize / size;

    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        for (let j = 0; j < size; j++) {
            const row = document.createElement("div");
            row.classList.add("square");
            row.style.cssText = `height: ${squareSize}px; width: ${squareSize}px`;
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => 
        square.addEventListener("mouseover", () => {
            colour(square, rainbow);
    }))
}

function resetGrid() {
    let newSize = 0;
    while (true) {
        newSize = prompt("Please enter number of squares per side: ");
        if (newSize > 1 && newSize < 101 || newSize == null) {
            break;
        }
    }
    if (newSize != null) {
        grid.innerHTML = '';
        populate(newSize);
    }
}

function colour(square, rainbow) {
    if (!rainbow) {
        square.style.backgroundColor = 'black';
    } else {
        const r = getRandomRGB();
        const g = getRandomRGB();
        const b = getRandomRGB();
        const rgb = `rgb(${r} ${g} ${b})`;
        square.style.backgroundColor = rgb;
    }

    function getRandomRGB() {
        return Math.random() * (255 - 0) + 0;
    }
}