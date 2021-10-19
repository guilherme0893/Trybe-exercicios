const fetchCryptoCoins = async () => {
  const url = `https://api.coincap.io/v2/assets`;

  const listOfCoins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  
  return listOfCoins
};

const creatCoinsList = async () => {
  const coins = await fetchCryptoCoins();
  const coinsList = document.getElementById('crypto-coins');
  // é possível usar uma HOF para gerar as diferentes li

  // é possível indicar um valor matemático comparativo 
  const arrayOfCoins = coins.filter((coin) => Number(coin.rank) <= 10);

  // é possível chamar uma HOF e dentro dos {} criar um elemento e constante do DOM
  arrayOfCoins.forEach((coin) => {const coinsListLi = document.createElement('li');

  // alterando os valores para number e depois deixando dois numeros depois do ponto
  const valueInDolar = Number(coin.priceUsd)

  coinsListLi.innerText = `${coin.name}: (${coin.symbol}) ${valueInDolar.toFixed(2)}`;

  coinsList.appendChild(coinsListLi);
  });
}

window.onload = () => creatCoinsList();
