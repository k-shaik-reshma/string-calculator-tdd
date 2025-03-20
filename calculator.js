const add = (numbers) => {
  if (numbers === "") return 0;
  
  let delimiter = ",";
  let numberString = numbers;
  
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    delimiter = parts[0].slice(2);
    numberString = parts[1];
  }
  
  const nums = numberString.split(new RegExp(`${delimiter}|\\n`)).map(num => parseInt(num));
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };