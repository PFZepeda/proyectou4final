$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#flecha_subir").fadeIn();
    } else {
      $("#flecha_subir").fadeOut();
    }
  });
  $("#flecha_subir").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
