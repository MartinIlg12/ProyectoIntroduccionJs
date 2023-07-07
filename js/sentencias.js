//Ingreso de datos por teclado
let nombre=prompt("Ingrese su nombre ");
document.writeln(`Su nombre es ${nombre}<br>`);


let num1 = parseInt(prompt("Digite el primer número")); 
let num2 = parseInt(prompt("Digite el segundo número"));

let suma=num1+num2;
let multi=num1*num2;

document.writeln(`La suma de los números ingresados es ${suma} y la multiplicacion de los numeros ingresados es ${multi} <br>`);

/* //sentencias de control
if(num1>num2){
    console.log(`El numero mayor es ${num1}`);
}else{
    console.log(`El mayor es ${num2}`);
}

//Switich
let dia=parseInt(prompt("Que dia de la semana prefiere? Elija un numero del 1 al 5"));;
switch(dia){
    case 1:
    console.log("Lunes");
    break;
    case 2:
    console.log("Martes");
    break;
    case 3:
    console.log("Miercoles");        
    break;
    case 4:
    console.log("Jueves");
    break;
    case 5:
    console.log("Viernes");
    break;
    default:
        console.log("Ese dia no existe");
}

//For declarar un arreglo, imprimir los elementos que tiene
const array=["uno", 1, "Tatiana", 34];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
} */

//Calcular si pasa o no
let calif1 = parseInt(prompt("Digite su primera calificacion"));
let calif2 = parseInt(prompt("Digite su segunda calificacion"));
let calif3 = parseInt(prompt("Digite su tercera calificacion"));
 let num4=calif1+calif2+calif3;
 let result= num4 / 3;
 if(result>=7){
    document.writeln(`El estudiante aprobó, su calificación fué ${result} <br>`);
}else{
    document.writeln(`El estudiante reprobó, su calificación fué ${result} <br>`);
}
 

//Menu
let menu="Menu\n";
menu+="1. Sumar\n";
menu+="2. Restar\n";
menu+="3. Multiplicar\n";
menu+="4. Dividir\n";
menu+="5. Salir\n";

let cod=0;
do{
    cod=parseInt(prompt(menu));

    switch(cod){
        case 1: 
        let numeros1 = parseInt(prompt("Digite el primer número"));
        let numeros2 = parseInt(prompt("Digite el segundo número"));
            let sumam=numeros1+numeros2;
            document.writeln(`La suma de los números ingresados por menú es ${sumam} <br>`);
        break;
        case 2: 
        let numeror1 = parseInt(prompt("Digite el primer número"));
        let numeror2 = parseInt(prompt("Digite el segundo número"));
            let restam=numeror1-numeror2;
            document.writeln(`La resta de los números ingresados por menú es ${restam} <br>`);
        break;
        case 3:
            let numerom1 = parseInt(prompt("Digite el primer número"));
            let numerom2 = parseInt(prompt("Digite el segundo número"));
            let multim=numerom1 * numerom2;
            document.writeln(`La multiplicacion de los números ingresados por menú es ${multim} <br>`);
        break;
        case 4: 
            let numerod1 = parseInt(prompt("Digite el primer número"));
            let numerod2 = parseInt(prompt("Digite el segundo número"));
            let divm=numerod1 / numerod2;
            document.writeln(`La división de los números ingresados por menú es ${divm}<br>`);
        break;
        case 5:
            document.writeln(`Gracias por preferirnos <br>`);
        break;
        default:


    }
}while(cod!=5);



