$(function () {
  $("header i").on("click", function () {
    $(".cover").toggleClass("on");
  });

  $(".cover a").on("click", function (e) {
    e.preventDefault();
    let idx = $(this).parent().index();
    console.log(100 * idx + "%", $(".sticky").height());
    let h = $(".sticky").height();
    $("html").animate({ scrollTop: (idx + 1) * h }, 1000);
    /* 본래는 html, body */
  });
});
