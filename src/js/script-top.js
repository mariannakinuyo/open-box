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
    },

    mounted() {
        this.arrayFederal = arrayFederal;
        this.arrayEstadual = arrayEstadual;
        this.arrayPrivada = arrayPrivada;
        this.arrayExterior = arrayExterior;
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
    },
});
