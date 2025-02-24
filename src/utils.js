const generateNumber = (maxNum = 99, minNum = 1) => Math.floor(Math.random()
* (maxNum - minNum + 1)) + minNum;

export default generateNumber;
