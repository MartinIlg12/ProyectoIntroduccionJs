//Ingreso de datos por teclado
let nombre=prompt("Ingrese su nombre ");
document.writeln(`Su nombre es ${nombre}`);


let num1 = parseInt(prompt("Digite el primer número"));
let num2 = parseInt(prompt("Digite el segundo número"));

let suma=num1+num2;
let multi=num1*num2;

document.writeln(`La suma de los números ingresados es ${suma} y la multiplicacion de los numeros ingresados es ${multi}`);

//sentencias de control
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
}

//Calcular si pasa o no
let calif1 = parseInt(prompt("Digite su primera calificacion"));
let calif2 = parseInt(prompt("Digite su segunda calificacion"));
let calif3 = parseInt(prompt("Digite su tercera calificacion"));
 let result=calif1+calif2+calif3/3;
 if(result>=7){
    document.writeln(`El estudiante aprobó`);
}else{
    document.writeln(`El estudiante reprobó`);
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
        case 1: document.write("1. Sumar<br>")
        break;
        case 2: document.write("1. Restar<br>")
        break;
        case 3: document.write("1. Multiplicar<br>")
        break;
        case 4: document.write("1. Dividir<br>")
        break;
        case 5: document.write("1. Salir<br>")
        break;
        default: document.write("Ingrese un código correcto")


    }
}while(cod!=5);



