function P(props, title) {

    function C(props, unit) {
        return `User ${props} ${unit} `;
    }
    return "Hello " + C(props, title);
}
console.log(P("Punit", "Ducat India"));



