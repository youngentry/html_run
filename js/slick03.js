$(function () {
  $(".main_slider").on("init afterChange", function (e, s, c) {
    $(".main_slider figure.slick-current")
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  $(".main_slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  });
});
