"use strict";
// Implementation of a stack.
// Refer to stacks.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Basic operations
// push, pop, peek
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = undefined;
        this.length = 0;
    }
    Stack.prototype.push = function (item) {
        var node = { value: item, prev: undefined };
        this.length++;
        if (!this.head) {
            this.head = node;
        }
        else {
            node.prev = this.head;
            this.head = node;
        }
    };
    Stack.prototype.pop = function () {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            var head_1 = this.head;
            // Cleanup
            this.head = undefined;
            return head_1 === null || head_1 === void 0 ? void 0 : head_1.value;
        }
        var head = this.head;
        this.head = head.prev;
        // If you had to manage memory, you would need to clean up the head
        return head.value;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Stack;
}());
exports.default = Stack;
var library = new Stack();
library.push('The Hobbit');
console.log('Stack head is: ', library.peek());
console.log('Library size is: ', library.length);
library.push('Lord of the Rings I');
console.log('Stack head is: ', library.peek());
console.log('Library size is: ', library.length);
library.push('Lord of the Rings II');
console.log('Stack head is: ', library.peek());
console.log('Library size is: ', library.length);
library.push('Lord of the Rings III');
console.log('Stack head is: ', library.peek());
console.log('Library size is: ', library.length);
console.log('Removing book: ', library.pop());
console.log('Library size is: ', library.length);
console.log('Stack head is: ', library.peek());
console.log('Removing book: ', library.pop());
console.log('Library size is: ', library.length);
console.log('Stack head is: ', library.peek());
console.log('Removing book: ', library.pop());
console.log('Library size is: ', library.length);
console.log('Stack head is: ', library.peek());
console.log('Library size is: ', library.length);
console.log('Removing book: ', library.pop());
console.log('Library size is: ', library.length);
console.log('Stack head is: ', library.peek());
