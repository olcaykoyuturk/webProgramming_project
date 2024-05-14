const sliderContainers = [...document.querySelectorAll('.slider-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

sliderContainers.forEach((item, i) => {
    let sliderDimensions = item.getBoundingClientRect();
    let sliderWidth = sliderDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += sliderWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= sliderWidth;
    })
})