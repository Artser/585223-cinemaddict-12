;
(function () {
'use strict';

$(document).mouseup(function (e){
  var div = $(".navigation__link-fix");
  if (!div.is(e.target)
      && div.has(e.target).length === 0) {
        $(".navigation__list").animate({height:"0px"}, 10);
        $(".navigation__list").removeClass("navigation__list--show");
  }
});

$('.navigation__section').on('click', function (event) {
  if ($(".navigation__list").hasClass("navigation__list--show")) {
    $(".navigation__list").animate({height:"0px"}, 10);
    $(".navigation__list").removeClass("navigation__list--show");

  } else {
    $(".navigation__list").addClass("navigation__list--show");
    $(".navigation__list").animate({height:"275px"}, 10);
  }
});

$('.navigation__section').ready(function() {
  var margin = 60;
  if ($(".navigation__list")) {
    $(".navigation__item").click(function() {
      $(".navigation__list").animate({height:"0px"}, 10);
      $(".navigation__list").removeClass("navigation__list--show");
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top-margin+ "px"
      }, {
        duration: 1000,
        easing: "swing"
      });
      return false;
    });
  }
});

var selectList = document.querySelector(".navigation__link");
var navigationLink = document.querySelector('.navigation__link-fix');
var scroll = 0;

if (selectList) {
  window.addEventListener('scroll', function (e) {
    scroll = this.scrollY;
    if (this.scrollY > 100) {
        navigationLink.classList.add("fixed");
        navigationLink.style.width = document.querySelector('.scroll-navigation').offsetWidth + "px";
        if (window.innerWidth <= 768) {
          // $(".navigation__link-fix").css('margin-top', '45px');
          if (window.innerWidth === 768) {
            $('.navigation__link-fix').css('margin-left', '-5px');
          } else {
            $('.navigation__link-fix').css('margin-left', '0');
          }
            navigationLink.style.left = selectList.getBoundingClientRect().left - 15 + "px";
        } else {
            navigationLink.style.left = selectList.getBoundingClientRect().left - 20 + "px";
        }

        if (window.innerWidth < 768) {
          $(".navigation__link-fix").css('margin-top', '45px');
        }
    }
    else {
        navigationLink.classList.remove("fixed");
        $(".navigation__link-fix").css('margin-top', '0');
        navigationLink.style.left = "0px";
        navigationLink.style.width = selectList.offsetWidth + "px";
    }
});

window.addEventListener('resize', function(e) {
    if (scroll > 100) {
        navigationLink.style.width = document.querySelector('.scroll-navigation').offsetWidth + "px";
        navigationLink.style.width = selectList.offsetWidth + "px";

        if (window.innerWidth <= 768) {
            navigationLink.style.left = selectList.getBoundingClientRect().left - 15 + "px";
        } else {
            navigationLink.style.left = selectList.getBoundingClientRect().left - 20 + "px";
        }
    }
});

}

})();
