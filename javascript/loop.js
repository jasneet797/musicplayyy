let arr=[12,34,34,56,23];
for(let a=0;a<arr.length;a++){
    const ele=arr[a];
    console.log(ele);
}
let z=arr.forEach((value,index,arr)=>{
return value/value;
})
let y=arr.map((value,index,arr)=>{
    return value+value; 
})
console.log(y);
console.log(z);
arr2=[1,2,3,4,5]
var num=1;
for(let j=1;j<arr2.length;j++){
    num = num*arr2[j];
    }
console.log(num);