// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarTogglerIcon = navbarToggler.querySelector(".fa-bars");
    var navbarTogglerCloseIcon = navbarToggler.querySelector(".fa-close");
    navbarToggler.addEventListener("click", function () {
        navbarTogglerIcon.classList.toggle("d-none");
        navbarTogglerCloseIcon.classList.toggle("d-none");
    });
});