import React, { useState } from 'react';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import logo from '../assets/img/logo-pequeno.png'
import ListaPerguntas from './deck'
import Footer from './buttons'

export default function App() {
  const deck = [{ ordem: 'Pergunta 1 ', question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
  { ordem: 'Pergunta 2', question: ' O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces' },
  { ordem: 'Pergunta 3', question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
  { ordem: 'Pergunta 4', question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' }]

  const [cor, setCor] = useState('')
  
  return (
    <div>

      <div className="screen-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </div>

        <div className="main">
          {deck.map((a, index) => <ListaPerguntas ordem={a.ordem} index={index} question={a.question} answer={a.answer} cor={cor}/>)}
        </div>
      </div>

      <Footer total={deck.length} cor={cor} setCor={setCor} />

    </div>
  )
}




