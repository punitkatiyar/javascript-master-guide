// es 6 class
class admin{
    name = "Punit";
    profile = "FullStack";
    // this is a privare Variable
    #account = 2023;

    hello()
    {
        return(`welcome ${this.name}`);

    }
    // getter 
    get getAccount()
    {
        return this.#account;
    }
    set setAccount(value)
    {
        return this.#account=value;
    }

}
const tech = new admin();
console.log(tech.name);
console.log(tech.hello());

// undefine
//console.log(tech.account);
// Uncaught SyntaxError: Private field '#account' must be declared in an enclosing class
//console.log(tech.#account);

//setter
//tech.setAccount(2024);
tech.setAccount=2024;
//console.log(tech.getAccount());
console.log(tech.getAccount);





