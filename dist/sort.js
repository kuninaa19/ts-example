"use strict";
/**
 * 정렬
 * @desc 삽입 정렬 시간복잡도 n^2
 * @desc 버블 정렬 시간복잡도 n^2
 */
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.insertionSort = function (arr) {
        for (var i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = void 0;
            for (j = i; j > 0 && arr[j - 1] > key; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = key;
        }
        return arr;
    };
    Sort.prototype.bubbleSort = function (arr) {
        var temp = 0;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 1; j < arr.length - i; j++) {
                if (arr[j] < arr[j - 1]) {
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    };
    return Sort;
}());
var sortArr = [4, 5, 1, 2, 11, 8, 3, 1, 2, 5];
var sort = new Sort();
console.time("time");
var sortedArr = sort.bubbleSort(sortArr);
console.timeEnd("time");
console.log("정렬된 배열", sortedArr);
