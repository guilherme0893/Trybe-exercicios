let palavra = " ";

function verificaPalindrome(palavra){
    let reverso = palavra.split('').reverse().join('');
    if (palavra === reverso){
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome('xxx'));