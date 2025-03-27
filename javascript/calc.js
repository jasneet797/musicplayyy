function Solve(val){
    document.getElementById("calc-input").value+=val;
    // var v=document.getElementById('calc-input');
    // v.value+=val;
    console.log("solve function called");
    }
function Clear(){
         // var inp = document.getElementById('calc-input');
        // inp.value = '';
        document.getElementById("calc-input").value= " ";
        console.log("clear function called");
    }
function Back(){
    var inputField=document.getElementById('calc-input');
    inputField.value=inputField.value.slice(0,-1);   
    // var ev = document.getElementById('calc-input');
    // ev.value = ev.value.slice(0, -1);
}
 function Result() {
    var num1 = document.getElementById('calc-input').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('calc-input').value = num2;
    } catch {
       document.getElementById('calc-input').value = 'Error';
    }
 }
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });
    