"use strict";
// Data-Structures - Queue
// Basically a Queue is a specific implementation of a Linked List
// A queue is a linear data structure that follows the First In First Out (FIFO) principle.
// A good example of a queue is any queue of consumers for a resource where the consumer that
// came first is served first.
// The difference between stacks and queues is in removing. In a stack we remove the item the most
// recently added; in a queue, we remove the item the least recently added.
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    };
    Queue.prototype.deque = function () {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        var head = this.head;
        this.head = this.head.next;
        // free - Just in case for no garbage collection
        head.next = undefined;
        return head.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    Queue.prototype.getAll = function () {
        if (!this.head) {
            return undefined;
        }
        // const head = this.head
        do {
            var item = this.head;
            var nextItem = item.next;
            console.log(nextItem.value);
        } while (this.head.next);
    };
    return Queue;
}());
exports.default = Queue;
var queue1 = new Queue();
console.log(queue1.peek());
queue1.enqueue(3);
console.log(queue1.peek());
queue1.enqueue(5);
console.log(queue1.peek());
console.log(queue1.getAll());
