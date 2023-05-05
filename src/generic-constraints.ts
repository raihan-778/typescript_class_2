//Generic function constraints

// const newData = [{ ...myInfo }, myLove];
type MandatoryType = { name: string; age: number; salary: number };
//or
interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}
const addMeInMyLoveMind = <
  T extends MandatoryInterface // here "extands" is used for some mandatory property which must be include in the function parameter it is called generic constraints.in this function these "name: string; age: number; salary: number" are the mandetory property.
>(
  myInfo: T
) => {
  const crush = "Joytsna",
    newData = { ...myInfo, crush }; //here we can not get spreded data type from myInfo because in compile time type script can not ditect the spreaded data type.In that case we can use generic function type to avoid this issue
  return newData;
};
type myInfoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};
const myLove = "Jyotsna";
const myInfo: myInfoType = {
  name: "Raihan",
  age: 35,
  salary: 45637643769,
  other1: false,
  other2: null,
};

const result = addMeInMyLoveMind(myInfo);
console.log(result);
//generic keyof type

type newPersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; //menually make type by key property of newPersonType.

type newTypeUsingKeyOf = keyof newPersonType;

// const a: newType = "address";
// const b: newTypeUsingKeyOf = "age";
