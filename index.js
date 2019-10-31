// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `exampleFunction`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them up.
 * 
 * For example, if we invoke `exampleFunction` passing 5 and 3,
 * the returned value should be 8.
*/
function exampleFunction(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {
    const obj = {
      id: id,
      name: name,
      email: email,
    };
    return obj;
  }
makePersonObject(5, 'Leia', 'leia@leia.com');
  
  

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,    /////this means the object already exists, and only has the name property in it. The argument IS the parameter
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/
// function getName(id, name, email) {
//   const personOne = {
//     id: id,
//     name: name,
//     email: email,
//   };
//   return ('Hello, my name is ' + this.name);               //////first attempt. Did not understand. 
  
// }
// getName(1, 'Leia', 'leia@leia.com');
 
function getName(obj) {                       ////the argument IS the object itself. The object has a property of a name (probably among others), and it's asking for the function to return just the name in a string.
  return `Hello, my name is ${obj.name}`;    ////it calls the object, and asks specifically for the name inside. So I am using the obj.name pull.
}

/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/
function makeSmartPerson(name) {  ///function taking only the name argument
  const smartPerson= {    ///THIS IS THE OBJECT.
    name: name,               ///this is the name within the object
    sum: function(a, b) {       ////This is the sum function that is inside the object, it returns a number and a second number added
      return a + b;            ////the actual sum function operators. 
    },
    speak: function() {            ////this is the speak function, it takes no arguments, this is also inside the original object
      return 'Hello, my name is ' + this.name;           ////this is the string returned, "this" is being used to reference the specific name within the parent object.
    },
  };
  return smartPerson;                              ////the question asks for a return. This is that return. it's returning the object. 
}
  

/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(inventory, index)   {               ///inventory is the referenced, premade inventory list; index would be the item number within the inventory itself.
 return 'This is a ' + inventory[index].car_make + inventory[index].car_model;   ///this is returning .inventory-->index number within inventory -- .car_make for specifically the car make.
}
/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
// function getLastCarInfo(inventory) {
//   return 'This is a ' + inventory[49].car_make  + inventory[49].car_model;    ///first attempt: this requires knowledge of the length of the list.  This works, but is inefficient. 
// }

function getLastCarInfo(inventory) {
  return 'This is a ' + inventory[inventory.length - 1].car_make + inventory[inventory.length - 1].car_model;  //this is the adapting one. it uses the indexd 0 length minus -1. if it's 50 cars. it would be 49 total, since 0 is indexed. so. 50 items, minus 1, is the last in the index 
}
/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(inventory, idNum) {
  return 'This is a ' +  inventory[idNum - 1].car_make + inventory[idNum - 1].car_model;  ///like the one above, but this time, it allows you to input the specific number you wish to view. Same principle. 0 is indexed, so number of item -1 is the correct position
}

/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/

function sortCarInventory(arr) {                    //inventory function with inventory list
  return arr.sort (                                     ///sort method insertion
      function (a, b) {                                    ///two variables, for comparison use, arbitrarily named a and b for ease
          if (a["car_model"] < b["car_model"]){                       ///initial IF statement. could also be structured with a.car_model < b.car_model
              return -1;                                          ///this will move UP the list
          } else if (a["car_model"] > b["car_model"]){              ///opposite of first if statement, second in a list, will use elseif because the else comes next. this moves an item DOWN the list
              return 1;                                          ////moves item down the list, 
          } else {                                            ////final else statement
              return 0;                                           ////default
          }
      }
  )
}

// function sortCarInventory(inventory) {                   ////original attempt. used Turnary language. 
//   inventory.sort((a, b) => {
//     if (a.car_model < b.car_model) {
//       return 1
//     } elseif {
//       return -1
//     } else {
//       return 0
//     } 

//   })
// }

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(inventory) {                           ///original function
  const modelYear = [];                                          ////this creates a BLANK, NEW array/list
  for(let i=0; i < inventory.length; i++) {                       ////original For-loop, using inventory.length.
    modelYear.push(inventory[i].car_year)                            ////This is pushing items into the new list based on the inventory/[i] current liste item/ car_year
  }
  return modelYear;                                                     ////once complete, this returns the new list. 
}



/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
// function getOlderCars(inventory, num1) {
//   const olderCars = []; 
//     for(let i=0; i < inventory.length; i++) {
//       switch(inventory[i].car_year) {
//         case "num1":
//          olderCars.push(inventory[i].num1)
//         break;
//         case "highest":
//           olderCars.push(inventory[i].length)
//          break;
//           default:
//     }
//     return olderCars;
//   }
// }

function getOlderCars(inventory,year) {
  let newInventory =[];
  inventory.forEach(function(a){
      if(a.car_year <= year){
          newInventory.push(a);
      }
  })
    return newInventory;
}



/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(inventory) {
  const germanCars = [];
  for(let i=0; i < inventory.length; i++) {
    switch(inventory[i].car_make) {           ///new concept. Switch will switch the i for each case underneath. This searches the array, and then executes the code below based on each case
      case "Audi":
      case "Mercedes-Benz":
      case "Volkswagen":
      case "BMW":
        germanCars.push(inventory[i])    ///  This is the push into the new array, 
        break;                                      ////this break happens after every push
        default:                              ////this brings the case back to default
        break;                               ////breaks again before switching cases and starting over
    }
  }
  return germanCars;                           ////this will return the newly filled array once it's complete. 
}

/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * 
 * const addFive = function(num) {
*    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
*/
const sum =(a, b) => (a+b);
const addFive =(num1) => (num1 + 5);
const argTimesTwo =(num1) => (num1 *2);

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(num1) {
  const odometer = {
    odometer: num1,
    drive: function(dist) {
      return dist*num1
    },
    // if (drive <= num1) 
  }
  return odometer
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (exampleFunction) { module.exports.exampleFunction = exampleFunction }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}
