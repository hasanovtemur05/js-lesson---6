//  1 - masala
// let nums = [1,2,3,4,5,6,7,8,9];
// let target = +prompt("1dan 9 gacha bo'lgan raqam kiriting");
// function targitItem(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//     }
// }
// let result = targitItem(nums, target);
// console.log(result); 



// 2 - masala
// function fn (son){
//     let arr = [1,2,3,4,5,3,6,7]
//     let index = []
//     let count = 1
//     for(let i in arr){
//         if (arr[i] === son) {
//             let property_name = `index${count}`
//             index.push({[property_name]: +i})
//             count ++
//         }
//     }
//     return index.length ? index : `${son} soni array da mavjud emas`
// }
// console.log(fn(3));



// 3 - masala
// let obj = {name: "mark", age: "18", dateOfBrith: "2005,12,02", gender: "erkak"}
// for(let key in obj){
//     console.log("key :", key);
// }
// for(let key in obj){
//     console.log("values :",obj[key]);
// }




// 4 - masala

// let obj1 = {name: "mark", age: "18", dateOfBrith: "2005,12,02", gender: "erkak"}
// let obj2 = {name2: "john", age2: "20", dateOfBrith2: "2002,08,12", gender2: "erkak"}

// let union = Object.assign(obj1, obj2)
// console.log(union); 

// for (let key in union){
//     console.log("Keylari", key);
// }

// for (let key in union){
//     console.log("valuelari", union[key]);
// }




// 5 - masala
// function count(...n) {
//     let sum = 0;
//     for (let number of n) {
//         sum += number;
//     }
//     return sum;
// }
// let result = count(1, 2, 3, 4, 5, 6); 
// console.log(result);



// 6 - masala
// let arr = [1,4,2,5,3,8,6,9]
// function count(n) {
//     // o'sish tartibi
//     arr.sort(function(a,b){return a - b})
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == n) {
//             console.log(i);
//         }
//     }
//     // kamayish tartibi
//     arr.sort(function(a,b){return b - a})
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == n) {
//             console.log(i);
//         }
//     }
// }
// count(3)

