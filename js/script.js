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

// Copyright year

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Contact form submission

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector(".form-button");
        const formData = new FormData(contactForm);

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        formStatus.textContent = "";

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("The form could not be submitted.");
            }

            formStatus.textContent =
                "Thanks! Your message has been sent to the coach.";

            contactForm.reset();
        } catch (error) {
            formStatus.textContent =
                "Sorry, there was a problem sending your message.";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Send Enquiry";
        }
    });
}