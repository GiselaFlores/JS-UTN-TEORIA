console.log("hola mundo js");
//comentario de linea
/* comentario debloque */ 

//El ; no es necesariuo pero debería
//La forma de escritura camelCase

//Variable

/* var globales *no se utilizan*
   let locales/scope

   const constantes
*/

var calculoEdad = 20;
let nombre = "Pedrito";

const IVA = 21;

console.log(calculoEdad);
console.log(nombre);
console.log("El IVA Argentino es de: ", IVA);

//let numeroDos = new Number(4);

let uno, dos = 2, tres = "3", cuatro, cinco = true;

dos = dos*5;
console.log(dos);

// tipos de datos NaN/undefined

let resultado = dos + tres;
console.log(resultado);

let resultadoDos = dos * tres;
console.log(resultadoDos);

let resultadoTres = dos * cuatro;
console.log(resultadoTres);

let resultadoCuatro = cuatro*2;
console.log(resultadoCuatro);
console.log(cuatro);

// operadores aritméticos + - * / ** % asignación ++ -- += -= *=
//dos = dos + 5;
//dos += 5;

//Pedir datos del usuario prommpt()
//parseos parseInt() parseFloat()

let pedirDato = parseInt(prompt("Ingrese su sueldo: "));
console.log("El 20% de tu sueldo es: ", pedirDato*0.2);

//devolver al HTML (alt+96 => `)
document.write("Hola mundo HTML");
document.write('<h1>Esto es un título desde JS</h1><p class="formato"> Hola como andas?</p>');
document.write(`<h1>Esto es otro título desde JS</h1> hola que tal, el valor de la variable dos es: ${dos}`);

//operador de comparación (booleanos)
// == valor  === valor y tipo de dato
// != valor  !== valor y tipo de dato
// < menor > mayor <= menor >= mayor

//operadores lógicos 
// && Y lógico (conjunción)  solo es verdadero cuando ambas partes son true
// || O lógico (diyunción)  solo es verdadera para todos los casos donde no sean ambos false
// ! Negación

//criterio (5 >= numero || numero < 2) si numero=6 falso
//criterio (5 >= numero || numero < 2) si numero=2 True
//criterio (5 >= numero || numero < 2) si numero=-10 true

//criterio (numero > 5 && numero <= 20) si numero=6 true
//criterio (numero > 5 && numero <= 20) si numero=30 false

//criterio (numero > 5 && numero <= 20) && (5 >= numero || numero < 2) numero=6 false 

//jerarquia de operadores ()  ^  */ +-  %resto  < >  !  &&  ||

// Estructuras de control

//IF

let nota = 7;

if (nota >= 7){
   console.log("Estas aprobado");
} else{
   console.log("Desaprobaste");
}

if (nota >= 7){
   console.log("Estas aprobado");
} else if(nota === 3){
   console.log("Estuviste cerca");
} else {
   console.log("Desaprobaste");
}

// ternario     condición ? valor verdadero : valor falso;

let calificacion = nota >= 7 ? "aprobado" : "desaprobado";
console.log(calculoEdad);

let calificacionDos =
  nota < 5 ? "Insuficiente" :
  nota < 6 ? "Suficiente" :
  nota < 8 ? "Bien" :
  nota <= 9 ? "Notable" :
  "Sobresaliente";

console.log(calificacionDos);

// SWITCH

switch(nota){
      case 10:
      calificacion = "sobresaliente";
      break;
      case 9:
      case 8:
      calificacion = "Notable";
      break;
      case 7:
      case 6:
         calificacion = "Bien";
         break;
      case 5:
         calificacion = "Suficiente";
         break;
      case 4:
      case 3:
      case 2:
      case 1:
      case 0:
         calificacion = "Insuficiente";
         break;
      default:
         calificacion = "nota incorrecta";
         break;
}

