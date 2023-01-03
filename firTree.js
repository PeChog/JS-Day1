const tree = (size) => {
  newSize = 0;
  for (let i = 1; i <= size; i++) {
    newSize = newSize + "\n";
    for (let j = 0; j < i; j++) {
      newSize = newSize + " " + "*";
    }
  }
  return newSize;
};

console.log(tree(5));
