// const foodA=["food1","food2","food3"];
// const foodB=["food3","food2","food4"];
// function commonFood(foodA,foodB){
//     const commonFoods = foodA.filter(food => foodB.includes(food));
//     return commonFoods;
// }
// const findCommonFood=commonFood(foodA,foodB);
// console.log(findCommonFood);

//find the common food
//Arrays Initialization
const foodA = ["Noodle", "Pasta", "Ice-cream"];
const foodB = ["Fries", "Ice-cream", "Pizza", "Pasta"];
//Function Definition
const foodFinder = (foodA, foodB) =>
  foodA.filter((food) => foodB.includes(food));
//Function Invocation
 const result=foodFinder(foodA, foodB);
 console.log(result);
