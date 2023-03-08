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