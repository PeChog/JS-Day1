const removeTail = (array) => {
  if (array === []) {
    null;
  } else {
    array.pop();
  }
  return array;
};

console.log(removeTail([]));
