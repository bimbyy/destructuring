/*excercise 1

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846
*/

/* excercise 2

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // yearsNeptuneDiscovered:1846,yearsmarsdiscovered:1659
  */

 /*excercise 3

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
  getUserData({}) // Your name is undefined and you like green
  */

 /* excercise Array 1

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

  console.log(first); // Maya
  console.log(second); // Marisa
  console.log(third); // Chi
  */
 /* excercise Array 2

  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles','warm woolen mittens','Brown paper packages tied up with strings']
  */

 /* excercise Array 3

  let numbers = [10, 20, 30];
  [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
  
  console.log(numbers) // [10,30,20]
  */

  //ES2015 Refactoring
/*var obj = {
    numbers: {
        a: 1,
        b: 2
      }
    };
    
    var a = obj.numbers.a;
    var b = obj.numbers.b;
    */

    //object destructuring ES2015 version
        const  obj = {
            numbers: {
                a:1,

                b:2
            }
        };
        const {a,b} = obj.numbers
/* ES2015 Array Swap
    var arr = [1, 2];
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    */
//ES2015 One-Line Array Swap with Destructuring
        var arr = [1,2];
        var temp = arr[0];
    [arr[0],arr[1]] = [arr[1],arr[0]]

    //raceResults:

    raceResults(['Tom','Margaret','Allison','David','Pierre'])
    
        const raceResutlts = ([first,second,third,...rest]) => ({first,second,third,rest})
