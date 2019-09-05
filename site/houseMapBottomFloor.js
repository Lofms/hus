Array.prototype.hasMin = function(attrib) {
    return this.reduce(function(prev, curr){
        return prev[attrib] < curr[attrib] ? prev : curr;
    });
}
Array.prototype.hasMax = function(attrib) {
    return this.reduce(function(prev, curr){
        return prev[attrib] > curr[attrib] ? prev : curr;
    });
}
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

    var arr = item.coordinates[0];
    var xMin = arr.hasMin('x').x;
    var xMax = arr.hasMax('x').x;
    var yMin = arr.hasMin('y').y;
    var yMax = arr.hasMax('y').y;
    console.log(event.pageX);
    console.log(elemLeft);
    ctx.fillText(item.name, scale*(xMin)+ 10, scale*(yMin)+ 10);


  canvas.addEventListener('click', function(event) {

      var x = event.pageX - elemLeft,
          y = event.pageY - elemTop;


      if (y > yMin*10 && y < yMax*10 && x > xMin*10 && x < xMax*10) {
              room(index);
      }


  }, false);


  // Render elements.

  ctx.fillStyle = "";
  ctx.globalAlpha = 0.1;
  ctx.fillRect(xMin*scale, yMin*scale, (xMax*scale - xMin*scale), (yMax*scale - yMin*scale));
  ctx.globalAlpha = 1;
  });

  coordinateSets.rooms.forEach(function(item) {

      item.coordinates.forEach(function(coordinates,xMin,yMin) {

        ctx.beginPath();
        ctx.moveTo(xMin * scale, yMin * scale);
        coordinates.forEach(function(coordinate) {

          ctx.lineTo(coordinate.x * scale, coordinate.y * scale);
        });
        ctx.closePath();
        ctx.stroke();
    });
  });
}
