import React, { useEffect, useState } from "react";
import { listarTodos } from "../../../services/alunoService";
import style from "./ListarAlunos.module.css";

function ListarAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [erroMsg, setErroMsg] = useState('');
    

    async function fetchAlunos() {
        try {
            const res = await listarTodos();
            setAlunos(res.data); // resposta.data
            setErroMsg(res.data.mensagem);
        } catch (error) {
            setErroMsg(error.response.error.data.mensagem)
        }
    }

    useEffect(() => {
        fetchAlunos();  // Chama a função para busar os alunos
    }, [])  // O array vazio garante que a função seja chamada apenas uma vez quando o componente for montado

    return (
        <div>
            <h2> Lista de Alunos </h2>
            {erroMsg && <p>{erroMsg}</p>}  {/* Exibe mensagem de erro se houver */}
            <ul>
                {
                    alunos.map((aluno) => (  // Criação do map cada linha do banco está mapeada 
                        <li key={aluno.matricula}>   {/* A key indica a rerencia de cada registro (única) */}
                            {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula} {/* <-----
                            Para acessar cada valor devemos usar a variável map(aluno)e o campo respectivo da tabela */}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListarAlunos;