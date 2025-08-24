# Web Components

**Web Components are a set of features that provide a standard component model for the web allowing for encapsulation and interoperability of individual HTML elements. Web Components are a popular approach when building microfrontends.**


```
class Ducat extends HTMLElement {
    constructor() {
        super();
        if (this.getAttribute('data')) {
            this.innerHTML = this.getAttribute('data');
        }
        else {
            this.innerHTML = "Hello In Ducat India";
        }
    }
}
window.customElements.define('ducat-india', Ducat);
```


```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Web Component</title>
    <style>
        ducat-india {
            display: block;
            padding: 1%;
            background-color: gold;
            margin-bottom: 1vh;
        }
    </style>
</head>

<body>

    <ducat-india data="HTML">

    </ducat-india>
    <ducat-india data="CSS"></ducat-india>
    <ducat-india data="JavaScript"></ducat-india>
    <ducat-india data="React"></ducat-india>
    <ducat-india></ducat-india>
    <script src="Ducat.js"></script>
</body>

</html>
```
