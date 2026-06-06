//your JS code here. If required.
let outputDiv = document.getElementById("output");

let arr = [1,2,3,4];

function start(arr){
    return new Promise((resolve, reject) => {
        resolve(arr);
    })
}
function filterOdd(arr){
    return new Promise((resolve, reject) => {
        let result = arr.filter((elem) => elem%2==0);
        setTimeout(() => {
            outputDiv.textContent = `${result}`;
            resolve(result);
        }, 1000);
    })
}
function multiplyEven(arr){
    return new Promise((resolve, reject) => {
        let result = arr.map((elem) => elem*2);
        setTimeout(() => {
            outputDiv.textContent = `${result}`;
            resolve(result);
        }, 2000);
    })
}

start(arr).then((arr1) => {
    return filterOdd(arr1);
}).then((arr2) => {
    return multiplyEven(arr2);
}).catch((e) => {
    console.log("Error: ", e);
})