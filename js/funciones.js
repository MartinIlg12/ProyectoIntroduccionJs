//funcion declarada
saludar("Antonio");
function saludar(nombre){
    console.log(`Hola, `);
}
console.log("Probando funcion declarada");
function Sumar(n1, n2){
    let resultado=n1+n2;
    return resultado;
}
console.log("El resultado de la suma es: "+Sumar(4,5));
//Funcion expresada anonimo arrow flech
const saludo =(nombre) => ("Hola buenas noches "  +nombre);
console.log(saludo("Pablo"));
const suma = (a,b)=> (a+b);
console.log("La suma de los numeros es "+suma(5,6));

const sum =(x,y) =>{
    let resultado=x+y;
    return `El resultado de la suma es  ${resultado}`
}
console.log(sum(4,5));
