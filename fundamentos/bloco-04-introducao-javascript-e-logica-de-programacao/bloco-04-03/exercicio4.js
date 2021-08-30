const m =5;
let espaco = Math.floor(m/2);
const numeroDeLinhas = Math.ceil(m/2);
let asterisco = "*";

for (let indexLinha = 0; indexLinha < numeroDeLinhas; indexLinha +=1){
    let = linhaParaImprimir = "";
    for (let indexEspaco = 0; indexEspaco < espaco; indexEspaco +=1){
        linhaParaImprimir += "";
    }
    linhaParaImprimir += asterisco;
    asterisco += "**";
    espaco -= 1;
    console.log(linhaParaImprimir);
}


let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};


