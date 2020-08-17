
(function () {
  'use strict';

    let chosenFlower = window.chosenFlower;
    let chosenBackground = window.chosenBackground;
    let flowerName = window.flowerName;
    let location = window.flowerLocation;

    $('.flower__settings').mouseover(function (e) {
      $('.flower__seclist').show();
      $('.flower__settings').addClass('flower__settings--open');

      $('.flower__settings').mouseleave(function(){
        $('.flower__seclist').hide();
        $('.flower__settings').removeClass('flower__settings--open');
      });

    });


    $('.flower__bud-link').click(function (e) {
        e.preventDefault();
        $('.flower__seclist').hide();
        $('.flower__settings').removeClass('flower__settings--open');
        $('.flower__img, .flower__choose-bg, .flower__title, .flower__progress, .flower__country-icon').hide();
        $('.flower__main').css('background', 'url(\'img/step2/flower/flower-background.jpg\')');
        $('.flower__country').html('Выбрать цветочек');
        if ($(window).width() > 581) {
            $('.flower__country').css({
                color: '#333333',
                fontSize: '15px',
                fontWeight: 'bold'
            });
        } else if ($(window).width() < 340)  {
            $('.flower__country').css({
                color: '#333333',
                fontSize: '15px'
            })
        } else {
            $('.flower__country').css({
                color: '#333333',
                fontSize: '15px'
            })
        }
        $('.flower__additions li').css('color', '#666666');
        $('.flower__settings').addClass('flower__settings--gray');
        $('.flower__help').addClass('flower__help--gray');

        $('.flower__understratum').hide();
        $('.flower__choose-bud').show();
    });

    $('.flower__bg-link').click(function (e) {
        e.preventDefault();
        $('.flower__seclist').hide();
        $('.flower__settings').removeClass('flower__settings--open');
        $('.flower__img, .flower__choose-bud, .flower__title, .flower__progress, .flower__country-icon').hide();
        $('.flower__main').css('background', 'url(\'img/step2/flower/flower-background.jpg\')');
        $('.flower__country').html('Выбрать пейзаж');
        if ($(window).width() > 581) {
            $('.flower__country').css({
                color: '#333333',
                fontSize: '15px',
                fontWeight: 'bold',
            });
        } else if ($(window).width() < 340)  {
            $('.flower__country').css({
                color: '#333333',
                fontSize: '15px'
            })
        } else {
            $('.flower__country').css({
                color: '#333333',
                fontSize: '15px'
            })
        }
        $('.flower__additions li').css('color', '#666666');
        $('.flower__settings').addClass('flower__settings--gray');
        $('.flower__help').addClass('flower__help--gray');

        $('.flower__understratum').hide();
        $('.flower__choose-bg').show();
    });

    $('.flower__choose-bud li').click(function () {
        chosenFlower = $(this).data('flower');
        flowerName = $('.flower__choose-title', this).text();
        $('.flower__choose-bud').hide();
        $('.flower__choose-bg').show();
        $('.flower__country').html('Выбрать пейзаж');
        $('.flower__understratum').hide();
    });

    $('.flower__choose-bg li').click(function () {
        chosenBackground = $(this).data('background');
        location = $('.flower__choose_desc', this).text();
        $.ajax({
            url: "/saveFlowerSettings",
            type: "post",
            dataType: "text",
            data: {
                chosenFlower: chosenFlower,
                flowerName: flowerName,
                chosenBackground: chosenBackground,
                location: location,
                _token: window.Laravel['csrfToken']
            },
            success: function (ans) {
                window.location.reload();
            }
        });
    });

    $(document).on('click', '.flower__rules-link a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

})();
