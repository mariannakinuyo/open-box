// math trick 2*pi*57 = 358, must be less than 360 degree
var pointer = document.getElementById('pointer');
var myTimer = document.getElementById('myTimer');

// movimento
var interval = 30;
var angle = 0;
var angle_increment = 6;

// EXTERIOR
arrayExterior.forEach((el, index) => {
    var um = document.getElementById('exterior-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees+15); // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = Math.round(num); // posição final da bolinha
    var cos = Math.cos(num/180*Math.PI);
    var sen = Math.sin(num/180*Math.PI);
    um.setAttribute("cx", 450.504 + (sen * 123.842));
    um.setAttribute("cy", 369.555 - (cos * 123.842));
});

// PRIVADA
arrayPrivada.forEach((el, index) => {
    var um = document.getElementById('privada-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees+10); // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = Math.round(num); // posição final da bolinha
    var cos = Math.cos(num/180*Math.PI);
    var sen = Math.sin(num/180*Math.PI);
    um.setAttribute("cx", 449.447 + (sen * 185.611));
    um.setAttribute("cy", 369.552 - (cos * 185.611));
});

// ESTADUAL
arrayEstadual.forEach((el, index) => {
    var um = document.getElementById('estadual-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees+6); // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = Math.round(num); // posição final da bolinha
    var cos = Math.cos(num/180*Math.PI);
    var sen = Math.sin(num/180*Math.PI);
    um.setAttribute("cx", 450.5 + (sen * 308.611));
    um.setAttribute("cy", 368.5 - (cos * 308.611));
});

// FEDERAL
arrayFederal.forEach((el, index) => {
    var um = document.getElementById('federal-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees+7.5); // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = Math.round(num); // posição final da bolinha
    var cos = Math.cos(num/180*Math.PI);
    var sen = Math.sin(num/180*Math.PI);
    um.setAttribute("cx", 450.219 + (sen * 247.746));
    um.setAttribute("cy", 368.363 - (cos * 247.746));
});
