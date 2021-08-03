const linhas3 = document.querySelector(".header .nav-bar .nav-list .linhas3");
const tlm_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container-fluid");
const nomeBrand = document.getElementById("Nome_Brand");
const logoBrand = document.getElementById("logoImageHeader");

linhas3.addEventListener("click",()=>{
    linhas3.classList.toggle("active");
    tlm_menu.classList.toggle("active");
})

document.addEventListener("scroll", ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 500) {
        header.style.backgroundColor = "#1f1e1e";
        nomeBrand.style.visibility = "visible";
        logoBrand.style.visibility = "visible";
    }else{
        logoBrand.style.visibility = "hidden";  
        nomeBrand.style.visibility = "hidden";
        header.style.backgroundColor = "transparent";
    }
});

menu.forEach(item=>{
    item.addEventListener("click", ()=>{
        linhas3.classList.toggle("active");
        tlm_menu.classList.toggle("active");
    })
})