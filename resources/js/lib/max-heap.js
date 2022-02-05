class MaxHeap {
    #size = 0;
    #data = [];

    constructor(arr) {
        if (!arr) {
            return;
        }

        this.#data = arr;
        for (let i = Math.floor(arr.length / 2); i > 0; i--) {
            this.#siftDown(i);
        }
    }

    insert(obj) {
        if (this.#size < this.#data.length) {
            this.#data[this.#size] = obj;
        } else {
            this.#data.push(obj);
        }

        this.#siftUp(this.#size);

        this.#size++;
    }

    extractMax() {
        if (this.#size < 1) {
            return null;
        }

        this.#size--;
        let result = this.#data[0];
        this.#swap(0, this.#size);
        this.#siftDown(0);
        return result;
    }

    #parent(i) {
        if (i > this.#size) {
            return null;
        }

        if (i == 0) {
            return 0;
        }

        i++;
        return Math.floor(i / 2 - 1);
    }

    #leftChild(i) {
        if (2 * (i + 1) - 1 >= this.#size) {
            return i;
        }

        i++;

        return 2 * i - 1;
    }

    #rightChild(i) {
        if (2 * (i + 1) >= this.#size) {
            return i;
        }

        i++;

        return 2 * i;
    }

    #swap(a, b) {
        let tmpObj = this.#data[a];
        this.#data[a] = this.#data[b];
        this.#data[b] = tmpObj;
    }

    #siftUp(i) {
        if (i > this.#size) {
            return;
        }

        let p = this.#parent(i);
        let parent = this.#data[p];
        let max = this.#data[i];

        while (i > 0 && parent < max) {
            this.#swap(p, i);
            i = p;
            p = this.#parent(i);
            parent = this.#data[p];
        }
    }

    #siftDown(i) {
        let max = i;

        let left = this.#leftChild(i);
        if (left < this.#size && this.#data[left] > this.#data[max]) {
            max = left;
        }

        let right = this.#rightChild(i);
        if (right < this.#size && this.#data[right] > this.#data[max]) {
            max = right;
        }

        if (i != max) {
            this.#swap(i, max);
            this.#siftDown(max);
        }
    }
}