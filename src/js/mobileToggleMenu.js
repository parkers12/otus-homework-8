export function mobileToggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu_show");
    menuToggle.classList.toggle("header__nav-toggle_show");
  });
}
