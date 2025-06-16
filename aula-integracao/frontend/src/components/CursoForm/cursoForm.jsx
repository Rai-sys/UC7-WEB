import { useState, useEffect } from "react";
import CursoService from "../../services/cursoService";

function CursoForm({ cursoEditando, aoSalvar }) { // Duas props
   const [cod_curso, setCod_curso] = useState('');
   const [nome, setNome] = useState('');

   useEffect (() => {
      if (cursoEditando) {
         setCod_curso(cursoEditando.cod_curso);
         setNome(cursoEditando.nome);
      }
   }, [cursoEditando]);

   // Função para criar ou atualizar um curso
   const handleSubmit = async(e) => {
      e.preventDefault(); // evita o recarregamento da página
      
      if (cursoEditando) {
         const cursoAtualizar = await CursoService.atualizar(cod_curso, {nome});
      } else {
         const data = await CursoService.criar({ cod_curso, nome });
         console.log(data);
      }
      
      setNome('');
      setCod_curso('');
   };

   const codCursoPattern = "^[A-Z][0-9]{3}$";

   return (
      <>
         <form onSubmit={handleSubmit}>
            <input
               type="text" // código do curso
               placeholder="Código do curso (ex: A123)"
               value={cod_curso} // linkando a variavel de estado
               pattern={codCursoPattern} // validando com o regex
               onChange={(e) => setCod_curso(e.target.value)} // atualizando o estado
               maxLength={4}
               required // campo obrigatório
            />
            <input
               type="text" // nome do curso
               placeholder="Informe o nome do curso"
               value={nome} // linkando a variavel de estado
               onChange={(e) => setNome(e.target.value)} // atualizando o estado
               required // campo obrigatório
            />

            <button type="submit"> Cadastrar </button>
         </form>
      </>
   )
}

export default CursoForm;