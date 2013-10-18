/*
understanding objects
 */

//simplest way to create objects is using object instance

var person=new Object();
person.name="Nicholas";
person.age=29;
person.job="Software Engineer";
person.myName=function(){
    alert(this.name);    //alert('boy janardhan');

};


person.myName();
