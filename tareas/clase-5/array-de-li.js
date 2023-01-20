const $calcularResultados = document.querySelector("#calcular");
const $listaDeNumeros = document.querySelectorAll(".numero");
const arrayDeNumeros = [];

$calcularResultados.onclick = function(evento) {
    for (let i = 0; i < $listaDeNumeros.length; i++){
        arrayDeNumeros.push($listaDeNumeros[i].innerText);
    }
    document.querySelector("#promedio").innerText = `El promedio es ${calcularPromedio(arrayDeNumeros)}`;
    document.querySelector("#numero-menor").innerText = `El número más pequeño es ${calcularNumeroMenor(arrayDeNumeros)}`;
    document.querySelector("#numero-mayor").innerText = `El número más grande es ${calcularNumeroMayor(arrayDeNumeros)}`;
    document.querySelector("#numero-mas-frecuente").innerText = `El número más frecuente es ${calcularNumeroMasFrecuente(arrayDeNumeros)}`;

}

function calcularPromedio(arrayDeNumeros) {
    let suma = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++){
        suma += Number(arrayDeNumeros[i]);
    }
    return suma / arrayDeNumeros.length;
}

function calcularNumeroMenor(arrayDeNumeros) {
    let menor = arrayDeNumeros[0];
    for (let i = 1; i < arrayDeNumeros.length; i++){
        if (arrayDeNumeros[i] < menor) {
            menor = arrayDeNumeros[i];
        }
    }
    return menor;
}

function calcularNumeroMayor(arrayDeNumeros) {
    let mayor = arrayDeNumeros[0];
    for (let i = 1; i < arrayDeNumeros.length; i++){
        if (arrayDeNumeros[i] > mayor){
            mayor = arrayDeNumeros[i]
        }
    }
    return mayor;
}

//es horrible y la tuve que googlear, pero quería resolverlo sin métodos
function calcularNumeroMasFrecuente(arrayDeNumeros) {
    let mayorFrecuencia = 0;
    let elementoMasFrecuente;

    for (let i = 0; i < arrayDeNumeros.length; i++){
        let cuenta = 0;
        for (let j = 0; j < arrayDeNumeros.length; j++){
            if (arrayDeNumeros[i] === arrayDeNumeros[j]){
                cuenta ++;
            }
        }
        if (cuenta > mayorFrecuencia) {
            mayorFrecuencia = cuenta;
            elementoMasFrecuente = arrayDeNumeros[i];
        }
    }
    return elementoMasFrecuente;
}