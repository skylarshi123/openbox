var myCarousel = document.querySelector('#carouselExampleIndicators')



myCarousel.addEventListener('slide.bs.carousel', event => {
    console.log(event);
    document.querySelector("#changeText").innerHTML = event.relatedTarget.getAttribute("data-slide-text");
})

var Carousel = document.querySelector('#carouselExampleIndicators2')


Carousel.addEventListener('slide.bs.carousel', event => {
    console.log(event);
    document.querySelector("#changeText2").innerHTML = event.relatedTarget.getAttribute("data-slide-text");
})