// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

const anioActual = Number(prompt('Por favor ingresá el año actual'));
const anioNacimiento = Number(prompt('Ingresá tu año de nacimiento'));

function calcularEdadUsuario (anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
};

console.log(`Tenés ${calcularEdadUsuario(anioActual, anioNacimiento)} años`);

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.


const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));

function calcularSalarioAnual(salarioMensual){
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
};

console.log(`Tu salario anual es ${calcularSalarioAnual(salarioMensual)}`);


const salarioAnual = Number(prompt('Cuál es tu salario anual?'));

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return (salarioAnual / cantidadMesesEnUnAnio).toFixed(2);
};
console.log(`Tu salario mensual es ${calcularSalarioMensual(salarioAnual)}`);

function calcularSalarioSemanal(salarioAnual){
    const cantidadSemanasEnUnAnio = 52;
    return (salarioAnual / cantidadSemanasEnUnAnio).toFixed(2);
};

console.log(`Tu salario semanal es ${calcularSalarioSemanal(salarioAnual)}`);

function calcularSalarioDiario(salarioAnual){
    const diasLaborablesEnUnAnio = 246;
    return (salarioAnual / diasLaborablesEnUnAnio).toFixed(2);
};

//fuente días laborables (2022): https://argentina.workingdays.org/dias_laborables_feriados_2022.htm

console.log(`Tu salario diario es ${calcularSalarioDiario(salarioAnual)}`);

function calcularSalarioPorHora(salarioAnual){
    const diasLaborablesEnUnAnio = 246;
    const horasLaborablesEnUnDia = 8;
    return (salarioAnual / diasLaborablesEnUnAnio / horasLaborablesEnUnDia).toFixed(2);
}

console.log(`Tu salario por hora es ${calcularSalarioPorHora(salarioAnual)}`);


/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/
