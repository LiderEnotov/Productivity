// * Pop-up
//Открыть по кнопке
$("#get").click(function (e) {
  e.preventDefault();
  $("#overplay").fadeIn();
  $("#overplay").addClass("disabled");
});
//Закрыть на крестик
$("#close").click(function (e) {
  e.preventDefault();
  $("#overplay").fadeOut();
});

//Закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $(".popup");

  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $("#overplay").fadeOut();
  }
});

// * Бургер меню
var headerUl = $("#header__ul");
var burger = $("#burger");
burger.click(function (e) {
  headerUl.toggleClass("active");
  $(this).toggleClass("active");
  $("body").toggleClass("lock");

  e.preventDefault();
});

// ! Filter
// let filter = $("[data-filter]");

// filter.click(function (e) {
//   e.preventDefault();

//   let cat = $(this).data("filter");

//   if (cat == "all") {
//     $("[data-cat]").removeClass("hide");
//   } else {
//     $("[data-cat]").each(function () {
//       let itemCat = $(this).data("cat");

//       if (itemCat != cat) {
//         $(this).addClass("hide");
//       } else {
//         $(this).removeClass("hide");
//       }
//     });
//   }
// });

// * Accordion
$("[data-collapse]").click(function (e) {
  var block = $(this);
  var blockId = block.data("collapse");
  var blockItem = $(".customers__accordion-item");

  block.toggleClass("active");

  console.log(blockId);

  e.preventDefault();
});

$(function () {
  // ! JS-функция определения поддержки WebP
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });

  // ! Работа с Header
  // * Фиксированное меню
  var header = $("#header");
  var introH = $("#intro").height();
  var scrollPos = $(window).scrollTop();

  $(window).scroll(function () {
    introH = $("#intro").height();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // * Плавный скролл
  $("[data-scroll]").click(function (e) {
    var elementId = $(this).data("scroll");
    var elementOffset = $(elementId).offset().top;

    headerUl.removeClass("active");
    burger.removeClass("active");
    $("body").removeClass("lock");

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      700
    );

    e.preventDefault();
  });

  // * Intro slider
  var introSlider = $("#introSlider");

  introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  // * Start slider
  var startSlider = $("#startSlider");

  startSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  // * Testimonials slider
  var testimonialsSlider = $("#testimonialsSlider");

  testimonialsSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});