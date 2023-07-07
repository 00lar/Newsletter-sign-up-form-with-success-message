const BtnSubmit = document.querySelector("#BtnSubmit");

const parte1 = document.querySelector("#Parte1");
const parte2 = document.querySelector("#Parte2");
console.log("hola")

BtnSubmit.addEventListener("click",ShowPart3)

function ShowPart3(){
    console.log("hola")
    parte1.classList.add("hiddens")
}