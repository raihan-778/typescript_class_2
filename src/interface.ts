/* 

// interface vs allias types in typescript

//alias type
type user = {
  name: string;
  age: number;
};

type extendedUser = user & {
  role: string;
};
//example of alias type

const userWithAlias: user = {
  name: "alias User",
  age: 100,
};

const newUser2: extendedUser = {
  name: "extended User",
  age: 300,
  role: "unknown",
};

//interface type
//note: interface type is only allowed to use in non premetive data types like object.We can use interface type in premetive data.Because premetive type is built in type in typescript so that we cant customize this type using interface
interface IUser {
  // for defining interface type we don't need to user "=" sign as like alias type
  name: string;
  age: number;
}

interface ExtendedIuser extends IUser {
  role: string;
}

//example of interface type

const userWithInterface: IUser = {
  name: "Interface User",
  age: 500,
};

const newIUser2: ExtendedIuser = {
  name: "Extended I user",
  age: 210,
  role: "unknown",
};

//Object, function & array
//using alias type
type addNumbersType = (num1: number, num2: number) => number; // this is called type signature of a function where we can defined functions parameter type

//using interface type
interface IAddNumbertype {
  (num1: number, num2: number): number;
}

const addNumber: addNumbersType = (num1, num2) => num1 + num2; // suggestion to use alias type for function type signature
const addINumber: IAddNumbertype = (num1, num2) => num1 + num2;

const rollNumber: number[] = [1, 2, 5]; //explicit type
type rollNUmberTypes = number[]; //type alias

interface IRollNumber {
  // interface type
  [index: number]: string; // this is called index signature
} //N.B: we will avoid using interface type in array.
interface IRollNumber2 {
  // interface type
  [index: number]: number; // this is called index signature
} //N.B: we will avoid using interface type in array.

const rollNumbers: rollNUmberTypes = [1, 2, 6, 8, 5, 74, 65];
const rollNumbers1: IRollNumber = ["1", "3", "6"]; //[index type for array defining using interface string type]
const rollNumbers2: IRollNumber2 = [1, 3, 6]; //[index type for array defining using interface number type ]

 */
