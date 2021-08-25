function changeState(){
  let navMenu = document.getElementById('nav-menu');
      navMenu.classList.toggle('nav-menu-open');
  let menuOpen = document.getElementById('menu-toggle');
      menuOpen.classList.toggle('menu-open');

  if (navMenu.classList.contains('nav-menu-open')) {
    menuOpen.setAttribute("aria-label", "Cerrar menú");
  } else {
    menuOpen.setAttribute("aria-label", "Abrir menú");
  }
};





