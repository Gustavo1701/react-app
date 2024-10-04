import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Coleguinhas } from './assets/components/coleguinha';

function App() {
  const [nome, setNome] = useState('');

  const alunos = [
    {
      nome: 'Gustavo',
      nomeCompleto: 'Luis Gustavo Santos'
    },

    {
      nome: 'Breno',
      nomeCompleto: 'Breno Oliveira tarara'
    },

    {
      nome: 'Edmar',
      nomeCompleto: 'Edmar Albuquerque tarara'
    }

  ]

  return (
    <>

      <h1>Lista de alunos</h1>
      {alunos.map(alunos => <Coleguinhas nome={alunos.nome} nomeCompleto={alunos.nomeCompleto} />)}

    </>
  )
}

export default App
