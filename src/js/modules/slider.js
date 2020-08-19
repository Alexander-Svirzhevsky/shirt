(function () {

    const sliderItem = document.querySelectorAll(".slider__item");
    let i = 0;
    const active = "slider__item--active"
        ;
    setInterval(function () {


        sliderItem[i].classList.remove(active);

        i++;

        if (i + 1 > sliderItem.length) {
            i = 0;
        }
        sliderItem[i].classList.add(active);
        // console.log(sliderItem[i]);



    }, 3000)

}())