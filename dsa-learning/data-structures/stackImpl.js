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
            var head = this.head;
            this.head = node;
            this.head.prev = head;
        }
    };
    Stack.prototype.pop = function () {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        console.log(this.head);
        var head = this.head;
        this.head = this.head.prev;
        // Cleanup
        if (this.length === 0)
            this.head = undefined;
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
