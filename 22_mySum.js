const sum = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

// const sum = (array) => {
//   let newArray = array.map((element, index, elements) => {
//     elements[index];
//   });
//   return newArray;
// };

module.exports = sum;
console.log(sum([1, 2, 3, 4, 5]));
