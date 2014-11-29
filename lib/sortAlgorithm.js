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
      return [];
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
      return [];
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
      return [];
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
      return [];
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
      return [];
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

  module.exports = Sort;
})(module);
