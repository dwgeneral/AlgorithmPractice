/*
    Simply speaking, a singly linked list is just a list containing multiple nodes.
    Each node consists of a value and a pointer to the next node.
    In JS, we can construct a node via JS constructor which is defined as
*/

function ListNode(val) {
      this.val = val;
      this.next = null;
}

// Based on this definition, we have the following basic operations and algorithms.

/*
    (1) Given a JS array, construct a singly linked list based on the array
    e.g for array [1,2,3], we construct list as 1 -> 2 -> 3
*/

var arr = [1,2,3], head;
head = new ListNode(arr[0]);
head.next = function(){
};


/*
    (2) Given a sorted linked list and a value, insert this value into the list and keep the list sorted.
    e.g. for list 1 -> 2 -> 5 and value 4, we need output 1 -> 2 -> 4 -> 5
*/

//(3) Given a linked list, reverse it.
//e.g. for list 1 -> 2 -> 5, output 5 -> 2 -> 1
//Try your best to think as many ways as you can to complete this task.

//(4) Given a list, find the middle node in one pass.
//e.g. for list 1 -> 2 -> 3, the middle node is 3
//       for list 1 -> 2 -> 3 -> 4, the middle node is 2

//(5) Given two sorted lists, merge into one list which is still sorted.
//e.g  list 1 is 1 -> 5 -> 10, list 2 is 3 -> 4 -> 7, output is 1 -> 3 -> 4 -> 5 -> 7 -> 10

//(6) Given two lists, merge into one list one by one. (optional)

//(7) Given a list, detect if the list has a cycle and find the starting point of the cycle.
//e.g.    1 -> 2 -> 3 -> 4 -> 5 -> 6-----|
//                         |______________|
//This list contains a cycle and the starting point is 3.

//Please let me know if
