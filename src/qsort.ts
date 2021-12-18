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

// var arr: Array<number> = [1, 6, 8, 2, 5];
import { randArray } from "./arrayCreater";

const arr = randArray(6000);

var position = function (arr: Array<number>, left: number, right: number) {
  var i = left;
  var j = right;
  var pivot = arr[left];

  //정렬없이 피봇을 더 큰수/더 작은 수 좌우 배치
  while (i < j) {
    // 피봇보다 클때
    while (arr[j] > pivot) j--;

    // i가 j보다 작고 피봇보다 arr[i]값이 작을때 다음 순서로 이동
    while (i < j && arr[i] <= pivot) i++;

    // swap
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  arr[left] = arr[j];
  arr[j] = pivot;

  return j;
};

// 위키피디아 퀵소트
var quicksort = function (arr: Array<number>, left: number, right: number) {
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

// 중복되는 값에 취약한 퀵소트(알고리즘 도서)
const qsort = function (arr: Array<number>, l: number, u: number) {
  if (l >= u) {
    // at most on element, do nothing
    return;
  }
  //goal : partition array around a particular value,
  let m = l;
  for (let i = l + 1; i <= u; i++) {
    // invariant(불변) : x[l+1..m] < x[l] && x[m+1..i-1] >= x[l]
    if (arr[i] < arr[l]) {
      [i, m] = [++m, i];
    }
    [m, l] = [l, m];
  }

  // x[l..m-1] < x[m] <= x[m+1..u]
  qsort(arr, l, m - 1);
  qsort(arr, m + 1, u);

  return arr;
};

// 중복값 개선한 퀵소트 (알고리즘 도서)
var qsort2 = function (arr: Array<number>, l: number, u: number) {
  if (l >= u) {
    return;
  }
  let pivot = arr[l];
  let i = l;
  let j = u + 1;

  while (i > j) {
    while (i <= u && arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    [j, i] = [i, j];
  }

  [j, l] = [l, j];

  qsort2(arr, l, j - 1);
  qsort2(arr, j + 1, u);

  return arr;
};

var qsort3 = function (arr: Array<number>, l: number, u: number) {
  if (l >= u) {
    return;
  }
  let pivot = arr[l];
  let i = l;
  let j = u + 1;

  while (i > j) {
    while (i <= u && arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    [j, i] = [i, j];
  }

  [j, l] = [l, j];

  qsort3(arr, l, j - 1);
  qsort3(arr, j + 1, u);

  return arr;
};

console.time("e");
const b = qsort(arr, 0, arr.length - 1);
console.timeEnd("e");

console.log("b", b);

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
