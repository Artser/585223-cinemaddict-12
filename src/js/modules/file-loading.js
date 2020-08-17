;
(function () {
'use strict';
  var imgUploadBlock = document.querySelector('.photo-profile__section-title-button');
  var preview = document.querySelector('.add-content__photo-name-photo img');
  var effectPreviews = document.querySelectorAll('.add-content__photo-name-photo');
  var photos = document.querySelector('.add-content');


  var setPreviews = function (source) {
    effectPreviews.forEach(function (effectPreview) {
      effectPreview.style.backgroundImage = 'url(' + source + ')';
    });
  };

  var FILE_TYPES = ['gif', 'jpeg', 'jpg', 'png'];

  if (imgUploadBlock) {
    var inputFile = imgUploadBlock.querySelector('#upload-file');

    if (inputFile) {
      inputFile.addEventListener('change', function () {
        var files = inputFile.files;

        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          var fileName = file.name.toLowerCase();

          var matches = FILE_TYPES.some(function (fileType) {
            return fileName.endsWith(fileType);
          });
          if (matches) {
            var reader = new FileReader();
            reader.addEventListener('load', function () {
              setPreviews(this.result);
              $('.photo-profile__button-grey').css('opacity', '0');
              $('.profile-photo-list--full').hide();
              addPhoto(this.result, i);
              $('.photo-profile__section-title--ph').css('padding-top', '0');
            });
            reader.readAsDataURL(file);
          }
        };
      });
    }
  }
  var countPhoto = 1;
  //Вставка фото
  function addPhoto(result) {
            $('.add-content')
                .append(
                    '<div class="add-content__photo-name-block">' +
                    '                <div class="add-content__photo-name-title">' +
                    '                    <div class="add-content__photo-name-info-name">' +
                    '                        Фотография №' + countPhoto +
                    '                    </div>' +
                    ' <div>' +
                    ' <div class="add-content__photo-name-info-turn left">' +
                    ' <button type="button">' +
                    '' +
                    ' <span>Повернуть влево</span>' +
                    ' </button>' +
                    ' </div>' +
                    ' <div class="add-content__photo-name-info-turn right">' +
                    ' <button type="button">' +
                    '' +
                    ' <span>Повернуть вправо</span>' +
                    ' </button>' +
                    ' </div>' +
                    '</div>' +
                    '                    <div class="add-content__photo-name-info-del">' +
                    '                        <button>' +
                    '' +
                    '                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"' +
                    '                                 style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"' +
                    '                                 viewBox="0 0 254 254"' +
                    '                                 xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    ' <defs>' +
                    ' </defs>' +
                    '                                <g id="Слой_x0020_1">' +
                    '                                    <metadata id="CorelCorpID_0Corel-Layer"/>' +
                    '                                    <path class="fil0"' +
                    '                                          d="M57 31l23 0 0 -14c0,-8 7,-14 14,-14l33 0 0 0 33 0c7,0 14,6 14,14l0 14 23 0 15 0c7,0 14,6 14,14l0 15 -99 0 0 0 -99 0 0 -15c0,-8 7,-14 14,-14l15 0zm70 68l0 0 0 0 0 0 0 0 1 0 0 0c6,0 11,5 11,11l0 98c0,6 -5,11 -11,11l0 0 -1 0 0 0 0 0 0 0 0 0 -1 0 0 0c-6,0 -11,-5 -11,-11l0 -98c0,-6 5,-11 11,-11l0 0 1 0zm0 152l64 0c10,0 19,-9 19,-19l0 -159 -83 0 0 0 -83 0 0 159c0,10 9,19 19,19l64 0 0 0zm40 -138l0 1 0 75 0 18 0 0 0 2c0,4 4,8 8,8l0 0c4,0 7,-4 7,-8l0 -1c0,-1 0,-1 0,-1l0 -93c0,-1 0,-1 0,-1l0 -3c0,-4 -3,-7 -7,-7l0 0c-4,0 -8,3 -8,7l0 3zm59 -53l0 0zm-139 53l0 1 0 75 0 18 0 0 0 2c0,4 -4,8 -8,8l0 0c-4,0 -7,-4 -7,-8l0 -1c0,-1 0,-1 0,-1l0 -93c0,-1 0,-1 0,-1l0 -3c0,-4 3,-7 7,-7l0 0c4,0 8,3 8,7l0 3zm-59 -53l0 0z"/>' +
                    '                                </g>' +
                    '</svg>' +
                    '' +
                    '                            <span>Удалить фото</span>' +
                    '                        </button>' +
                    '                    </div>' +
                    '</div>' +
                    '                <div class="add-content__photo-name-photo">' +
                    '                    <img data-path-small="' + result + '" data-angle="0" src="' + result + '">' +
                    '                </div>' +
                    '                <div class="add-content__photo-name-info">' +
                    '                    <div class="add-content__photo-name-name">' +
                    '                       <input placeholder="Укажите название" name="photo_names[]" maxlength="90" class="photo_name">' +
                    '                       <textarea placeholder="Хештеги" name="photo_tags[]" class="photo_name"></textarea>' +
                    '                       <div class="add-content__photo-location">' +
                    '                           <textarea placeholder="Местоположение" name="location" id="address"></textarea>' +
                    '                           <input placeholder="Местоположение" type="hidden" name="coords" id="coords">' +
                    '                           <button class="add-content__photo-location-btn" type="button">' +
                    '                               <span class="icon icon-geo-tag"></span>' +
                    '                               <span class="add-content__photo-location-name add-content__photo-location-name--desktop">Показать на карте</span>' +
                    '                               <span class="add-content__photo-location-name add-content__photo-location-name--mobile">На карте</span>'   +
                    '                           </button>' +
                    '                       </div>' +
                    '                       <input type="hidden" value="' + result + '" name="photos[]">' +
                    '                    </div>' +
                    '                </div>' +
                    '            </div>' +
                    '         ');
    countPhoto++;
    autosize(document.querySelectorAll('textarea'));
  };
})();
