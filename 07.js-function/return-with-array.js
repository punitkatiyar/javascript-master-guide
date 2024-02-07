function multi(a, b) {
    res1 = a + b;
    res2 = a - b;
    res3 = a * b;
    res4 = a / b;
    console.log("Result Is : ");
    // return res1;
    // return res2;
    // return res3;
    // return res4;
    // return res1, res2, res3, res4;
    return [res1, res2, res3, res4];

}
// 30,10,200,2

result = multi(20, 10);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);