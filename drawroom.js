var room;
function room(room) {

  document.getElementById("canvas").innerHTML = "";
  var canvas = document.getElementById("canvas").appendChild(document.createElement("canvas"));
  var size = canvas.width = canvas.height = 1000;
  var scale = 20;
  var ctx = canvas.getContext("2d");
  var coordinateSets = data;









  // Render elements.






    ctx.beginPath();
    ctx.moveTo(1 , 1 );

        coordinateSets.rooms[room].coordinates[0].forEach(function(coordinate) {
          console.log(coordinateSets.rooms[room].name)
          console.log(coordinate.x)
          console.log(coordinateSets.rooms[room].coordinates[0][0].x)
console.log(coordinate.x-coordinateSets.rooms[room].coordinates[0][0].x + "   x")
console.log( coordinate.y-coordinateSets.rooms[room].coordinates[0][0].y+ "   y")
          ctx.lineTo(scale*(coordinate.x-coordinateSets.rooms[room].coordinates[0][0].x) , scale*(coordinate.y-coordinateSets.rooms[room].coordinates[0][0].y) );
        });
        ctx.closePath();
        ctx.stroke();


}
