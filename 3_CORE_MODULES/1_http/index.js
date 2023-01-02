 const http = require('http')

 const port = 3000

 const server = http.createServer((req, res) => {
  res.write('Olá, subindo um servidor HTTP.') // resposta para o usuário
  res.end() // para finalizar a resposta, se não carrega eternamente
 })

 server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`) // função callBack que sinaliza o sucesso
 })