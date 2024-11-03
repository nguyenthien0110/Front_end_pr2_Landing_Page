// Dynamically build the navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const navbarList = document.getElementById("navbar__list");
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const navItem = document.createElement("li");
        navItem.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navbarList.appendChild(navItem);
    });

    // Add 'active' class to the section in the viewport
    window.addEventListener("scroll", () => {
        let currentSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const link = document.querySelector(`a[data-nav="${section.id}"]`);

            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                currentSection = section;
            }

            section.classList.remove("active");
            link.classList.remove("active");
        });

        if (currentSection) {
            currentSection.classList.add("active");
            document.querySelector(`a[data-nav="${currentSection.id}"]`).classList.add("active");
        }
    });

    // Smooth scroll to section on link click
    navbarList.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSection = document.getElementById(event.target.getAttribute("data-nav"));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
