var i = 0;
var text = 'web develo<p>er & designer';
var speed = 75;

function typeWriteDescription() {
    if (i < text.length) {
        document.getElementById("description").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriteDescription, speed);
    }
}

typeWriteDescription();