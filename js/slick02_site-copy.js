$(function () {
  $(".banner_slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $(".content01_slider").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
  });
});
