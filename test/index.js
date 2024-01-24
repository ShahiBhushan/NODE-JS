//create library which find the max and min value of array
//dont forget to pass the value as argument(parmeter)
//use destructure concept in index.
const { minMax } = require("./library");
const questions = [1,4,3,2,9];
const getResult = (questions) => {
  return minMax(questions);
};
const res = getResult(questions);
console.log({ res });
