# Sort Algorithm in JS

A sort library for javascript. Only sort `array` or `array of objects`.

### Including following sort algorithms:
- Bubble Sort
- Selection Sort
- Insertion Sort
- Quick Sort
- Merge Sort
- Shell Sort
- Heap Sort
- Radix Sort

## Usage

```js
var SortAlgorithm = require('sortAlgorithm');
var sort = new SortAlgorithm();
sort.bubbleSort([3,1,2,5,4]); // return [1,2,3,4,5]
var people = [{name: 'John', age: 32}, {name: 'Mary', age: 15}, {name: 'Alex', age: 21}];
sort.quickSort(people, 'age'); // return [{name: 'Mary', age: 15}, {name: 'Alex', age: 21}, {name: 'John', age: 32}]
sort.mergeSort(people, 'name'); // return [{name: 'Alex', age: 21}, {name: 'John', age: 32}, {name: 'Mary', age: 15}]
```

## API

### .nameSort(arr, [iter])
all functions are in camelcase as `bubbleSort`, so just change `name` to which algorithm you want to use.

#### arr

***Required***

Type: `Array`

Array or Array of Object to be sorted

#### iter

***Optional***

Type: `String`

if arr is an `array of object`, please pass this argument as an attribute name

## Benchmark

``` js
// when sort 10000 random numbers
NativeJSSort x 305 ops/sec ±1.59% (83 runs sampled)
bubbleSort x 3.42 ops/sec ±0.26% (13 runs sampled)
selectionSort x 6.31 ops/sec ±0.17% (20 runs sampled)
insertionSort x 13.42 ops/sec ±0.27% (37 runs sampled)
quickSort x 708 ops/sec ±1.17% (93 runs sampled)
mergeSort x 147 ops/sec ±0.60% (80 runs sampled)
shellSort x 501 ops/sec ±1.38% (85 runs sampled)
heapSort x 397 ops/sec ±1.03% (84 runs sampled)
radixSort x 702 ops/sec ±1.29% (88 runs sampled)
Fastest is quickSort,radixSort
Slowest is bubbleSort

```

## License

MIT
