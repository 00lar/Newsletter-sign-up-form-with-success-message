let BtnSubmit = document.querySelector("#BtnSubmit");
let BtnDismiss = document.querySelector("#BtnDismiss");

const Parte1 = document.querySelector("#Parte1");
const Parte2 = document.querySelector("#Parte2");
const correo = document.querySelector("#emailBox");
const ErrorAlert = document.querySelector("#ErrorAlert");
const success = document.querySelector("#success")
let corrspan = document.querySelector("#corrspan");

BtnDismiss.addEventListener("click",Cerrar);
function Cerrar(){
    location.reload();
}

BtnSubmit.addEventListener("click",ShowPart3)

function ShowPart3(event){
    event.preventDefault()  
    CorreoProp = correo.value;
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (CorreoProp.length > 8) {
        if (expresionRegular.test(CorreoProp)){
            Parte1.classList.add("hiddens");
            Parte2.classList.add("hiddens")
            success.classList.remove("hiddens")
            corrspan.innerHTML = CorreoProp ;
        } 
    }
    else {
        ErrorAlert.classList.remove("hiddens") 
    }


    
}

