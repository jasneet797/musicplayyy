let children={
    plays:true,
    eats:true,
    sleeps:true,
    mobile:false
};
let student={
    studies:true,
    giveexams:true,
    dance:true
}
children.__proto__=student;
function child(names){
    this.name=names;
    console.log(this);
}
child.prototype.player=function(){
    console.log(this.name,"is playing");
    console.log(this);
};
let jas=new child("jasmine");
jas.player();
console.log(this);