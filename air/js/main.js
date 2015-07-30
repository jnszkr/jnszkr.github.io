var air = air || {};

window.onload = function () {
  console.log("air is loaded.");

  air.loadResource("pontozo", "mm/Magyarozdi_oreges_pontozo.mp3", function () {
    air.engine.decode("pontozo", this.response);
  });

  // air.source("pontozo").gain({volume: 0.5}).destination().start();
  // air.source("pontozo").gain({volume: 0.5}).pan(1, 0, 0).destination().start();

}
