var media = function(lista) {
  var soma = 0;
  for(var i = 0; i < lista.length; i++){
    soma += lista[i];
  }
  return soma/lista.length;
}

var calculaMediaIdadeAluno = function(alunos){
  var idadesAlunos = []
  for(var i = 0; i < alunos.length; i++){
    idadesAlunos.push(alunos[i].idade);
  }
  return media(idadesAlunos);
}

exports.media = media;
exports.calculaMediaIdadeAluno = calculaMediaIdadeAluno;