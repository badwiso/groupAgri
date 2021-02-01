function data(i) {
  let arr = [];
  for (let j = 0; j < i; j++) {
    arr.push({
      id: j + 1,
      name: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
      phone: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
      cin: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
      region: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
      suspended: false,
    });
  }
  return arr;
}
