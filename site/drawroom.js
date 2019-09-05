
function room(room) {

    document.getElementById("canvas").innerHTML = "";
    var canvas = document.getElementById("canvas").appendChild(document.createElement("canvas"));
    var size = canvas.width = canvas.height = 1000;
    var scale = 20;
    var ctx = canvas.getContext("2d");
    var coordinateSets = data;


    var item=coordinateSets.rooms[room]


    var arr = item.coordinates[0];
    var xMin = arr.hasMin('x').x;
    var xMax = arr.hasMax('x').x;

    var yMin = arr.hasMin('y').y;
    var yMax = arr.hasMax('y').y;


    ctx.fillText(item.name,10, 20);

    console.log(item +"dsadasdasdsa")

    // Render elements.






    ctx.beginPath();
    ctx.moveTo(1 , 1 );

    coordinateSets.rooms[room].coordinates[0].forEach(function(coordinate) {

        ctx.lineTo(scale*(coordinate.x-coordinateSets.rooms[room].coordinates[0][0].x) , scale*(coordinate.y-coordinateSets.rooms[room].coordinates[0][0].y) );
    });
    ctx.closePath();
    ctx.stroke();


}
