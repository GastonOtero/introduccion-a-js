/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $obtenerCantidadIntegrantes = document.querySelector("#integrantes-cantidad-obtener");

$obtenerCantidadIntegrantes.onclick = function(evento){
    const cantidadIntegrantes = document.querySelector("#integrantes-cantidad").value;
    
    borrarIntegrantes();
    ocultarCalculos();
    crearIntegrantes(cantidadIntegrantes);
    mostrarBotones();
    
    event.preventDefault();
}

const $calcularCantidadIntegrantes = document.querySelector("#integrantes-edades-calcular");

$calcularCantidadIntegrantes.onclick = function(evento) {
    const numeros = obtenerEdadesIntegrantes()
    document.querySelector("#integrantes-edades-mayor").innerText = calcularMayor(numeros);
    document.querySelector("#integrantes-edades-menor").innerText = calcularMenor(numeros);
    document.querySelector("#integrantes-edades-promedio").innerText = calcularPromedio(numeros);
    mostrarCalculos();
}

const $borrarCampos = document.querySelector("#integrantes-edades-borrar");

$borrarCampos.onclick = function(evento) {
    document.querySelector("#integrantes-cantidad").value = "";
    ocultarCalculos();
    ocultarBotones();
    borrarIntegrantes();
} 

function crearIntegrantes(cantidad) {
    for (let i = 0; i < cantidad; i++){
        crearIntegrante()
    }
}

function crearIntegrante() {
    const $div = document.createElement("div");
    $div.className ="integrante";

    const $label = document.createElement("label");
    $label.innerText = "Edad del integrante: "
    
    const $input = document.createElement("input");
    $input.type = "Number"
    $input.className ="edad-integrante"

    $div.appendChild($label);
    $div.appendChild($input);

    document.querySelector("#integrantes-edades").appendChild($div);
}

function obtenerEdadesIntegrantes() {
    let edadesIntegrantes = [];
    const $edadesIntegrantes = document.querySelectorAll(".edad-integrante");
    for (let i = 0; i < $edadesIntegrantes.length; i++) {
        edadesIntegrantes.push(Number($edadesIntegrantes[i].value));
    }
    return edadesIntegrantes;
}

function borrarIntegrantes() {
    const $integrantes = document.querySelectorAll(".integrante")
    for (let i = 0; i < $integrantes.length; i++){
        $integrantes[i].remove();
    }
}

function ocultarBotones() {
    $calcularCantidadIntegrantes.className = "oculto";
    $borrarCampos.className = "oculto";
}

function mostrarBotones() {
    $calcularCantidadIntegrantes.className = "";
    $borrarCampos.className = "";
}

function mostrarCalculos() {
    document.querySelector("#integrantes-edades-calculos").className = "";
}

function ocultarCalculos() {
    document.querySelector("#integrantes-edades-calculos").className ="oculto";
}

// Funciones de cálculo 

function calcularPromedio(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    return parseInt(total / numeros.length);
}

function calcularMayor(numeros) {
    let mayorTemporal = numeros[0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > mayorTemporal){
            mayorTemporal = numeros[i];
        }
    }
    return mayorTemporal;
}

function calcularMenor(numeros) {
    let menorTemporal = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorTemporal) {
            menorTemporal = numeros[i];
        }
    }
    return menorTemporal;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
