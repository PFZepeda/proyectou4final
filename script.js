$(document).ready(function () {
  $(".acordeon-titulo").click(function () {
    $(".acordeon-titulo").not(this).removeClass("activo").next(".acordeon-contenido").slideUp();
    $(this).toggleClass("activo").next(".acordeon-contenido").stop(true, true).slideToggle();
  });
  $("#boton_menu").click(function () {
    $(".encabezado_opciones").slideToggle();
  });



  $(".abrir_modal").click(function (e) {
    e.preventDefault();
    $("#modal_join").fadeIn().css("display", "flex");
  });

  $(".modal_cerrar").click(function () {
    $("#modal_join").fadeOut();
  });

  $(window).click(function (e) {
    if (e.target.id === "modal_join") {
      $("#modal_join").fadeOut();
    }
  });
});
$(function () {
  $(".rslides").responsiveSlides({
    auto: true,
    speed: 1000,
    timeout: 4000,
  });
});
Carousel(
  document.getElementById("myCarousel"),
  {},
  {
    Lazyload,
    Arrows,
    Thumbs,
  },
).init();

Fancybox.bind("[data-fancybox]", {
});
