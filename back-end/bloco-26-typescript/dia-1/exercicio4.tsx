import readline from "readline-sync";
import Months from "./exercicio2";
import Seasons from "./exercicio3";

const months = Object.values(Months);

const seasons = Object.values(Seasons);

const monthChoice = readline.keyInSelect(months, 'Pick a month');

const southSeasons = {
  [Seasons.Fall]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.Winter]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.Spring]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.Summer]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
};

const northSeasons = {
  [Seasons.Spring]: southSeasons[Seasons.Fall],
  [Seasons.Summer]: southSeasons[Seasons.Winter],
  [Seasons.Fall]: southSeasons[Seasons.Spring],
  [Seasons.Winter]: southSeasons[Seasons.Summer],
}

const hemispheres = {
  "Norte": northSeasons,
  "Sul": southSeasons
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");

const month = Object.values(Months)[monthChoice];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month)) console.log(seasons);
});

