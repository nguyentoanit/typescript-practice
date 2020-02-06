function identity<T>(arg: T): T {
  return arg;
}

// Generics can “extends”
class PersonA {
  attribute: string
}
class PersonB extends PersonA {}
class PersonC {}

function identity2<T extends PersonA>(arg: T): T {
  return arg;
}

identity2(new PersonA())
identity2(new PersonB())
// identity2(new PersonC()) // Argument of type 'PersonC' is not assignable to parameter of type 'PersonA'.

//Generics can have a “default type value”
interface PersonD<T = string> {
  name: T
}

const james: PersonD = {
  name: 'James'
}

const robin: PersonD<number> = {
  name: 123
}

// const james: PersonD = {
//   name: 123 // is NOT valid: The expected type comes from property 'name' which is declared here on type 'PersonD<string>'
// }
