$(function () {
  let createNum = 0;

  $(".main_slider").on("init afterChange", function (e, s, c) {
    $(".main_slider figure.slick-current")
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(".num").css({ backgroundPositionY: -100 * createNum + "px" });
    createNum++;
  });

  $(".main_slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});
