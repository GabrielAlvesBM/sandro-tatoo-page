const navLink = document.querySelectorAll("a");
const homeLink = document.querySelector(".home");

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navLink.forEach(link => {
            link.classList.remove("underline");
        })
        if (homeLink && link === homeLink) {
            return;
        };
        link.classList.add("underline");
    });
});