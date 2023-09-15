let teclasPressionadas = {};

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.currentTime = 0; // Reinicia o áudio
    elemento.play();
  } else {
    alert('Elemento não encontrado');
  }
}

// Adicione ouvintes de eventos de clique aos botões
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}

// Mapeamento de teclas para botões
const teclaParaBotao = {
  "KeyI": "#som_tecla_tim",
  "KeyY": "#som_tecla_pom",
  "KeyU": "#som_tecla_psh",
  "KeyH": "#som_tecla_puff",
  "KeyJ": "#som_tecla_clap",
  "KeyK": "#som_tecla_tic",
  "KeyA": "#som_tecla_tom",
  "KeyS": "#som_tecla_splash",
  "KeyD": "#som_tecla_toim",
};

// Adicione um ouvinte de evento de teclado ao documento
document.addEventListener("keydown", function(event) {
  const teclaPressionada = event.code;
  const seletorAudio = teclaParaBotao[teclaPressionada];

  if (seletorAudio && !teclasPressionadas[teclaPressionada]) {
    tocaSom(seletorAudio);
    teclasPressionadas[teclaPressionada] = true;
  }
});

// Adicione um ouvinte de evento para quando a tecla é liberada
document.addEventListener("keyup", function(event) {
  const teclaPressionada = event.code;
  if (teclasPressionadas[teclaPressionada]) {
    teclasPressionadas[teclaPressionada] = false;
  }
});


