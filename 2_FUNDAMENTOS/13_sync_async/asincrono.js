const fs = require("fs")

console.log("Início")

fs.writeFile('arquivoAsync.txt', 'oi', function(err) {
  setTimeout(function() {
    console.log('Arquivo criado!')
  }, 1000)
})

console.log('Fim')

// o fim do código é feito antes da geração total do arquivo