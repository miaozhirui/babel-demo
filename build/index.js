'use strict';

console.log('===');

var add = function add(a, b) {
    return a + b;
};

var x = add(1, 2);
console.log(x);

var obj = {};

Object.assign(obj, {

    name: 1,
    age: 122
});

console.log(obj);
console.log(Array.from('aaa'));