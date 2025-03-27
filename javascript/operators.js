let a=5;
let b=4;
let c=a+b;
let d=a*b;
let e=a-b;
let f=a**b;
let g=a%b;
document.getElementById("add").innerHTML="a+b="+c;
document.getElementById("mul").innerHTML="a*b="+d;
document.getElementById("sub").innerHTML="a-b="+e;
document.getElementById("expo").innerHTML="a**b="+f;
document.getElementById("mod").innerHTML="a%b="+g;
a+=b;
document.getElementById("ass1").innerHTML="a+=b:"+a;
a*=b;
document.getElementById("ass2").innerHTML="a*=b:"+a;
a/=b;
document.getElementById("ass3").innerHTML="a/=b:"+a;
a%=b;
document.getElementById("ass4").innerHTML="a%=b:"+a;
a**=b;
document.getElementById("ass5").innerHTML="a**=b:"+a;
let h=a>b;
let i=a<b;
let j=a<=b;
let k=a>=b;
let l=a==b;
let m=a===b;
let n=a!==b;
let o=a!=b;
document.getElementById("comp1").innerHTML="a>b:"+h;
document.getElementById("comp2").innerHTML="a<b:"+i;
document.getElementById("comp3").innerHTML="a<=b:"+j;
document.getElementById("comp4").innerHTML="a>=b:"+k;
document.getElementById("comp5").innerHTML="a==b:"+m;
document.getElementById("comp6").innerHTML="a===b:"+n;
document.getElementById("comp7").innerHTML="a!=b:"+o;
// string operators
let text1="hello";
let text2="world";
let text=text1+text2;
console.log(text);
text1+=text2;
console.log(text1);
// typeof operator
console.log(typeof(text1));
// bitwise operator
let z=7&4;
let y=7|4;
let x=4;
let w=7^4;

console.log(z);
console.log(y);
console.log(~x);
console.log(w);
console.log(5<<1);
console.log(5>>1);
console.log(5>>>1);






