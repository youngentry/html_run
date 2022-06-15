$(function () {
  var createNum = -1;

  $(".main_slider").on("init afterChange", function (e, s, c) {
    $(".main_slider figure.slick-current")
      .addClass("on")
      .siblings()
      .removeClass("on");
    if (createNum % 3 == c) {
      createNum = createNum;
    } else if ((createNum % 3) - c == 1) {
      createNum--;
    } else if ((createNum % 3) - c == 2) {
      createNum++;
    } else if ((createNum % 3) - c == -2) {
      createNum = createNum + 2;
    } else {
      createNum++;
    }
    $(".num").css({ backgroundPositionY: -100 * createNum + "px" });
    $(".custom_dots li").eq(0).addClass("on");
    $(".custom_dots li").eq(c).addClass("on").siblings().removeClass("on");
    console.log(c, createNum, createNum % 3);
  });

  $(".main_slider").slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 100,
  });

  $(".custom_dots a").on("click", function (e) {
    e.preventDefault();
    var idx = $(this).parent().index();
    $(".main_slider").slick("slickGoTo", idx);
  });

  $(".custom_arrow i:nth-child(1)").on("click", function () {
    $(".main_slider").slick("slickPrev");
  });
  $(".custom_arrow i:nth-child(2)").on("click", function () {
    $(".main_slider").slick("slickNext");
  });

  $(".custom_play i:nth-child(1)").on("click", function () {
    $(".main_slider").slick("slickPlay");
    if ($(".custom_play").hasClass("on")) {
      $(".custom_play").removeClass("on");
    } else {
      $(".custom_play").addClass("on");
    }
  });
  $(".custom_play i:nth-child(2)").on("click", function () {
    $(".main_slider").slick("slickPause");
    if ($(".custom_play").hasClass("on")) {
      $(".custom_play").removeClass("on");
    } else {
      $(".custom_play").addClass("on");
    }
  });
});
