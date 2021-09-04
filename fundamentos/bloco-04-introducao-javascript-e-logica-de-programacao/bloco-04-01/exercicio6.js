let peça ="Peão"

switch(peça.toLowerCase()){
    case 'cavalo':
        console.log('anda em l');
        break;
    
    case 'peão':
        console.log('anda para frente uma casa');
        break;

    default:
        console.log('Não é uma peça do xadrez')
}