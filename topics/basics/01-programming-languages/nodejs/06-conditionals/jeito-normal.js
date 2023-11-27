const idade = 15;
const canWork = idade >= 16;
const canVote = canWork;
const canDrive = idade >= 18;

console.log(`${canWork ? 'Ja' : 'Nao'} pode trabalhar!`)
console.log(`${canVote ? 'Ja' : 'Nao'} pode votar!`)
console.log(`${canDrive ? 'Ja' : 'Nao'} pode dirigir!`)

