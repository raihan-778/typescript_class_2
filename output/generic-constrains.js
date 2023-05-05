"use strict";
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
const createArray2 = (param1, param2) => {
    // arrow function with generic type
    return [param1, param2];
};
function createArray3(param1, param2) {
    // regular function with generic type
    return [param1, param2];
}
// const newArray = createArray2<string, [string]>("Bangladesh", [
//   "I love my country",
// ]);// we can define string array like "string[]", or "[string]" or "Array<string>"
//or
// const newArray = createArray2<string, string[]>("Bangladesh", [
//   "I love my country",
// ]);
//or
const newArray = createArray2("Bangladesh", [
    "I love my country",
]);
console.log(newArray);
const newArray1 = createArray1(false);
const newArray2 = createArray1({
    name: "Raihan",
    age: 30,
});
const newArray3 = createArray2("Bangladesh", [
    "Bangladesh",
]);
const newArray4 = createArray2("Bangladesh", {
    name: "Bangladesh",
});
//Generic function on spread operator
const myLove = "Jyotsna";
const myInfo = {
    name: "Raihan",
    age: 35,
    salary: 45637643769,
};
// const newData = [{ ...myInfo }, myLove];
const addMeInMyLoveMind = (myInfo) => {
    const crush = "Joytsna", newData = Object.assign(Object.assign({}, myInfo), { crush }); //here we can not get spreded data type from myInfo because in compile time type script can not ditect the spreaded data type.In that case we can use generic function type to avoid this issue
    return newData;
};
const result = addMeInMyLoveMind(myInfo);
console.log(result);
