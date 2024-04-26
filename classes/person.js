/*
1. instance variables that include `firstName`, `lastName`, and `age`
2. an instance method called `introduce` that will introduce the person by using
   `console.log` with a string saying, "Hi, I'm `<firstName>` `<lastName>`, and
   I'm `<age>` years old.".
3. a static method called `introducePeople` that will take in an array of
   `Person` instances.

   Have `introducePeople` throw an Error with a message of
   "introducePeople only takes an array as an argument." if the argument is not
   of type `Array`.

   Have `introducePeople` throw an Error with a message of
   "All items in array must be Person class instances." if any of the items in
   the array are not instances of the `Person` class.

   If no Errors are thrown then `introducePeople` should call `introduce` on
   each of the `People` instances in the input array.

>Tip: We'll dive into `Errors` in more detail later. For now, just know that
 an `Error` is also a `Class`, and when you throw a new error the
 first argument will be that error's message.
 Use MDN's [Error Examples][errExp] and [Error Constructor][errCon]
 to help you out if you're stuck.

Run the test specs in the __test/person-spec.js__ file to test that you
have created the `Person` class correctly:
*/


class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
  static introducePeople(person){
    if(typeof person !== Array) {
      throw new Error('introducePeople only takes an array as an argument.')
    }
    const isArray = person.every(el => el instanceof Person)

    if(!isArray) throw new Error('All items in array myst be Person class instances.')

    else person.forEach(el => el.introduce())
  }
}

const person = new Person('Damon', 'Ryon', 35)

person.introduce()

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
