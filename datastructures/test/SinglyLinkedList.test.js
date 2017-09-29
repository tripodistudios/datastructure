const LinkedList = require('../src/SinglyLinkedList.js');

describe('Singly Linked List', () => {
  test('add one', () => {
    let testList = new LinkedList();
    testList.add(5);
    expect(testList.size()).toBe(1);
  });

  test('add more than one', () => {
    let testList = new LinkedList();
    testList.add(5);
    testList.add(6);
    testList.add(7);
    expect(testList.size()).toBe(3);
  });

  test('remove head', () => {
    let testList = new LinkedList();
    testList.add(6);
    testList.add(7);
    testList.delete(6);
    expect(testList.size()).toBe(1);
  });

  test('remove element other than head', () => {
    let testList = new LinkedList();
    testList.add(2);
    testList.add(3);
    testList.add(9);
    testList.add(5);
    testList.delete(3);
    expect(testList.size()).toBe(3);
  });

  test('remove non existent element', () => {
    let testList = new LinkedList();
    testList.add(1);
    testList.add(2);
    testList.add(3);
    testList.delete(3);
    expect(testList.size()).toBe(3);
  });

});
