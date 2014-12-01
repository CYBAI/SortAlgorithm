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

## License

MIT
