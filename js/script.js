const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        const menuIsOpen = navLinks.classList.toggle("is-open");

        menuButton.classList.toggle("is-open", menuIsOpen);
        menuButton.setAttribute("aria-expanded", menuIsOpen);

        if (menuIsOpen) {
            menuButton.setAttribute("aria-label", "Close navigation menu");
        } else {
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("is-open");
            menuButton.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

