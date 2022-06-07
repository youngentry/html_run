$(function () {
  $("nav a").on("click", function (e) {
    e.preventDefault();
    let idx = $(this).parent().index();
    let h = window.innerHeight;
    $("html").animate({ scrollTop: idx * h }, 500);
  });
});
