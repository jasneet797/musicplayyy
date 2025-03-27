try{let a=7;
if(a==7){
    // throw new Error();
    throw "Error occured";
}
}
catch(err){
   console.log(err);
//    console.log(err.name);
//    console.log(err.stack);
}
function divide(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}
try{
    console.log(divide(4,0));
}
catch(err){
    console.error("Error caught",err.message)
}
function checknum(n){
    i
}