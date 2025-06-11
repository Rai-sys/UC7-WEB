import React from "react";
import CursoForm from "../../components/CursoForm/cursoForm";
import ListarCursos from "../../components/ListarCursos/listarCursos";

function CursoPage() {
   
   return(
      <>
         <CursoForm />
         <ListarCursos />
      </>
   )
}

export default CursoPage;