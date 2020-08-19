(function () {
    const hamburger = document.querySelector(".hamburger");
    const cross = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector(".sidebar");

    hamburger.addEventListener("click", function () {
        sidebar.classList.add("sidebar--open");
    });

    cross.addEventListener("click", function () {
        sidebar.classList.remove("sidebar--open");
    });
}());
