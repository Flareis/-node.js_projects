const chalk = require ("chalk")

const nota = 9
if(nota>=7) {
  console.log(chalk.green('Parabéns você foi aprovado.'))
}else{
  console.log(chalk.bgGray.black('Você está de recuperação.'))
}
