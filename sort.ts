/**
 * 정렬
 * @desc 삽입 정렬 시간복잡도 n^2
 * @desc 버블 정렬 시간복잡도 n^2
 */

class Sort<T> {
  insertionSort(arr: Array<number>) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j;
      for (j = i; j > 0 && arr[j - 1] > key; j--) {
        arr[j] = arr[j - 1];
      }
      arr[j] = key;
    }
    return arr;
  }

  bubbleSort(arr: Array<number>) {
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 1; j < arr.length - i; j++) {
        if (arr[j] < arr[j - 1]) {
          temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
}

let sortArr: Array<number> = [4, 5, 1, 2, 11, 8, 3, 1, 2, 5];
const sort = new Sort<number>();
console.time("time");
const sortedArr = sort.bubbleSort(sortArr);
console.timeEnd("time");
console.log("정렬된 배열", sortedArr);
