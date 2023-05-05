"use strict";
//mocking
const makePromis = () => {
    new Promise(resolve, reject);
};
{
    const data = "data is fatched";
    if (data) {
        resolve(data);
    }
    else {
        reject("Failedf to fetch data");
    }
}
;
