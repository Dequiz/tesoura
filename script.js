function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function executar() {
  jogar();
  tesoura();
}
function executar2() {
  jogar();
  pedra();
}
function executar3() {
  jogar();
  papel();
}
function jogar() {
  const resultado = random(1, 3);

  if (resultado === 1) {
    document.getElementById("jogo").innerHTML =
      "<img src='papel-direita.png' class='jogadas'>";
  } else if (resultado === 2) {
    document.getElementById("jogo").innerHTML =
      "<img src='pedra-direita.png' class='jogadas'>";
  } else if (resultado === 3) {
    document.getElementById("jogo").innerHTML =
      "<img src='tesoura-direita.png' class='jogadas'>";
  }
}
function tesoura() {
  document.getElementById("jogo2").innerHTML =
    "<img src='tesoura-esquerda.png' class='left'>";
}
function pedra() {
  document.getElementById("jogo2").innerHTML =
    "<img src='pedra-esquerda.png' class='left'>";
}
function papel() {
  document.getElementById("jogo2").innerHTML =
    "<img src='papel-esquerda.png' class='left'>";
}
