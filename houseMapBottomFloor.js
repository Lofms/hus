function floor(path) {
  document.getElementById("canvas").innerHTML = "";
  var canvas = document.getElementById("canvas").appendChild(document.createElement("canvas"));
  var size = canvas.width = canvas.height = 1000;
  var scale = 10;
  var ctx = canvas.getContext("2d");
  var coordinateSets = data;
  ctx.font = "10px Arial";
  coordinateSets.rooms.forEach(function(item) {
    console.log(item.name, item.coordinates[0][0].x * 2, item.coordinates[0][0].y * 2)
  ctx.fillText(item.name, item.coordinates[0][0].x * 10 + 10, item.coordinates[0][0].y * 10 +10);
});

  coordinateSets.rooms.forEach(function(item) {

      item.coordinates.forEach(function(coordinates,index) {

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
