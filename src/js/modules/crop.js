$(function () {

var $uploadCrop;
var file_name;
var final_angle = 0;

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $uploadCrop.bind({
        url: e.target.result
      }).then(function () {
      });

    };

    reader.readAsDataURL(input.files[0]);
  }
}

$('#inputPhoto').on('change', function () {
  modal.modalShow(document.querySelector('#modalPhoto'));
  file_name = $(this)[0].files[0].name;
  var el = document.getElementById('croppieContainer');
  $uploadCrop = new Croppie(el, {
    viewport: {
      width: 300,
      height: 300
    },
    boundary: {
      width: $('#croppieContainer img').outerWidth(),
      height: $(window).outerHeight() - 200
    },
    enableOrientation: true,
    enableExif: true
  });
  readFile(this);
});

$('.modal-photo__rotate').click(function (e) {
  e.preventDefault();
  var postAngle = 0;
  if ($(this).hasClass('modal-photo__rotate--left')) {
    postAngle = -90;
    final_angle += 90;
  } else {
    postAngle = 90;
    final_angle -= 90;
  }
  $uploadCrop.rotate(postAngle);
});

$('#modalCloseCrop').on('click', function (ev) {
  destroyCrop();
});

$('#modalPhotoSave').on('click', function (ev) {
  $uploadCrop.result({
    type: 'canvas',
    size: {
      width: 150,
      height: 150
    }
  }).then(function (resp) {
    $('.button-photo__image img').attr('src', resp);
    $('.button-photo__text').text(file_name);
    $('#buttonPhoto').addClass('valid');
  });
  var points = $uploadCrop.get();
  $('input[name="x1"]').val(points.points[0]);
  $('input[name="y1"]').val(points.points[1]);
  $('input[name="x2"]').val(points.points[2]);
  $('input[name="y2"]').val(points.points[3]);
  $('input[name="w"]').val(points.points[2] - points.points[0]);
  $('input[name="h"]').val(points.points[3] - points.points[1]);
  $('input[name="angle"]').val(final_angle);
  document.querySelector('#modalPhoto').classList.remove('modal--show');
  destroyCrop();
});

function destroyCrop() {
  $uploadCrop.destroy();
}

$('#modalPhotoChange').on('click', function (ev) {
  destroyCrop();
  $('#buttonPhoto').click();
});

});
