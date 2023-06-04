//define the function
    function template( title , info ){
        document.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
            </head>
            <body>
                <h1>${info}</h1>
                
            </body>
            </html>
        `)
    }
    // call the function
    // passing the argument