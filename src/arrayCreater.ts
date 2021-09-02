let arr: Array<number> = [];
function randArray(number: number) {
  for (let i = 0; i < number; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }
  return arr;
}

export { randArray };
