
    document.addEventListener('DOMContentLoaded', function () {
        const burgerIcon = document.querySelector('.navbar-burger');
        const navMenu = document.querySelector('.nav-links');

        burgerIcon.addEventListener('click', function () {
            navMenu.classList.toggle('hidden');
        });
    });
