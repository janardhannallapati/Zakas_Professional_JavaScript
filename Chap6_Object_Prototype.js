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

document.getElementById("result").innerHTML="person1 prototype is Person.prototype :"+Person.prototype.isPrototypeOf(person1);
document.getElementById("result").innerHTML="person1 prototype is  :"+Object.getPrototypeOf(person1);

//Determine if a property belogs to prototype
// in operator returns true so long as the property is accessible by the object and hasOwnProperty() returns true only if the property exists on the instance,
// a prototype property can be determined by if the in operator returns true and hasOwnProperty() returns false.

function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty()&&(name in object);
}




