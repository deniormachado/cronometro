let segundos = 0;
let intervalo;
let pausado = true;

document.getElementById('zerar').addEventListener('click', zerar);
document.getElementById('pausar').addEventListener('click', pausar);

function cronometro() {
 segundos++;
 let horas = Math.floor(segundos / 3600);
 let minutos = Math.floor((segundos % 3600) / 60);
 let segundosRestantes = segundos % 60;
 
 let tempo = `${padZero(horas)}:${padZero(minutos)}:${padZero(segundosRestantes)}`;
 document.getElementById('tempo').innerText = tempo;
}

function padZero(num) {
 return (num < 10 ? '0' : '') + num;
}

function zerar() {
 segundos = 0;
 document.getElementById('tempo').innerText = '00:00:00';
 pausado = true;
 clearInterval(intervalo);
}

function pausar() {
 if (pausado) {
 intervalo = setInterval(cronometro, 1000);
 pausado = false;
 document.getElementById('pausar').innerText = 'Pausar';
 } else {
 clearInterval(intervalo);
 pausado = true;
 document.getElementById('pausar').innerText = 'Continuar';
 }
}

// Inicia o cronômetro
document.getElementById('pausar').click();
