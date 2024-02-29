const date = new Date();
const today = date.getDate();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);
const yesterday = new Date();
yesterday.setDate(yesterday.getDate()-1);
const mesIndex = date.getMonth();
const nomesDosMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];
const nomeDoMes = nomesDosMeses[mesIndex];
var numeroAleatorio = Math.floor(Math.random() * 6);
const frases = [
  "Frase motivacional 1", "Frase Motivacional 2", "Frase motivacional 3",
  "Frase motivacional 4", "Frase motivacional 5", "Frase motivacional 6"
];



window.onload = function(){
  $("#fraseDia").text(frases[numeroAleatorio]);
};

function getUser(){
    var localuser = document.getElementById("username").value;
    if (localuser != ""){
        sessionStorage.setItem("user", localuser);
        window.location='index.html';
    }
    else{
        alert("PREENCHA OS CAMPOS!");
    }
}

// ADICIONA O MÊS E OS DIAS
document.getElementById('mes').innerHTML = nomeDoMes;
document.getElementById('ontem').innerHTML = yesterday.getDate();
document.getElementById('hoje').innerHTML = today;
document.getElementById('amanha').innerHTML = tomorrow.getDate();

var acc = document.getElementsByClassName("subtexto");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var painel = this.nextElementSibling;
    if (painel.style.display === "block") {
      painel.style.display = "none";
    } else {
      painel.style.display = "block";
    }
  });
}
