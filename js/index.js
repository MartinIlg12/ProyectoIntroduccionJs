//Declarar variables
let nombre;
nombre="Pedro";
//Imprimir mensaje en consola
console.log(nombre);
let apellido="Picapiedra";
console.log(apellido);
//Concatenar cadenas en JS
console.log("Mi nombre es "+nombre + " y mi apeliido es " +apellido);
//Templante de cadenas o interpolacion de cadenas
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
//Tipo de dato NAN
let numero=9;
let letra="a";
let suma=numero*letra;
console.log(suma);
//Imprimir con documento.write
//document.writeln(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
//Imprimir con un alert
//window.alert(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
//Tipo de dato objeto
const persona={
    nombre:"Pablo",
    apellido:"Marmol",
    edad: 30,
    contacto:{
        telefono: "099999",
        email: "pablo@gmail.com",
        instagram: "@pablito"
    },
    pasatiempos:["leer","correr","cocinar"],
    saludar:function(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido} y tengo ${this.edad} años`);
    }
};

console.log(persona.nombre);
persona.saludar();
console.log(persona.contacto.email);
//imprimir propiedades de un objeto
console.log(Object.keys(persona));
//imprimir valores de un objeto

//tipo de datos arreglo
const array=[2, "Martin" ,34, "Lola", true,[1,2,3,4,5]];
console.log(array);
console.log(array[3]);
console.log(array[5][2]);
array.push("Rosa");
console.log(array);
array.pop();
console.log(array);

const array2=Array(50).fill("Martin");
console.log(array2);
//Destructuracion de arreglos
const b=[1,2,3];
const[uno, dos, tres]=b;
console.log(uno);
console.log(b[0]);
console.log(tres, uno, dos);
//Destructuracion de objetos
const empleado={
    nombre1:"Benjamin",
    apellido1:"Ponce",
    estudios:{
        primaria:"Vl",
        Secundaria:"Mejia",
        superior:"ITSQMET"
    }
}
let{nombre1,apellido1, estudios:{primaria,secundaria,superior}}=empleado;
console.log(nombre1);
console.log(primaria);
console.log(superior);