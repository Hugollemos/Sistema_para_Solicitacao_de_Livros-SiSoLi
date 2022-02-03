const inputBotao = document.getElementById('botao')

inputBotao.addEventListener('click', function chamar() {
  if (vinculo.value == "") {
    alert("Vinculo não informado");
    vinculo.focus();    
  } else {
    vinculo = document.getElementById('vinculo').value;
    document.getElementById('area01').innerHTML = vinculo;
    
  }
  
  if (titulo.value == "") {
    alert("titulo não informado");
    titulo.focus();
  } else {
    titulo = document.getElementById('titulo').value;
    document.getElementById('area02').innerHTML = titulo;
    
  }
  
  if (autor.value == "") {
    alert("Autor não informado");
    autor.focus();
  } else {
    autor = document.getElementById('autor').value;
    document.getElementById('area03').innerHTML = autor;
    
  }
  
  if (ano.value < 1900 && ano.value < 2019) {
    alert("ANO DE PUBLICAÇÃO PRECISA SER ENTRE 1900 E 2019.")
  } else {
    ano = document.getElementById('ano').value;
    document.getElementById('area06').innerHTML = ano;
    
  }
  edicao = document.getElementById('edicao').value;
  document.getElementById('area04').innerHTML = edicao;

  issn = document.getElementById('issn').value;
  document.getElementById('area05').innerHTML = issn;

  editora = document.getElementById('editora').value;
  document.getElementById('area07').innerHTML = editora;
  
})

