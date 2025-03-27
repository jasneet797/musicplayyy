let arr=[9,8,7,6,5,4];
console.log(arr);
console.log(arr.length,typeof arr);
console.log(arr.toString());
console.log(arr.join(" and "));
console.log("popped element",arr.pop());
//pop returns popped value and updates original array
console.log(arr);
console.log(arr.push(4));
console.log(arr);
//push returns the length of new array and updates the original array
console.log(arr.shift());
//shift 
console.log(arr);
console.log(arr.unshift(2));
//unshift add first element and return lendth of array
console.log(arr);
let arr1=[1,2,3,4];
let arr2=[7,8,5,6];
let arr3=[9]
arr1.concat(arr2,arr3);
console.log(arr1.concat(arr2,arr3));
//concat does not updates the original array
arr2.sort();
console.log(arr2);
console.log(arr1.splice(1,2,11,12,13))
console.log(arr1);
console.log(arr1.slice(3,5));
console.log(arr1);