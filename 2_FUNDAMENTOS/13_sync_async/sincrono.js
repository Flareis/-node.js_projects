const fs = require("fs")

console.log("Início")

fs.writeFileSync('arquivo.txt', 'oi')

console.log('Fim')

// ao dar node sincrono.js, é impresso Início e Fim e o arquivo é criado simultaneamente