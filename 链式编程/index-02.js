// jQuery链式编程
$(function () {
  $("button").click(function () {
    $("h3").css("color", "red").slideUp(2000).slideDown(2000);
  });
})
