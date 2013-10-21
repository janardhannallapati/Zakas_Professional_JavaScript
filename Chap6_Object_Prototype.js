//Object creation using object literal results in code duplication for each additional object.Hence there are new patterns.
//Object creation using factory pattern

function Person(){

}


Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function(){
    alert(this.name);
};

var person1=new Person();
var person2=new Person();

person1.name="Greg";
//alert(person1.name);//"Greg" from instance
//alert(person2.name);//"Nicholas" from prototype



