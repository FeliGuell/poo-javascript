
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta         //extends para decir que la clase padre es Cuentas en donde va a Heredad todas sus funcionalidades
{  
    static cantidadCuentas = 0;         // static es para que el atributo sea común para todos los objetos o instancias

    constructor(cliente,numero,agencia) {
        super(cliente,numero,agencia, 0);                                // se utiliza para referenciar al constructor padre que es la clase Cuentas.
        CuentaCorriente.cantidadCuentas++;                               // Para manipular el atributo static(no se utliza this)   
    }

    retirarDeCuenta(valor) {                                           //Sobreescribimos el método que se encuentra en el padre para agregar especificaciones necesarias de la clase hijo
        super._retirarDeCuenta(valor,5);
    }

}