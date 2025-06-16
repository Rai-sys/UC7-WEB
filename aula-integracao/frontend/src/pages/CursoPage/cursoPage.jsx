import React from "react";
import CursoForm from "../../components/CursoForm/cursoForm";
import ListarCursos from "../../components/ListarCursos/listarCursos";

function CursoPage() {
   const [cursoEditando, setCursoEditando] = useState('');

   const handleEditar = () => {
      setCursoEditando(curso);
   };

   const handleSalvar = () => {
      setCursoEditando(null);
   };
   
   return(
      <>
         <CursoForm />
         <ListarCursos />
      </>
   )
}

export default CursoPage;