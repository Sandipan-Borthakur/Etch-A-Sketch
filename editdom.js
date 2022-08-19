function createGrid(n) {
    gridContainer.style['grid-template-columns'] = `repeat(${n},${400/n}px)`;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add("grid-element");
            gridContainer.appendChild(gridElement);
            gridElement.addEventListener('mouseover', function () {
                gridElement.style.backgroundColor = 'black';
            });
            clearGrid.addEventListener('click', () => {
                gridElement.style.backgroundColor = 'white';
            });
        };
    };
}
const gridContainer = document.querySelector(".grid-container");
const clearGrid = document.querySelector("#clearGrid");

let gridSlider = document.querySelector('#gridSlider');
gridSlider.addEventListener('click',() => {
    console.log(gridSlider.value);
});

createGrid(16);