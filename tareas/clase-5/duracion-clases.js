$calcularTiempoTotal = document.querySelector("#calcular-tiempo-total");

$calcularTiempoTotal.onclick = function(evento) {
    const obtenerHoras = document.querySelectorAll(".horas");
    const obtenerMinutos = document.querySelectorAll(".minutos");
    const obtenerSegundos = document.querySelectorAll(".segundos");
    console.log(obtenerHoras);
    console.log(obtenerMinutos);
    console.log(obtenerSegundos);
    const horas = calculaTotalHoras(obtenerHoras);
    const minutos = calculaTotalMinutos(obtenerMinutos);
    const segundos = calculaTotalSegundos(obtenerSegundos);
    const duracionTotal = calculaDuracionTotal(horas, minutos, segundos);
    document.querySelector("#muestra-resultados").innerText = `La duración total de las clases es de ${duracionTotal[0]} horas, ${duracionTotal[1]} minutos y ${duracionTotal[2]} segundos`;
}

calculaTotalHoras = function(arrayHoras) {
    let horasTotales = 0;
    for (let i = 0; i < arrayHoras.length; i++){
        horasTotales += Number(arrayHoras[i].value);
    }
    return horasTotales;
}

calculaTotalMinutos = function(arrayMinutos) {
    let minutosTotales = 0;
    for (let i = 0;  i < arrayMinutos.length; i++){
        minutosTotales += Number(arrayMinutos[i].value);
    }
    return minutosTotales;
}

calculaTotalSegundos = function(arraySegundos) {
    let segundosTotales = 0; 
    for (let i = 0; i < arraySegundos.length; i++){
        segundosTotales += Number(arraySegundos[i].value);
    }
    return segundosTotales;
}

calculaDuracionTotal = function(horas, minutos, segundos){

    let minutosFinales;
    let segundosFinales;

    if (segundos > 60){
        segundosFinales = segundos % 60;
        const segundosAMinutos = (segundos - segundosFinales) / 60;
        minutos += segundosAMinutos;
    } else {
        segundosFinales = segundos;
    }

    if (minutos > 60){
        minutosFinales = minutos % 60;
        const minutosAHoras = (minutos - minutosFinales) / 60;
        horas += minutosAHoras;
    } else {
        minutosFinales = minutos;
    }

    return [horas, minutosFinales, segundosFinales];
}