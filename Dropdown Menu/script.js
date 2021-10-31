document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  /* si ce n'est pas un bouton de menu et un menu => on ne fait rien */
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) {
    return;
  }
  /* si c'est un menu courrent dropdown est le menu lié au bouton, on le rend actif */
  let currentDropdown;
  console.log(currentDropdown)
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");

    currentDropdown.classList.toggle("active");
  }
  /* on desctive tous les autres menus */
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => { 
    if (dropdown !== currentDropdown) {
      dropdown.classList.remove("active");
    }
  });
  console.log(document.querySelectorAll("[data-dropdown].active"));
});
