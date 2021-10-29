import React, {Component} from "react";
import './App.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render () {
    return (
      <>
        {conteudos.map((conteudo) => (
          <div className = 'content'>
            <p>{`O conteúdo é: ${conteudo.conteudo}`}</p>
            <p>{`O bloco é: ${conteudo.bloco}`}</p>
            <p>{`O status é: ${conteudo.status}`}</p>            
          </div>
        ))}
      </>
    )
  }
}



export default Content;