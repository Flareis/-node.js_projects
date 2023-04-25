const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

 fs.readfile('message.html', function (err, data){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(data)
  return res.end()
 })
})

server.listen(port, () => {
 console.log(`Servidor rodando na porta: ${port}`) // função callBack que sinaliza o sucesso
})