const tree = (heigth) => {
  for (let i = 1; i <= heigth; i++) {
    let star = "";
    for (let k = 1; k <= heigth - i; k++) {
      star = star + " ";
    }
    for (let j = 0; j < i; j++) {
      star = star + " *";
    }
    console.log(star);
  }
};

console.log(tree(4));
