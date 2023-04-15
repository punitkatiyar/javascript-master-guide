class user{
    static data = 1;
    constructor()
    {
         console.log("This is constructor")   
    }
    static hello()
    {
        return user.data++;
    }
}
// let unit = new user();
// console.log(unit.hello());
// console.log(unit.hello());
// console.log(unit.hello());
// console.log(unit.hello());

// let unit1 = new user();
// console.log(unit1.hello());
// console.log(unit1.hello());
// console.log(unit1.hello());
// console.log(unit1.hello());

// do not use constructor
console.log(user.data);
console.log(user.hello());



