// Botão que alterna entre modo claro e escuro
const botao = document.getElementById("tema");

botao.addEventListener("click", function () {
  document.body.classList.toggle("escuro");
  const escuro = document.body.classList.contains("escuro");
  botao.textContent = escuro ? "Modo claro" : "Modo escuro";
});
