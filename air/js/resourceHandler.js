var air = air || {};

air.loadResource = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function () {
    callback.apply(request, arguments);
  };

  request.send();
}
