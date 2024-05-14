// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var linksFase = document.querySelectorAll('.linkFase');

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
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Interação das fases
document.getElementById("playButton").addEventListener("click", function() {
  document.querySelector(".button-container").style.display = "none";
  document.getElementById("fasesContainer").style.display = "block";
  document.getElementById("imginicial").src="img/fases.jpg";
  document.getElementById("astrounauta").remove();
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