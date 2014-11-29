'use strict';

var Sort = require('../lib/sortAlgorithm');
var sort = new Sort();

describe('Sort Algorithm', function () {
  // native js sort function with compareFunction argument
  it('Should be sorted', function () {
    expect([2,4,19,1,8,9].sort(function (a, b) {
      return a - b;
    })).toEqual([1,2,4,8,9,19]);
  });
});

var sortArray = ['bubbleSort', 'selectionSort', 'insertionSort', 'quickSort', 'mergeSort'];

sortArray.forEach(function (sortAlgorithmName) {
  describe(sortAlgorithmName, function () {
    it('Plain Array should be sorted', function () {
      expect(sort[sortAlgorithmName]([2,3,1,4,5])).toEqual([1,2,3,4,5]);
    });

    it('Empty Array should return empty array', function () {
      expect(sort[sortAlgorithmName]([])).toEqual([]);
    });

    var employee = [
      {name:'George', age:32, retiredate:'March 12, 2014'},
      {name:'Edward', age:17, retiredate:'June 2, 2023'},
      {name:'Christine', age:58, retiredate:'December 20, 2036'},
      {name:'Sarah', age:62, retiredate:'April 30, 2020'}
    ];

    var sortedByAgeEmployee = [
      {name:'Edward', age:17, retiredate:'June 2, 2023'},
      {name:'George', age:32, retiredate:'March 12, 2014'},
      {name:'Christine', age:58, retiredate:'December 20, 2036'},
      {name:'Sarah', age:62, retiredate:'April 30, 2020'}
    ];

    var sortedByNameEmployee = [
      {name:'Christine', age:58, retiredate:'December 20, 2036'},
      {name:'Edward', age:17, retiredate:'June 2, 2023'},
      {name:'George', age:32, retiredate:'March 12, 2014'},
      {name:'Sarah', age:62, retiredate:'April 30, 2020'}
    ];

    it('Object should be sorted with an attribute name', function () {
      expect(sort[sortAlgorithmName](employee, 'age')).toEqual(sortedByAgeEmployee);
    });

    it('if passed attribute is not number, then it will return NaN', function () {
      expect(sort[sortAlgorithmName](employee, 'name')).toEqual(sortedByNameEmployee);
    });
  });
});
