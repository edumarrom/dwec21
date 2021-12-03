const iconoMenu = document.querySelector('#icono-menu');
const menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  iconoMenu.classList.toggle('icono-menu-invert');
  document.body.classList.toggle('opacity');
});
