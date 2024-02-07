function multi(a, b) {
    res = {
        "res1": a + b,
        "res2": a - b,
        "res3": a * b,
        "res4": a / b,
    }
    return res;
    // return [res1, res2, res3, res4];
}
// 30,10,200,2
result = multi(20, 10);

console.log(result.res1);
console.log(result.res2);
console.log(result.res3);
console.log(result.res4);

