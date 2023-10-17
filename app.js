const container = document.querySelector("#container")
const box = document.querySelector(".box")
let gridSize = 5


function grid (gridSize) {
    container.style.setProperty("display", "grid")
    container.style.setProperty("grid-template-columns", `repeat(${gridSize}, 1fr)`)
    for(let i = 0; i < (gridSize * gridSize); i++){
        const gridItem = document.createElement("div")      
        gridItem.classList.add("box")
        container.append(gridItem)
    }
}

grid(10)

