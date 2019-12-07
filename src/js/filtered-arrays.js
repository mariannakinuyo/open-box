var arrayFederal = [],
    arrayEstadual = [],
    arrayPrivada = [],
    arrayExterior = [];
pessoas.nodes.forEach(e => {
    let value = Math.round(((e.size - 0) / (112 - 0)) * (30 - 4) + 4);
    e.size = value;
    switch (e.type) {
        case 'federal':
            arrayFederal.push(e);
            break;
        case 'estadual':
            arrayEstadual.push(e);
            break;
        case 'privada':
            arrayPrivada.push(e);
            break;
        case 'exterior':
            arrayExterior.push(e);
            break;
        default:
            break;
    }
});
