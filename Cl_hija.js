export default class Cl_hija extends Cl_padre {
    constructor(atribA, atribB) {
        super(atribA); // Llama al constructor de la clase padre para inicializar atribA
        this.atribB = atribB; // Inicializa el atributo atribB
    }
}