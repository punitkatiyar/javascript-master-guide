class user{
    data = 1;


    constructor(value)
    {
        this.data = value;   
    }
    hello()
    {
        return this.data;
    }
}
let unit = new user(100);
console.log(unit.hello())



