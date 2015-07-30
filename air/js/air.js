var air = air || {};


air.engine = air.engine || {};

(function (engine) {
  var _context = new AudioContext(),
      _sounds = {},
      _playing = {};


  engine.decode = function(name, buffer) {
    _context.decodeAudioData(buffer, function(buffer) {
       _sounds[name] = buffer;
    });
  };

  engine.play = function (name) {
    var s = _context.createBufferSource();
    s.buffer = _sounds[name];

    _playing[name] = s;

    s.connect(_context.destination);
    s.start(0);
  };

  engine.stop = function (name) {
    _playing[name].stop(0);
  }

})(air.engine);
