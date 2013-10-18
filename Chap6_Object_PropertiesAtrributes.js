//Characteristics of object properties are described through internal-only attributes.
// There are two types of properties : data properties and accessor properties

/**
 * Data properties have four attributes [[configurable]], [[Enumerable]],[[writable]],[[value]]
 * TO change the default property attribute , use Object.defineProperty() in ECMAScript 5
 */
 var person={};
Object.defineProperty(person,"name",{writable:false,value:"Nicholas"});
alert(person.name);
person.name="Greg";
alert(person.name);//it does not change the value

/**
 * Accessor properties do not contain a data value. they contain a combination of a getter and setter function.
 * Four attributes. [[configurable]],[[Enumerable]],[[Get]],[[Set]]
 * Accessor property cannot be defined explicitly.You must use Object,defineProperty().
 */

 var book={
    _year:2004,
    edition:1
};

Object.defineProperty(book,"year",{
get:function(){
    return this._year;
},
    set:function(newValue){
     if(newValue>2004){
        this._year=newValue;
         this.edition+=newValue-2004;
      }
    }
});
book.year=2005;
alert(book.edition);
