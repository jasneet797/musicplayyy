outer=(()=>{
    var a_outer=15;
    inner=(()=>{
        console.log("first inner fxn executed",a_outer)
    })
    inner();
    inner2=(()=>{
        console.log("second inner fxn executed",a_outer);
    })();
    // inner2();
})
outer();
