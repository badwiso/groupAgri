export default function dataGen(n) {
  const region = [...Array(n).keys()].map((k) => {
    return {
      id: k,
      regionname: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, ''),
    };
  });
  return region;
}
