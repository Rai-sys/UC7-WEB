// import React, { useState, useEffect } from "react";
// import { listarPorMatricula } from "../services/alunoService";
// import { listarTodos } from "../services/alunoService";

// function ListarAlunos() {
//     const [alunos, setALunos] = useState([]);  // estado inicial vazio / retorno de objeto []
//     const [errorMsg, setErrorMsg] = useState(''); // estado inicial de erro vazio / retorno de string ''

    // funçao async para pegar dados de outro servidor(backend)
    // async function listarAlunos() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/aluno');  // requisiçao para buscar alunos (routes - back)
    //         if (response) {
    //             setALunos(response.data)
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setErrorMsg(error);  //retorno do useState após erro
    //     }
    // }

    // acionando a funçao async listarAlunos para trazer dados do banco
    // useEffect(() => {
    //     listarAlunos();
    // }, []);

    // async function listarAlunos() {
    //     try {
    //         const response = await listarTodos();
    //         setALunos(response.data)
    //     } catch (error) {
    //         setALunos([]);  // caso nao tenha alunos
    //         console.log(error);
    //         setErrorMsg(error);  // vai receber os dados de erro
    //     }
    // }

    // async function listarAlunoPorMatricula(matricula) {
    //     try {
    //         const response = await listarPorMatricula(matricula);
    //         setALunos(response.data)
    //     } catch (error) {
    //         setALunos([]);  // caso nao tenha alunos
    //         console.log(error);
    //         setErrorMsg(error);  // vai receber os dados de erro
    //     }
    // }

    // useEffect(() => {
    //     //listarAlunos();
    //     listarAlunoPorMatricula('12345');
    // }, []);

//     return (
//         <div>
//             {/* { errorMsg && */}
//                 <div>
//                     <h1>Listagem de Alunos</h1>
//                     <ul>
//                         {
//                             alunos.map((aluno) => (
//                                 <li key={aluno.matricula}>
//                                     {aluno.nome} - Email: {aluno.email} - Matrícula: {aluno.matricula}
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </ div>
//             {/* } */}
//         </div>
//     );
// };

// export default ListarAlunos;