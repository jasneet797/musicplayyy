person={
    jasneet:87,
    jasmine:67,
    sukhchian:90
}
for (const key in person) { {
        const element = person[key];
        console.log(key,element);
        
    }
}
let ele=Object.keys(person)
for(let i=0; i<ele.length; i++){
    let a=ele[i]
    console.log(a);
    let b=person[a];
    console.log(b);
}
let num=8;
let a;
// let a=prompt("Enter your number");
if(a==num){
    console.log("You have guessed right");
}
else{
    console.log("Enter the correct number");
}
function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
let result=mean(3,5,43,6,3);
console.log("The mean of 5 numbers a,b,c ,d,e is",result);