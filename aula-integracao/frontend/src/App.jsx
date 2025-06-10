import { useState } from 'react'
import ListarCursos from './components/ListarCursos/listarCursos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Projeto Integração front + back. </h1>
      <ListarCursos/>
    </>
  )
}

export default App
