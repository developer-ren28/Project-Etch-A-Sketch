const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id', 'container');
const button = document.createElement('button');
button.textContent = 'Change Grid';
button.classList.toggle('btn')
const wrapper = document.getElementById('#wrapper');



body.prepend(container);
container.appendChild(wrapper);
wrapper.before(button);



const changeColor = {
    defColor: (e) => {e.target.style.backgroundColor = "black"},
    rainbowClr: (e) => {e.target.style.backgroundColor = rndColor()},
};




const grid = {
    sizes: [1, 2, 4, 16, 32, 64],
    fillGrid: (gridCount, exeFunction) => {
        wrapper.style.gridTemplateColumns = `repeat(${gridCount}, auto)`;
        for (let i = 1; i < gridCount**2+1; i++) {
            const item = document.createElement('div');
            wrapper.appendChild(item);
        };    
        (exeFunction)();
    },
    clearGrid: () => {
        while(wrapper.hasChildNodes()) {
            wrapper.removeChild(wrapper.firstChild);
        };
    }
};

function getGridSize() {
     const gridSize = Math.round(parseInt(prompt('Enter grid size.', '')));
     if (gridSize > 100) { return 100};
     return gridSize;
};

function gridEvent() {
    const items = document.querySelectorAll('#wrapper > div');
    items.forEach(divItem => {
        divItem.addEventListener('mouseover', changeColor.defColor)
    });
};

const rnd = {
    limit: {
        min: 0,
        max: 255
    },
    number: () => Math.floor(Math.random() * (rnd.limit.max - rnd.limit.min + 1)) + rnd.limit.min,
    clr: () => `rgb(${rnd.number()}, ${rnd.number()}, ${rnd.number()})`
};

function gridBox() {
    const size = getGridSize();    
    if (isNaN(size)) {
        return;
    };
    grid.clearGrid();
    grid.fillGrid(size, gridEvent);
};


button.addEventListener('click', gridBox);
grid.fillGrid(grid.sizes[3], gridEvent);