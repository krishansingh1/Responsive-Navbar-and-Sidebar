const navToggle = document.querySelector(".nav-toogle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
});