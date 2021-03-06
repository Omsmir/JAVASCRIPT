/*
  Object
  - Create Object With assign Method
*/

let obj1 = {
    prop1: 1,

    meth1: function() {
        return obj1.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function() {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 2,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 4;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign(obj1, { prop1: 5, prop6: 6 });

console.log(newObject);
console.log(newObject.meth1())