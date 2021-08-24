interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b,", "c"],
};

console.log("ewfw", items);

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue(item: T) {
    this.list.shift();
  }
}

const numQueue = new Queue<number>();

numQueue.enqueue(5);
