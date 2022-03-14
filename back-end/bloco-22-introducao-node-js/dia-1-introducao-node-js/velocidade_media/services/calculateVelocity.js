const info = require('../controllers/informations');
const velocityEquation = require('./velocity');

const meanVelocity = () => {
  info.inputInformation();

  const meanVelocityCalc = velocityEquation(Number(info.data.distance), Number(info.data.time));

  console.log(`A velocidade média em km/h é ${meanVelocityCalc}`);

}

module.exports = meanVelocity;
