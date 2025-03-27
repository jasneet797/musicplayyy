/*Create a faulty calculator using Javascript
This faulty calculator does following:
1.It takes two numbers as input fromt he users
2.It performs wrong operations as follows:
+--->-
*--->+
---->/
/--->**
It performs wrong operations 10% of the time
*/

random=Math.floor(Math.random()*100);
let x=10;
let y=5;
if(random<10){
  function sum(a,b){
    return a-b;
  }
  function mul(a,b){
    return a + b;
  }
  function sub(a,b){
    return a/b;
  }
  function div(a,b){
    return a**b;
  }
}
else{
  function sum(a,b){
    return a+b;
  }
  function mul(a,b){
    return a*b;
  }
  function sub(a,b){
    return a-b;
  }
  function div(a,b){
    return a/b;
  }
}
let q=sub(x,y);
let w=mul(x,y);
let r=div(x,y);
let t=sum(x,y);
console.log(q,w,r,t);
console.log('Adam D\'Angelo');
console.log('\u2764');
let f_name="jashan";
console.log(f_name.length);
let age=20;
console.log("His name is "+f_name+" and his age is"+age);
console.log(`His name is ${f_name} and his age is ${age}`);
let l_name=f_name.toUpperCase();
console.log(f_name);
console.log(l_name);
console.log(f_name.slice(1,3));
console.log(f_name.slice(1));
let a="computer";
console.log(a.replace("com","jum"));
console.log(f_name.concat(a," done"));
let b="  name ";
console.log(b.trim());
let v="har\"";
console.log(v,v.length);
let city="SIRHIND";
console.log(city.toLowerCase());
let str="Please give Rs 1000";
console.log(str.replace("1000","5000"));
console.log(str.slice(15,19));