class ListNode {
    key;
    next;
    prev;
}

window.LinkedList = class LinkedList {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    pushFront(key) {
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

    topFront() {
        return this.head;
    }

    popFront() {
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

    pushBack(key) {
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

    topBack() {
        return this.tail;
    }

    popBack() {
        let oldData = this.tail;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        return oldData;
    }

    findKey() {
        let data = this.head;
        while (data) {
            if (data.key == key) {
                return true;
            }
            data = data.next;
        }
        return false;
    }

    erase(index) {
        let data = this.head;
        for (let i = 0; i < index; i++) {
            if (!data) {
                return;
            }
            data = data.next;
        }
        if (data == this.head) {
            this.head = data.next;
        } else if (data == this.tail) {
            this.tail = data.prev;
        } else {
            data.prev.next = data.next;
            data.next.prev = data.prev;
        }
    }

    isEmpty() {
        return !this.head;
    }
}