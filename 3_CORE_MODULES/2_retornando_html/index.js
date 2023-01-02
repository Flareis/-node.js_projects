 const http = require('http')

 const port = 3000

 const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Contenty-Type', 'text/html')
  res.end('<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando atualização.</p> ') // por enquanto o incode não aceito utf8, não aceita acento e til
 })

 server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`) // função callBack que sinaliza o sucesso
 })