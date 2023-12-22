var slider = document.getElementById("myRange");
var colorWheel = document.getElementById("color-wheel");
var output = document.getElementById("value");
var grid = document.getElementById("grid");
const btn = document.querySelectorAll(".btn");
let randomColor = 'Disabled';

output.innerHTML = slider.value;
makeGrid(slider.value);
btn.forEach(btn => btn.addEventListener('click', buttonPressed))

// The slider determines grid size
slider.oninput = function() {
    output.innerHTML = this.value;
    // call to make a new grid
    makeGrid();
  } 

// when users change the color wheel it will disable the randomColor
colorWheel.oninput = function () {
  randomColor = 'Disabled';
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
        // if randomColor was pressed
        if (randomColor == 'enabled')
        {
          const randPixel = Math.floor(Math.random()*16777215).toString(16);
          col.style.backgroundColor = "#"+randPixel;
        }
        // otherwise use whatever is on the color-wheel
        else {
          col.style.backgroundColor = colorWheel.value;
        }
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
  // enables the var randomColor to give pixels a random colour in event listener
  if (this.id == 'random'){
    randomColor = 'enabled';
  }
  // 'Clears' the canvas if pressed, sets background colour for each pixel to white.
  else if (this.id == 'clear'){
    const pixel = document.querySelectorAll(".col");
    pixel.forEach(pixel => pixel.style.backgroundColor='white');
  }
  else{
    return;
  }
}