console.log("La nota que quedará registrada en tu boletín es: ", calificacion);
document.write(`<h1>La nota que quedará registrada en tu boletín es: ${calificacion}</h1>`);

// BUCLES while for doWhile

// while
let i = 0;

while (i < 5){
   console.log("valor de i: ", i);
   i++; //i = i + 1;
}

//do while

let z = 5;

do{
   console.log("Hola a todos");
   i++; //i = i + 1;
} while (z < 5);

console.log("Salimos del bucle");

//for (inicialización; condición; incremento)

for(let i = 5; i > 0; i--){
   console.log("valor de i: ", i);
}

// FUNCIONES

//declaración

function saludar(){
   //proceso
   console.log("Hola soy una función de JS");
}

//llamado
saludar();


//Parametros 
let  nombres = "Matias";

function saludar(nombre, edad, apellido = "Perez" ){
   //proceso
   console.log(`Hola ${nombre}, ${apellido} y su edad es ${edad}`);
}

//llamado
saludar("Laura");
saludar(nombres);
saludar("Laura", 45);

// Ejemplo tabla de multiplicar 

function tablaDeMultiplicar(tabla, hasta){
   for(let i = 1; i <= hasta; i++){
      console.log(`${tabla} x ${i} = ${tabla*i}`);
      document.write(`<p>${tabla} x ${i} = ${tabla*i}</p>`);
   }
}

tablaDeMultiplicar(5, 15);
tablaDeMultiplicar(20, 10);


//FUNCIONES CON RETORNO

function multiplicarDos(a, b){
   //procesos
   return a*b;
}

let a = parseInt(prompt("ingrese el numero a multiplicar: "));
let b = parseInt(prompt("ingrese el otro numero a multiplicar: "));

let bingo = multiplicarDos(a, b);
console.log(multiplicarDos(a, b));

if(multiplicarDos(a, b) >= 50){
   alert("Bingo");
} else {
   alert("Segui participando");
}


//FUNCIONES VARIABLES

let suma = function(a, b){
   if(a > b){
      return a*b;
   } else {
      return a+b;
   }
}

let result = suma(5, 4);

// otra alternativa de return

let sumaDos = function(a, b){
   if(a > b){
      return console.log(`como ${a} es mayor a ${b}, la multiplicación de ${a}x${b}=${a*b}`);
   } else {
      return console.log(`como ${a} es menor a ${b}, la suma de ${a}+${b}=${a+b}`);
   }
}

let results = sumaDos(5, 4);
document.write(`<h1>${result}</h1>`);
document.write(`<h1>${sumaDos(5, 4)}</h1>`);

// FUNCION ARROW FUNCTION

let alCuadrado = x => x*x; //return incorporado

console.log(alCuadrado(4));

//+ parametros

let alCuadradoMasUno = (x, y) => x*x + y; //return incorporado

console.log(alCuadradoMasUno(4));

// + parametros + lógica

let area = (x, y) => {
   // variables
   if(x === y){
      console.log(`La figura es un cuadrado de lado ${x}, y su area es de: ${alCuadrado(x)}`);
   } else {
      console.log(`La figura es un rectangulo de lado ${x} y alto ${y}, y su area es de: ${x*y}`);
   }
}  

console.log(area(4, 2));

//Simplificación

//function (a){
//   return a + 100;
//}

//(a) => { return a + 100}

//(a) => a + 100;

//a => a + 100;

//FUNCION ANONIMA

const iva = function(){return 21;}

// proceso
let bandera = true;

const CambioDeBandera = function(bandera){
   if(bandera){
      bandera = false;
   } else {
      bandera = true;
   }
   return bandera;
}

bandera = CambioDeBandera(bandera);

//CALLBACKS

function saludar(nombre){
   document.write(`<h1>Hola ${nombre}, bienvenido a mi sitio </h1>`);
}

function datoUsuario(saludar){
   let nombre = prompt("Ingrese su nombre: ");
   saludar(nombre);
}

