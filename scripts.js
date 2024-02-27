const date = new Date();
const today = date.getDate();

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

function fazerReserva(event) {
  var button = event.target;
  var idLista = button.id.replace('btnReservar-', ''); // Extrai a parte do ID após o traço
  var ul = document.getElementById('alunos-' + idLista);

  var li = document.createElement('li');
  li.textContent = 'Novo Aluno';
  ul.appendChild(li);
}

document.getElementById("btnReservar").addEventListener("click", fazerReserva);

var dayContainer = document.getElementById("days");
for (let i = today-1;i<=today+1;i++){
    var singleDay = document.createElement("div");
    singleDay.className = "day";
    singleDay.textContent = i;

    if (i === today){
        alert(today);
        singleDay.className = "today";
        singleDay.textContent = i;
    }

    dayContainer.appendChild(singleDay);
}

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