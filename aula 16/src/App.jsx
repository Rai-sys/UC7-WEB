import { useState } from 'react'


function App() {

  return (
    <>
      <div
        className="mt-5 mx-auto flex max-w-sm items-center p-6 shadow-lg bg-blue-50" >
        <div className="text-xl font-medium text-black dark:text-white">
          <h1 className="pl-8"> Hello World! React + Tailwind </h1>
          <p className="pl-11 text-gray-500 dark:text-gray-400"> Tentaremos formatar algo! </p>
        </div>
      </div>

      <div className="mt-5 min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2x1 text-center font-[100] font-bold text-blue-600">
            Usando Tailwind ╰(‵□′)╯ 
          </h1>
          <img className="w-60 h-60 mt-4 rounded-5x1" src='https://media.stickerswiki.app/picap4u/27535.512.webp'></img>
        </div>
      </div>
    </>
  )
}

export default App
