const recursive = (n) => {
  if (n === 1) {
    return 1
  } else {
    return n * recursive(n - 1);
  }
}

console.log(recursive(5)); // 120