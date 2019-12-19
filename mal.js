function toggleClass(){
  let menu = document.querySelector('.midten');
  menu.classList.toggle('toggleCls');
}

let hamburger = document.querySelector('.icon');

 hamburger.addEventListener ("click", toggleClass);
