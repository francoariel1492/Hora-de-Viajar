let visaInStorage = JSON.parse(localStorage.getItem("Visa"))  

const {Requisitos,DescripcionInfo,Visa} = visaInStorage

const galeria = document.querySelector("#galeria")
const visaDescripcion = document.querySelector("#visaDescripcion")
const map1 = document.querySelector("#map1")
const map2 = document.querySelector("#map2")
const tituloInfo = document.querySelector("#tituloInfo")
const requisitos = document.querySelector("#requisitos")


añadirFotos(Requisitos,DescripcionInfo,Visa)




function añadirFotos(Requisitos,DescripcionInfo,Visa){
    tituloInfo.innerHTML += `Hora de viajar a ${Visa}`
    visaDescripcion.innerHTML += `${DescripcionInfo}`
    map1.style.backgroundImage = `url(/css/backgroundinfo/${Visa}.png)`;
    map2.style.backgroundImage = `url(/css/backgroundinfo/${Visa}${1}.png)`;
    for (let i = 0; i < Requisitos.length; i++) {
      requisitos.innerHTML  += `<li class="py-3">${Requisitos[i]}</li>`
    }
    for (let i = 0; i < 10; i++) {
      galeria.innerHTML  += `<img src="../css/gallery/${visaInStorage.Visa}/${visaInStorage.Visa}${i}.jpg" alt="">`
    }
}


