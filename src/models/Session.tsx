let date;
const updateDate = () => {
  date = new Date(date.setMonth(date.getMonth() + 3));
  return date;
};
export default function dataGen(n) {
  date = new Date('2021/01/01');
  const session = [...Array(n).keys()].map((k) => {
    return {
      id: k,
      sessionname: `${date.getFullYear()}/${
        Math.floor(date.getMonth() / 3) + 1
      }`,
      start: date.toDateString(),
      end: updateDate().toDateString(),
      deadline: new Date(
        date.setHours(date.getHours() + 24 * 6)
      ).toDateString(),
      price: 600,
      fixedTx: 2000,
    };
  });
  return session;
}
