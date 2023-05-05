"use strict";
/* //mocking
//string type promise
const makePromis = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fatched";
    if (data) {
      resolve(data);
    } else {
      reject("Failedf to fetch data");
    }
  });
};

// boolean type promise
const makePromisBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failedf to fetch data");
    }
  });
};
// object type promise
// type dataType = {
//   data: string;
// };
interface dataType {
  data: string;
}

const makePromisObject = (): Promise<dataType> => {
  return new Promise<dataType>((resolve, reject) => {
    const data: dataType = { data: "data is fatching" };
    if (data) {
      resolve(data);
    } else {
      reject("Failedf to fetch data");
    }
  });
};
// const result3 = makePromis();
const getPromisData = async (): Promise<string> => {
  const data = await makePromis();
  return data;
};
const getPromisBoolean = async (): Promise<boolean> => {
  const data = await makePromisBoolean();
  return data;
};
const getPromisObject = async (): Promise<dataType> => {
  const data = await makePromisObject();
  return data;
};
//fatching json data
interface Itodo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<Itodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};

const getTodoData = async () => {
  const data = await getTodo();
  console.log(data);
};
getTodoData();
 */
