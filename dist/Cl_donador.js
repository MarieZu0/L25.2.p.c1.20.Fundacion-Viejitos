export default class Cl_donador {
    constructor(nombre, aporteDolares, aporteBolivares) {
        this._nombre = nombre;
        this._aporteDolares = aporteDolares;
        this._aporteBolivares = aporteBolivares;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set aporteDolares(aporteDolares) {
        this._aporteDolares = aporteDolares;
    }
    get aporteDolares() {
        return this._aporteDolares;
    }
    set aporteBolivares(aporteBolivares) {
        this._aporteBolivares = aporteBolivares;
    }
    get aporteBolivares() {
        return this._aporteBolivares;
    }
    totalEnBolivares(tasaDeCambio) {
        return this._aporteBolivares + (this._aporteDolares * tasaDeCambio);
    }
    totalEnDolares(tasaDeCambio) {
        return this._aporteDolares + (this._aporteBolivares / tasaDeCambio);
    }
}
