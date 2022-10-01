import React, { useState } from 'react';
import virar from '../assets/img/seta_virar.png'

export default function ListaPerguntas({ index, ordem, question, answer, cor }) {
    const [clicados, setClicados] = useState([]);
    const [resposta, setResposta] = useState(ordem)
    const [hide, setHide] = useState('hide');
  
    function ordemClick() {
      setClicados([ordem])
      setHide('')
      setResposta(question)
    }
  
    function virarPergunta() {
      setHide('hide')
      setResposta(answer)
    }
    console.log(cor )
    return (
      <div>
  
        <p key={index}
          className={`pergunta-fechada ${cor} ${(clicados.includes(ordem)) ? 'pergunta-aberta' : ''}`}
        >
          {resposta}
          <ion-icon class={!hide} name="play-outline" onClick={ordemClick}></ion-icon>
          <img key={index} className={hide} src={virar} alt='seta que vira a carta' onClick={virarPergunta} />
        </p>
  
      </div>
    )
  }

