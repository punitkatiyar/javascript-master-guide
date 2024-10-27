// multiple return

function calc(a, b) {
    let res1 = a + b;
    let res2 = a - b;
    let res3 = a * b;
    let res4 = a / b;

    // return [res1, res2, res3, res4];

    return { r1: res1, r2: res2, r3: res3, r4: res4 };
}

const arrs = calc(50, 10);

for (arr in arrs) {
    console.log(arrs[arr]);
}



