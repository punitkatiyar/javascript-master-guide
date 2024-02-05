// Cannot access 'data' before initialization
//console.log(data);
let data = "Hello in Js";
// hello();
// define the function
function hello(tech = "Sample") {
    console.log("Hello");
    document.write(`<h1>${tech}</h1>`);
}
// call the function
const techs = ['html', "css", "javascript", "react"];
// hello(techs[0]);
// hello(techs[1]);
// hello(techs[2]);
// hello(techs[3]);
// hello();
// hello("Ducat India");
// hello();

// example card
const cardData = {
    id: 101,
    uName: "Ducat India",
    uCourse: "Full Stack"
}
function card(obj) {

    for (user in obj) {
        document.write(`<h3>${obj[user]}</h3>`);
    }
}
card(cardData);


