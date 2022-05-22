import Person from "./Person";

class Student extends Person {
  _matricula: number = 0;

  constructor(name: string, matricula: number) {
    super(name);
    this._name = name;
    this._matricula = matricula;
  }

  set matricula(matricula: number) {
    if (this._matricula)
    this._matricula = matricula;
  }

  get matricula(): number {
    return this._matricula;
  }
}

const student = new Student('ABC', 2345678);
student.name = 'ABC';
student.birthDate = '1/1/1'
console.log(student);
console.log(student.matricula);
student._matricula = 5678;
console.log(student.matricula);
console.log(student.sayHello());