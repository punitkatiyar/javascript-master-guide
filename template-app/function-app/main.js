function head(title="Ducat India",css='style.css')
{
    document.write(`<!DOCTYPE html>
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
    </div>`)
}

function banner(btitle="This is a home page banner") {
    document.write(`<div class="banner">
    <h1>${btitle}</h1>
    </div>`)
}

function post(count=1)
{
    for (p = 1; p <= count; p++) {



        document.write(`<h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, veritatis!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque perspiciatis pariatur eius aperiam ad. Eum,
            corrupti tempora aperiam rem quibusdam quaerat sapiente, odit amet molestiae reiciendis quisquam sunt
            asperiores nihil itaque delectus doloribus sint voluptatibus, commodi esse eius quos tempore aut officiis
            similique. Quibusdam recusandae distinctio, eveniet exercitationem laborum velit architecto autem fugit
            incidunt sunt fuga atque veniam voluptate sed explicabo voluptas quia nesciunt mollitia. Praesentium
            officia, inventore quaerat ducimus sint maxime sequi consectetur doloremque. Dignissimos labore repudiandae
            voluptatum quidem provident vitae! Optio, ut praesentium! Voluptas sit minima beatae ducimus dignissimos
            aliquam molestiae, voluptatem, nemo iste quam quos harum, quibusdam delectus omnis nostrum accusamus.
            Suscipit non officiis praesentium illo, dicta mollitia, ipsa libero fugit porro iure minima doloremque earum
            quod, consectetur obcaecati? Eligendi fugiat ipsam dicta voluptatem dignissimos sit recusandae provident
            voluptate officia, expedita labore dolor repellendus quia laudantium, architecto odio quae placeat.
            Consectetur illo nisi vel officiis, ad non odio inventore debitis, aliquid facere, eum impedit sapiente id
            numquam. Quibusdam repellat hic accusantium modi maiores nobis tempore neque corporis, ut ad fugit eligendi
            impedit accusamus temporibus aliquam. Eius illum tempore animi temporibus vitae. Saepe praesentium vero
            iusto illum, dolore similique accusamus eligendi id magni ullam repudiandae ut blanditiis totam.</p>`)
    }
}

function footer()
{
    document.write(`<div class="footer">
        <h4>Copyright &copy; 2023</h4>
    </div>  
</body>
</html>`);
}