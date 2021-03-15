export default function dataGen(i: number) {
  const region = [1, 2, 3, 4, 5].map((k) => {
    return {
      id: k,
      name: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
    };
  });
  const arr = [];
  for (let j = 0; j < i; j += 1) {
    arr.push({
      id: j + 1,
      ref: Math.ceil((j + 1) * Math.random() * 1000),
      name: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
      phone: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
      cin: Math.random()
        .toString(36)
        .replace(/[^0-9]+/g, ''),
      region: region[j % 5],
      status: Math.random()>=0.3?true:false,
    });
  }
  return arr;
}
