//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10
 */

function imprimirDelUnoAlDiez(){
    for (let i = 1; i <= 10; i++){
      console.log(i);
    }
};
imprimirDelUnoAlDiez();

/*
Desafìo de programación  #2: Imprimí los números impares del 1 al 100
*/

function imprimirImparesDeUnoACien(){
  for (let i = 1; i <= 100; i+=2){
    console.log(i);
  }
}
imprimirImparesDeUnoACien();

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7
*/
function imprimirTablaDelSiete(){
  const EL_NUMERO_SIETE = 7;
  for (let i = 0; i <= 9; i++){
    console.log(`7 x ${i} = ${EL_NUMERO_SIETE * i}`)
  }
}
imprimirTablaDelSiete();

/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
*/

function imprimirTablasDeMultiplicacion(){
  for (let i = 1; i <= 9; i++){
    for(let j = 0; j <= 9; j++){
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
imprimirTablasDeMultiplicacion();

/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]
*/
function calcularSumaUnoAlDiez(){
  let sumaElementos = 0;
  for (let i = 0; i < array.length; i++){
    sumaElementos += array[i];
  };
  return sumaElementos; 
}
calcularSumaUnoAlDiez([1,2,3,4,5,6,7,8,9,10]);

/*
Desafío de programación #6: Calcula 10! (10 factorial)
*/
function calcularFactorialDeDiez(){
  let factorialDeDiez = 10;
  for (let i = 9; i >= 1; i--){
    factorialDeDiez *= i;
  }
  return factorialDeDiez;
}
calcularFactorialDeDiez();

 /*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/
function calcularSumaImparesEntreDiezYTreinta(){
  let sumaImpares = 0;
  for(let i = 11; i <= 30; i+= 2) {
    sumaImpares += i;
  }
  return sumaImpares;
};
calcularSumaImparesEntreDiezYTreinta();

/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/
function convertirDeCelsiusAFahrenheit(celsius){
  return (celsius * (9 / 5)) + 32;
}
convertirDeCelsiusAFahrenheit(15);

/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/
function convertirDeFahrenheitACelsius(fahrenheit){
  return (fahrenheit - 32) * (5 / 9);
}
convertirDeFahrenheitACelsius(59);

/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/
function calcularSumaArray(array){
  let sumaElementos = 0;
  for (let i = 0; i < array.length; i++){
    sumaElementos += array[i];
  };
  return sumaElementos; 
}
calcularSumaArray([10,25,100,42,37]);
/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/
function calcularPromedio(array){
  let sumaElementosArray = 0;
  for (let i = 0; i < array.length; i++){
      sumaElementosArray += array[i];
  };
  return sumaElementosArray / array.length;
}
calcularPromedio([12,18,35,45]);

/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
*/
function devolverNumerosPositivosDeUnArray(array){
  let arrayDePositivos = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] >= 0) {
      arrayDePositivos.push(array[i]);
    }
  }
  return arrayDePositivos;
};
devolverNumerosPositivosDeUnArray([-3,5,17,42,-9]);

/*
Desafío de programación #13: Encontrar el número máximo en un array de números.
*/
function encontrarNumeroMaximoEnArray(array){
  let numeroMaximo = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] > numeroMaximo){
      numeroMaximo = array[i];
    }
  }
  return numeroMaximo;
}
encontrarNumeroMaximoEnArray([1,45,-3,17,55,-9,16,142,-20]);

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
*/
function primerosDiezFibonacci(){
  let numeroAImprimir = 0;
  let numeroTemporal = 1;
  let numeroSiguiente;
  for (let i = 0; i <= 10; i++){
    console.log(numeroAImprimir);
    numeroSiguiente = numeroAImprimir + numeroTemporal;
    numeroAImprimir = numeroTemporal;
    numeroTemporal = numeroSiguiente;
  }
}
primerosDiezFibonacci();

/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/
function calcularFibonacci(n){
  if (n <= 1){
    return n;
  } else {
    return calcularFibonacci(n-1) + calcularFibonacci(n-2);
  }
}
calcularFibonacci(10);

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
*/
function controlarSiEsNumeroPrimo(numero){
  let esPrimo = true;
  for (let i = 2; i <= Math.sqrt(numero); i++){
    if (numero % i === 0) {
      esPrimo = false;
    }
  }
  return esPrimo;
}
controlarSiEsNumeroPrimo(7);

/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
*/
function sumarDigitosDeUnNumero(numero){
  let suma = 0;
  let arrayDelNumero = String(numero).split('');
  for (let i = 0; i < arrayDelNumero.length; i++){
    suma += Number(arrayDelNumero[i]);
  }
  return suma;
}
sumarDigitosDeUnNumero(12345);

/*
Desafío de programación #18: Imprimir los primeros 100 números primos
*/
function imprimirPrimerosCienPrimos(){
  let contador = 0;
  let numeroAEvaluar = 2;
  while (contador < 100){
    if (calcularSiEsPrimo(numeroAEvaluar)){
      console.log(numeroAEvaluar);
      contador++
    }
    numeroAEvaluar++
  }
}

function calcularSiEsPrimo(numero){
  let esPrimo = true;
  for (let i = 2; i <= Math.sqrt(numero); i++){
    if (numero % i === 0) {
      esPrimo = false;
    }
  }
  return esPrimo;
};

imprimirPrimerosCienPrimos();

