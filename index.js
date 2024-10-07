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