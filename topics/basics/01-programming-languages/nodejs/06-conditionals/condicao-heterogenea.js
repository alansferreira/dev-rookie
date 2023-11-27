const idade = 16;

if(idade>=16){
  console.log('Ja pode trabalhar!')
  console.log('Ja pode votar!')
  if(idade>=18){
    console.log('Ja pode dirigir!')
  }
  if(idade<18){
    console.log('Nao pode Dirigir!')
  }
}

if(idade<16) {
  console.log('Nao pode trabalhar!')
  console.log('Nao pode votar!')
}