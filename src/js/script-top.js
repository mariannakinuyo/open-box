var app = new Vue({
    el: '#open-box',
    data: {
        arrayFederal: [],
        arrayEstadual: [],
        arrayPrivada: [],
        arrayExterior: [],
    },

    mounted() {
        this.arrayFederal = arrayFederal;
        this.arrayEstadual = arrayEstadual;
        this.arrayPrivada = arrayPrivada;
        this.arrayExterior = arrayExterior;
    },

    methods: {
        bolinhasNoMapa: function () {

        // // id de cada circle - puxar da tabela
        //     var two = document.getElementById('federal-');
        //     var tres = document.getElementById('tres');
        //     var four = document.getElementById('four');
        //     var um = document.getElementById('um');

        // // posição final das bolinhas - premios
            // var degrees = degrees; // puxar da tabela
            // var num = 100*2.15; // degrees * 2.15 - trocar o 100 por degrees
            // var max_angle = Math.round(num); // posição final da bolinha

        // // tamanho da bolinha - artigos
        //     var size = size; // puxar da tabela
        //     //  var numsize = 50*0.14;  // size * 0.14 - trocar o 50 por size
        //     //  var finalsize = Math.round(numsize); // tamanho da bolinha

        // // cor da bolinha
        //     var color = color; // puxar da tabela

        //     window.timer = window.setInterval(function () {
        //         var cos = Math.cos(angle/180*Math.PI);
        //         var sen = Math.sin(angle/180*Math.PI);
        //         //  console.log(angle)
        //         //  console.log(cos)

        // // (federais) primeiro circulo de fora - cx e cy posiçao inicial da bolinha no circulo de fora, calcula com o raio do circulo de fora
        //         um.setAttribute("cx", 450.504 + (sen * 123.842));
        //         um.setAttribute("cy", 369.555 - (cos * 123.842));
        //         um.setAttribute("r", 30);  // colocar o size
        //         um.setAttribute("fill", yellow); // colocar a color

        // // (estaduais) segundo circulo de fora - cx e cy posiçao inicial da bolinha no circulo de fora, calcula com o raio do circulo de fora
        //         two.setAttribute("cx", 449.447 + (sen * 185.611));
        //         two.setAttribute("cy", 369.552 - (cos * 185.611));
        //         two.setAttribute("r", 15);  // colocar o size
        //         two.setAttribute("fill", red);  // colocar a color

        // // (exterior) terceiro circulo de fora - cx e cy posiçao inicial da bolinha no circulo de fora, calcula com o raio do circulo de fora
        //         tres.setAttribute("cx", 450.219 + (sen * 247.746));
        //         tres.setAttribute("cy", 368.363 - (cos * 247.746));
        //         tres.setAttribute("r", 10);  // colocar o size
        //         tres.setAttribute("fill", green);  // colocar a color

        // // (privadas) quarto circulo de fora - cx e cy posiçao inicial da bolinha no circulo de fora, calcula com o raio do circulo de fora
        //         four.setAttribute("cx", 450.5 + (sen * 308.611));
        //         four.setAttribute("cy", 368.5 - (cos * 308.611));
        //         four.setAttribute("r", 5); // colocar o size
        //         four.setAttribute("fill", blue);  // colocar a color

        // // movimento
        //         myTimer.innerHTML = parseInt(angle/360*100) + '%';
        //         myTimer.setAttribute("fill", "hsl(" + parseInt(angle/360*100) + ", 90%, 45%)");

        //         if (angle >= max_angle) {
        //             window.clearInterval(window.timer);
        //         };

        //         angle += angle_increment;
        //     }.bind(this), interval);
        },
    },
});
