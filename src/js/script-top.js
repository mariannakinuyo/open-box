

  // js
  console.log('geral');
  // import pessoas from './complete.js';
  // console.log(pessoas.g);
  console.log("olar");

  // var novoArray = [];
  // pessoas.nodes.forEach(function(item, index) {
  //   let aux = {};
  //   aux.id = index;
  //   aux.cx = "415";
  //   aux.cy = "120";
  //   aux.r = item.size;
  //   novoArray.push(aux);
  // });
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
      // var two = document.getElementById('two');
      var tres = document.getElementById('tres');
      var four = document.getElementById('four');

      var myTimer = document.getElementById('myTimer');
      var interval = 30;
      var angle = 0;
      var angle_increment = 6;
      var num = 100*2.15; // degrees * 2.15
      var max_angle = Math.round(num); // degrees onde ela para
      var numsize = 50*0.14;  // size * 0.14
      var size = Math.round(numsize); // size da bolinha


      window.timer = window.setInterval(function () {
          var cos = Math.cos(angle/180*Math.PI);
          var sen = Math.sin(angle/180*Math.PI);

         //  console.log(angle)
         //  console.log(cos)

          // pointer.setAttribute("cx", 354.954 + (sen * 259.5));
          // pointer.setAttribute("cy", 309.954 - (cos * 259.5));
          //
          // two.setAttribute("cx", 354.504 + (sen * 200));
          // two.setAttribute("cy", 310.504 - (cos * 200));
          // two.setAttribute("r", size);


// cx e cy posiçao inicial da bolinha no circulo de fora, calcula com o raio do circulo de fora
          tres.setAttribute("cx", 449.447 + (sen * 185.611));
          tres.setAttribute("cy", 369.552 - (cos * 185.611));
          // tres.setAttribute("r", size);

          four.setAttribute("cx", 450.5 + (sen * 308.611));
          four.setAttribute("cy", 368.5 - (cos * 308.611));

          myTimer.innerHTML = parseInt(angle/360*100) + '%';
          myTimer.setAttribute("fill", "hsl(" + parseInt(angle/360*100) + ", 90%, 45%)");

          if (angle >= max_angle) {
              window.clearInterval(window.timer);
          };

          angle += angle_increment;
      }.bind(this), interval);
  })();
