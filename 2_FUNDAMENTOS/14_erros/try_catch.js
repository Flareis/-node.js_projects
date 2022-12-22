const x = 10

try {

  x = 2 //atribuir outro valor para a const, algo não permitido

} catch(err) {
  console.log(`Erro: ${err}`)

}

// da uma resposta mais amigável para o usuário.