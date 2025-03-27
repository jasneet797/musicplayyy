(function(names){
  console.log(names);
})("hello world")
// console.log(names);
var ans=(function(){
var privateval=12;
// return {
//     getter:function(){
//         console.log(privateval);
//     }
// }
return privateval;
})();
console.log(ans);