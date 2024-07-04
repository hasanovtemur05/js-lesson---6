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




// 3 - masala
// let obj1 = {name: "mark", age: "18", dateOfBrith: "2005,12,02", gender: "erkak"}
// let obj2 = {name2: "john", age2: "20", dateOfBrith2: "2002,08,12", gender2: "erkak"}
// let obj3 = {name3: "marjona", age3: "17", dateOfBrith3: "2007,22,13", gender3: "ayol"}
// let obj_keys = Object.assign(obj1, obj2, obj3)
// let key = obj_keys
// for(let key in obj_keys){
//     console.log(key);
// }
// for(let key in obj_keys){
//     console.log(obj_keys[key] , "values");
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
    
//     arr.sort(function(a,b){return a - b})
//     console.log(arr);
//     for (let i = 0; i < n.length; i++){
      
//     }
//     console.log(i);
// }
// count(6)



let nums = [1,2,3,4,5,6,7,8,9];
let target = +prompt("1dan 9 gacha bo'lgan raqam kiriting");
function targitItem(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
}
let result = targitItem(nums, target);
console.log(result); 

