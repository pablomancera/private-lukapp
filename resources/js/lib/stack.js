class ListNode {
    key;
    next;
    prev;
}

window.Stack = class Stack {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(key) {
        let newData = new ListNode();
        newData.prev = null;
        newData.next = this.head;
        newData.key = key;

        if (this.isEmpty()) {
            this.head = newData;
            this.tail = newData;
        } else {
            this.head.prev = newData;
            this.head = newData;
        }
    }

    pop() {
        let oldData = this.head;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return oldData;
    }

    peek() {
        return this.head;
    }

    isEmpty() {
        return !this.head;
    }
}