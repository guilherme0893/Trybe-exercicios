module.exports = (number) => {
  if (typeof number === 'string') {
    return 'O parâmetro deve ser um número';
  }
  if (number < 0) {
    return 'Negativo';
  }
  if (number > 0) {
    return 'Positivo';
  }
  return 'Neutro';
};