datoUsuario(saludar);


//ARRAY

const array = new Array("a", 5, "hola", 120, true); //tradicional
console.log(array[2]);

const frutas = ["manzana", "frutilla", "naranja", "banana", "pera"];

const verduras = [];

verduras[0] = "papa";
verduras[1] = "zapallo";
verduras[2] = "tomate";

console.log(verduras[2]);

console.log(frutas.length); //cantidad de elementos

console.log(frutas.length -1); // cantidad de posiciones

console.log("verduras: ", verduras);


// recorrer el array

//FOREACH

for(i = 0; i < frutas.length; i++){
   console.log(frutas[i]);
}

frutas.forEach( fruti => console.log(fruti));

//MAP

const numerosPares = [2, 4, 6, 8, 10];

const numerosImpares = numerosPares.map(function(num){
   return num -1;
});

// destrucuración de un array

const posiciones = [10, 20];

const [valorUno, valorDos] = posiciones;  // valorUno = 10 valorDos = 20

// cambio de variables

let varUno = 10;
let varDos = 20;

/*
let aux = varUno;
varUno = valorDos;
varDos = aux;
*/

[valorUno, valorDos] = [valorDos, valorUno];

const posAmpliada = [10, 11, ...pair, 30];  // [10, 11, posiciones, 30]

// métodos

frutas.push("kiwi");
console.log(frutas);

let eliminado = frutas.pop(); // elimina el último y devuelve ese eliminado

let tamano = frutas.unshift("frutilla", "arándanos", "durazno", "uvas"); //agrega al inicio y devuelve cantidad de elementos, tamaño del array
console.log(frutas);

let primero = frutas.shift(); // elimina y devuelve el primero

let verduleria = frutas.concat(verduras); // concatena dos o mas arrays
console.log(verduleria);

let busquedaInicio = verduleria.indexOf("frutilla", 3); // devuelve la posición donde esta el elemento la primera vez que aparece y busca desde el princinpio
console.log(busquedaInicio);

let busquedaFinal = verduleria.lastIndexOf("frutilla"); 

let arrayNuevo = verduleria.slice(2, 6); // formar un sub array de un array, y me lo devuelve como un nuevo array

verduleria.splice(2, 0, "lechuga");
console.log(verduleria);

verduleria.splice(1, 1, "pera");
console.log(verduleria);

verduleria.reverse();
console.log(verduleria);

verduleria.sort();
console.log(verduleria);

const numeros = [10, 5, 1, 59, 6, 89, 18, 9, 27, 235, 425, 38];
console.log(numeros.sort());

//[1, 10, 18, 235, 27, 38, 425, 5, 59, 6, 89, 9]

numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.toSorted();
console.log(numeros);

const cumpleCriterio = numeros.every(num => num %2 === 0);
console.log(cumpleCriterio);

const cumpleAlMenosUno = numeros.some(num => num %2 === 0);
console.log(cumpleAlMenosUno);

const doble = numeros.map(num => num*2);
console.log(doble);

const pares = numeros.filter(num => num %2 === 0);
console.log(pares);

const busquedaCondicion = numeros.findIndex(num => num > 25);
console.log(busquedaCondicion);

const busquedaElemento = numeros.find(num => num > 25);
console.log(busquedaElemento);

const acumulador = numeros.reduce((acumula, dato) => acumula + dato, 0);
console.log(acumulador);

const acumuladorDereIzq = numeros.reduceRight((acumula, dato) => acumula - dato, 0);
console.log(acumuladorDereIzq);

//DOM

//Selectores

const id = document.getElementById("unid");
const name = document.getElementsByName("form");
const tag = document.getElementsByTagName("p");
const clase = document.getElementsByClassName("fondorojo");

const comodinUno = document.querySelector(".verde");
//const comodinUno = document.querySelector("#verde");

const comodinMultiple = document.querySelectorAll(".rojo");

