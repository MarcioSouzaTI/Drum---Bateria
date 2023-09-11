/*function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();        
    }
    else {
        alert('Elemento não encontrado');
    }
}*/

let audioTocando = null;

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    if (audioTocando === elemento) {
      elemento.currentTime = 0;
      elemento.play();
    } else {
      if (audioTocando) {
        audioTocando.pause();
        audioTocando.currentTime = 0;
      }
      elemento.play();
      audioTocando = elemento;
    }

    elemento.addEventListener('ended', () => {
      audioTocando = null;
    });
  } else {
    alert('Elemento não encontrado');
  }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador <listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio); 
    }
    
    tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
        
        tecla.classList.add('ativa');
    }    
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
