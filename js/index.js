import { usuario } from "./classes.js"

//-----------------Lista vacias de las Working Holiday Visa

let whv = [];

//-----------------Relacion con el Dom

const nombre = document.querySelector("#nombre")
const edad = document.querySelector("#edad")
const nacionalidad = document.querySelector("#nacionalidad")
let btnInicio = document.querySelector("#btnInicio")


//-----------------Paises del dom

const whvDom = document.querySelector("#whvDom")

//-----------------Variable Global

let user

//-----------------Array de URLS Json

const arrayJson = [
    './json/dataWhvNz.json',
    './json/dataWhvAus.json',
    './json/dataWhvCan.json',
    './json/dataWhvGer.json',
    './json/dataWhvNet.json',
    './json/dataWhvIrl.json',
    './json/dataWhvAustria.json',
    './json/dataWhvCor.json',
    './json/dataWhvFra.json',
    './json/dataWhvJap.json',
    './json/dataWhvNor.json',
    './json/dataWhvPol.json',
    './json/dataWhvPor.json'
]

//-----------------Funciones

//-----------------Se limpia el html cada vez que se toca el boton

const deleteHTML = () => whvDom.innerHTML = "";

//-----------------Scroll automatico despues de que se toca el boton

const scroll = () => window.scrollBy(0, 500);

//-----------------Se chequean los inputs y se crea un user

function checkUsuario(){
    nombre.value && edad.value && nacionalidad.value 
    ? user = new usuario(nombre.value,edad.value,nacionalidad.value)
    : console.log("algo salio mal")
}

//-----------------Se comparan los datos del user con los de las check visa y se muestra el resultado
//----------------- en el dom

function verificarRequisitos(checkVisa){
    checkUsuario()
    if(checkVisa.Pais == user.nacionalidad && user.edad >= checkVisa.edadMin && user.edad <= checkVisa.edadMax){
        mostrarEnDom(checkVisa)
    }else{
        console.log("No entras en los requisitos")
    }
}

//-----------------Se muestra en el dom y hace lanza el scroll

function mostrarEnDom(checkVisa){
        whvDom.innerHTML += `<div
                            data-aos="fade-up"
                            data-aos-duration="3000" 
                            class="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div 
                            class="card text-white card-has-bg click-col"
                            style="background-image: url('css/cardimages/${checkVisa.Visa}.jpg');">
                            <img
                                class="card-img d-none"
                                src="css/cardimages/${checkVisa.Visa}.jpg"
                                alt="countryImage"
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
                            >
                            </div>
                            <div class="card-footer">
                            <div class="media">
                            <img
                            class="mr-3 rounded-circle"
                            src="css/flags/${checkVisa.Visa}.png"
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
        scroll()
}

//-----------------Se limpia el Dom y se loopea el arrayJson y la fetchdata y viajan cada uno de sus
//-----------------elementos por parametros

function urlJson(){
    deleteHTML()
    for (let i = 0; i < arrayJson.length; i++) {
        let elemento = arrayJson[i]
        fetchData(elemento)
    }
}

//---------------Se fetchean las respectivas URLS

async function fetchData(URL){
    const response = await fetch(URL)
        .then(res => res.json())
        .then(res => getData(res))
        .catch(err => console.log("No entra en el programa"))
}

//---------------Se toma la data del fetch por parametros en la funcion anterior y se hace un for
//------------ que pushea los datos de esas respectivas visas, despues se declara la variable checkvisa
//----------utilizada en verificar requisitos via parametro

function getData(dato){
    whv = [];
    const datos = dato
    for (let i = 0; i < datos.length; i++) {
        whv.push(datos[i])
    }
    let checkVisa = whv.find((el) => nacionalidad.value == el.Pais)

    verificarRequisitos(checkVisa)

}

//-----------Boton que lanaa la urlJson function

btnInicio.addEventListener("click", urlJson)

