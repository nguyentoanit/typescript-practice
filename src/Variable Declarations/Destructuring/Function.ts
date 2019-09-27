console.log('-----Function Parameter Destructuring-----')
function f1([param1, param2]:[string, string]): void {
  console.log(`Param1: ${param1}`); // Param1: Hello
  console.log(`Param2: ${param2}`); // Param2: How are you?
}

f1(['Hello', 'How are you?']);
