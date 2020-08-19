(function () {

    const item = document.querySelectorAll(".product__sizes-item--unlock");
    const lock = document.querySelectorAll(".product__sizes-link");
    const active = "product__sizes-item--active";



    item.forEach(function (link) {

        link.addEventListener("click", function (e) {
            e.preventDefault();

            item.forEach(function (link) {
                link.classList.remove(active);
            })
            link.classList.add(active);
        })

    })


    lock.forEach(function (items) {
        items.addEventListener("click", function (e) {
            e.preventDefault();
        })
    })

}());