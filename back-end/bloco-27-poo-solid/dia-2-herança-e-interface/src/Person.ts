class Person {
  protected _name: string = '';
  protected _birthDate: string;

  constructor(name: string, _birthDate: string) {
    this.name = name;
    this._birthDate = _birthDate;
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

  public sayGoodBye() {
    return `${this._name} says goodbye`
  }

};

const person1 =  new Person('Guilherme', '08/11/1993');
// person1.name = 'Guilherme';
// person1.birthDate = '08/11/1993';
console.log(person1);
console.log(person1.sayHello());
console.log(person1.sayGoodBye());

export default Person;
