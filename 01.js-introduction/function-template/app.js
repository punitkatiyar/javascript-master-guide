    function template( title , info ,titleSize ){
        document.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <link rel="stylesheet" href="style.css">

            </head>
            <body>
                <div class="head bg${titleSize}">
                <h${titleSize}>${info}</h${titleSize}>
                </div> 
            </body>
            </html>
        `)
    }
