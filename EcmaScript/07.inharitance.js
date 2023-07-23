class A{
    constructor() {
        console.log("main");
    }
    user()
    {
        return "This is class A fun 1";
    }
    profile()
    {
        return "This is class A fun 2";
    }
}
class B extends A { 
    constructor() {
        super();
        console.log("sub");
    }
    admin()
    {
        return "This is class B fun b";
    }
    account()
    {
        return "This is class B fun b";
    }
}

const app1 = new A();
console.log(app1.user());
console.log(app1.profile());


const app2 = new B();
console.log(app2.admin());
console.log(app2.account());

console.log("...................");

console.log(app1.user());









