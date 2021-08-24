"use strict";
/**
 * 퀵 정렬
 * 시간 복잡도: 최악 - O(n2), 최선 - O(nlogn), 평균 - O(nlogn)
 * 공간 복잡도: O(1)
 * @param {Array} arr
 * @param {int} left
 * @param {int} right
 * @code
    var arr = [ 4, 5, 1, 2, 11, 8, 3, 1, 2, 5 ];
    quicksort(arr, 0, arr.length-1);
 */
var position = function (arr, left, right) {
    var _a;
    var i = left;
    var j = right;
    var pivot = arr[left];
    //정렬없이 피봇을 더 큰수/더 작은 수 좌우 배치
    while (i < j) {
        // 피봇보다 클때
        while (arr[j] > pivot)
            j--;
        // i가 j보다 작고 피봇보다 arr[i]값이 작을때 다음 순서로 이동
        while (i < j && arr[i] <= pivot)
            i++;
        // swap
        _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
    }
    arr[left] = arr[j];
    arr[j] = pivot;
    return j;
};
var quicksort = function (arr, left, right) {
    if (left < right) {
        //기준점을 찾고 기준점을 중심으로 더 작은수, 더 큰수 분류
        var i = position(arr, left, right);
        //기준점 기준 좌측 정렬
        quicksort(arr, left, i - 1);
        //기준점 기준 우측 정렬
        quicksort(arr, i + 1, right);
    }
    return arr;
};
var arr = [1, 6, 8, 2, 5];
console.time("e");
quicksort(arr, 0, arr.length - 1);
console.timeEnd("e");
// let m = Math.floor(cArr.length / 2);
// function qsort(l: number, u: number) {
//   if (l >= u) {
//     return;
//   }
//   for (let i = l + 1; i <= u; i++) {
//     if (cArr[i] < cArr[l]) {
//       let temp = i;
//       i = ++m;
//       m = temp;
//       [cArr[i], cArr[m]] = [cArr[++m], cArr[i]];
//     }
//   }
//   let temp = l;
//   l = m;
//   m = temp;
//   [cArr[m], cArr[l]] = [cArr[l], cArr[m]];
// }
// qsort(cArr[0], cArr[m - 1]);
// qsort(cArr[m + 1], cArr[cArr.length - 1]);
// console.log(cArr);