/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
*/
function calcularNPrimos(n, alComienzo){
  let nPrimos = [];
  let numeroAEvaluar = alComienzo + 1;
  for (let i = 1; i <= n; i++){
    while(!calcularSiEsPrimo(numeroAEvaluar)){
      numeroAEvaluar++
    }
    if (calcularSiEsPrimo(numeroAEvaluar)){
      nPrimos.push(numeroAEvaluar);
      numeroAEvaluar++;
    }
    }
    return nPrimos;
  }

  calcularNPrimos();
// llamo directamente a calcularSiEsPrimo porque está declarada en el ejercicio anterior (linea 228)

/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
*/
function rotarUnoALaIzquierda(array){
  let temporalUno = array[0];
  let temporalDos;
  
  for(let i = 0; i < array.length; i++){
    temporalDos = array[i + 1];
    array[i] = temporalDos;
  }
  array[array.length - 1] = temporalUno;
  return array;
}

rotarUnoALaIzquierda([1,2,3,4]);
/*
Desafío de programación #21: Rotar un array a la derecha una posición
*/
function rotarUnoALaDerecha(array){
  let temporalUno = array[array.length-1];
  let temporalDos 
  
  for(let i = array.length - 1; i > 0; i--){
    temporalDos = array[i-1]
    array[i] = temporalDos;

  }
  array[0] = temporalUno;
  return array;
}

rotarUnoALaDerecha([1,2,3,4]);

/*
Desafío de programación #22: Invertir un array
*/
function invertirArray(array){
  let arrayInvertido = [];
  for (let i = array.length; i >= 0; i--){
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

invertirArray([1,2,3,4]);

/*
Desafío de programación #23: Invertir una cadena de caracteres
*/
function invertirString(string){
  let stringInvertido = "";
  for (let i = string.length - 1; i >= 0; i--){
    let temporal = string[i];
    stringInvertido += temporal;
  }
  return stringInvertido;
}

invertirString("bienvenido")

/*
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
*/
function concatenarArrays(arrayUno, arrayDos){
  let arrayFinal = [];
  for (let i = 0; i < arrayUno.length; i++){
    arrayFinal.push(arrayUno[i]);
  }
  for (let i = 0; i < arrayDos.length; i++){
    arrayFinal.push(arrayDos[i]);
  }
  return arrayFinal;
}

/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
*/

/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
* Calcular la suma de los primeros 100 números primos.
Desafío de programación #29: Print the distance between the first 100 prime numbers
* Imprimir la distancia entre los primeros 100 números primos.
  (ej. la distancia entre 3 y 2 es 1, entre 5 y 3 es 2, entre 7 y 5 es 2, etc.. )
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
* Crear una función que sume dos números positivos de tamaño indefinido. Deberá recibir los números como strings y devolver el resultado como un string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
* Crear una función que devuelva el número de palabras que hay en un texto.
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
* Crear una función que ponga en mayúsculas la primer letra de cada palabra en un texto.
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
* Calcular la suma de los números recibidos en un string separado por comas (ej. ("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"))
Desafío de programación #34. Create a function that will return an array with words inside a text
* Crear una función que devuelva un array que contenga las palabras de un texto
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
* Crear una función que convierta un texto en formato CSV (comma separated values) a un array de dos dimensiones 
  (ej: "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000")
Desafío de programación #36. Create a function that converts a string to an array of characters
* Crear una función que convierta un string a un array de caracteres
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
* Crear una función que convierta un string a un array que contega el código ASCII de cada caracter
  (https://elcodigoascii.com.ar/)
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
* Crear una función que convierta un array que continene códigos ASCII en un string
Desafío de programación #39. Implement the Caesar cypher
* Implementar el Caeasar cypher (cifrado César) (https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar  / https://en.wikipedia.org/wiki/Caesar_cipher)
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
* Implementar el algoritmo bubble sort sobre un array de números (https://en.wikipedia.org/wiki/Bubble_sort)
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
* Crear una función que calcule la distancia entre dos puntos definida por sus coordenadas x, y.
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
* Crear una función que devuelva un valor booleano que indique si dos círculos definidos por coordenadas centrales y radio se cruzan
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
* Crear una función que reciba como argumentos un array de dos dimensiones y un número, y extraiga un array unidimensional con la columna especificada por el número
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
* Crear una función que convierta un string que contenga un número binario en un número
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
* Crear una función que calcule la suma de todos los números en un array dentado. (Array dentado o matriz dentada: array cuyos elementos son arrays de distinta longitud)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
* Encontrar el número máximo en un array de números o array dentado de números.
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
* Hacer un deep copy de un array dentado con números u otros arrays a un nuevo array (https://mauriciogc.medium.com/javascript-shallow-copy-and-deep-copy-757bd5fb0c76)
Desafío de programación #48. Create a function to return the longest word(s) in a string
* Crear una función que devuelva la/s palabra/s más larga/s en un string
Desafío de programación #49. Shuffle an array of strings
* Mezclar un array de strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
* Crear una función que reciba un número n como argumento y devuelva un array de n números al azar de 1 a n
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
* Encontrar la frecuencia en la que aparecen los caracteres de un string. Devolver el resultado en un array de objetos. Cada objeto tiene 2 campos: caracter y cantidad de apariciones
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
* Calcular Fibonacci(500) con alta precisión (todos los decimales)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
* Calcular el factorial de 70 con alta precisión (todos los decimales)
 */
