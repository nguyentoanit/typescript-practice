function log(): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

@log()
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @log()
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Toan");
console.log(greeter.greet());