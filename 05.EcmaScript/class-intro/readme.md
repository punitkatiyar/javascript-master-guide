```
// class and object
class Welcome{
    uname = "Punit";
    uemail = "punit.kat@gmail.com";
    #upass = 123456;
    arr = ["html", 'css', 'javascript'];
    obj = { data1: "HTML 5", data2: "CSS 3", data3: 'jquery' };
    hello(title) {
        return (`${title} ${this.uname}`); 
    }
}
// console.log(uname);
const app = new Welcome;
console.log(app.uname);
console.log(app.uemail);
console.log(app.upass);
console.log(app.arr);
console.log(app.arr[0]);
console.log(app.obj);
console.log(app.obj.data1);
console.log(app.hello('Welcome to Function inside the class'));














////////////////////////////////////////////////////////////////////
// basic function
// function hello() {
//         return (`Welcome to Function Outside the class`);
        
// }
// console.log(hello());


```
