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
  autoplay:true,
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
  autoplay:true,
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
      breakpoint: 740,
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

let scroll_button = document.querySelector('.scroll-button')

function backtoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scroll_button.setAttribute("style", "display: flex;")
    } else {
        scroll_button.setAttribute("style", "display: none;")

    }

})