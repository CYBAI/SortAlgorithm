'use strict';

(function (module) {
  function Sort() {
    this.swap = function (data, i, j) {
      var tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
    };

    this.checkType = function (arr, iter) {
      if (!arr || !(arr instanceof Array)) { throw new Error('Please pass an array to sort.'); }
      return true;
    };

    this.checkIsObject = function (arr, iter) {
      if (!this.checkType(arr, iter)) {
        console.error('Please check the throw message.');
      }

      if (iter) {
        if (arr[0] instanceof Object) {
          if (!arr[0][iter]) {
            throw new Error('You pass an unknown attribute');
          }
          return true;
        }
      }

      return false;
    };
  }

  /**
   * implement Bubble Sort
   * wiki: http://en.wikipedia.org/wiki/Bubble_sort
   *
   * BestCase: O(n)
   * WorstCase: O(n^2)
   * AverageCase: O(n^2)
   *
   * SpaceComplexity: θ(1)
   * Stable/Unstable: Stable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.bubbleSort = function (arr, iter) {
    var isObject = this.checkIsObject(arr, iter);

    if (arr.length === 0) {
      return arr;
    }

    var n = arr.length;
    while (n) {
      var newN = 0;
      for (var _i = 1; _i < n; _i += 1) {
        if (isObject ? (arr[_i - 1][iter] > arr[_i][iter]) : (arr[_i - 1] > arr[_i])) {
          this.swap(arr, _i - 1, _i);
          newN = _i;
        }
      }
      n = newN;
    }
    return arr;
  };


  /**
   * implement Selection Sort
   * wiki: http://en.wikipedia.org/wiki/Selection_sort
   *
   * BestCase: O(n^2)
   * WorstCase: O(n^2)
   * AverageCase: O(n^2)
   *
   * SpaceComplexity: θ(1)
   * Stable/Unstable: Unstable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.selectionSort = function (arr, iter) {
    var isObject = this.checkIsObject(arr, iter);

    if (arr.length === 0) {
      return arr;
    }

    for (var _i = 0, len = arr.length; _i < len - 1; _i += 1) {
      var min = _i;
      for (var _j = _i + 1; _j < len; _j += 1) {
        if (isObject ? (arr[_j][iter] < arr[min][iter]) : (arr[_j] < arr[min])) {
          min = _j;
        }
      }

      if (min !== _i) {
        this.swap(arr, _i, min);
      }
    }

    return arr;
  };


  /**
   * implement Insertion Sort
   * wiki: http://en.wikipedia.org/wiki/Insertion_sort
   *
   * BestCase: O(1)
   * WorstCase: O(n^2)
   * AverageCase: O(n^2)
   *
   * SpaceComplexity: θ(1)
   * Stable/Unstable: Stable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.insertionSort = function (arr, iter) {
    var isObject = this.checkIsObject(arr, iter);

    if (arr.length === 0) {
      return arr;
    }

    for (var _i = 1, len = arr.length; _i < len; _i += 1) {
      var now = arr[_i];
      var j = _i;
      while (j > 0 && (isObject ? arr[j - 1][iter] > now[iter] : arr[j - 1] > now)) {
        arr[j] = arr[j - 1];
        j -= 1;
      }
      arr[j] = now;
    }

    return arr;
  };

  /**
   * implement Quick Sort
   * wiki: http://en.wikipedia.org/wiki/Quicksort
   *
   * and this algorithm reference from nczonline
   * link: http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
   *
   * BestCase: O(n log n)
   * WorstCase: O(n^2)
   * AverageCase: O(n log n)
   *
   * SpaceComplexity: O(n log n) ~ O(n)
   * Stable/Unstable: Unstable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.quickSort = function (arr, iter) {
    var isObject = this.checkIsObject(arr, iter);

    if (arr.length === 0) {
      return arr;
    }

    var _this = this;
    function partition(items, left, right) {
      var half = Math.floor((left + right) / 2);
      var pivot = isObject ? items[half][iter] : items[half];
      var i = left,
      j = right;

      while (i <= j) {
        if (isObject) {
          while (items[i][iter] < pivot) {
            i++;
          }
          while (items[j][iter] > pivot) {
            j--;
          }
        } else {
          while (items[i] < pivot) {
            i++;
          }
          while (items[j] > pivot) {
            j--;
          }
        }

        if (i <= j) {
          _this.swap(items, i, j);
          i++;
          j--;
        }
      }

      return i;
    }

    function sortFunc(items, left, right) {
      var index;
      if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
          sortFunc(items, left, index - 1);
        }
        if (right > index) {
          sortFunc(items, index, right);
        }
      }
      return items;
    }

    return sortFunc(arr, 0, arr.length - 1);
  };


  /**
   * implement Merge Sort
   * wiki: http://en.wikipedia.org/wiki/Merge_sort
   *
   * BestCase: O(n log n)
   * WorstCase: O(n log n)
   * AverageCase: O(n log n)
   *
   * SpaceComplexity: O(n)
   * Stable/Unstable: Stable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.mergeSort = function (arr, iter) {
    var isObject = this.checkIsObject(arr, iter);

    if (arr.length === 0) {
      return arr;
    }

    function merge(left, right) {
      var sorted = [];
      var lLen = left.length, rLen = right.length;
      var lIdx = 0, rIdx = 0;
      while (lIdx < lLen && rIdx < rLen) {
        if ((isObject ? left[lIdx][iter] < right[rIdx][iter] : left[lIdx] < right[rIdx])) {
          sorted.push(left[lIdx++]);
        } else {
          sorted.push(right[rIdx++]);
        }
      }

      return sorted.concat(left.slice(lIdx)).concat(right.slice(rIdx));
    }

    function sortFunc(data) {
      if (data.length === 1) {
        return data;
      }
      var middle = Math.floor(data.length / 2);
      var left = data.slice(0, middle);
      var right = data.slice(middle, data.length);
      left = sortFunc(left);
      right = sortFunc(right);
      return merge(left, right);
    }

    return sortFunc(arr);
  };

  /**
   * implement Shell Sort which is an improvement of Insertion Sort
   * wiki: http://en.wikipedia.org/wiki/Shellsort
   *
   * BestCase: O(n log n)
   * WorstCase: O(n^2)
   * AverageCase: depends on gap sequence
   *
   * SpaceComplexity: θ(1)
   * Stable/Unstable: Unstable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.shellSort = function (arr, iter) {
    var isObject = this.checkIsObject(arr, iter);

    if (arr.length === 0) {
      return arr;
    }

    var gap = Math.floor(arr.length / 2);
    for (; gap > 0; gap = Math.floor(gap / 2)) {
      // implements insertion sort
      for (var _i = gap, len = arr.length; _i < len; _i += 1) {
        var now = arr[_i];
        var j = _i;
        while (j >= gap && (isObject ? arr[j - gap][iter] > now[iter] : arr[j - gap] > now)) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
        arr[j] = now;
      }
    }

    return arr;
  };

  /**
   * implement Heap Sort which can be thought as an improved Selection Sort
   * wiki: http://en.wikipedia.org/wiki/Heapsort
   *
   * BestCase: O(n log n)
   * WorstCase: O(n log n)
   * AverageCase: O(n log n)
   *
   * SpaceComplexity: O(1)
   * Stable/Unstable: Unstable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.heapSort = function (arr, iter) {
    var isObject = this.checkIsObject(arr, iter);
    var len = arr.length;

    if (len === 0) {
      return arr;
    }

    var _this = this;
    function heapify(data, root, length) {
      while (true) {
        var child = root * 2 + 1;

        if (child >= length) {
          break;
        }

        if (child + 1 < length && (isObject ? data[child][iter] < data[child + 1][iter] : data[child] < data[child + 1])) {
          child += 1;
        }

        if ((isObject ? data[root][iter] < data[child][iter] : data[root] < data[child])) {
          _this.swap(data, child, root);
          root = child;
        } else {
          break;
        }
      }
    }


    var _i;
    // Build Max Heap
    for (_i = Math.floor(len / 2) - 1; _i >= 0; _i--) {
      heapify(arr, _i, len);
    }

    // Sorting
    for (_i = len - 1; _i >= 0; _i--) {
      this.swap(arr, 0, _i);
      heapify(arr, 0, _i);
    }

    return arr;
  };

  /**
   * implement Radix Sort
   * wiki: http://en.wikipedia.org/wiki/Radix_sort
   *
   * BestCase: O(d x (n + r))
   * WorstCase: O(d x (n + r))
   * AverageCase: O(d x (n + r))
   *
   * Explanation:
   * - d = excute time
   * - n = sequence length
   * - r = base
   *
   * SpaceComplexity: O(n x r)
   * Stable/Unstable: Stable
   *
   * @param {Array} arr  [Array or Array of Object to be sorted]
   * @param {String} iter [if arr is an array of object, please pass this argument as an attribute name]
   */
  Sort.prototype.radixSort = function (arr, iter, base) {
    var isObject = this.checkIsObject(arr, iter);
    var len = arr.length;

    if (len === 0) {
      return arr;
    }

    if (!base) {
      base = 10;
    }

    // Default Base is 10, and it will create BASE-size array.
    var bucket = [];
    while (bucket.push([]) < base);

    var max = Math.max.apply(Math, arr);
    var _r, _i;
    for (_r = 1; base >= _r; _r *= base) {
      // Sort array into bucket
      for (_i = 0; _i < len; _i += 1) {
        var idx;
        if (isObject) {
          idx = typeof arr[_i][iter] === 'string' ? Math.floor((arr[_i][iter].charCodeAt() / _r) % base) : Math.floor((arr[_i][iter] / _r) % base);
        } else {
          idx = Math.floor((arr[_i] / _r) % base);
        }
        bucket[idx].push(arr[_i]);
      }

      var _k = 0;
      for (_i = 0; _i < base; bucket[_i++] = []) {
        while (bucket[_i].length) {
          arr[_k] = bucket[_i].shift();
          _k += 1;
        }
      }
    }

    return arr;
  };

  module.exports = Sort;
})(module);
