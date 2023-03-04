



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