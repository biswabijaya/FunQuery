var i = 0;
var txt = $(".typewriter").text();
var speed = 50;

$(".typewriter").empty();

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementByClass("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
