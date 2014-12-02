'use strict';

var Sort = require('./lib/sortAlgorithm');
var Benchmark = require('benchmark');

var sort = new Sort();
var suite = new Benchmark.Suite;

var algName = [
  'bubbleSort',
  'selectionSort',
  'insertionSort',
  'quickSort',
  'mergeSort',
  'shellSort',
  'heapSort',
  'radixSort'
];

suite.add('NativeJSSort', function () {
  var unsortedArray = [];
  for (var i = 0; i < 10000; i += 1) {
    unsortedArray.push(Math.floor(Math.random() * 10000));
  }

  unsortedArray.sort(function (a, b) {
    return a - b;
  });
});

algName.forEach(function (name) {
  suite.add(name, function () {
    var unsortedArray = [];
    for (var i = 0; i < 10000; i += 1) {
      unsortedArray.push(Math.floor(Math.random() * 10000));
    }

    sort[name](unsortedArray);
  });
});


suite.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  console.log('Slowest is ' + this.filter('slowest').pluck('name'));
})
.run({ 'async': true });
