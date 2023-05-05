"use strict";
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
const newArray = createArray2("Bangladesh", [
    "I love my country",
]);
console.log(newArray);
const newArray1 = createArray1(false);
const newArray2 = createArray1({
    name: "Raihan",
    age: 30,
});
