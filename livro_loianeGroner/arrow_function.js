// sem arrow function

var circleAreaES5 = function circleArea(r) {
    var pi = 3.14;
    var area = pi * r * r;
    return area;
};
console.log(circleAreaES5(2))

// com arrow function

const circleArea = r => {
    const PI = 3.14;
    const area = PI * r *r;
    return area
}
console.log(circleArea(2))