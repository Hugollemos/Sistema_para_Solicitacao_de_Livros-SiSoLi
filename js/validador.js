var botao = document.getElementById("botao");

var vinculo = document.getElementById("vinculo");

var autor = document.getElementById("autor");

var issn = document.getElementById("issn");

var editora = document.getElementById("editora");

var titulo = document.getElementById("titulo");

var edicao = ducument.getElementById("edicao");

var ano = document.getElementById("ano")
botao.addEventListener("click", ()=> {
  // Pegando o valor do nome pelos names

  //verificando se o nome está vazio
  if (titulo.value == "") {
    alert("Titulo não informado");
    titulo.focus();
    return;
  }
  if (autor.value == "") {
    alert("Autor não informado");
    titulo.focus();
    return;
  }
  if (vinculo.value == "") {
    alert("Vinculo não informado");
    titulo.focus();
    return;
  }
  if (ano < 1900 && ano > 2019) {
    alert("Ano de publicação não permitido");
    titulo.focus();
    return;
  }
  
})