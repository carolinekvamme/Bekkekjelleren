/*function myFunction() {
  var x = document.getElementByClassName("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}*/function toggleClass(){
  let menu = document.querySelector('.midten');
  menu.classList.toggle('toggleCls');
}

let hamburger = document.querySelector('.icon');

 hamburger.addEventListener ("click", toggleClass);
