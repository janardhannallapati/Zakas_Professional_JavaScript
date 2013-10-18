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
