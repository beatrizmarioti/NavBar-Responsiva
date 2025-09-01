// largura máxima para considerar a tela como "pequena" (mobile)
const laguraPequeno = 900;

// selecionando elementos do DOM
const barra = document.querySelector(".barra");
const itensNormal = document.querySelector(".itens"); // navbar desktop
const barraDentro = document.querySelector(".barraDentro");
const links = document.querySelector(".links"); // não usado, pode remover
const menuIcone = document.querySelector(".menuIcone"); // ícone hambúrguer
const menu = document.querySelector(".menu"); // menu mobile
const linksMenu = document.querySelectorAll(".menu a"); // links do menu mobile
const temaBtn = document.getElementById("temaBtn"); // botão tema desktop
const temaBtnFechado = document.getElementById("temaBtnNavBarFechada"); // botão tema mobile

// função para ajustar a navbar de acordo com o tamanho da tela
function ajustarMenu() {
  const pequeno = window.innerWidth <= laguraPequeno;

  if (pequeno) {
    if (itensNormal) itensNormal.style.display = "none"; // esconde navbar desktop
    if (menuIcone) menuIcone.style.display = "block"; // mostra hambúrguer
    if (menu) menu.style.display = "none"; // garante menu mobile fechado
  } else {
    if (itensNormal) itensNormal.style.display = "flex"; // mostra navbar desktop
    if (menuIcone) menuIcone.style.display = "none"; // esconde hambúrguer
    if (menu) menu.style.display = "none"; // menu mobile sempre fechado em desktop
  }
}

// alterna abertura/fechamento do menu mobile
function alternarMenu() {
  if (!menu) return;
  const aberto = menu.style.display === "flex";
  menu.style.display = aberto ? "none" : "flex"; // toggle simples
}

// alterna modo claro/escuro
function alternarTema() {
  document.body.classList.toggle("dark-mode"); // adiciona/remove classe
  const dark = document.body.classList.contains("dark-mode");

  // atualiza os dois botões de tema
  if (temaBtn) temaBtn.textContent = dark ? "☀️" : "🌙";
  if (temaBtnFechado) temaBtnFechado.textContent = dark ? "☀️" : "🌙";

  // salva estado no localStorage
  localStorage.setItem("tema", dark ? "dark" : "light");
}

// inicializa ajustes da navbar ao carregar e redimensionar a tela
window.addEventListener("load", ajustarMenu);
window.addEventListener("resize", ajustarMenu);

// abre/fecha menu mobile ao clicar no ícone
if (menuIcone) menuIcone.addEventListener("click", alternarMenu);

// fecha menu mobile ao clicar em um link
linksMenu.forEach((a) => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= laguraPequeno) {
      menu.style.display = "none"; // fecha menu mobile
    }
  });
});

// verifica se o modo dark estava salvo e aplica ao carregar a página
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark-mode");
  if (temaBtn) temaBtn.textContent = "☀️";
  if (temaBtnFechado) temaBtnFechado.textContent = "☀️";
}

// adiciona evento de clique nos botões de tema
if (temaBtn) temaBtn.addEventListener("click", alternarTema);
if (temaBtnFechado) temaBtnFechado.addEventListener("click", alternarTema);
