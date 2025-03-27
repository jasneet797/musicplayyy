function fetchData(){
    try{
        throw new Error("input Error");
    }
    catch(error){
        if(error.message==="Network error"){
            console.log("Handling network error");
        }
        else{
            throw error;
        }
    }
}
try{
    fetchData();
    // throw new error("");
}
catch(error){
  console.log("Higher level handling",error.message);
}
let [x,y,...z]=[1,2,3,4,5,6,7,8];
console.log(x,y,z);
const obj=
{
    maths:23,
    physics:34
}
let {a,physics}=obj;
console.log(a,physics);
const names=["jas","sukh","chain"];
console.log(...names);
const obj2={...names};
console.log(obj2);