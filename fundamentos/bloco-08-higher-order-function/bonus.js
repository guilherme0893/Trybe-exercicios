const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  let dragonAttackValue = Math.floor((Math.random() * (dragon['strength'] - 15) + 15));
  return dragonAttackValue;
}
console.log(dragonAttack());

const warriorAttack = () => {
  let warriorAttackValue = Math.floor((Math.random() * (warrior['strength'] - (warrior['strength'] * warrior['weaponDmg']) + (warrior['strength'] * warrior['weaponDmg']))));
  return warriorAttackValue;
}
console.log(warriorAttack());

const mageAttack = () => {
  let createdDano = Math.floor((Math.random() * ((mage['intelligence'] * 2) - (mage['intelligence'])) + mage['intelligence']))
  let mageObject = {
    dano: createdDano,
    mana: 15,
  }
  return mageObject
}
console.log(mageAttack());
