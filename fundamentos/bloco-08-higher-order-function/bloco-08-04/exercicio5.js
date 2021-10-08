const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, letra) => 
    acc + letra.split('').reduce((acc2, letraA) => {
      if (letraA === 'a' || letraA === 'A') return acc2 + 1;
      return acc2
    }, 0), 0);
}
console.log(containsA());