var circle = document.getElementById("circle");
var upward = document.getElementById("upward");
var downward = document.getElementById("downward");
var refresh = document.getElementById("refresh");


var rotateValue = circle.style.transform;
var rotateSum;


upward.onclick = function() {

    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downward.onclick = function() {

    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

refresh.onclick = function() {
    if (confirm("Are you sure, want to refresh?")) {
        location.reload();
        loc
    }
}

function showAlert() {
    alert('Congrats! You got it right! Now, you can go to the next game.');
}