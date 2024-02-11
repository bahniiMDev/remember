let menu = document.querySelector(".header__menu");


if (menu) {
  let widthMenu = menu.clientWidth;

  let isSmallScreen = window.matchMedia(`(max-width: ${widthMenu}px)`).matches;
  if (isSmallScreen) {
    
  }
}