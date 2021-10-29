// import logo from './logo.svg';
// LEMBRAR DE IMPORTAR O REACT
import React, {Component} from 'react';
import "./App.css"

const tarefas = ['X', 'Y', 'Z', 'A'];

class App extends Component {
  render () {
    return (
      <>
        <h1>Hello World</h1>
        <h2>TESTANDO</h2>
        {tarefas.map((tarefa) => {
          return (
            <ol key={1}>
              <li>{tarefa}</li>
            </ol>
          );
        })}
      </>
    );
  }
}

export default App;

