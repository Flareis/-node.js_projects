const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissão']

console.log(nome)
console.log(profissao)

console.log(`O nome dela é ${nome} e sua profissão é ${profissao}.`)