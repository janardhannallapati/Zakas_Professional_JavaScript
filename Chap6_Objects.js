/*
understanding objects
 */

//simplest way to create objects is using object instance

var person=new Object();
person.name="Nicholas";
person.age=29;
person.job="Software Engineer";
person.myName=function(){
    alert('using object instance:'+this.name);    //alert('boy janardhan');

};


person.myName();

// Creating object using Object literal.

var person={
    name:"Nicholas",
    age:29,
    job:"Software Engineer",
    sayName:function(){
        alert('using object literal :'+this.name);
    }
};

person.sayName();


