const rowCount = document.querySelector('.input');
const start = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const delays = document.querySelector('.delay');
const outPutContainer = document.querySelector('.symbols-container');
let current = 0;
let intervalId;

function printCircles(lines){
    outPutContainer.innerHTML = ''
    for(let i = 1; i<=lines ; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        for(let j = 2; j<=i ; j++){
            const circle = document.createElement('div')
            circle.classList.add('symbol')
            row.appendChild(circle)
        }
        outPutContainer.appendChild(row)
    }
}

function startBlinking(){
    stopBlinking()
    rows = +(rowCount.value)
    printCircles(rows)
    const delay = +delays.value
    const lines = document.querySelectorAll('.row')
    console.log(rows)

    intervalId = setInterval(()=>{
        lines.forEach(line=>{
            const circles = line.children
            Array.from(circles).forEach(circle=>{
                circle.style.backgroundColor = 'white'
            })
        })
        const circles = lines[current].children
        Array.from(circles).forEach(circle=>{
            circle.style.backgroundColor = 'red'
        })
        current = (current + 1) % rows
    },delay)
}

function stopBlinking(){
    clearInterval(intervalId)
}

start.addEventListener('click',startBlinking)
stopBtn.addEventListener('click',stopBlinking)