Tree structure is one of the fundamental structures in computer science, current computer system employs it in many cases. For example,

In MySQL database, the data (record) is stored in a tree. Inspired by the binary search tree, the data is stored and managed in a B-tree which significantly reduces levels of the tree by exploiting the memory spatial locality.

In modern file system, the entire directory structure is actually a tree where each directory is a D-node and a file is a F-node. The leaf nodes are files and non-leaf node is a directory.

In Unix/Linux/MacOS system, the process is organized as a tree. The root of the tree is call init() in Unix/Linux and launchd() in MacOS X
P.S. in Unix/Linux, we have pstree command to show the process tree.
In MacOS, we can brew install pstree

So, understanding the basic operations and algorithms is important to understand the current computer system. Also, tree structure is a hot and very frequent question during the interview.

We discuss our tree from a very simple version of tree - binary tree. Each node in the tree has 3 fields. The value which stores the data, the left tree node pointer pointing to its left substree and the right tree node pointer pointing to its right substree.

In JS, we can generate a tree node (define a tree node) via constructor function

function TreeNode(data) {
    this.data = data;
    this.left = this.right = null;
}

Based on the definition of the tree structure, the critical design method call "divide and conquer" can be easily applied. For this design methodology, we have
Step 1. divide the problem into several smaller subproblems of the same type
(to solve the problem for the current tree, we can solve the problem of the left subtree and right subtree)
Step 2: Recursively solve the problem of left subtree and right subtree.
Step 3, Combine the solutions of the subproblems to solve the final problem

To measure the performance of the problem, we can use Master Theorem
https://en.wikipedia.org/wiki/Master_theorem

The following practice problems are for the binary tree (typically, all tree problem can be solved in a recursive way or iterative way)

1. Get the number of nodes in a binary tree:
(by recursion)
(by iteration using BFS/DFS)

 2. Get the max depth (height )of a binary tree
 (by recursion)
 (by iteration using BFS)

 3. Get the min depth of a binary tree
(by recursion)
(by iteration using BFS)

 4. DFS (3 ways) (recursion and iteration)
https://en.wikipedia.org/wiki/Tree_traversal

 5. BFS: Level order traversal（top to bottom and left to right, w/wo level#）
https://en.wikipedia.org/wiki/Tree_traversal

 6. Get number of nodes in kth level
 (by recursion)
 (by interation)

 7. Get number of leaf nodes
 (by recursion)
  (by iteration)

 8. Two trees are the same?
 (by recursion)
 (by iteration)

9. Given a binary tree, decide if it is a balanced binary tree?

10. Get a mirrored tree（破坏和不破坏原来的树两种情况）
10.1 Two trees are mirrored mutually

 11. Get the lowest Common Ancestor：
(by recursion)
(by iteration)

12. Get the max distance in a binary tree

13. Build a binary tree via preorder/postorder + inorder traversal

14. A complete binary tree?

Next, we will talk about BST (binary search tree)
