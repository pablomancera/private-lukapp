export { MaxHeap };

class MaxHeap {
    #size = 0;
    #data = [];

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
        this.#swap(this.#data[0], this.#data[this.#size]);
        this.#siftDown(0);
        return result;
    }

    #parent(i) {
        if (i > this.#size) {
            return null;
        }

        if (i == 0) {
            return this.#data[0];
        }

        i++;
        return this.#data[i / 2 - 1];
    }

    #leftChild(i) {
        i++;

        if (2 * i - 1 >= this.#size) {
            return null;
        }

        return this.#data[2 * i - 1];
    }

    #rightChild(i) {
        i++;

        if (2 * i >= this.#size) {
            return null;
        }

        return this.#data[2 * i];
    }

    #swap(a, b) {
        let tmpObj = a;
        a = b;
        b = a;
    }

    #siftUp(i) {
        if (i > this.#size) {
            return;
        }

        let parent = this.#parent(i);
        let max = this.#data[i];
    }

    #siftDown(i) {
        let max = this.#data[i];
        let next = i;

        let left = this.#leftChild(i);
        if (left && left > max) {
            max = left;
            next = 2 * (i + 1) - 1;
        }

        let right = this.#rightChild(i);
        if (right && right > max) {
            max = right;
            next = 2 * (i + 1) - 1;
        }

        if (this.#data[i] != max) {
            this.#swap(this.#data[i], max);
            this.#siftDown(next);
        }
    }
}
