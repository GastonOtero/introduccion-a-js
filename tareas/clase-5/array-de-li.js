const $calcularResultados = document.querySelector("#calcular");
const $listaDeNumeros = document.querySelectorAll(".numero");
const numeros = [];

$calcularResultados.onclick = function(evento) {
    for (let i = 0; i < $listaDeNumeros.length; i++){
        numeros.push($listaDeNumeros[i].innerText);
    }
    document.querySelector("#promedio").innerText = `El promedio es ${calcularPromedio(numeros)}`;
    document.querySelector("#numero-menor").innerText = `El número más pequeño es ${calcularNumeroMenor(numeros)}`;
    document.querySelector("#numero-mayor").innerText = `El número más grande es ${calcularNumeroMayor(numeros)}`;
    document.querySelector("#numero-mas-frecuente").innerText = `El número más frecuente es ${calcularNumeroMasFrecuente(numeros)}`;

}

function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += Number(numeros[i]);
    }
    return suma / numeros.length;
}

function calcularNumeroMenor(numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

function calcularNumeroMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > mayor){
            mayor = numeros[i]
        }
    }
    return mayor;
}


function calcularNumeroMasFrecuente(numeros) {
    let mayorFrecuencia = 0;
    let elementoMasFrecuente;

    for (let i = 0; i < numeros.length; i++){
        let cuenta = 0;
        for (let j = 0; j < numeros.length; j++){
            if (numeros[i] === numeros[j]){
                cuenta ++;
            }
        }
        if (cuenta > mayorFrecuencia) {
            mayorFrecuencia = cuenta;
            elementoMasFrecuente = numeros[i];
        }
    }
    return elementoMasFrecuente;
}