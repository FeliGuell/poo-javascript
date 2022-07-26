export class Cuenta{
  
        #cliente;                                       //# es para indicar que el atributo es privado    
        #saldo;

    
    
        constructor( cliente, numero, agencia, saldo){
          
            if(this.constructor == Cuenta){
                throw new Error('No se debe instanciar objetos de la clase Cuenta');  //Muestra el error y detiene la ejecución para proteger la clase Cuenta. 
            }                                                                         //Concepto de Clase Abstracta, solo puede ser extendida la clase pero no instanciada
            this.numero = numero;                             
            this.agencia = agencia;
            this.#cliente = cliente;
            this.#saldo = saldo;
        }

        set cliente(valor) {
            if (valor instanceof Cliente)
                this.#cliente = valor;
        }
    
        get cliente() {
            return this.#cliente;
        }
    
    
        depositoEnCuenta(valor) {
            if (valor > 0)
                this.#saldo += valor;
            return this.#saldo;
        }
    
        //Metodo de retiro sin comisión
        retirarDeCuenta(valor) {                                                        //Método abstracto, no realiza nada, pero existe su esqueleto y a su vez se protege
            throw new Error('Debe implementar el método retirarDeCuenta en su clase');  //Indica que debe realizar el método en su propia clase y no en la clase padre o base
        }                                                                               // La idea principal de los métodos abstractos es definir los métodos que las clases hijas deben implementar de forma que no sean olvidados.

        //Método privado con comisión(JavaScript no es estricto con los métodos privados por el momento, es un tema conceptual)
        _retirarDeCuenta(valor, comision) {
            valor = valor * (1+comision/100);

            if (valor <= this.#saldo)
                this.#saldo -= valor;
            return this.#saldo;
        }
    
        verSaldo() {
            return this.#saldo;
        }
    
        transferirParaCuenta(valor,cuentaDestino) {
            this.retirarDeCuenta(valor);
            cuentaDestino.depositoEnCuenta(valor);
            valor = 200;
            valor = valor*1000;
        }
    }
    
    
