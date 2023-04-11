function validarNumero(numero) {
    if (numero === "") {
        return "Este campo no puede estar vacío";;
    } else if (numero < 1) {
        return "El número en este campo no puede ser menor a 1";
    } else if (!Number.isInteger(Number(numero))){
        return "El número en este campo no puede contener decimales";
    } else {
        return "";
    }
}

function validarEdadesIntegrantes() {
    let erroresIntegrantes = [];
    const $edadesIntegrantes = document.querySelectorAll(".edad-integrante");

    for (let i = 0; i < $edadesIntegrantes.length; i++) {
            erroresIntegrantes.push(validarNumero($edadesIntegrantes[i].value));
        }
    
    if (erroresIntegrantes.every((x) => x == "")) {
        return false;
    } else {
        return erroresIntegrantes;
    }    
}

function manejarErrorCantidad(error) {
    document.querySelector("#integrantes-cantidad").className ="error";

    const $error = document.createElement("p");
    $error.innerText = error;

    document.querySelector("#errores").appendChild($error);
}

function manejarErrores(errores) {

    const $edadesIntegrantes = document.querySelectorAll(".edad-integrante");

    for (let i = 0; i < errores.length; i++) {
        if (errores[i]) {
            const $error = document.createElement("p");
            $error.innerText = errores[i];

            document.querySelector("#errores").appendChild($error);

            $edadesIntegrantes[i].className = "error";
        }
    }
    
}


function borrarErrores() {
    const $errores = document.querySelectorAll("#errores p");
    
    for (let i = 0; i < $errores.length; i++) {
        $errores[i].remove();
    }
}