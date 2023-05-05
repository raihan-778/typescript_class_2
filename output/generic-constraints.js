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
console.log(result);
// const a: newType = "address";
// const b: newTypeUsingKeyOf = "age";
