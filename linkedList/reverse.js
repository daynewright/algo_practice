class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let temp = this;

    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const reverseLinkedList = (head) => {
  let current = head;
  let previous = null;

  while (current) {
    let oldNext = current.next;
    current.next = previous;
    previous = current;
    current = oldNext;
  }

  return previous;
};

const node5 = new Node(5, null);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head = new Node(1, node2);

head.printList();
const newList = reverseLinkedList(head);
newList.printList();
