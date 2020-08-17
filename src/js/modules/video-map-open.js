;
(function () {
'use strict';

$(document).on('click', '.photo-map__popup-close', function () {
  $('.photo-map ').removeClass('photo-map__popup-bg--show');
});

$(document).on('click', '.add-content__location-input-btn', function () {
  var $popup = $('.photo-map');
  var $popup_map_block = $('.photo-map__block');
  var $popup_maps = $('.photo-map__block-map');
  var $buttons = $('.add-content__location-input-btn');
  var button_number = $buttons.index(this);
  var map_id = 'map_' + button_number;
  var map = '<div class="photo-map__block-map" id="' + map_id + '"></div>';
  $popup_maps.hide();

  if ($('#' + map_id).length === 1) {
      $('#' + map_id).show();
  } else {
      $popup_map_block.append(map);
      init(map_id, button_number);
      // ymaps.ready(init(map_id));
  }

  $popup.addClass('photo-map__popup-bg--show');

});


function init(map_id, button_number) {
  var myPlacemark,
      myMap = new ymaps.Map(map_id, {
          center: [55.753994, 37.622093],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      });

  // Слушаем клик на карте.
  myMap.events.add('click', function (e) {
      var coords = e.get('coords');

      // Если метка уже создана – просто передвигаем ее.
      if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
      }
      // Если нет – создаем.
      else {
          myPlacemark = createPlacemark(coords);
          myMap.geoObjects.add(myPlacemark);
          // Слушаем событие окончания перетаскивания на метке.
          myPlacemark.events.add('dragend', function () {
              getAddress(myPlacemark.geometry.getCoordinates(), button_number);
          });
      }
      getAddress(coords, button_number);
  });

  // Создание метки.
  function createPlacemark(coords) {
      return new ymaps.Placemark(coords, {
          iconCaption: 'поиск...'
      }, {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true
      });
  }

  // Определяем адрес по координатам (обратное геокодирование).
  function getAddress(coords, number_block) {
      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res) {
          var firstGeoObject = res.geoObjects.get(0);

          myPlacemark.properties
              .set({
                  // Формируем строку с данными об объекте.
                  iconCaption: [
                      // Название населенного пункта или вышестоящее административно-территориальное образование.
                      firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                      // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                      firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                  ].filter(Boolean).join(', '),
                  // В качестве контента балуна задаем строку с адресом объекта.
                  balloonContent: firstGeoObject.getAddressLine()
              });
              $('.add-content__location-input-fild').eq(number_block).find('textarea[name="location"]').val(firstGeoObject.getAddressLine());
              $('.add-content__location-input-fild').eq(number_block).find('input[name="coords"]').val(coords.join(','));
              autosize.update($('.add-content__location-input-fild').eq(number_block).find('textarea[name="location"]'));
      });
  }
}
})();
