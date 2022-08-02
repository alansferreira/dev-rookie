function primeiraFuncaoVazia(){
  console.log('entrou na funcao vazia');
}

function digaAlo(paraQuem){
  console.log(`Olá ${paraQuem}!`);
}

function somar(primeiroNumero, segundoNumero){
  return primeiroNumero + segundoNumero;
}

primeiraFuncaoVazia()
digaAlo('tio Balan')

const resultadoSoma = somar(1, 1);

console.log(resultadoSoma);