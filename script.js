const laguraPequeno = 900;

const barra = document.querySelector(".barra");
const itensNormal = document.querySelector(".itens")
const barraDentro = document.querySelector(".barraDentro");
const links = document.querySelector(".links");
const menuIcone = document.querySelector(".menuIcone");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu a");

function ajustarMenu(){
  const pequeno = window.innerWidth <= laguraPequeno;

  if(pequeno){
    if(links) links.style.display = "none";
    if(menuIcone) menuIcone.style.display = "block";
    if(itensNormal) itensNormal.style.display = "none";
  }else{
    if(links) links.style.display = "flex";
    if(menuIcone) menuIcone.style.display = "none";
    if(menu) menu.style.display = "none";
    if(itensNormal) itensNormal.style.display = "block";
  }
}

function alternarMenu(){
  if(!menu) return;
  const aberto = menu.style.display === "flex";
  menu.style.display = aberto ? "none" : "flex";
}

window.addEventListener("load", ajustarMenu);
window.addEventListener("resize", ajustarMenu);

if(menuIcone) menuIcone.addEventListener("click", alternarMenu);

linksMenu.forEach(a => {
  a.addEventListener("click", () => {
    if(window.innerWidth <= larguraCorte){
      menu.style.display = "none";
    }
  });
});
