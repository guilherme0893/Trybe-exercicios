import IPerson from "./IPerson";
import Person from "./Person";

class teste extends Person implements IPerson {
  public sayHello(): any {
    return console.log('Hello');
  }
};

const teste1 = new teste('teste', 'teste');
console.log(teste1);
console.log(teste1.sayHello());
