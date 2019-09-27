function getInformation(getFullname: (firstName: string, lastName: string) => string) {
    return getFullname;
}

var getFirstName = (firstName: string): string => {
    return firstName;
}

let getName = getInformation(getFirstName)

console.log(getName('Toan', 'Nguyen')); // Output: Toan
