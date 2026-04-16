const hamMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector("ul.mobile-menu");

hamMenu.addEventListener("click", () => {
  if (hamMenu.classList.contains("is-active")) {
    hamMenu.classList.remove("is-active");
    mobileMenu.classList.remove("is-open");
  } else {
    hamMenu.classList.add("is-active");
    mobileMenu.classList.add("is-open");
  }
});
