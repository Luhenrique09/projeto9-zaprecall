import React, { useState } from 'react';

export default function Footer({total, setCor}) {
    const [i, seti] =useState(0)
    function zap () {
      setCor('verde')
      seti(i+1)
    }
  
    function almost () {
      setCor('amarelo')
      seti(i+1)
    }
  
    function error () {
      setCor('vermelho')
      seti(i+1)
    }
  
  
    return (
      <div className="footer-concluidos ">
        <div className="container-botoes">
          <button className="error" onClick={error}>Não lembrei</button>
          <button className="almost" onClick={almost}>Quase não lembrei</button>
          <button className="zap" onClick={zap}>Zap!</button>
        </div>
        <span>{i}/{total} CONCLUÍDOS</span>
      </div>
    )
  }