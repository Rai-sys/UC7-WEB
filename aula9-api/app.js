
// importando servidor
const express = require('express')

const dotenv = require('dotenv')

// configurando a env
dotenv.config();

// inicializando o servidor
const app = express()

// Middleware(meio termo) pra permitir o uso do json
app.use(express.json());

// porta que o servidor irá rodar
const port = process.env.PORTA;

// banco de dados
const produtos = []

// rota de listagem de produtos  
app.get('/', (requisicao, resposta) => {  // se for apenas 'localhost:4000' (que é a raiz do servidor) irá retornar 'Raiz do servidor'
  try {
    if (produtos.length === 0) {
      return resposta.status(200).json({msg: "Não há produtos"})
    }
    resposta.status(200).json(produtos) 
  } catch (error) {
    resposta.status(500).json({msg: "Erro ao buscar produtos"}) 

    }
})

// rota de cadastro de produtos
app.post('/', (requisicao, resposta) => {
  try {
    const {id, nome, preco, quantidade} = requisicao.body;  //corpo dos dados no request.http
    const novoProduto = {id, nome, preco, quantidade};
    produtos.push(novoProduto);    //adiciona novosProdutos ao const produtos = []
    resposta.status(201).json(novoProduto)
  } catch (error) {
    resposta.status(500).json({msg: "Erro ao cadastrar produtos"}) 
  }
})

// rota para editar o produto
// http://localhost/4000/1
app.put('/:id', (requisicao, resposta) => {
  try {
    const id = requisicao.params.id;  //parametro = tudo que tem na url
    const produto = produtos.find(elemento => elemento.id === id);
    if (!produto) {
      return resposta.status(404).json({msg: "Produto não encontrado"})
    };
    const {novoNome, novoPreco, novaQuantidade} = requisicao.body;
    if (produto) {
      produto.nome = novoNome;
      produto.preco = novoPreco;
      produto.quantidade = novaQuantidade;
    }
    resposta.status(200).json(produto)
  } catch (error) {
    resposta.status(500).json({msg: "Erro ao atualizar produtos."})
  }
})
// ouvindo a porta 4000 e exibindo uma mensagem de retorno
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)   // link vai gerar no terminal quando rodar indo direto pro servidor no navegador
})