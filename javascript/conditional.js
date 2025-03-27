console.log("this are conditional statements")
let a=18;
if(a>18){
    console.log("You can drive");
}
else if(a==18){
    console.log("You can drive")
}
else{
    console.log("You cannot drive");
}
c=(a==5)?"a is 5":"a is not 5";
console.log(c);
// It translates to
// if(a==5){
//     console.log("a is 5");
// }
// else{
//     console.log("a is not 5");
// }
let age=10;
if(age>=10 && age<=20){
    console.log("age is between 10 and 20");
}
else{
    console.log("age is not between 10 and 20");
}
let day='tuesday';
switch(day){
    case 'monday':
        console.log("monday");
        break;
    case 'tuesday':
        console.log("tuesday");
        break;
    case 'wednesday':
        console.log("wednesday");
            break;
    default:
        console.log("invalid value")
}
let x=9;
if(a%2==0 || a%3==0){
    console.log("a is divisible by either 2 or 3");
}
else{
    console.log("a is not divisibel by 2 and 3");
}
let y=19;
let j = y>18 ? "You cannot drive" :"You can drive";
console.log(j);
