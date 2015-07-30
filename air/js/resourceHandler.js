var air = air || {};

air.resources = {};

air.loadResource = function (name, url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function () {
    air.resources[name] = {
      url: url,
      response: request.response
    };
    callback.apply(request, arguments);
  };

  request.send();
}
