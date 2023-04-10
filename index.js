import React, { useState } from 'react';
import ReloadButton from '../ReloadButton';
import { Perguntas } from '../../questions/perguntas';

export default function Quiz() {
  const questions = Perguntas ?? []
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);

  function proximaPergunta(correta) {
    const nextQuestion = perguntaAtual + 1;

    if (correta){
      setPontos(pontos + 1);
    }

    if (nextQuestion < questions.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      setShowPontuacao(true);
    }
  }

  return (
    <div className='container'>
      {showPontuacao ? (
        <div className='pontuacao'>
          <span><h1> Sua pontuação é {pontos} de {questions.length} </h1></span>
            <ReloadButton />
        </div>) : (
        <>
          <div className='infoPerguntas'>
            <div className="contagemPerguntas">
              <span><h4>Pergunta {perguntaAtual + 1}/{questions.length}</h4></span>
            </div >
            <div className="pergunta">{questions[perguntaAtual].pergunta}</div>
          </div >
          <div className="resposta">
            {questions[perguntaAtual].opcoesResposta.map((opcoesResposta) =>
              <div className="grupoResposta">
                <span>{opcoesResposta.alternativa}</span>
                <button onClick={() => proximaPergunta(opcoesResposta.correta)}>{opcoesResposta.resposta}</button>
              </div>)}
          </div>
        </>
      )}
    </div >
  );
}
