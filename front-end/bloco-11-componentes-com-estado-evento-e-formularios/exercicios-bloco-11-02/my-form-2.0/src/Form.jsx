import React, { Component } from 'react';

class Form extends Component {
  render() {
    return(
      <fieldset>
        <legend>Dados Pessoas</legend>
        <div>
          Nome:
          <input 
            type='name'
            name='name'
            maxLength='40'
            required
          />
        </div>
        <div>
          Email:
          <input
            type='email'
            name='email'
            maxLength='50'
            required
          />
        </div>
        <div>
          CPF:
          <input
            type='text'
            name='cpf'
            maxLength='11'
            required
          />
        </div>
        <div>
          Endereço:
          <input
            type='text'
            name='adress'
            maxLength='200'
            required
          />
        </div>
        <div>
          Cidade:
          <input
            type='text'
            name='city'
            maxLength='20'
            required
          />
        </div>
        <div>
          Estado:
        </div>
      </fieldset>
      
    )
  }
}

export default Form;