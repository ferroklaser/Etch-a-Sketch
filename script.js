
const grid = document.querySelector(".grid");

const size = 16;
const gridSize = 900;

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