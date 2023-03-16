const container = document.querySelector('.container')
let columnNum = [];

let xAxis = prompt('Choose size of grid. 0- 100...')
let yAxis = xAxis


// This function is what draws the grid
function drawGrid(yAxis, xAxis) {
    for (let i = 0; i < yAxis * xAxis; i++) {
        let div = document.createElement('div')
        div.classList.toggle('default')
        container.appendChild(div)
    }
    // one auto === one column added.
    for (let i = 0; i < yAxis; i++) {
        columnNum += 'auto '
    }
    // This line adds the amount of columns in css
    container.style.gridTemplateColumns = `${columnNum}`
}

drawGrid(xAxis, yAxis)

const random = document.querySelector('.random')
const black = document.querySelector('.black')
const shaded = document.querySelector('.shaded')
const eraser = document.querySelector('.eraser')
const rainbow = document.querySelector('.rainbow')

// This is the array that the random selector choses from. You can add colour and take away without affecting the code 
const rainbowColours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', ]

rainbow.addEventListener('click', event => {
    let rainbowOrder = 0;
    document.querySelectorAll('.default').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = rainbowColours[rainbowOrder]
        rainbowOrder += 1;
        if (rainbowOrder > 6) {
            rainbowOrder = 0;
            }
        })
    })
})

random.addEventListener('click', event => {
    document.querySelectorAll('.default').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        })
    })
})

black.addEventListener('click', event => {
    document.querySelectorAll('.default').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = 'black'
        })
    })
})

eraser.addEventListener('click', event => {
    document.querySelectorAll('.default').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = 'white'
        })
    })
})

shaded.addEventListener('click', event => {
    document.querySelectorAll('.default').forEach(item => {
    let shadedpct = 0.1;
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = `rgb(0, 0, 0, ${shadedpct})`
        shadedpct += 0.1;
        })
    })
})

