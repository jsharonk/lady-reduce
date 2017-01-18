
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

  // describe('#reduce()', function() {
  //   it('should apply a function against an accumulator and each value of the array to reduce it to a single value', function() {
  //     [0, 1, 2, 3].reduce(function(a, b) { 
  //       return a + b;
  //     }, 0).should.equal(6);
  //   });
  //   it('should apply a function against an accumulator and each value of the array to reduce it to a single value', function() {
  //     let names = ['george', 'christine', 'eunice', 'george'];

  //     let countedNames = names.reduce(function(allNames, name) {
  //       if (name in allNames) {
  //         allNames[name] += 1;
  //       } else {
  //         allNames[name] = 1;
  //       }
  //       return allNames;
  //     }, {}).should.equal({'george': 2, 'christine': 1, 'eunice': 1});
  //  });
   it ('should use reduce to return the sum of monthly cycles', function() {
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
   });
  // });
  // it ('should return the average length of monthly cycles', function() {

  // });
