const add = (numbers) => {
  if (numbers === "") return 0;
  if (!numbers.includes(",")) return parseInt(numbers);
  const [num1, num2] = numbers.split(",").map(num => parseInt(num));
  return num1 + num2;
}

module.exports = { add };