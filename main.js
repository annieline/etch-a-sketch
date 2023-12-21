var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var grid = document.getElementById("grid");
output.innerHTML = slider.value;

// The slider determines grid size
slider.oninput = function() {
    output.innerHTML = this.value;
  } 

// Make a function to create the divs inside grid based on slider.value

// Make an event listener that will see what the mouse is hovering on and change the pixel colour based on what button is pressed.

// Colour Button: prompt user to pick a colour using the colour wheel

// Random Button: While this button is active colour is changed to a random colour everytime it hovers to a new pixel.

// Clear Button: Canvas will clear all colours -> set all pixels back to white.

