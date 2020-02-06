function identity<T>(arg: T): T {
  return arg;
}

// Generics can “extends”
class A {}
class B extends A {}
class C {}

function identity2<T extends A>(arg: T): T {
  return arg;
}

identity2(new A())
identity2(new C())
