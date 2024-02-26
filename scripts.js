const date = new Date();
const today = date.getDate();

function getUser(){
    var username = "";
    var localuser = document.getElementById("username").value;
    if (localuser != ""){
        sessionStorage.setItem("user", localuser);
        window.location='index.html';
    }
    else{
        alert("PREENCHA OS CAMPOS!");
    }
}

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