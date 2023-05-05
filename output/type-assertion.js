"use strict";
//type assertions
let Raihan;
Raihan = "Next level web Developer";
Raihan.length;
//or
Raihan.length;
function KgToGram(param) {
    if (typeof param === "string") {
        const result = parseFloat(param) * 1000;
        return `converted value is :${result} gram`;
    }
    if (typeof param === "number") {
        const result = param * 1000;
        return `converted value is :${result} gram`;
    }
}
// const resultToBeNumberType = KgToGram(5) as number;
//or
const resultToBeNumberType = KgToGram(5); // this notation will not work on tsx syntex, so batter to use "as" syntax insted of <> enguler syntex
// const resultToBeStringType = KgToGram("15") as string;
//or
const resultToBeStringType = KgToGram("15");
try {
}
catch (err) {
    console.log(err.message);
}
