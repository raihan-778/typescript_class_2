/* const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T>(param: T): T[] => {
  return [param];
};
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  // arrow function with generic type
  return [param1, param2];
};
function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
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
const newArray = createArray2<string, Array<string>>("Bangladesh", [
  "I love my country",
]);
console.log(newArray);

const newArray1 = createArray1<boolean>(false);

type personalInfo = {
  name: string;
  age: number;
};

const newArray2 = createArray1<personalInfo>({
  name: "Raihan",
  age: 30,
});

const newArray3 = createArray2<string, Array<string>>("Bangladesh", [
  "Bangladesh",
]);

const newArray4 = createArray2<string, { name: string }>("Bangladesh", {
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
const addMeInMyLoveMind = <T>(myInfo: T) => {
  const crush = "Joytsna",
    newData = { ...myInfo, crush }; //here we can not get spreded data type from myInfo because in compile time type script can not ditect the spreaded data type.In that case we can use generic function type to avoid this issue
  return newData;
};
const result = addMeInMyLoveMind<{ name: string; age: number; salary: number }>(
  myInfo
);
console.log(result);
 */
