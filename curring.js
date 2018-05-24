function add(a, b) {
    return a + b
}

function addC(a) {
    return function (b) {
        return a + b
    }
}

let addC2 = (a) => (b) => a + b;

console.log(add(3, 5));
console.log(addC(3));
console.log(addC(3)(5));
console.log(addC2(3)(5));


//partial
let partAply = (f, x) => y => f(x, y);
console.log(partAply(add, 5)(3));

console.log(add.bind(null,5)(3));

//
let result = [1,2,3].map(addC(2));
console.log(result);