const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T>(param: T): T[] => {
  return [param];
};
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const newArray = createArray2<string, string[]>("Bangladesh", [
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
