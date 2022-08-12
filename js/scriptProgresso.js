function move() {
  var elem = document.getElementById("barra");
  //var elem = document.getElementById("segundabarra");
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}
