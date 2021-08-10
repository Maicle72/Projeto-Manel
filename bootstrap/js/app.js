const textoBrand = document.getElementById("textoHeader");
const logoBrand = document.getElementById("logoHeader");

const row0Large = document.getElementById("row0Large");
const row1Large = document.getElementById("row1Large");
const row2Large = document.getElementById("row2Large");

const row0Medium = document.getElementById("row0Medium");
const row1Medium = document.getElementById("row1Medium");
const row2Medium = document.getElementById("row2Medium");
const row3Medium = document.getElementById("row3Medium");

const row0Small = document.getElementById("row0Small");
const row1Small = document.getElementById("row1Small");
const row2Small = document.getElementById("row2Small");
const row3Small = document.getElementById("row3Small");
const row4Small = document.getElementById("row4Small");
const row5Small = document.getElementById("row5Small");
const row6Small = document.getElementById("row6Small");


const divQuemSomos = document.getElementById("quemSomos");

document.addEventListener("scroll", ()=>{
    var scroll_position = window.scrollY;
    var yPosition = (divQuemSomos.offsetTop/2 - 80);

    if(scroll_position >= yPosition) {
        logoBrand.style.visibility = "visible";
        textoBrand.style.visibility = "visible";
        //header.style.backgroundColor = "#1f1e1e";
    }else{
        logoBrand.style.visibility = "hidden";  
        textoBrand.style.visibility = "hidden";
        //header.style.backgroundColor = "transparent";
    }
});

window.addEventListener('resize', resizeAux);

window.addEventListener('load', resizeAux);

function resizeAux() {
    console.log("Entrou aqui")
    var dim = window.innerWidth;

    if(dim < 768) {
        row0Small.style.visibility = "visible";
        row1Small.style.visibility = "visible";
        row2Small.style.visibility = "visible";
        row3Small.style.visibility = "visible";
        row4Small.style.visibility = "visible";
        row5Small.style.visibility = "visible";
        row6Small.style.visibility = "visible";

        row0Medium.style.visibility = "hidden";
        row1Medium.style.visibility = "hidden";
        row2Medium.style.visibility = "hidden";
        row3Medium.style.visibility = "hidden";

        row0Large.style.visibility = "hidden";
        row1Large.style.visibility = "hidden";
        row2Large.style.visibility = "hidden";

    }else if((dim >= 768) && (dim < 992)){
        row0Small.style.visibility = "hidden";
        row1Small.style.visibility = "hidden";
        row2Small.style.visibility = "hidden";
        row3Small.style.visibility = "hidden";
        row4Small.style.visibility = "hidden";
        row5Small.style.visibility = "hidden";
        row6Small.style.visibility = "hidden";

        row0Medium.style.visibility = "visible";
        row1Medium.style.visibility = "visible";
        row2Medium.style.visibility = "visible";
        row3Medium.style.visibility = "visible";

        row0Large.style.visibility = "hidden";
        row1Large.style.visibility = "hidden";
        row2Large.style.visibility = "hidden";
    } else {
        row0Small.style.visibility = "hidden";
        row1Small.style.visibility = "hidden";
        row2Small.style.visibility = "hidden";
        row3Small.style.visibility = "hidden";
        row4Small.style.visibility = "hidden";
        row5Small.style.visibility = "hidden";
        row6Small.style.visibility = "hidden";

        row0Medium.style.visibility = "hidden";
        row1Medium.style.visibility = "hidden";
        row2Medium.style.visibility = "hidden";
        row3Medium.style.visibility = "hidden";

        row0Large.style.visibility = "visible";
        row1Large.style.visibility = "visible";
        row2Large.style.visibility = "visible";
    }
}

