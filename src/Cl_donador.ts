export default class Cl_donador {
    private _nombre: string;
    private _aporteDolares: number;
    private _aporteBolivares: number;


    constructor(nombre: string, aporteDolares: number, aporteBolivares: number) {
        this._nombre = nombre;
        this._aporteDolares = aporteDolares;
        this._aporteBolivares = aporteBolivares;
        }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }

    set aporteDolares(aporteDolares: number) {
        this._aporteDolares = aporteDolares;
    }
    get aporteDolares(): number {
        return this._aporteDolares;
    }

    set aporteBolivares(aporteBolivares: number) {
        this._aporteBolivares = aporteBolivares;
    }
    get aporteBolivares(): number {
        return this._aporteBolivares;
    }

    totalEnBolivares(tasaDeCambio: number): number {
        return this._aporteBolivares + (this._aporteDolares * tasaDeCambio);
    }

    totalEnDolares(tasaDeCambio: number): number {
        return this._aporteDolares + (this._aporteBolivares / tasaDeCambio);
    }


}