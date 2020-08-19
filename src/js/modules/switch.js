(function () {

    const elem = document.querySelector('.products__list');
    const iso = new Isotope(elem, {
        // options
        itemSelector: '.products__item',
        filter: '.popular'

    });

    const sliderLink = document.querySelectorAll(".switch__link");
    const active = "switch__item--active";

    sliderLink.forEach(function (item) {


        item.addEventListener("click", function (e) {
            e.preventDefault();

            const filterName = item.getAttribute("data-filter");

            sliderLink.forEach(function (link) {
                link.closest(".switch__item").classList.remove(active);
            })
            item.closest(".switch__item").classList.add(active);

            iso.arrange({
                filter: `.${filterName}`
            })
        });

    });


}());