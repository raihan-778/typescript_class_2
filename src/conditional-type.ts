/* // Conditional Type: a type depends on another type is called conditional type

type a1 = number;
type a2 = a1 extends string ? string : null;
//nested conditional type
type a3 = number;
type a4 = undefined;
type a5 = number;
type d = a3 extends null
  ? null
  : a4 extends number
  ? number
  : a5 extends "string"
  ? "string"
  : never;

type sheikh = {
  wife1: string;
  wife2: string;
};
//lets check the "sheikh" type if therer wife3 exists or not
type checkProperty<T> = T extends { wife1: string } ? true : false;
type checkProperty2<T, U> = U extends keyof sheikh ? true : false;

type checkWife1 = checkProperty<sheikh>;

type checkWife2 = checkProperty2<sheikh, "wife1">;

type checkproperty3<T, U> = U extends keyof sheikh ? true : false;

//to much confusing example
type friend = "Nizam" | "Newaz" | "Sayeed";
type removeFriend<T, U> = T extends U ? never : T;

type currentFirend = removeFriend<friend, "Nizam">;
 */
