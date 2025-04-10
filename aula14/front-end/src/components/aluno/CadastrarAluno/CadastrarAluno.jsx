
import React, {useState} from "react";
import { criar } from "../../../services/alunoService";

function CadastrarAluno() {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroMsg, setErroMsg] = useState('');
    const [sucessoMsg, setSucessoMsg] = useState('');

    async function criarAluno() {
        try {
            await criar({nome, matricula, email, senha});
            setSucessoMsg('Aluno cadastrado com sucesso!');
            setErroMsg('');
        } catch (error) {
            setErroMsg(error.response.data.mensagem)
        }
    }

    return (
        <div>
            <h2>Cadastrar Aluno</h2>

            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}  //target = pegar valor do campo  //onChange = ouvindo as mudanças
                placeholder="Digite o seu nome"
            />
            <input
                type="text"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}  //target = pegar valor do campo  //onChange = ouvindo as mudanças
                placeholder="Digite a sua matricula"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  //target = pegar valor do campo  //onChange = ouvindo as mudanças
                placeholder="Digite o seu email"
            />
            <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}  //target = pegar valor do campo  //onChange = ouvindo as mudanças
                placeholder="Digite a sua senha"
            />

            <button onClick={criarAluno}> Cadastrar </button> 
            {erroMsg && <p>{erroMsg}</p>}
            {sucessoMsg && <p>{sucessoMsg}</p>}
        </div>
    )
}

export default CadastrarAluno;