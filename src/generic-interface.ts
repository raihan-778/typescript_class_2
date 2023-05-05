// type GenericArray = Array<number>;
//Generic Interface type

interface CrushInterface<T> {
  // here T is indicate generic Type which will take any type at compile time.
  name: string;
  husband: T;
}

//examples

const crush: CrushInterface<string> = {
  name: "Jyotsna",
  husband: "Raihan",
};
const crush1: CrushInterface<true> = {
  name: "Jyotsna",
  husband: true,
};
const crush2: CrushInterface<{ name: string; salary: number }> = {
  name: "Jyotsna",
  husband: {
    name: "Raihan",
    salary: 12,
  },
};

//Generic interface type with double parameter
interface CrushInterface1<T, U = undefined> {
  // here T is indicate generic Type which will take any type at compile time.
  name: string;
  husband: T;
  Friend?: U;
}

//examples

const crush4: CrushInterface1<boolean, string> = {
  name: "Joytsna",
  husband: true,
  Friend: "K",
};
const crush5: CrushInterface1<string> = {
  name: "Joytsna",
  husband: "Raihan",
};

type GenericArray<T> = Array<T>; // here "<T>" is indicate generic type it will take any type.;
//examples
const rollNumbers: GenericArray<number> = [45, 25, 12];

const rollNumbers2: GenericArray<string> = ["25", "35", "45"];
const rollNumbers3: GenericArray<boolean> = [true, false];

type nameAndRollType = {
  name: string;
  roll: number;
};

const userNameAndRool: GenericArray<nameAndRollType> = [
  { name: "Mr.X", roll: 1 },
  { name: "Mr.Y", roll: 3 },
];

type GenericTupleType<x, y> = [x, y]; //here <x,y> indicate generic type wich can be used as parameter that will take two arguments;

const relation: GenericTupleType<string, string> = ["Raihan", "Jyotsna"];

type relationWithSalaryType = {
  name: string;
  salary: number;
};
const relationWithSalary: GenericTupleType<relationWithSalaryType, string> = [
  {
    name: "Raihan",
    salary: 50000000,
  },
  "Jyotsna",
];
const relationWithSalary2: GenericTupleType<relationWithSalaryType, string> = [
  {
    name: "Raihan",
    salary: 50000000,
  },
  "Jyotsna",
];

//generic object type

interface personType {
  name: string;
  age: number;
}

const crush6: CrushInterface1<personType, personType> = {
  name: "Jyotsna",
  husband: {
    name: "Raihan",
    age: 30,
  },
  Friend: {
    name: "k",
    age: 35,
  },
};
