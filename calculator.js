const add = (numbers) => {
  if (numbers === "") return 0;

  let delimiter = ",";
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const [delimLine, ...rest] = numbers.split("\n");
    delimiter = delimLine.slice(2);
    numString = rest.join("\n");
  }

  const nums = numString.split(new RegExp(`${delimiter}|\\n`)).map(num => parseInt(num));
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };