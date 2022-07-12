///variables
var play = document.querySelector("#play")
var stop = document.querySelector("#stop")
var ball = document.querySelector(".ball")
var btn = document.querySelector(".random__col")
var stopColors = document.querySelector(".stop__col")
var positionBtn = document.querySelector(".random__position")
var formula = document.querySelector(".formula")
var size = document.querySelector(".size")

///function events


var dragvalue;

function move() {

    ball.style.position = "absolute"

    ball.onmousedown = function () {

        dragvalue = ball
    }
}
document.onmouseup = function () {

    dragvalue = null
}


document.onmousemove = function (e) {
    var x = e.pageX
    var y = e.pageY
    dragvalue.style.left = x + "px"
    dragvalue.style.top = y + "px"

    if (x > 1650) {
        ball.style.width = "150px"
        ball.style.height = "150px"
    }
    else {
        ball.style.width = "100px"
        ball.style.height = "100px"
    }




}


play.addEventListener("click", () => {

    stop.style.visibility = "visible"
    stop.style.color = "red"
    play.style.visibility = "hidden"

    ball.onmousemove = function (event) {

        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;
        ball.style.top = Math.floor((Math.random() * bodyHeight)) + "px"
        ball.style.left = Math.floor((Math.random() * bodyWidth)) / 2 + "px"


    }


    stop.addEventListener("click", (event) => {
        ball.onmousemove = null
        play.style.visibility = "visible"
        play.style.color = "green"
        stop.style.visibility = "hidden"
    })

})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}






btn.addEventListener("click", () => {
    var time = setInterval(function () {

        ball.style.background = getRandomColor()
        ball.style.boxShadow = "10px 10px 20px black "
    }, 300)

    stopColors.onclick = function () {
        clearInterval(time)
    }

})


positionBtn.addEventListener("click", () => {
    var bodyWidth = document.body.clientWidth
    var bodyHeight = document.body.clientHeight;
    ball.style.top = Math.floor((Math.random() * bodyHeight)) + "px"
    ball.style.left = Math.floor((Math.random() * bodyWidth)) / 2 + "px"
    ball.style.background = getRandomColor()

})

formula.onclick = () => {

    ball.classList.toggle("cube")
}


size.onclick = () => {
 
  ball.classList.toggle("big")
   

}