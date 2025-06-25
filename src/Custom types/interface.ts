// Custom types using interface
// Interfaces are used to define the structure of an object.
// They can be used to define the shape of an object, including its properties and methods.
// They are similar to type aliases, but they can be extended and implemented by classes.
// They are also used to define the shape of an object that is passed as an argument to a function.
// Interfaces can be used to define the shape of an object that is returned by a function.
// They can also be used to define the shape of an object that is used as a parameter in a function.
// Interfaces can be used to define the shape of an object that is used as a return type
// in a function.

interface User {
  id : number;
  name : string;
}
function printUser(user: User): any{
  console.log(`${user.id}: ${user.name}`)
}
printUser({
  id:25570,
  name:"prisca"
})

// Output: 25570: prisca