
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('div.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('img.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu);
