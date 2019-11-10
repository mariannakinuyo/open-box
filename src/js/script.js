// js
console.log('geral');

// declaracao de algumas variaveis necessarias
var blue = "rgb(0, 0, 255)",
    red = "rgb(255, 0, 0)",
    yellow = "rgb(255, 255, 0)",
    purple = "rgb(194, 74, 255)",
    green = "rgb(0, 255, 0)",
    g;


(function () {
    // math trick 2*pi*57 = 358, must be less than 360 degree
    var pointer = document.getElementById('pointer');
    var two = document.getElementById('two');
    var tres = document.getElementById('tres');

    var quatro = document.getElementById('four');

    var myTimer = document.getElementById('myTimer');
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;
    var num = 100*2.15;
    var max_angle = Math.round(num); //degrees
    var numsize = 50*0.14;
    var size = Math.round(numsize); // size - raio


    window.timer = window.setInterval(function () {
        var cos = Math.cos(angle/180*Math.PI);
        var sen = Math.sin(angle/180*Math.PI);

        console.log(angle)
        console.log(cos)

        pointer.setAttribute("cx", 354.954 + (sen * 259.5));
        pointer.setAttribute("cy", 309.954 - (cos * 259.5));

        two.setAttribute("cx", 354.504 + (sen * 200));
        two.setAttribute("cy", 310.504 - (cos * 200));
        // two.setAttribute("r", size);

        tres.setAttribute("cx", 355.455 + (sen * 140));
        tres.setAttribute("cy", 309.455 - (cos * 140));
        // tres.setAttribute("r", size);

        four.setAttribute("cx", 354.954 + (sen * 259.5));
        four.setAttribute("cy", 309.954 - (cos * 259.5));

        myTimer.innerHTML = parseInt(angle/360*100) + '%';
        myTimer.setAttribute("fill", "hsl(" + parseInt(angle/360*100) + ", 90%, 45%)");

        if (angle >= max_angle) {
            window.clearInterval(window.timer);
        };

        angle += angle_increment;
    }.bind(this), interval);
})();
