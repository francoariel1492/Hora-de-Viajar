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
        whvDom.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div 
                            class="card text-white card-has-bg click-col"
                            style="background-image: url('../css/cardimages/${checkVisa.Visa}.jpg');">
                            <img
                                class="card-img d-none"
                                src="../css/cardimages/${checkVisa.Visa}.jpg"
                                alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                            />
                            <div class="card-img-overlay d-flex flex-column">
                            <div class="card-body">
                            <small class="card-meta mb-2">Listo para partir?</small>
                            <h4 class="card-title mt-0">
                            <a class="text-white" herf="#"
                            >${checkVisa.Descripcion}</a
                            >
                            </h4>
                            <small
                            ><i class="far fa-clock"></i> October 15, 2020</small
                            >
                            </div>
                            <div class="card-footer">
                            <div class="media">
                            <img
                            class="mr-3 rounded-circle"
                            src="../css/flags/${checkVisa.Visa}.png"
                            alt="Generic placeholder image"
                            style="max-width: 50px"
                            />
                            <div class="media-body">
                            <h6 class="my-0 text-white d-block">${checkVisa.Visa}</h6>
                            <small>Working Holiday Visa</small>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>`
}


async function fetchDataNz(){
    const response = await fetch('./json/dataWhvNz.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}

async function fetchDataAus(){
    const response = await fetch('./json/dataWhvAus.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataCan(){
    const response = await fetch('./json/dataWhvCan.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataAle(){
    const response = await fetch('./json/dataWhvGer.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataHol(){
    const response = await fetch('./json/dataWhvNet.json')
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}
async function fetchDataIrl(){
    const response = await fetch('./json/dataWhvIrl.json')
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



