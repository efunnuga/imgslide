let image$ = document.getElementById('imageOne')



function next() {
 if(image$.innerHTML === '<img src="img/1coding.jpg">') {
     image$.innerHTML = '<img src="img/2coding.jpg">'
 } else if (image$.innerHTML === '<img src="img/2coding.jpg">') {
     image$.innerHTML = '<img src="img/3coding.jpg">'
 } else if (image$.innerHTML === '<img src="img/3coding.jpg">') {
     image$.innerHTML = '<img src="img/coding.jpg" width="30%">'
 }
 else {
     image$.innerHTML = '<img src="img/1coding.jpg">'
 }
}

function prev() {
    if(image$.innerHTML === '<img src="img/2coding.jpg">') {
        image$.innerHTML = '<img src="img/1coding.jpg">'
    } else if (image$.innerHTML === '<img src="img/3coding.jpg">') {
        image$.innerHTML = '<img src="img/2coding.jpg">'
    } else if (image$.innerHTML === '<img src="img/coding.jpg">') {
        image$.innerHTML = '<img src="img/3coding.jpg" width="30%">'
    }
    else {
        image$.innerHTML = '<img src="img/1coding.jpg">'
    }
}