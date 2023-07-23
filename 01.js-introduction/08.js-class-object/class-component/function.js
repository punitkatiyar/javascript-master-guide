class Template{
    
head(title) {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <a href="index.html">${title}</a>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="page1.html">Page 1</a></li>
            <li><a href="page2.html">Page 2</a></li>
            <li><a href="page3.html">Page 3</a></li>
            <li><a href="page4.html">Page 4</a></li>
            <li><a href="page5.html">Page 5</a></li>
        </ul>
    </nav>
    <section>
    `);
}


post(count) {
    let p = 1;
    do {
        document.write(`<h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, repellendus?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum necessitatibus reprehenderit officia. Blanditiis est deleniti nisi reiciendis nulla fugit quas similique consequatur maiores, dolores sed vel nihil totam ullam impedit veniam perferendis error suscipit laborum laudantium iure alias id. Veritatis, mollitia reprehenderit ab ipsum voluptas perspiciatis quibusdam itaque dolorum nobis exercitationem culpa sed odit tempore neque velit inventore optio cupiditate aperiam deserunt similique dolore libero possimus consequatur? Laudantium corporis voluptatibus libero aperiam voluptate quo obcaecati, hic fuga dicta quasi dolore fugit, recusandae eos, accusamus veritatis nobis praesentium iste doloribus saepe enim ipsum officia quae asperiores corrupti. Eveniet quia, ab necessitatibus eum natus aliquam error magni obcaecati dolores eos unde rem quaerat, non eaque sint placeat porro quis similique commodi in, corporis maiores vitae quidem provident. Dolore ipsum quod voluptas sit ut iure assumenda doloremque accusantium molestiae non repudiandae optio asperiores voluptatem quaerat harum reprehenderit cumque tempora nobis ducimus eius, nam culpa! Soluta doloribus, magni ipsa rem laborum voluptates! Ipsa sit minima, accusantium eum ut hic? Dignissimos voluptatem harum doloribus consequuntur, veritatis provident nostrum magni nisi repellendus ab placeat expedita architecto eveniet, natus quae, aliquam saepe. Quibusdam fugit perspiciatis voluptas quae porro dolorem nemo vitae laborum delectus doloribus expedita cumque nesciunt officiis iusto quod, facere odio aut repellendus explicabo, tempora labore commodi maiores atque? Nobis quasi ullam distinctio dolorem ad facere asperiores vero atque in iure incidunt quibusdam, dolor accusantium libero illum veritatis quaerat minima! Debitis totam perferendis vel ipsum, repudiandae rerum? Eos non, quod odio fuga sapiente quae est!</p>`);
        p++;    
    }
    while (p<=count);  
}

footer() {
    document.write(`</section>
    <footer>
        <h4>Copyright &copy; 2023 my application</h4>
    </footer>
</body>
</html>`);
}

image(imgData) {
    document.write(`<img src="image/${imgData}" alt="ducat India">`)
}


}