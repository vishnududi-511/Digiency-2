let navitems = document.querySelector('.navitems');
let menubox = document.querySelector('.menubox');

menubox.addEventListener("click", function () {
    navitems.classList.toggle("show")
})


$('.slider-1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
    slidesToScroll: 1,
  autoplay:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider-2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
    slidesToScroll: 1,
  autoplay:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});