import React, { Component } from 'react';
import Form from './Form';

// apresentar o initial state ---> form zerado
const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  adressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component {
  render() {
    return (
      <Form
      />
    )
  }
}

export default App;
