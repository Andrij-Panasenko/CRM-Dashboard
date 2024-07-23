(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  window.addEventListener('resize', handleResize)
  document.addEventListener('DOMContentLoaded', handleResize)

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  function handleResize() {
    const sidebar = document.querySelector('.sidebar')

    if (window.innerWidth >= 1440) {
      sidebar.classList.remove('is-hidden')
    } else {
      sidebar.classList.add('is-hidden')
    }
  }
  // handleResize();
})();



