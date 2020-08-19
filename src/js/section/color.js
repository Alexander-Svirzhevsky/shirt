(function () {



    const elem = document.querySelector('.product__img');
    const iso = new Isotope(elem, {
        itemSelector: '.img-shirt',
        filter: '.black'

    });

    const colorLink = document.querySelectorAll(".product__color-link");
    const active = "product__color-item--active";



    colorLink.forEach(function (item) {


        item.addEventListener("click", function (e) {
            e.preventDefault();

            const filterName = item.getAttribute("data-filter");

            colorLink.forEach(function (link) {
                link.closest(".product__color-item").classList.remove(active);
            })
            item.closest(".product__color-item").classList.add(active);

            iso.arrange({
                filter: `.${filterName}`
            })
        });

    });


}());