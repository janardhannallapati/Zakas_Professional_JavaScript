//Object creation using object literal results in code duplication for each additional object.Hence there are new patterns.
//Object creation using factory pattern

 function createPerson(name,age,job){
     var o=new Object();
     o.name=name;
     o.age=age;
     o.job=job;
     o.sayName=function(){
     alert(this.name);
     };

     return o;
 }
var person1=createPerson("Nicholas",29,"Software Engineer");
var person2=createPerson("Greg",27,"Doctor");

//The factory pattern did not address the issue of object identification.

// Constructor pattern
// A constructor function is no different from a normal function, it will become constructor only when it is called with new operator
function Person(name,age,job){
    this.name=name;
    this.job=job;
    this.age=age;
    this.sayName=function(){
        alert(this.name);
    };
}

var person1=new Person("Nicholas",29,"Software Engineer");
var person2=new Person("Greg",27,"Doctor");
//calling constructor with new causes 4 steps
// 1. create a new object
//2. assign 'this' to the new object
//3. execute the code inside the constructor
//4. return the new object

//constructors give identity to objects
alert(person1 instanceof Object);
alert(person1 instanceof Person);

//constructor called as a function

Person("Greg",22,"Doctor");// adds to window
window.sayName();


// Call in the scope of another object
var o=new Object();
Person.call(o,"Kirsten",25,"Nurse");
o.sayName();

// problem with constructor pattern is that their functions are created for each object which is waste of memory.
// To solve it we can define them outside the constructor and refer them inside the constructor , but it pollutes the global scope.




