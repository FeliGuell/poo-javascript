export class SistemaAutenticacion {
    static login(usuario,clave){
            if ("autenticable" in usuario && usuario.autenticable instanceof Function) // Validar de que autenticable se encuentre en la clase
                 return usuario.autenticable(clave) ;                                  // y que sea una funcion de la instancia
            else 
                return false;
    }
}