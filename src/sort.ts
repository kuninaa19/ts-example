/**
 * 정렬
 * @desc 삽입 정렬 시간복잡도 n^2
 * @desc 버블 정렬 시간복잡도 n^2
 */
import { randArray } from "./arrayCreater";
// let sortArr: Array<number> = [4, 5, 1, 2, 11, 8, 3, 1, 2, 5];
const sortArr = randArray(7000);
const testSortArr = [
  { users: 0, maxUserNum: 1 },
  { users: 1, maxUserNum: 3 },
  { users: 1, maxUserNum: 1 },
  { users: 2, maxUserNum: 3 },
  { users: 3, maxUserNum: 3 },
  { users: 1, maxUserNum: 2 },
  { users: 0, maxUserNum: 2 },
  { users: 1, maxUserNum: 1 },
  { users: 2, maxUserNum: 2 },
  { users: 0, maxUserNum: 3 },
];

interface MyT {
  users: number;
  maxUserNum: number;
}

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

  testInsertSort(arr: Array<MyT>) {
    for (let i = 1; i < arr.length; i++) {
      let j;
      let key = arr[i];
      let keyLength = arr[i].users || 0;

      if (key.users === key.maxUserNum) {
        for (j = i; j > 0 && arr[j - 1].users === arr[j - 1].maxUserNum; j--) {
          arr[j] = arr[j - 1];
        }
      } else {
        for (
          j = i;
          j > 0 &&
          (arr[j - 1].maxUserNum === key.maxUserNum
            ? arr[j - 1].users > keyLength
            : arr[j - 1].maxUserNum < key.maxUserNum);
          j--
        ) {
          arr[j] = arr[j - 1];
        }
      }

      arr[j] = key;
    }

    return arr;
  }
}

const sort = new Sort<number>();
console.time("time");
const sortedArr = sort.testInsertSort(testSortArr);
console.timeEnd("time");
console.log("정렬된 배열", sortedArr);