// devolver al HTML

//nodo.textoContext = "Hola a todos";
//nodo.innerHTML = "<p>hola mundo</p>";

// insertar una imagen

const div = document.getElementById("divPrincipal");

const img = document.createElement("img");
img.src = "http://www.google.com./img.png";
img.alt = "img de google";

div.appendChild(img);

/******/

const ul = document.getElementsByTagName("ul");

numeros.forEach(num => {
   const li = document.createElement("li");
   li.innerHTML = num;
   ul.appendChild(li);
   //li.className = "rojo";
});

//ul.className="";

// EJEMPLO: cambio de color rgb(255, 255, 255);

const btn = document.querySelector("button");

//toque el botón y cambie de color el fondo

//Pasos:
//función que permita cambiar el color
//un generador de colores rgb(255 255 255)
// con el color ya armado edvuelvo el color a la acción (al click del botón)

//random() devolverme un número cualquiera entre 0 y <1

function randomColor(number){
   return Math.floor(Math.random()*(number + 1));
}

/*
console.log(randomColor(255));
console.log(randomColor(255));
console.log(randomColor(255));
console.log(randomColor(255));
*/

//randomColor(255);

btn.addEventListener("click", ()=>{
   const color = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;  // rgb(123, 54, 98);
   document.body.style.backgroundColor = color;  
});

// eventos sobre campos formularios

//input para obtener el contenido se usa el target.value

//keydown

//<input type="text"> id="inputText" placeholder="Escribí algo.."> estaria en el HTML

const input = document.getElementById("inputText");

input.addEventListener("keydown", (event)=>{
   console.log(`Tecla presionada: ${event.key}` )
});

// evento submit

/*<form id="myForm">
  <input type="text" name="username" placeholder="Nombre de usuario">
  <button type="submit">Enviar</button>
  </form>
*/ 

const form = document.getElementById("myForm");

form.addEventListener("submit", (e)=>{
   e.preventDefault(); // evita el envio del formulario, y me permite personalizar
   //https://sweetalert2.github.io/
   console.log("formulario enviado");
} );

// resize )ventana de windows

window.addEventListener('resize', () => {
   console.log(`Ancho de la ventana: ${window.innerWidth}, Alto: ${window.innerHeight}`);
 });

 // evento de carga

 document.addEventListener('DOMContentLoaded', () => {
   console.log('El contenido del DOM ha sido completamente cargado');
 });

 // evento personalizado

 const miEvento = new miEvento("miEvento", {
   detail: {message: "hola evento personalizado"}   
});

nodoCualquiera.addEventListener("miEvento", (e)=>{
   console.log(e.detail.message);
});

nodoCualquiera.dispachEvent(miEvento);

// validación de form

document.addEventListener("DOMContentLoaded", ()=>{
   const form = document.getElementById("registrationForm");

   form.addEventListener("submit", (e)=>{
      e.preventDefault();

      const isValid = validarForm(form);

      if(isValid){
         alert("Formulario enviado con éxito");
         form.reset(); 
      }
   })
});

function validarForm(form){
   let isValid = true;

   //validar el campo de nombre de usaurio no vacio

   const usernameInput = form.querySelector("#username");
   if(usernameInput.value.trim() === ""){
      showValidacionError(usernameInput);
      isValid = false;
   } else {
      clearValidacionError(usernameInput);
   }

   // validación de un correo electrónico

   const emailInput = form.querySelector('#email');

   if (!validateEmail(emailInput.value)) {
     showValidationError(emailInput);
     isValid = false;
   } else {
     clearValidationError(emailInput);
   }

   return isValid;
}

//funciones aux

function showValidacionError(input){
   input.classList.add("is-invalid");
}

function clearValidacionError(input){
   input.classList.remove("is-invalid");
   input.classList.add("is-valid");
}

function validateEmail(email) {
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailPattern.test(email);
 }

 

