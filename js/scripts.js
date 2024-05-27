
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
//Interação das fases
var linksFase = document.querySelectorAll('.linkFase');

document.getElementById("playButton").addEventListener("click", function() {
  document.querySelector(".button-container").style.display = "none";
  document.getElementById("fasesContainer").style.display = "block";
  document.getElementById("imginicial").src="img/backgroundfases.jpg";
  document.getElementById("pluto").src="img/pluto.png";
  document.getElementById("mercurio").src="img/mercurio.png";
  document.getElementById("marte").src="img/marte.png";
  document.getElementById("netuno").src="img/netuno.png";
  document.getElementById("astrounauta").remove();
  document.getElementById("titulo").remove();
});

linksFase.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();
        // Obtém o ID da fase a partir do atributo 'data-fase'
        var faseId = this.getAttribute('data-fase');
        // Esconde todas as fases
        var fases = document.querySelectorAll('.fase');
        fases.forEach(function(fase) {
            fase.style.display = 'none';
        });
        // Mostra apenas a fase correspondente ao link clicado
        document.getElementById(faseId).style.display = 'block';
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//   var modal = document.getElementById("myModal");
//   var btn = document.getElementById("openModalLink");
//   var span = document.getElementsByClassName("close");
//   var linksFase = document.querySelectorAll('.linkFase');

//   // Abrir o modal quando o botão é clicado
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }

//   // Fechar o modal quando o usuário clica no 'x'
//   span.onclick = function() {
//     modal.style.display = "none";
//   }

//   // Fechar o modal se o usuário clicar fora dele
//   window.onclick = function(event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   }

//   // Interação das fases
//   document.getElementById("playButton").addEventListener("click", function() {
//     document.querySelector(".button-container").style.display = "none";
//     document.getElementById("fasesContainer").style.display = "block";
//     document.getElementById("imginicial").src = "img/backgroundfases.jpg";
//     document.getElementById("pluto").src = "img/pluto.png";
//     document.getElementById("mercurio").src = "img/mercurio.png";
//     document.getElementById("marte").src = "img/marte.png";
//     document.getElementById("netuno").src = "img/netuno.png";
//     document.getElementById("astrounauta").remove();
//     document.getElementById("titulo").remove();
//   });

//   // Mostrar a fase correspondente quando um link de fase é clicado
//   linksFase.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       const faseId = this.getAttribute('data-fase');
//       const fases = document.querySelectorAll('.fase');
//       fases.forEach(function(fase) {
//         fase.style.display = 'none';
//       });
//       document.getElementById(faseId).style.display = 'block';
//     });
//   });
// });.

//fase 1 modal

var modal1 = document.getElementById("fase-1");
var btn1 = document.getElementById("linkfase1");
var span1 = document.getElementsByClassName("close")[0];

btn1.onclick = function(){
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

//fase 2 modal

var modal2 = document.getElementById("fase-2");
var btn2 = document.getElementById("linkfase2");
var span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function(){
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

//fase 3 modal

var modal3 = document.getElementById("fase-3");
var btn3 = document.getElementById("linkfase3");
var span3 = document.getElementsByClassName("close")[2];

btn3.onclick = function(){
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

//fase 4 modal

var modal4 = document.getElementById("fase-4");
var btn4 = document.getElementById("linkfase4");
var span4 = document.getElementsByClassName("close")[3];

btn4.onclick = function(){
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

//Logica do quiz

const question = document.getElementById("perguntas");
const answers = document.getElementById("respostas");
const qtd = document.getElementById("qtd");
const txtFinish = document.querySelector(".quiz-control span");
const content = document.querySelector(".quiz-conteiner");
const contentFinish = document.querySelector(".quiz-control");
const btnRestart = document.querySelector(".quiz-control button");

const questions = [
  {
    question: "Se a proposição “Se Lucca é responsável, então Sarita dirige bem” é falsa, é possível concluir que",
    answers: [
      { option: "Lucca é responsável e Sarita não dirige bem.", correct: true },
      { option: "Lucca não é responsável e Sarita dirige bem.", correct: false },
      { option: "Lucca dirige bem e Sarita não é responsável.", correct: false },
    ],
  },
  {
    question: "Considere verdadeiras as seguintes sentenças simples: p = Maria recebeu a correspondência na sexta-feira. q = Maria protocolou a correspondência na sexta-feira. Assinale a alternativa que apresenta uma sentença composta falsa para (¬p∧q).",
    answers: [
      { option: "Maria recebeu ou protocolou a correspondência na sexta-feira.", correct: false },
      { option: "Maria não recebeu, mas protocolou a correspondência na sexta-feira.", correct: true },
      { option: "Maria recebeu e protocolou a correspondência na sexta-feira.", correct: false },
    ],
  },
];

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(event) {
  if (event.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  txtFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  qtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll("#respostas").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();