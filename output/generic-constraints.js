"use strict";
//Generic function constraints
const addMeInMyLoveMind = (myInfo) => {
    const crush = "Joytsna", newData = Object.assign(Object.assign({}, myInfo), { crush }); //here we can not get spreded data type from myInfo because in compile time type script can not ditect the spreaded data type.In that case we can use generic function type to avoid this issue
    return newData;
};
const myLove = "Jyotsna";
const myInfo = {
    name: "Raihan",
    age: 35,
    salary: 45637643769,
    other1: false,
    other2: null,
};
const result = addMeInMyLoveMind(myInfo);
// const a: newType = "address";
// const b: newTypeUsingKeyOf = "age";
// ({name:"Mr.x",age:30},"name") here we will try to write a function
function getProperty(obj, key) {
    // here "y extends keyof X" difined that in in function parameter Y will use the key property of X parameter because here X parameter will take an object which must have a key and value pare.
    return obj[key];
}
const result4 = getProperty({ name: "Mr.X", age: 55, address: "ctg" }, "age");
console.log(result4);
