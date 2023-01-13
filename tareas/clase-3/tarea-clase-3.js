// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const miNombre = 'Gastón';
const nombrePadre = 'Adolfo';

const nombreUsuario = prompt('Cómo te llamás?');

if (nombreUsuario === miNombre) {
    alert(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`);
} else if (nombreUsuario === nombrePadre) {
    alert(`Hola ${nombreUsuario}, te llamás igual que mi papá`)
} else {
    alert(`Hola ${nombreUsuario}`);
};


const edadUsuario = Number(prompt('Cuantos años tenés?'));
const miEdad = 41;

if (edadUsuario === miEdad) {
    alert('Tenemos la misma edad');
} else if (edadUsuario < miEdad) {
    alert('Sos más joven que yo');
} else {
    alert('Tenés más años que yo')
};


const tieneDocumento = prompt('Hola, tenés documento?');

if (tieneDocumento.toLowerCase() === 'si') {
    const edadUsuarioBar = Number(prompt('Cuántos años tenés?'));
    if (edadUsuarioBar >= 18) {
        alert('Sos mayor de edad, podés entrar al bar');
    } else {
        alert('Sos menor de edad, no podés entrar al bar');
    }
} else if (tieneDocumento.toLowerCase() === 'no'){
    alert ('Sin documentos no podés entrar al bar');
} else {
    alert('No entendí la respuesta');
}
