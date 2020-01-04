var arrayFederal = [],
    arrayEstadual = [],
    arrayPrivada = [],
    arrayExterior = [];
pessoas.nodes.forEach(e => {
    let value = Math.round(((e.size - 0) / (112 - 0)) * (30 - 4) + 4);
    e.size = value;
    switch (e.type) {

        case 'estadual':
            var degrees = (e.degrees+10);
            e.cx = 454.5 + (Math.sin(degrees/180*Math.PI) * 308.611);
            e.cy = 383.491 - (Math.cos(degrees/180*Math.PI) * 308.611);
            arrayEstadual.push(e);
            break;
        case 'federal':
            var degrees = (e.degrees+13)/1.03;
            e.cx = 454.219 + (Math.sin(degrees/180*Math.PI) * 247.746);
            e.cy = 383.353 - (Math.cos(degrees/180*Math.PI) * 247.746);
            arrayFederal.push(e);
            var x = e.cx;
            var y = e.cy;
            break;
        case 'exterior':
            var degrees = (e.degrees+17)/1.04;
            e.cx = 453.447 + (Math.sin(degrees/180*Math.PI) * 185.611);
            e.cy = 384.557 - (Math.cos(degrees/180*Math.PI) * 185.611);
            arrayExterior.push(e);
            break;
        case 'privada':
            var degrees = (e.degrees/1.09)+27;
            e.cx = 454.504 + (Math.sin(degrees/180*Math.PI) * 123.842);
            e.cy = 384.559 - (Math.cos(degrees/180*Math.PI) * 123.842);
            arrayPrivada.push(e);
            break;
        default:
            break;
    }
});
