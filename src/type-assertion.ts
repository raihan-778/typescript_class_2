//type assertions

let Raihan: any;

Raihan = "Next level web Developer";
(Raihan as string).length;
//or
<string>Raihan.length;

function KgToGram(param: string | number): string | number | undefined {
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
const resultToBeNumberType = <string>KgToGram(5); // this notation will not work on tsx syntex, so batter to use "as" syntax insted of <> enguler syntex
// const resultToBeStringType = KgToGram("15") as string;
//or
const resultToBeStringType = <string>KgToGram("15");

type customErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as customErrorType).message);
}
