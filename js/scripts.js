
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
  }else{
    finish();
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
  if(questionsCorrect == 2){
    let img = document.getElementById("img1")
    img.src = "./img/tudook.jpg"
  }else{
    let img = document.getElementById("img1")
    img.src = "./img/explosao.jpeg"
  }
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

//fase 2

const question2 = document.getElementById("perguntas2");
const answers2 = document.getElementById("respostas2");
const qtd2 = document.getElementById("qtd2");
const txtFinish2 = document.querySelector(".control2 span");
const content2 = document.querySelector(".conteiner2");
const contentFinish2 = document.querySelector(".control2");
const btnRestart2 = document.querySelector(".control2 button");

const questions2 = [
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

let currentIndex2 = 0;
let questionsCorrect2 = 0; 

btnRestart2.onclick = () => {
  content2.style.display = "flex";
  contentFinish2.style.display = "none";

  currentIndex2 = 0;
  questionsCorrect2 = 0;
  loadQuestion2();
};

function nextQuestion2(event) {
  if (event.target.getAttribute("data-correct") === "true") {
    questionsCorrect2++;
  }else{
    finish2();
  }

  if (currentIndex2 < questions2.length - 1) {
    currentIndex2++;
    loadQuestion2();
  } else {
    finish2();
  }
}

function finish2() {
  txtFinish2.innerHTML = `você acertou ${questionsCorrect2} de ${questions2.length}`;
  content2.style.display = "none";
  contentFinish2.style.display = "flex";
  if(questionsCorrect2 == 2){
    let img = document.getElementById("img2")
    img.src = "./img/tudook.jpg"
  }else{
    let img = document.getElementById("img2")
    img.src = "./img/explosao.jpeg"
  }
}

function loadQuestion2() {
  qtd2.innerHTML = `${currentIndex2 + 1}/${questions2.length}`;
  const item2 = questions2[currentIndex2];
  answers2.innerHTML = "";
  question2.innerHTML = item2.question;

  item2.answers.forEach((answer) => {
    const div2 = document.createElement("div");

    div2.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers2.appendChild(div2);
  });

  document.querySelectorAll("#respostas2").forEach((item2) => {
    item2.addEventListener("click", nextQuestion2);
  });
}

loadQuestion2();

//fase 3

const question3 = document.getElementById("perguntas3");
const answers3 = document.getElementById("respostas3");
const qtd3 = document.getElementById("qtd3");
const txtFinish3 = document.querySelector(".control3 span");
const content3 = document.querySelector(".conteiner3");
const contentFinish3 = document.querySelector(".control3");
const btnRestart3 = document.querySelector(".control3 button");

const questions3 = [
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

let currentIndex3 = 0;
let questionsCorrect3 = 0; 

btnRestart3.onclick = () => {
  content3.style.display = "flex";
  contentFinish3.style.display = "none";

  currentIndex3 = 0;
  questionsCorrect3 = 0;
  loadQuestion3();
};

function nextQuestion3(event) {
  if (event.target.getAttribute("data-correct") === "true") {
    questionsCorrect3++;
  }else{
    finish3();
  }

  if (currentIndex3 < questions3.length - 1) {
    currentIndex3++;
    loadQuestion3();
  } else {
    finish3();
  }
}

function finish3() {
  txtFinish3.innerHTML = `você acertou ${questionsCorrect3} de ${questions3.length}`;
  content3.style.display = "none";
  contentFinish3.style.display = "flex";
  if(questionsCorrect3 == 2){
    let img = document.getElementById("img3")
    img.src = "./img/tudook.jpg"
  }else{
    let img = document.getElementById("img3")
    img.src = "./img/explosao.jpeg"
  }
}

function loadQuestion3() {
  qtd3.innerHTML = `${currentIndex3 + 1}/${questions3.length}`;
  const item3 = questions3[currentIndex3];
  answers3.innerHTML = "";
  question3.innerHTML = item3.question;

  item3.answers.forEach((answer) => {
    const div3 = document.createElement("div");

    div3.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers3.appendChild(div3);
  });

  document.querySelectorAll("#respostas3").forEach((item3) => {
    item3.addEventListener("click", nextQuestion3);
  });
}

loadQuestion3();

//fase 4

const question4 = document.getElementById("perguntas4");
const answers4 = document.getElementById("respostas4");
const qtd4 = document.getElementById("qtd4");
const txtFinish4 = document.querySelector(".control4 span");
const content4 = document.querySelector(".conteiner4");
const contentFinish4 = document.querySelector(".control4");
const btnRestart4 = document.querySelector(".control4 button");

const questions4 = [
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

let currentIndex4 = 0;
let questionsCorrect4 = 0; 

btnRestart4.onclick = () => {
  content4.style.display = "flex";
  contentFinish4.style.display = "none";

  currentIndex4 = 0;
  questionsCorrect4 = 0;
  loadQuestion4();
};

function nextQuestion4(event) {
  if (event.target.getAttribute("data-correct") === "true") {
    questionsCorrect4++;
  }else{
    finish4();
  }

  if (currentIndex4 < questions4.length - 1) {
    currentIndex4++;
    loadQuestion4();
  } else {
    finish4();
  }
}

function finish4() {
  txtFinish4.innerHTML = `você acertou ${questionsCorrect4} de ${questions4.length}`;
  content4.style.display = "none";
  contentFinish4.style.display = "flex";
  if(questionsCorrect4 == 2){
    let img = document.getElementById("img4")
    img.src = "./img/tudook.jpg"
  }else{
    let img = document.getElementById("img4")
    img.src = "./img/explosao.jpeg"
  }
}

function loadQuestion4() {
  qtd4.innerHTML = `${currentIndex4 + 1}/${questions4.length}`;
  const item4 = questions4[currentIndex4];
  answers4.innerHTML = "";
  question4.innerHTML = item4.question;

  item4.answers.forEach((answer) => {
    const div4 = document.createElement("div");

    div4.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers4.appendChild(div4);
  });

  document.querySelectorAll("#respostas4").forEach((item4) => {
    item4.addEventListener("click", nextQuestion4);
  });
}

loadQuestion4();