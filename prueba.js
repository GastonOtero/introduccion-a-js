const $formulario = document.querySelector("#formulario");

document.querySelector("#primer-boton").onclick = function(event) {
    
    const $numero = document.querySelector("#numero").value;
    const numero = Number($numero);

    if (validarNumero($numero)) {
        //document.querySelector("#numero").className ="error";
        manejarErrorCantidad(validarNumero($numero));

    } else {
        document.querySelector("#numero").className ="";
        mostrarBotonCalculo();
        crearCantidades(numero);
    };
    
    event.preventDefault();
}

document.querySelector("#calcular").onclick = function(event) {
    obtenerValoresCantidades();    
}

document.querySelector("#reiniciar").onclick = function(event) {
    reiniciar();
}


function crearCantidades(numero) {
    for (let i = 0; i < numero; i++) {
        crearCantidad();
    }
}

function crearCantidad() {
    const $div = document.createElement("div");

    const $label = document.createElement("label");
    $label.innerText = "Ingresa la cantidad";

    const $input = document.createElement("input");
    $input.type = "number";
    $input.name = "cantidad";
    $input.className = "cantidad";

    $div.appendChild($label);
    $div.appendChild($input);

    document.querySelector("#ancla").appendChild($div);
}

function obtenerValoresCantidades() {
    manejarErrores();
    let cantidades = [];
    const $cantidades = document.querySelectorAll("#ancla input");
    
    for (let i = 0; i < $cantidades.length; i++) {
        cantidades.push(Number($cantidades[i].value));
    }
    return cantidades;
}


function mostrarBotonCalculo() {
    document.querySelector("#calcular").className = "";
}


function ocultarBotonCalculo() {
    document.querySelector("#calcular").className = "oculto";
}


function borrarCantidades() {
    const $cantidades = document.querySelectorAll("#ancla div");

    for (let i = 0; i < $cantidades.length; i++) {
        $cantidades[i].remove();
    }
}


function borrarResultados() {
    const $resultados = document.querySelectorAll("#ancla p");

    for (let i = 0; i < $resultados.length; i++) {
        $resultados[i].remove();
    }
}


function reiniciar() {
    document.querySelector("#numero").value = "";
    borrarCantidades();
    borrarResultados();
    ocultarBotonCalculo();
}

function manejarErrorCantidad(error) {
    document.querySelector("#numero").className ="error";
    
    const $mensajeError = document.createElement("p");
    $mensajeError.innerText = error;

    document.querySelector("#ancla").appendChild($mensajeError);
}


function manejarErrores() {
    const $cantidades = document.querySelectorAll("#ancla input");

    for (let i = 0; i < $cantidades.length; i++) {
        if (validarNumero($cantidades[i].value)) {
            $cantidades[i].className = "error";
            
            const $mensajeError = document.createElement("p");
            $mensajeError.innerText = validarNumero($cantidades[i].value);

            document.querySelector("#ancla").appendChild($mensajeError);
            
        }
    }
}