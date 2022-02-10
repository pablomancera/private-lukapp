class AVLTree {
    root;
}

class AVLNode {
    parent;
    key;
    left;
    right;
    height;

    constructor(key) {
        this.parent = null;
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

    appendLeft(key) {
        let child = new AVLNode(key);
        child.parent = this;
        this.left = child;
        return child;
    }

    appendRight(key) {
        let child = new AVLNode(key);
        child.parent = this;
        this.right = child;
        return child;
    }

    static find(key, root) {
        let next = null;

        if (key < root.key) {
            next = root.left;
        } else if (key > root.key) {
            next = root.right;
        } else {
            return root;
        }

        if (next) {
            return AVLNode.find(key, next);
        }

        return root;
    }

    static postOrder(node, fun) {
        if (!node) {
            return;
        }

        AVLNode.postOrder(node.left, fun);
        AVLNode.postOrder(node.right, fun);

        fun(node);
    }

    static inOrder(node, fun) {
        if (!node) {
            return;
        }

        AVLNode.postOrder(node.left, fun);

        fun(node);

        AVLNode.postOrder(node.right, fun);
    }

    static preOrder(node, fun) {
        if (!node) {
            return;
        }

        fun(node);

        AVLNode.postOrder(node.left, fun);
        AVLNode.postOrder(node.right, fun);
    }

    appropiateChild(node) {
        if (node.key < this.key) {
            this.left = node;
        } else if (node.key > 0) {
            this.right = node;
        }
    }

    static adjustHeight(node) {
        if (node.left && node.right) {
            node.height = 1 + Math.max(node.left.height, node.right.height);
        } else if (node.left) {
            node.height = 1 + node.left.height;
        } else if (node.right) {
            node.height = 1 + node.right.height;
        } else {
            node.height = 1;
        }
        return;
    }

    static rotateRight(node) {
        let parent = node.parent;
        let left = node.left;

        if (!left) {
            return;
        }

        let leftRight = left.right;

        left.parent = parent;
        if (parent) {
            parent.appropiateChild(left);
        }
        node.parent = left;
        left.right = node;
        if (leftRight) {
            leftRight.parent = node;
        }
        node.left = leftRight;

        AVLNode.postOrder(left, AVLNode.adjustHeight);
    }

    static rotateLeft(node) {
        let parent = node.parent;
        let right = node.right;

        if (!right) {
            return;
        }

        let rightLeft = right.left;

        right.parent = right;
        if (parent) {
            parent.appropiateChild(right);
        }
        node.parent = right;
        right.left = node;
        if (rightLeft) {
            rightLeft.parent = node;
        }
        node.right = rightLeft;

        AVLNode.postOrder(right, AVLNode.adjustHeight);
    }

    static rebalanceRight(node) {
        let left = node.left;

        let rightHeight = left.right ? left.right.height : 0;
        let leftHeight = left.left ? left.left.height : 0;

        if (rightHeight > leftHeight) {
            AVLNode.rotateLeft(left);
        }
        AVLNode.rotateRight(node);
    }

    static rebalanceLeft(node) {
        let right = node.right;

        let rightHeight = right.right ? right.right.height : 0;
        let leftHeight = right.left ? right.left.height : 0;

        if (leftHeight > rightHeight) {
            AVLNode.rotateRight(right);
        }
        AVLNode.rotateLeft(node);
    }

    static rebalance(node) {
        let parent = node.parent;

        AVLNode.adjustHeight(node);

        let rightHeight = node.right ? node.right.height : 0;
        let leftHeight = node.left ? node.left.height : 0;

        if (leftHeight > rightHeight + 1) {
            AVLNode.rebalanceRight(node);
        }
        if (rightHeight > leftHeight + 1) {
            AVLNode.rebalanceLeft(node);
        }

        AVLNode.adjustHeight(node);
        if (parent) {
            AVLNode.rebalance(parent);
        }
    }

    static insert(key, tree) {
        if (!tree.root) {
            tree.root = new AVLNode(key);
            return;
        }

        let parent = AVLNode.find(key, tree.root);
        let node;

        if (key < parent.key) {
            node = parent.appendLeft(key);
        } else if (key > parent.key) {
            node = parent.appendRight(key);
        } else {
            node = null;
        }

        if (node) {
            AVLNode.rebalance(node);
        }

        while (tree.root.parent) {
            tree.root = tree.root.parent;
        }
    }
}

let tree = new AVLTree();

for (let i = 0; i < 10; i++) {
    // let rand = Math.random();
    console.log(i);
    AVLNode.insert(i, tree);
}

AVLNode.inOrder(tree.root, (node) => {
    console.log(node.key);
} )