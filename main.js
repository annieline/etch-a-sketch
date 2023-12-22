var slider = document.getElementById("myRange");
var colorWheel = document.getElementById("color-wheel");
var output = document.getElementById("value");
var grid = document.getElementById("grid");
const btn = document.querySelectorAll(".btn");

output.innerHTML = slider.value;
makeGrid(slider.value);
btn.forEach(btn => btn.addEventListener('click', buttonPressed))

// The slider determines grid size
slider.oninput = function() {
    output.innerHTML = this.value;
    // call to make a new grid
    makeGrid();
  } 

// Make a function to create the divs inside grid based on slider.value
function makeGrid(){
  clearDiv();
  for (let i = 0; i < slider.value; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    for (let j = 0; j < slider.value; j++){
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);

      col.addEventListener("mouseover", () => {
        col.style.backgroundColor = colorWheel.value;
      }
      );
    }
  }
}

// Function to clear divs everytime user adjusts the slider
function clearDiv(){
    while (grid.lastChild){
      grid.removeChild(grid.lastChild);
    }
}

function buttonPressed(){
  if (this.id == 'random'){

  }
  else if (this.id == 'clear'){

  }
  else{
    return;
  }
}
// Make an event listener that will see what the mouse is hovering on and change the pixel colour based on what button is pressed.

// Colour Button: prompt user to pick a colour using the colour wheel

// Random Button: While this button is active colour is changed to a random colour everytime it hovers to a new pixel.

// Clear Button: Canvas will clear all colours -> set all pixels back to white.

