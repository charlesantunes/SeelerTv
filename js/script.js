//carrossel do index
const imgContainer = document.querySelector("#img-carrossel");
const img = document.querySelectorAll("#img-carrossel img");

let idN = 0;

function carrossel() {
    let largura = window.innerWidth;
    idN++;

    if (idN > img.length - 1) {
        idN = 0;
    }

    if (largura < 813) {
        imgContainer.style.transform = `translateX(${-idN * 91}vw)`;
        console.log(`celular ${largura}`) 
    } else {
        imgContainer.style.transform = `translateX(${-idN * 55}vw)`;
        console.log(`computador ${largura}`) 
    }

}

setInterval(carrossel, 5000);

//Modal do botão contato
const openModalBtn = document.querySelector("#open-modal");
const openModalMsg = document.querySelector("#open-modal-msg");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () =>{ /*toogle() é uma func que se estiver habilitado um item ele desabilita ou contrário.*/
    /*lógica foi melhorada abaixo 
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
    */
    [modal,fade].forEach((e)=>e.classList.toggle("hide"))
}

[openModalMsg,openModalBtn,closeModalBtn,fade].forEach((e)=>{
    e.addEventListener("click",()=> {toggleModal()})
})


// menu hamburgue
function menuShow() {
    let menuMobile = document.querySelector(".ul-mobile")
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu2.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/close.png"
    }
}