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
            var vetor = [];
            this.arrayFederal.forEach((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.engenharias && e.color == 'rgba(215, 64, 255, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    vetor.push(e);
                }
            });
            return vetor;
        },

        compEstadual() {
            var vetor = [];
            this.arrayEstadual.forEach((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.engenharias && e.color == 'rgba(215, 64, 255, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    vetor.push(e);
                }
            });
            return vetor;
        },

        compPrivada() {
            var vetor = [];
            this.arrayPrivada.forEach((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.engenharias && e.color == 'rgba(215, 64, 255, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    vetor.push(e);
                }
            });
            return vetor;
        },

        compExterior() {
            var vetor = [];
            this.arrayExterior.forEach((e) => {
                if (this.filter.biologicas && e.color == 'rgba(0, 184, 104, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.sociais && e.color == 'rgba(224, 79, 46, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.exatas && e.color == 'rgba(245, 235, 53, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.engenharias && e.color == 'rgba(215, 64, 255, 0.5)') {
                    vetor.push(e);
                }
                if (this.filter.saude && e.color == 'rgba(38, 135, 252, 0.5)') {
                    vetor.push(e);
                }
            });
            return vetor;
        },
    },

    methods: {

    },
});
