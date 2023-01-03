const myPushItem = (array, pushedValue) => {
  return [...array, pushedValue];
};

module.exports = myPushItem;
console.log(myPushItem([0, 1, 2], 3));
