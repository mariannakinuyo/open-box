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
                if (e.color == 'rgba(0, 184, 104, 0.5)' && this.filter.biologicas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(224, 79, 46, 0.5)' && this.filter.sociais) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(245, 235, 53, 0.5)' && this.filter.exatas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(215, 64, 255, 0.5)' && this.filter.engenharias) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(38, 135, 252, 0.5)' && this.filter.saude) {
                    vetor.push(e);
                }
            });
            return vetor;
        },

        compEstadual() {
            var vetor = [];
            this.arrayEstadual.forEach((e) => {
                if (e.color == 'rgba(0, 184, 104, 0.5)' && this.filter.biologicas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(224, 79, 46, 0.5)' && this.filter.sociais) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(245, 235, 53, 0.5)' && this.filter.exatas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(215, 64, 255, 0.5)' && this.filter.engenharias) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(38, 135, 252, 0.5)' && this.filter.saude) {
                    vetor.push(e);
                }
            });
            return vetor;
        },

        compPrivada() {
            var vetor = [];
            this.arrayPrivada.forEach((e) => {
                if (e.color == 'rgba(0, 184, 104, 0.5)' && this.filter.biologicas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(224, 79, 46, 0.5)' && this.filter.sociais) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(245, 235, 53, 0.5)' && this.filter.exatas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(215, 64, 255, 0.5)' && this.filter.engenharias) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(38, 135, 252, 0.5)' && this.filter.saude) {
                    vetor.push(e);
                }
            });
            return vetor;
        },

        compExterior() {
            var vetor = [];
            this.arrayExterior.forEach((e) => {
                if (e.color == 'rgba(0, 184, 104, 0.5)' && this.filter.biologicas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(224, 79, 46, 0.5)' && this.filter.sociais) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(245, 235, 53, 0.5)' && this.filter.exatas) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(215, 64, 255, 0.5)' && this.filter.engenharias) {
                    vetor.push(e);
                }
                if (e.color == 'rgba(38, 135, 252, 0.5)' && this.filter.saude) {
                    vetor.push(e);
                }
            });
            return vetor;
        },
    },

    methods: {
        filterGreen() {
            let novo = [];
            if (!this.filter.biologicas) { // incluir
                novo = this.arrayFederal;
                arrayFederal.forEach((e) => {
                    if (e.color == 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayFederal = novo;
                novo = this.arrayEstadual;
                this.arrayEstadual.forEach((e) => {
                    if (e.color == 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayEstadual = novo;
                novo = this.arrayPrivada;
                this.arrayPrivada.forEach((e) => {
                    if (e.color == 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayPrivada = novo;
                novo = this.arrayExterior;
                arrayExterior.forEach((e) => {
                    if (e.color == 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayExterior = novo;
                novo = [];
            } else { // remover rgba(0, 184, 104, 0.5)
                this.arrayFederal.forEach((e) => {
                    if (e.color != 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayFederal = novo;
                novo = [];
                this.arrayEstadual.forEach((e) => {
                    if (e.color != 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayEstadual = novo;
                novo = [];
                this.arrayPrivada.forEach((e) => {
                    if (e.color != 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayPrivada = novo;
                novo = [];
                this.arrayExterior.forEach((e) => {
                    if (e.color != 'rgba(0, 184, 104, 0.5)') {
                        novo.push(e);
                    }
                });
                this.arrayExterior = novo;
                novo = [];
            }
        },

        filterRed() {
            if (this.filter.sociais) {
                // incluir
            } else {
                // remover rgba(224, 79, 46, 0.5)
            }
        },

        filterYellow() {
            if (this.filter.exatas) {
                // incluir
            } else {
                // remover rgba(245, 235, 53, 0.5)
            }
        },

        filterPurple() {
            if (this.filter.engenharias) {
                // incluir
            } else {
                // remover rgba(215, 64, 255, 0.5)
            }
        },

        filterBlue() {
            if (this.filter.saude) {
                // incluir
            } else {
                // remover rgba(38, 135, 252, 0.5)
            }
        },

    },
});
