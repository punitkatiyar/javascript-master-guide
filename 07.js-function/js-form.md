```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="number" id="num" value="" placeholder="Enter Number">
    <button onclick="getData()">Get Value</button>

    <script>
        function getData() {
            data = document.getElementById('num').value;
            num = parseInt(data)
            console.log(num);
        }
    </script>
</body>

</html>
```
