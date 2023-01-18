const $cargarDatos= document.querySelector("#cargar-datos");

$cargarDatos.onclick = function(evento){
const primerNombre= document.querySelector("#primer-nombre").value;
const segundoNombre = document.querySelector("#segundo-nombre").value;
const apellido= document.querySelector("#apellido").value;
const edad= document.querySelector("#edad").value;
document.querySelector("#bienvenido").innerText = "Bienvenido, " + primerNombre + "!";
document.querySelector("#muestra-datos-usuario").innerText = primerNombre + ' ' + segundoNombre + ' ' + apellido + ', edad: ' + edad + ' años.';
}