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

  test('delete head', () => {
    let testList = new LinkedList();
    testList.add(6);
    testList.add(7);
    testList.delete(6);
    expect(testList.size()).toBe(1);
  });

  test('delete element other than head', () => {
    let testList = new LinkedList();
    testList.add(2);
    testList.add(3);
    testList.add(9);
    testList.add(5);
    testList.delete(3);
    expect(testList.size()).toBe(3);
  });

  test('delete non existent element', () => {
    let testList = new LinkedList();
    testList.add(1);
    testList.add(2);
    testList.add(3);
    testList.delete(4);
    expect(testList.size()).toBe(3);
  });

  test('index of existing', () => {
    let testList = new LinkedList();
    testList.add(1);
    testList.add(2);
    testList.add(3);
    testList.add(4);
    testList.index(2);
    expect(testList.index(2)).toBe(1);
  });

  test('index of non existent', () => {
    let testList = new LinkedList();
    testList.add(1);
    testList.add(2);
    testList.add(3);
    testList.add(4);
    expect(testList.index(5)).toBe(-1);
  });

  test('get element', () => {
    let testList = new LinkedList();
    testList.add(1);
    testList.add(2);
    testList.add(3);
    testList.add(4);
    expect(testList.get(0)).toBe(1);
  });

  test('get non existent element', () => {
    let testList = new LinkedList();
    testList.add(1);
    testList.add(2);
    testList.add(3);
    testList.add(4);
    expect(testList.get(5)).toBe(null);
  });

});
