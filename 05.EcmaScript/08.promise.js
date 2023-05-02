// let x = 1;
// console.log(x);

let x = new Promise((resolve, reject) => {
    //resolve('Done');
    reject("Byee")

})

x.then((list) => {
    console.log(list)
}).catch((err) => {
    console.log(err)
})



x = 2;
setTimeout(function () {
    console.log(x);
    
},3000);




x = 3;
console.log(x);