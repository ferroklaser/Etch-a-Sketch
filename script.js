
const grid = document.querySelector(".grid");
const size = 16;
const gridSize = 800;
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => resetGrid());

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
}

function resetGrid() {
    let newSize = 0;
    while (true) {
        newSize = prompt("Please enter number of squares per side: ");
        if (newSize > 1 && newSize < 101) {
            break;
        }
    }
    grid.innerHTML = '';
    populate(newSize);
}