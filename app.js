let elements = document.getElementsByClassName("column");

let i;

function one() {
  for(i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%"; 
    elements[i].style.flex = "100%";
  }
}

function two() {
  for(i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%"; 
    elements[i].style.flex = "50%";
  }
}

function three() {
  for(i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%"; 
    elements[i].style.flex = "25%";
  }
}


let header = document.getElementById("myHeader");
let btns = header.getElementsByClassName("btn");
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
