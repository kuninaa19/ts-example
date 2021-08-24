"use strict";
var items = {
    list: ["a", "b,", "c"],
};
console.log("ewfw", items);
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function (item) {
        this.list.shift();
    };
    return Queue;
}());
var numQueue = new Queue();
numQueue.enqueue(5);
