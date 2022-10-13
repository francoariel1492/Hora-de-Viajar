import { usuario } from "./classes.js"

let whv = [];




const nombre = document.querySelector("#nombre")
const edad = document.querySelector("#edad")
const nacionalidad = document.querySelector("#nacionalidad")
let btnInicio = document.querySelector("#btnInicio")

//------Paises del dom
const whvDom = document.querySelector("#whvDom")


let user


btnInicio.addEventListener("click", deleteHTML)
btnInicio.addEventListener("click", fetchDataNz)
btnInicio.addEventListener("click", fetchDataAus)
btnInicio.addEventListener("click", fetchDataAle)
btnInicio.addEventListener("click", fetchDataCan)
btnInicio.addEventListener("click", fetchDataHol)
btnInicio.addEventListener("click", fetchDataIrl)

function deleteHTML(){
    whvDom.innerHTML = "";
}

function checkUsuario(){
    nombre.value && edad.value && nacionalidad.value 
    ? user = new usuario(nombre.value,edad.value,nacionalidad.value)
    : console.log("algo salio mal")
}


function verificarRequisitos(checkVisa){
    
    checkUsuario()
    if(checkVisa.Pais == user.nacionalidad && user.edad >= checkVisa.edadMin && user.edad <= checkVisa.edadMax){
        mostrarEnDom(checkVisa)
    }else{
        console.log("No entras en los requisitos")
    }
}

function mostrarEnDom(checkVisa){
    whvDom.innerHTML += `<div class="col-2">
                        <div class="card">
                        <img src="css/flags/${checkVisa.Visa}.png" class="card-img-top" alt="${checkVisa.Visa}">
                        <div class="card-body">
                        <h5 class="card-title">${checkVisa.Visa}</h5>
                        <p class="card-text">Cupos - ${checkVisa.Cupos}</p>
                        <p class="card-text">Edad: ${checkVisa.edadMin}-${checkVisa.edadMax}</p>
                        <p class="card-text">Precio - ${checkVisa.Precio}</p>
                        <p class="card-text">Requisitos - ${checkVisa.Requisitos}</p>
                        </div>
                        </div>
                        </div>`
}


async function fetchDataNz(){
    const response = await fetch('../json/dataWhvNz.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}

async function fetchDataAus(){
    const response = await fetch('../json/dataWhvAus.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataCan(){
    const response = await fetch('../json/dataWhvCan.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataAle(){
    const response = await fetch('../json/dataWhvGer.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataHol(){
    const response = await fetch('../json/dataWhvNet.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataIrl(){
    const response = await fetch('../json/dataWhvIrl.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}

function getData(dato){
    whv = [];
    const datos = dato
    for (let i = 0; i < datos.length; i++) {
        whv.push(datos[i])
    }
    let checkVisa = whv.find((el) => nacionalidad.value == el.Pais)

    verificarRequisitos(checkVisa)

}



