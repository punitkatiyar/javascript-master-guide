# Form Handling Using Javascript

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Handling Using Javascript</title>
</head>
<body>
<input type="text" id="uname">
<input type="text" id="uemail">
<button onclick="counter()">Get Value</button>
<div class="card">
    <h1 id="resName"></h1>
</div>
<script>
    function counter(){
        let resName=document.getElementById('uname').value;
        let resEmail = document.getElementById('uemail').value;
        console.log(resName+ resEmail);
        document.getElementById('resName').innerHTML=resName;
    }
</script>
</body>
</html>
```
