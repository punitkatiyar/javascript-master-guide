class Blog {
    head(title = "Application", css = "style.css") {
        document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="${css}">
    </head>
    <body>
    <div class="head">
        <h1>${title}</h1>
    </div>
    <div class="nav">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="page.html">page</a></li>
        <li><a href="post.html">post</a></li>
        <li><a href="profile.html">Profile</a></li>
    </ul>
    </div>




    <div class="mid">
    `)
    }

    footer() {
        document.write(`
    </div>
    <div class="footer"></div>
    </body>
    </html>
    `)
    }
}