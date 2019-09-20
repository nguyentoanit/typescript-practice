class Person {
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  firstName: string
  lastName: string
}

function f({firstName, lastName}: Person): void {
  console.log(`First Name: ${firstName}`); // First Name: Toan
  console.log(`Last Name: ${lastName}`); // Last Name: Nguyen
}

let persion1 = new Person('Toan', 'Nguyen');
f(persion1)
