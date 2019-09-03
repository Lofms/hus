function floor(path) {

  document.getElementById("canvas").innerHTML = "";
  var canvas = document.getElementById("canvas").appendChild(document.createElement("canvas"));
  var size = canvas.width = canvas.height = 1000;
  var scale = 10;
  var ctx = canvas.getContext("2d");
  var coordinateSets = data;
  elemLeft = canvas.offsetLeft,
  elemTop = canvas.offsetTop,
  elements = [];
  ctx.font = "10px Arial";
  coordinateSets.rooms.forEach(function(item,index) {
  ctx.fillText(item.name, item.coordinates[0][0].x * 10 + 10, item.coordinates[0][0].y * 10 +10);

  elements.push({
      colour: '',
      width: 150,
      height: 100,
      top: 0,
      left: 0
  });

  canvas.addEventListener('click', function(event) {
      var x = event.pageX - elemLeft,
          y = event.pageY - elemTop;


          if (y > item.coordinates[0][0].y*10+5 && y < item.coordinates[0][0].y*10+5 + ((item.coordinates[0][3].y - item.coordinates[0][2].y)*10)-10 && x > item.coordinates[0][0].x*10+5 && x < item.coordinates[0][0].x*10+5 + ((item.coordinates[0][3].y - item.coordinates[0][2].y)*10)-10) {
              room(index);
          }


  }, false);


  // Render elements.

      ctx.fillStyle = "";
ctx.globalAlpha = 0.04;
      ctx.fillRect(item.coordinates[0][0].x*10+5, item.coordinates[0][0].y*10+5, ((item.coordinates[0][1].x - item.coordinates[0][0].x)*10)-10, ((item.coordinates[0][3].y - item.coordinates[0][2].y)*10)-10);

ctx.globalAlpha = 1;
});

  coordinateSets.rooms.forEach(function(item) {

      item.coordinates.forEach(function(coordinates) {

        ctx.beginPath();
        ctx.moveTo(coordinates[0].x * scale, coordinates[0].y * scale);
        coordinates.forEach(function(coordinate) {

          ctx.lineTo(coordinate.x * scale, coordinate.y * scale);
        });
        ctx.closePath();
        ctx.stroke();
    });
  });
}
