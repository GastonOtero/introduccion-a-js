$calcularTiempoTotal = document.querySelector("#calcular-tiempo-total");

$calcularTiempoTotal.onclick = function(evento) {
    const obtenerHoras = document.querySelectorAll(".horas");
    const obtenerMinutos = document.querySelectorAll(".minutos");
    const obtenerSegundos = document.querySelectorAll(".segundos");
    const horas = sumarValores(obtenerHoras);
    const minutos = sumarValores(obtenerMinutos);
    const segundos = sumarValores(obtenerSegundos);
    const duracionTotal = calculaDuracionTotal(horas, minutos, segundos);
    document.querySelector("#muestra-resultados").innerText = `La duración total de las clases es de ${duracionTotal[0]} horas, ${duracionTotal[1]} minutos y ${duracionTotal[2]} segundos`;
}

sumarValores = function(valoresASumar){
    let total = 0;
    for(let i = 0; i < valoresASumar.length; i++){
        total += Number(valoresASumar[i].value);
    }
    return total; 
}


calculaDuracionTotal = function(horas, minutos, segundos){

    let minutosFinales;
    let segundosFinales;

    segundosFinales = segundos % 60;
    const segundosAMinutos = (segundos - segundosFinales) / 60;
    minutos += segundosAMinutos;

    minutosFinales = minutos % 60;
    const minutosAHoras = (minutos - minutosFinales) / 60;
    horas += minutosAHoras;


    return [horas, minutosFinales, segundosFinales];
}