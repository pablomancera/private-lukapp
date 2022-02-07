class ListNode {
    key;
    next;
    prev;
}

window.Queue = class Queue {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(key) {
        let newData = new ListNode();
        newData.prev = this.tail;
        newData.next = null;
        newData.key = key;

        if (this.isEmpty()) {
            this.head = newData;
            this.tail = newData;
        } else {
            this.tail.next = newData;
            this.tail = newData;
        }
    }

    dequeue() {
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