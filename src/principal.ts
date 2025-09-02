/*La Fundación Viejitos tiene cierta cantidad de dólares y bolívares, y también se sabe la tasa
de cambio. Los donantes traen dólares y bolívares. Se desea saber cuánto total aporta cada
uno, en dólares y bolívares, y también cuánto es el total final en dólares y bolívares, y quién fue
el mejor donador.
Si tomamos una tasa de cambio de BS.40 por dólar, y los donantes fuesen Sofía con $10 y
Bs.80, Mateo con Bs.600, Elena con $50, y David con $20 y Bs.100, entonces tendríamos el
siguiente resultado:
Sofía aporta $12.00 (Bs.480)
Mateo aporta $15.00 (Bs.600)
Elena aporta $50.00 (Bs.2000)
David aporta $22.50 (Bs.900)
En total se recaudaron $99.50 (Bs.3980)
El mejor donador fue Elena */

import Cl_donador from "./Cl_donador.js";
import Cl_fundacion from "./Cl_fundacion.js";

let don1: Cl_donador = new Cl_donador("Sofía", 10, 80);
let don2: Cl_donador = new Cl_donador("Mateo", 0, 600);
let don3: Cl_donador = new Cl_donador("Elena", 50, 0);
let don4: Cl_donador = new Cl_donador("David", 20, 100);

let fundacion: Cl_fundacion = new Cl_fundacion();

fundacion.procesarDonador(don1);
fundacion.procesarDonador(don2);
fundacion.procesarDonador(don3);
fundacion.procesarDonador(don4);

let tasaDeCambio: number = 40;

console.log(`Sofía aporta $${don1.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don1.totalEnBolivares(tasaDeCambio).toFixed(2)})`);
console.log(`Mateo aporta $${don2.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don2.totalEnBolivares(tasaDeCambio).toFixed(2)})`);
console.log(`Elena aporta $${don3.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don3.totalEnBolivares(tasaDeCambio).toFixed(2)})`);
console.log(`David aporta $${don4.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don4.totalEnBolivares(tasaDeCambio).toFixed(2)})`);
console.log(`En total se recaudaron $${fundacion.totalFinalDolares(tasaDeCambio).toFixed(2)} (Bs.${fundacion.totalFinalBolivares(tasaDeCambio).toFixed(2)})`);
console.log(`El mejor donador fue ${fundacion.mejorDonador()}`);

let salida: HTMLElement | null = document.getElementById("salida");
if(salida){
    salida.innerHTML = `<p>Sofía aporta $${don1.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don1.totalEnBolivares(tasaDeCambio).toFixed(2)})</p>
    <p>Mateo aporta $${don2.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don2.totalEnBolivares(tasaDeCambio).toFixed(2)})</p>
    <p>Elena aporta $${don3.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don3.totalEnBolivares(tasaDeCambio).toFixed(2)})</p>
    <p>David aporta $${don4.totalEnDolares(tasaDeCambio).toFixed(2)} (Bs.${don4.totalEnBolivares(tasaDeCambio).toFixed(2)})</p>
    <p>En total se recaudaron $${fundacion.totalFinalDolares(tasaDeCambio).toFixed(2)} (Bs.${fundacion.totalFinalBolivares(tasaDeCambio).toFixed(2)})</p>
    <p>El mejor donador fue ${fundacion.mejorDonador()} </p>`;
} else {
    console.log("Elemento con id 'salida' no encontrado.");
}