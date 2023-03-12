const Node = (value, nextNode) => {
  return {
    value: value || null,
    nextNode: nextNode || null,
  };
};

const LinkedList = () => {
  let HEAD = null;
  let length = 0;

  const append = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD === null) {
      HEAD = newNode;
      return;
    }
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    newNode.nextNode = HEAD;
    HEAD = newNode;
    length++;
  };

  const size = () => {
    return length;
  };

  const head = () => {
    return HEAD;
  };

  const tail = () => {
    if (HEAD.nextNode === null) return HEAD;
    let pointer = HEAD.nextNode;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const at = (index) => {
    let i = 0;
    let pointer = HEAD;
    while (i !== index && pointer.nextNode !== null && pointer !== null) {
      i++;
      pointer = pointer.nextNode;
    }
    return index === i ? pointer : null;
  };

  const pop = () => {
    let pointer = HEAD;
    if (HEAD === null || HEAD.nextNode === null) HEAD = null;
    while (pointer.nextNode.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = null;
    if (length > 0) --length;
  };

  const contains = (value) => {
    if (HEAD === null) return false;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    if (pointer.value === value) return true;
    return false;
  };

  const find = (value) => {
    if (!contains(value)) return null;
    let pointer = HEAD;
    for (let i = 0; i < length; i++) {
      if (pointer.value === value) return i;
      pointer = pointer.nextNode;
    }
  };

  const toString = () => {
    if (HEAD === null) return null;
    let pointer = HEAD;
    let result = '';
    while (pointer !== null) {
      result += `( ${pointer.value} )`;
      result += ' -> ';
      pointer = pointer.nextNode;
    }
    console.log(result + 'null');
  };

  const insertAt = (value, index) => {
    if (index === 0) return prepend(value);
    if (index === length) return append(value);
    let newNode = Node(value);
    newNode.nextNode = at(index);
    at(index - 1).nextNode = newNode;
  };

  const removeAt = (index) => {
    if (index === 0) return (HEAD = HEAD.nextNode);
    at(index - 1).nextNode = at(index).nextNode;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

let list = LinkedList();
list.append('test1');
list.prepend('test0');
list.append('test2');
console.log(list.head());
console.log(list.toString());
console.log(list.size());
console.log(list.tail());
console.log(list.at(1));
list.pop();
console.log(list.head());
console.log('contains test0: ' + list.contains('test0'));
console.log('contains test1: ' + list.contains('test1'));
console.log('contains test2: ' + list.contains('test2'));
console.log(list.head());
console.log('find test0: ' + list.find('test0'));
console.log('find test1: ' + list.find('test1'));
console.log('find test2: ' + list.find('test2'));
list.toString();
list.insertAt('new test', 1);
list.toString();
list.removeAt(1);
list.toString();
