function getInformation(getFullname: (firstName: string, lastName: string) => string) {
    return getFullname;
}

var getFirstName = (firstName: string): string => {
    return firstName;
}

let getFullName = getInformation(getFirstName)

console.log(getFullName('Toan', 'Nguyen')); // Output: Toan
