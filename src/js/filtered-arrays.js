var arrayFederal = [],
    arrayEstadual = [],
    arrayPrivada = [],
    arrayExterior = [];
pessoas.nodes.forEach(e => {
    let value = Math.round(((e.size - 0) / (112 - 0)) * (30 - 4) + 4);
    e.size = value;
    switch (e.type) {
        case 'federal':
            var degrees = (e.degrees+13)/1.03;
            e.cx = 450.219 + (Math.sin(degrees/180*Math.PI) * 247.746);
            e.cy = 368.363 - (Math.cos(degrees/180*Math.PI) * 247.746);
            arrayFederal.push(e);
            break;
        case 'estadual':
            var degrees = (e.degrees+10);
            e.cx = 450.5 + (Math.sin(degrees/180*Math.PI) * 308.611);
            e.cy = 368.5 - (Math.cos(degrees/180*Math.PI) * 308.611);
            arrayEstadual.push(e);
            break;
        case 'privada':
            var degrees = (e.degrees/1.2)+27;
            e.cx = 450.504 + (Math.sin(degrees/180*Math.PI) * 123.842);
            e.cy = 369.555 - (Math.cos(degrees/180*Math.PI) * 123.842);
            arrayPrivada.push(e);
            break;
        case 'exterior':
            var degrees = (e.degrees+17)/1.07;
            e.cx = 449.447 + (Math.sin(degrees/180*Math.PI) * 185.611);
            e.cy = 369.552 - (Math.cos(degrees/180*Math.PI) * 185.611);
            arrayExterior.push(e);
            break;
        default:
            break;
    }
});
