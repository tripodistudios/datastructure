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

  delete(elementToDelete) {
    if(this.head) {
      if(this.head.data === elementToDelete) {
        this.head = this.head.next;
        return true; 
      }
    } else {
      return false;
    }

    let previous = this.head;
    let holder = this.head.next;
    while(holder) {
      if(holder.data === elementToDelete) {
        previous.next = previous.next.next;
        return true;
      }
      previous = holder;
      holder = holder.next;      
    }

    return false;
  }

  get(indexLocation) {
    if(indexLocation < 0) {
      return null;
    }
    let holder = this.head;
    let count = 0;

    while(holder) {
      if(count === indexLocation) {
        return holder.data;
      }
      ++count;
      holder = holder.next;      
    }
    return null;
  }

  index(data) {
    let holder = this.head;
    let location = 0;
    while(holder) {
      if(holder.data === data) {
        return location;
      }
      ++location;
      holder = holder.next;
    }
    return -1;
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
