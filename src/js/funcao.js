// math trick 2*pi*57 = 358, must be less than 360 degree
var pointer = document.getElementById('pointer');
var myTimer = document.getElementById('myTimer');

// movimento
var interval = 30;
var angle = 0;
var angle_increment = 6;


// PRIVADA
arrayPrivada.forEach((el, index) => {
    var um = document.getElementById('privada-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees/1.2)+27; // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = Math.round(num); // posição final da bolinha
    var cos = Math.cos(num/180*Math.PI);
    var sen = Math.sin(num/180*Math.PI);
    um.setAttribute("cx", 454.504 + (sen * 123.842));
    um.setAttribute("cy", 384.559 - (cos * 123.842));
});

// EXTERIOR
arrayExterior.forEach((el, index) => {
    var um = document.getElementById('exterior-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees+17)/1.07; // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = Math.round(num); // posição final da bolinha
    var cos = Math.cos(num/180*Math.PI);
    var sen = Math.sin(num/180*Math.PI);
    um.setAttribute("cx", 453.447 + (sen * 185.611));
    um.setAttribute("cy", 384.557 - (cos * 185.611));
});

// FEDERAL
arrayFederal.forEach((el, index) => {
    var um = document.getElementById('federal-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees+13)/1.03; // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = Math.round(num); // posição final da bolinha
    var cos = Math.cos(num/180*Math.PI);
    var sen = Math.sin(num/180*Math.PI);
    um.setAttribute("cx", 454.219 + (sen * 247.746));
    um.setAttribute("cy", 383.353 - (cos * 247.746));
});



// ESTADUAL
arrayEstadual.forEach((el, index) => {
    var um = document.getElementById('estadual-'+el.id);
    var degrees = el.degrees; // puxar da tabela
    var num = (degrees+10); // degrees * 2.15 - trocar o 100 por degrees
    var max_angle = num; // posição final da bolinha
    var cos = Math.cos(max_angle/180*Math.PI);
    var sen = Math.sin(max_angle/180*Math.PI);
    um.setAttribute("cx", 454.5 + (sen * 308.611));
    um.setAttribute("cy", 383.491 - (cos * 308.611));
});
