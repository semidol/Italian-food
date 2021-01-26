for(let elem of document.querySelectorAll('.three-columns__column h3')) {
  elem.addEventListener("click", accordion)
}

document.querySelector('.header__burger').addEventListener("click", menuBurger)

function accordion(event) {
  event.currentTarget.nextElementSibling.classList.toggle("three-columns__ul_active");
  event.currentTarget.classList.toggle("three-columns__h3_active");
}

function menuBurger(event) {
  document.body.scrollTop = 0;
  document.body.classList.toggle("lock");
  document.querySelector('.menu').classList.toggle("menu_active")
  event.currentTarget.classList.toggle("header__burger_active");
}
