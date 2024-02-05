// heading

function title(data = "this is sample heading", hType = 6) {
    document.write(`<h${hType}>${data}</h${hType}>`);
}

title("Welcome to Ducat India", 1);
title("Welcome to Ducat India", 2);
title("Welcome to Ducat India", 3);
title("Welcome to Ducat India", 4);
title("Welcome to Ducat India", 5);

title();


// image helper

function image(iData = "teacher-1.jpg") {
    document.write(`<img src="src/${iData}" width="250px" alt="sample">`);
}
image();
image("teacher-2.jpg");
image("teacher-3.jpg");

// anchor helper