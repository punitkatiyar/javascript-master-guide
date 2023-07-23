```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{ margin: 0; padding: 0;}
        .tab{width: 20%;}
        .tab li{ padding: 1% 5%; background-color: gold; margin-bottom: 1vh;}
        body{ padding: 5%; background-color: whitesmoke;}
        .card{
            width:23%;
            height: 25vh;
            background-color: tomato;
            float: left;
            margin: 1%;
            font-size: 2rem;
            color: white;
        }
    </style>
</head>
<body>

    <script>
        let data="Welcome";
        console.log(data);
        let course=["html","css","javascript","ECMA Script","React"];
        document.write('<ul>');
            document.write(`<li>${course[0]}</li>`);
            document.write(`<li>${course[1]}</li>`);
            document.write(`<li>${course[2]}</li>`);
            document.write(`<li>${course[3]}</li>`);
        document.write('</ul>');

        // while
        // example 1
        document.write('<ul>');
        let count=0;
        while(count<=3)
        {
             document.write(`<li>${course[count]}</li>`);
             count ++;
        }
        document.write('</ul>');

        // example 2
        document.write('<ul>');
            let count1 = 0;
            while (count1 < course.length) {
                document.write(`<li>${course[count1]}</li>`);
                count1++;
            }
        document.write('</ul>');
        // why
        //////////////////////////////////////////////////////////////////
        // document.write('<ul class="tab">');
        //     let count2 = 0;
        //     while (count2 <= 3) {
        //         document.write(`<li>${course[count2]}</li>`);
        //         count2++;
        //     }
        // document.write('</ul>');
        //////////////////////////////////////////////////////////////////////    
        
        //do while at lest once
        
        document.write('<ul class="tab">');
        let count2 = 0;
            do{
                document.write(`<li>${course[count2]}</li>`);
                count2++;
            }
            while(count2<=3)
        document.write('</ul>');

        // for

        for(let data=0;data<course.length;data++){
            document.write(`<div class="card">${course[data]}</div>`);
        }

        // for in

        let users={u1:"User 1",u2:"User 2",u3:"User 3"};

        for(let user in users )
        {
            document.write(`<div class="card">${users[user]}</div>`)
        }

        // for of text , array , object

        let message="Ducat";
        for(msg of message)
        {
            document.write(`<h1>${msg}</h1>`);
        }
    </script>
</body>
</html>
```
