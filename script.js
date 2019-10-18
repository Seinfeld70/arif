const model = document.querySelector('.model');
const burger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sideBar');

burger.addEventListener('click', showSideBar);

model.addEventListener('click', hideSideBar);

function showSideBar() {
  model.classList.add('fadeIn');
  sideBar.classList.add('slideIn');
}
function hideSideBar() {
  sideBar.classList.remove('slideIn');
  model.classList.remove('fadeIn');
}
