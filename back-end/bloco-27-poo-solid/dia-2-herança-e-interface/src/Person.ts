class Person {
  protected _name: string = '';
  protected _birthDate: string = '';

  constructor(name: string) {
    this.name = name;
  }

  set birthDate(birthDate: string) {
    this._birthDate = birthDate;
  }

  get birthDate(): string {
    return this._birthDate;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  public sayHello() {
    return `${this._name} says hello`
  }

};

const person1 =  new Person('Guilherme');
person1.name = 'Guilherme';
person1.birthDate = '08/11/1993';
console.log(person1);
console.log(person1.sayHello());

export default Person;
