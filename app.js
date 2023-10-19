const container = document.querySelector("#container")
const box = document.querySelector(".box")
const sizeOfGridBtn = document.querySelector("#sizeOfGrid")
const resetBtn = document.querySelector("#reset")
let gridSize = 5

function grid (gridSize) {
    container.style.setProperty("display", "grid")
    container.style.setProperty("grid-template-columns", `repeat(${gridSize}, 1fr)`)
    for(let i = 0; i < (gridSize * gridSize); i++){
        const gridItem = document.createElement("div") 
        gridItem.classList.add("box")
        container.append(gridItem)
        gridItem.addEventListener("mouseover", ()=>{
        gridItem.style.setProperty("background-color", "black")
    }) 
  }
}

function removeGrid() {
    const removeGridItems = document.querySelectorAll(".box")
    removeGridItems.forEach((gridItem)=>{gridItem.remove()})
 }

resetBtn.addEventListener("click", () => {
    removeGrid()
    grid(gridSize)
  })

sizeOfGridBtn.addEventListener("click", () => {
    removeGrid()
    gridSize = prompt("")
    grid(gridSize)
  })

grid(5)