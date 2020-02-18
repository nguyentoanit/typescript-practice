/**
 * To check if x is assignable to y, we first look at the parameter list.
 * Each parameter in x must have a corresponding parameter in y with a compatible type.
 * Note that the names of the parameters are not considered, only their types
 */
namespace CompareTwoFunctions {
  let x = (a: number) => 0;
  let y = (b: number, s: string) => 0;
  
  y = x; // OK
  // x = y; // Error
}
