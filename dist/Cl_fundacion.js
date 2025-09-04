export default class Cl_fundacion {
    constructor() {
        this._acumDolares = 0;
        this._acumBolivares = 0;
        this._cntDonador1 = 0;
        this._cntDonador2 = 0;
        this._cntDonador3 = 0;
        this._cntDonador4 = 0;
        this._mayDonador = 0;
    }
    procesarDonador(donador) {
        // Acumular los aportes en dólares y bolívares
        this._acumDolares += donador.aporteDolares;
        this._acumBolivares += donador.aporteBolivares;
        // Contar los donadores según su nombre
        switch (donador.nombre) {
            case "Sofía":
                this._cntDonador1 += donador.totalEnDolares(40);
                break;
            case "Mateo":
                this._cntDonador2 += donador.totalEnDolares(40);
                break;
            case "Elena":
                this._cntDonador3 += donador.totalEnDolares(40);
                break;
            case "David":
                this._cntDonador4 += donador.totalEnDolares(40);
                break;
        }
        // Actualizar el mayor donador
        this._mayDonador = Math.max(this._cntDonador1, this._cntDonador2, this._cntDonador3, this._cntDonador4);
    }
    totalFinalDolares(tasaDeCambio) {
        return this._acumDolares + (this._acumBolivares / tasaDeCambio);
    }
    totalFinalBolivares(tasaDeCambio) {
        return this._acumBolivares + (this._acumDolares * tasaDeCambio);
    }
    mejorDonador() {
        if (this._cntDonador1 > this._cntDonador2 && this._cntDonador1 > this._cntDonador3 && this._cntDonador1 > this._cntDonador4) {
            return "Sofía";
        }
        else if (this._cntDonador2 > this._cntDonador1 && this._cntDonador2 > this._cntDonador3 && this._cntDonador2 > this._cntDonador4) {
            return "Mateo";
        }
        else if (this._cntDonador3 > this._cntDonador1 && this._cntDonador3 > this._cntDonador2 && this._cntDonador3 > this._cntDonador4) {
            return "Elena";
        }
        else if (this._cntDonador4 > this._cntDonador1 && this._cntDonador4 > this._cntDonador2 && this._cntDonador4 > this._cntDonador3) {
            return "David";
        }
        else {
            return "Empate entre donadores";
        }
    }
}
