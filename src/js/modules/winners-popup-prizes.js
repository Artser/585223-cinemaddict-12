if (window.matchMedia('(max-width: 768px)').matches) {

    // Получаем количество подарков
    var countImg = $('.popup-gift__items').find('.popup-gift__item').length;

    // Задаем количество строк по вертикали
    var countVerticalRow = 5;

    // Получаем размер блока с картинкой
    var imgTempWidth = parseInt($(".popup-gift__item").css('width'), 10);
    var imgTempMargin = parseInt($(".popup-gift__item").css('margin'), 10);
    var imgSide = imgTempWidth + (imgTempMargin * 2);

    // Задаем ширину несдвигаемого блока
    var popupWidth = parseInt($(".popup-gift__wrap").css('width'));

    /* var countGorizontalCol = (popupWidth - (popupWidth % imgSide)) / imgSide;
    $(".popup-gift__block").css("width", (imgSide * countGorizontalCol) + "px"); */

    // Задаем высоту сдвигаемого блока с картинками
    $(".popup-gift__list").css("height", (imgSide * countVerticalRow) + "px");

    // Вычисляем количество экранов сдвигаемого блока
    var countPages = Math.ceil(countImg / (countGorizontalCol * countVerticalRow));
//41,
    // Задаем ширину сдвигаемого блока с картинками
     //$(".popup-gift__list").css("width", (imgSide * countGorizontalCol * countPages) + "px");

    // Создаем точки для навигации
    if (countPages > 1) {
        for (var k = 1; k <= countPages; k++) {
            $('.popup-gift__dots').append('<div class="popup-gift__dot"></div>');
        }
        $(".popup-gift__dot:first").addClass("popup-gift__dot--active");
    }

    $(document).on('click', ".popup-gift__dot", function () {
        // Получаем номер кликнутой точки
        var $this = $(this);
        var index = parseInt($this.index());

        //Задаем смещение сдвигаемому блоку
        var shift = index * imgSide * countGorizontalCol;
        $('.popup-gift__list').animate({marginLeft: -shift}, 400);

        // добавляем класс модификатор к кликнутой точке
        $(".popup-gift__dots").find(".popup-gift__dot--active").removeClass("popup-gift__dot--active");
        $this.addClass("popup-gift__dot--active");

    });

    // Задаем предельное значение для margin-left
    var shiftLimit = imgSide * countGorizontalCol * (countPages - 1) * -1;

    $(".popup-gift__list").swipe({
        //Генерируем обработчик swipe для всех направлений
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction === "left") {
                // Проверяем, есть ли место для свайпа
                if (parseInt($('.popup-gift__list').css("margin-left")) > shiftLimit) {
                    var shiftLeftSwipe = (parseInt($('.popup-gift__list').css("margin-left"))) + (imgSide * countGorizontalCol * -1);
                    $('.popup-gift__list').animate({marginLeft: shiftLeftSwipe}, 400);

                    // добавляем класс модификатор к активной точке
                    var dotIndex = parseInt($(".popup-gift__dot--active").index());
                    $(".popup-gift__dots").find(".popup-gift__dot--active").removeClass("popup-gift__dot--active");
                    $('.popup-gift__dot').eq(dotIndex + 1).addClass("popup-gift__dot--active");


                }
            } else if (direction === "right") {
                // Проверяем, есть ли место для свайпа
                if (parseInt($('.popup-gift__list').css("margin-left")) !== 0) {
                    var shiftRightSwipe = (parseInt($('.popup-gift__list').css("margin-left"))) - (imgSide * countGorizontalCol * -1);
                    $('.popup-gift__list').animate({marginLeft: shiftRightSwipe}, 400);

                    // добавляем класс модификатор к активной точке
                    var dotIndex = parseInt($(".popup-gift__dot--active").index());
                    $(".popup-gift__dots").find(".popup-gift__dot--active").removeClass("popup-gift__dot--active");
                    $('.popup-gift__dot').eq(dotIndex - 1).addClass("popup-gift__dot--active");

                }
            }


        },

    });
}

