const tree = (size) => {
  for (let i = 1; i <= size; i++) {
    size = size + "*\n";
    for (let j = 0; j < i; j++) {
      size = size + "*";
    }
  }
  return size;
};

console.log(tree(3));
