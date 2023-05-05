// Conditional Type: a type depends on another type is called conditional type

type a1 = number;
type a2 = a1 extends string ? string : null;
