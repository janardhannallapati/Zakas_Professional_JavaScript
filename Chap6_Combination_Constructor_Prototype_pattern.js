//Object creation using object literal results in code duplication for each additional object.Hence there are new patterns.
//Object creation using factory pattern

function Person(name,age,job){
 this.name=name;
 this.age=age;
 this.job=job;
 this.friends=["shellby","court"];
}

Person.prototype={
    constructor:Person,
    sayName:function(){
        alert(this.name);
    }

}

var person1=new Person("nicholas",29,"Software Engineer");
var person2=new Person("Greg",27,"Doctor");
person1.friends.push("Van");
alert(person1.friends);
alert(person2.friends);
alert(person1.friends===person2.friends);
alert(person1.sayName()===person2.sayName());


