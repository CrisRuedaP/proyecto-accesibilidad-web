function changeState() {
  let navContainer = document.querySelector("#nav-container");
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("nav-menu-open");
  let menuOpen = document.getElementById("menu-toggle");
  menuOpen.classList.toggle("menu-open");

  if (navMenu.classList.contains("nav-menu-open")) {
    menuOpen.setAttribute("aria-expanded", "true");
    navContainer.removeAttribute("hidden");
  }

  if (!menuOpen.classList.contains("menu-open")) {
    menuOpen.setAttribute("aria-expanded", "false");
    navContainer.setAttribute("hidden", "true");
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  let ratio = window.devicePixelRatio || 1;
  let w = screen.width * ratio;
  const navContainer = document.querySelector("#nav-container");

  if (w < 960) {
    navContainer.setAttribute("aria-hidden", "true");
  } else {
    navContainer.removeAttribute("aria-hidden");
    navContainer.removeAttribute("hidden");
  }
});
