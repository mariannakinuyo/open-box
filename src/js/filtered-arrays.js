var arrayFederal = [],
    arrayEstadual = [],
    arrayPrivada = [],
    arrayExterior = [];
pessoas.nodes.forEach(e => {
    let value = Math.round(((e.size - 0) / (112 - 0)) * (30 - 4) + 4);
    e.size = value;
    if (e.type == 'federal') arrayFederal.push(e);
    if (e.type == 'estadual') arrayEstadual.push(e);
    if (e.type == 'privada') arrayPrivada.push(e);
    if (e.type == 'exterior') arrayExterior.push(e);
});
