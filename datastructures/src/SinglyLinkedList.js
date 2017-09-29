class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  toString() {
    return `Node: { data: ${this.data} }`;
  }
}

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  add(elementToAdd) {
    // console.log(elementToAdd);
    let nodeValue = new Node(elementToAdd);
    if(!this.head) {
      this.head = nodeValue;
      return nodeValue;
    }
    let holder = this.head;
    while(holder.next) {
      holder = holder.next;      
    }
    holder.next = nodeValue;
  }

  delete() {

  }

  index(data) {

  }

  size() {
    let holder = this.head;
    let count = 0;
    while(holder) {
      holder = holder.next;
      ++count; 
    }
    return count;
  }

  toString() {
    let holder = this.head;
    let valueToReturn = "List:\n";
    while(holder) {
      valueToReturn += `${holder}\n`
      holder = holder.next;
    }
    return valueToReturn;
  }

}

module.exports = LinkedList;
