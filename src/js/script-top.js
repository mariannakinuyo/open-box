var app = new Vue({
    el: '#open-box',
    data: {
        arrayFederal: [],
        arrayEstadual: [],
        arrayPrivada: [],
        arrayExterior: [],
        filter: {
            biologicas: true,
            sociais: true,
            exatas: true,
            engenharias: true,
            saude: true,
            sul: true,
            sudeste: true,
            nordeste: true,
            centro: true,
            norte: true,
        },
        showTag: [],
    },

    mounted() {
        this.arrayFederal = arrayFederal.sort(function(a, b) {
            return b.size - a.size;
        });
        this.arrayEstadual = arrayEstadual.sort(function(a, b) {
            return b.size - a.size;
        });
        this.arrayPrivada = arrayPrivada.sort(function(a, b) {
            return b.size - a.size;
        });
        this.arrayExterior = arrayExterior.sort(function(a, b) {
            return b.size - a.size;
        });
    },

    computed: {
        compFederal() {
            var filtroLateral = filtroMapa = [];
            filtroMapa = this.arrayFederal.filter((e) => {
                if (this.filter.sul && e.region == 'Sul') {
                    return true;
                }
                if (this.filter.sudeste && e.region == 'Sudeste') {
                    return true;
                }
                if (this.filter.nordeste && e.region == 'Nordeste') {
                    return true;
                }
                if (this.filter.centro && e.region == 'Centro-Oeste') {
                    return true;
                }
                if (this.filter.norte && e.region == 'Norte') {
                    return true;
                }
                return false;
            });
            filtroLateral = filtroMapa.filter((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    return true;
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    return true;
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    return true;
                }
                if (this.filter.engenharias && e.color == 'rgba(214, 171, 252 ,0.5)') {
                    return true;
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    return true;
                }
                return false;
            });
            return filtroLateral;
        },

        compEstadual() {
            var filtroLateral = filtroMapa = [];
            filtroMapa = this.arrayEstadual.filter((e) => {
                if (this.filter.sul && e.region == 'Sul') {
                    return true;
                }
                if (this.filter.sudeste && e.region == 'Sudeste') {
                    return true;
                }
                if (this.filter.nordeste && e.region == 'Nordeste') {
                    return true;
                }
                if (this.filter.centro && e.region == 'Centro-Oeste') {
                    return true;
                }
                if (this.filter.norte && e.region == 'Norte') {
                    return true;
                }
                return false;
            });
            filtroLateral = filtroMapa.filter((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    return true;
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    return true;
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    return true;
                }
                if (this.filter.engenharias && e.color == 'rgba(214, 171, 252 ,0.5)') {
                    return true;
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    return true;
                }
                return false;
            });
            return filtroLateral;
        },

        compPrivada() {
            var filtroLateral = filtroMapa = [];
            filtroMapa = this.arrayPrivada.filter((e) => {
                if (this.filter.sul && e.region == 'Sul') {
                    return true;
                }
                if (this.filter.sudeste && e.region == 'Sudeste') {
                    return true;
                }
                if (this.filter.nordeste && e.region == 'Nordeste') {
                    return true;
                }
                if (this.filter.centro && e.region == 'Centro-Oeste') {
                    return true;
                }
                if (this.filter.norte && e.region == 'Norte') {
                    return true;
                }
                return false;
            });
            filtroLateral = filtroMapa.filter((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    return true;
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    return true;
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    return true;
                }
                if (this.filter.engenharias && e.color == 'rgba(214, 171, 252 ,0.5)') {
                    return true;
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    return true;
                }
                return false;
            });
            return filtroLateral;
        },

        compExterior() {
            var filtroLateral = filtroMapa = [];
            filtroMapa = this.arrayExterior.filter((e) => {
                if (this.filter.sul && e.region == 'Sul') {
                    return true;
                }
                if (this.filter.sudeste && e.region == 'Sudeste') {
                    return true;
                }
                if (this.filter.nordeste && e.region == 'Nordeste') {
                    return true;
                }
                if (this.filter.centro && e.region == 'Centro-Oeste') {
                    return true;
                }
                if (this.filter.norte && e.region == 'Norte') {
                    return true;
                }
                return false;
            });
            filtroLateral = filtroMapa.filter((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    return true;
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    return true;
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    return true;
                }
                if (this.filter.engenharias && e.color == 'rgba(214, 171, 252 ,0.5)') {
                    return true;
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    return true;
                }
                return false;
            });
            return filtroLateral;
        },
    },

    methods: {
        showName(el) {
            let index = (el.toElement.id).split('-');
            $('#texto-'+index[1]).removeClass('d-none');
            setTimeout(function(){ $('#texto-'+index[1]).addClass('d-none'); }, 1000);
            // console.log('entrou');
        },

        hideName(el) {
            // let index = (el.toElement.id).split('-');
            // $('#texto-'+index[1]).addClass('d-none');
            // console.log('saiu');
        },
    },
});
