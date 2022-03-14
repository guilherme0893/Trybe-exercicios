const personInfo = require('../controllers/informations');
const imcCalculation =  require('./imc');

const personImc = () => {
  personInfo.inputInformation();

  const imcIndex = imcCalculation(Number(personInfo.data.weigth), Number(personInfo.data.height));

  console.log(`Olá ${personInfo.data.name}! O seu IMC é ${imcIndex}`);

}

module.exports = personImc;
