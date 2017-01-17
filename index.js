//i am always seeing this example
//it seems that everyone is wanting to see a + b
//i get it, i agree, addition is cool, but
//what is a and b to me?
//why am i so invested in seeing them added up?
var sum = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
}, 0);
// sum is 6

//how might an example of functional programming 
//more relevant, more functional, for me look?
const periodCycle = [
  {month: 'janToFeb', 
    cycleLength: 28}, 
  {month: 'febToMar',
    cycleLength : 21},
  {month: 'marToApr',
    cycleLength : 30},
  {month: 'aprToMay', 
    cycleLength : 22},
  {month: 'mayToJune', 
    cycleLength : 21},
  {month: 'juneToJul', 
    cycleLength: 29},
  {month: 'julToAug', 
    cycleLength: 28},
  {month: 'augToSept', 
    cycleLength: 26},
  {month: 'septToOct', 
    cycleLength: 28},
  {month: 'octToNov',
    cycleLength : 21},
  {month: 'novToDec', 
    cycleLength : 29},
  {month: 'decToJan',
    cycleLength : 23}
];

//my question: am i anemic?
//
//if my average cycleLengh is less than 21, i am anemic
//if 365/avg <= 4, i am exercising too much 



//the draft progression

// let cyclesArr = periodCycle
// .map(function(month) {
//   return month.cycleLength;
// })

// console.log(cyclesArr);


// let total = newArray.reduce(function(prev,curr) {

//   return (prev + curr) 
// })

// total/ 12
// //

// (periodCycle.map((month) => {
//   return month.cycleLength;
// }).reduce((prev, curr) =>  {
//   return prev + curr;
// })) / 12

//

(periodCycle.map((month) =>  month.cycleLength)
.reduce((prev, curr) =>  prev + curr )) / 12



//cacluating difference in dates
// function g(y,m,d) {
//   m = (m + 9) % 12
//   y = y - m/10
//   return 365*y + y/4 - y/100 + y/400 + (m*306 + 5)/10 + ( d - 1 )
// }

// console.log(g(2016, 11, 27)- g(2016, 12, 25));
// // Difference between two dates = g(y2,m2,d2) - g(y1,m1,d1)




