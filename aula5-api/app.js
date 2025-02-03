
// importando servidor
const express = require('express')

// inicializando o servidor
const app = express()

// porta que o servidor irá rodar
const port = 4000

// rota raiz
app.get('/', (requisicao, resposta) => {    // se for apenas 'localhost:4000' (que é a raiz do servidor) irá retornar 'Raiz do servidor'
  resposta.send('Raiz do servidor')
})

// rota /hello
app.get('/hello', (requisicao, resposta) => {   // se for 'localhost:4000/hello' irá retornar o 'Hello World'
    resposta.send('Hello World!')
  })


// ouvindo a porta 4000 e exibindo uma mensagem de retorno
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)   // link vai gerar no terminal quando rodar indo direto pro servidor no navegador
})