class Runable {
    runable: boolean;
    run() {
        console.log("Running!");
    }
}

class Flyable {
    flyable: boolean;
    fly() {
        console.log("Flying!");
    }
}

interface Animal extends Runable, Flyable {}

class Animal {
    move() { this.runable ? this.run() : this.flyable ? this.fly() : null; }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}

applyMixins(Animal, [Runable, Flyable]);

let dog = new Animal();
dog.runable = true;

dog.move();
