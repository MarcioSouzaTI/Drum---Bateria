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
  }
}

// Mapeamento de teclas para botões
const teclaParaBotao = {
  "KeyI": "#som_tecla_tim", // Tecla "i" para o botão .tecla_tim
  "KeyY": "#som_tecla_pom", // Tecla "y" para o botão .tecla_pom
  "KeyU": "#som_tecla_psh", // Tecla "u" para o botão .tecla_psh
  "KeyH": "#som_tecla_puff", // Tecla "h" para o botão .tecla_puff 
  "KeyJ": "#som_tecla_clap", // Tecla "j" para o botão .tecla_clap
  "KeyK": "#som_tecla_tic", // Tecla "k" para o botão .tecla_tic
  "KeyA": "#som_tecla_tom", // Tecla "a" para o botão .tecla_tom
  "KeyS": "#som_tecla_splash", // Tecla "s" para o botão .tecla_splash
  "KeyD": "#som_tecla_toim", // Tecla "d" para o botão .tecla_toim
  // Adicione mais mapeamentos conforme necessário
};

// Adicione um ouvinte de evento de teclado ao documento
document.addEventListener("keydown", function(event) {
  const teclaPressionada = event.code;
  const seletorAudio = teclaParaBotao[teclaPressionada];
  if (seletorAudio) {
    tocaSom(`#${seletorAudio.substring(1)}`); // Remove o ponto do seletor
  }
});
