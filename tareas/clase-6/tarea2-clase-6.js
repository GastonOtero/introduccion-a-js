const $agregarIntegrante = document.querySelector("#agregar-integrante");
const $quitarIntegrante = document.querySelector("#quitar-integrante");



$agregarIntegrante.onclick = function (evento) {
    const $integrantes = document.querySelector("#integrantes");
    
    const $div = document.createElement("div");
    $div.className ="integrante";

    const $label = document.createElement("label");
    $label.innerText = "Ingresá el salario anual del integrante";

    const $input = document.createElement("input");
    $input.className ="integrante-salario";

    $div.appendChild($label);
    $div.appendChild($input);

    $integrantes.appendChild($div);

    event.preventDefault()
}


$quitarIntegrante.onclick = function (evento) {
    let $salariosIntegrantes = document.querySelectorAll(".integrante");
    $salariosIntegrantes[$salariosIntegrantes.length - 1].remove();
    event.preventDefault();
}


function obtenerSalarios() {
    const $salariosIntegrantes = document.querySelectorAll(".integrante-salario");
    let salariosIntegrantes = [];

    for (let i = 0; i < $salariosIntegrantes.length; i++){
        if ($salariosIntegrantes[i].value !== "") {
            salariosIntegrantes.push(Number($salariosIntegrantes[i].value));
        }
    }
    
    event.preventDefault();
    
    return salariosIntegrantes;
}


function mostrarResultados() {
    document.querySelector("#integrantes-salarios-calculos").className="";
}


function ocultarResultados() {
    document.querySelector("#integrantes-salarios-calculos").className="oculto";
}



// Funciones de cálculo 

function convertirAMensual(numeros) {
    const MESES_DEL_ANIO = 12;
    let salariosMensuales = [];
    for (let i = 0; i < numeros.length; i++){
        salariosMensuales.push(numeros[i] / MESES_DEL_ANIO)
    }
    return salariosMensuales;
}

function calcularPromedio(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    return (total / numeros.length).toFixed(2);
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