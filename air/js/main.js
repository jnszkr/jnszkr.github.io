var air = air || {};

window.onload = function () {
  console.log("air is loaded.");

  air.loadResource("mm/Magyarozdi_oreges_pontozo.mp3", function () {
    console.log(this.response);
  });

}
