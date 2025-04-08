import React, { useState, useEffect } from "react";
import axios from 'axios';

function ListarAlunos() {
    const [alunos, setALunos] = useState([]);

    async function listarAlunos() {
        try {
            const response = await axios.get('http://localhost:3000/aluno')
            if (response) {
                setALunos(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listarAlunos();
    }, []);

    // console.log(alunos);

    return (
        <div>
            <h1>Listagem de Alunos</h1>
            <ul>
                {
                    alunos.map((aluno) => (
                        <li key={aluno.matricula}>
                            {aluno.nome} - Email: {aluno.email} - Matrícula: {aluno.matricula}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ListarAlunos;