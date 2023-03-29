function validarCantidadIntegrantes(integrantes) {
    if (integrantes < 1) {
        document.querySelector("#integrantes-cantidad").className = "error";
        return "La cantidad de integrantes no puede ser menor a 1";
    } else if (integrantes === "") {
        document.querySelector("#integrantes-cantidad").className = "error";
        return "El campo integrantes no puede estar vacío";
    }
}