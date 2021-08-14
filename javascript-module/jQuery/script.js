//
document.querySelector("h1" );

//jquery
console.log($("h1").css("color"));

$("h1").css("color", "5rem")

//in CSS the class it's called .big-title
$("h1").addClass("big-title")

//there is also exist .removeClass

//multiple class
$("h1").addClass("big-title other-class")

//hasClass answer is boolean

//Change text
$("h1").text("Bye")

//innerHTML is just html (Update text and add text)
$("h1").html("<em>Hey</em>")


//Manipulate attributes like "a"" or "img"
// << a
// href = "" > < /a>
// << img
// src = ""
// alt = "" >
$("img").attr("src", "https://www.apple.com")

//Listener
$("h1").click(function() {
   $("h1").css("color", "purple")
});


//without jQuery
for (var i =0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}

//with jQuery
$("button").click(function() {
    $("h1").css("color", "purple");
})

//detect keyboard in all document
$(document).keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(event) {
    $("h1").css("color", "purple");
});

//add code with .after or .before

//inside the element .prepend just before the subelement
//inside the element .append just after the subelement

//Animations

.hide();
.toggle();
.fadeOut();
.fadeToggle();
.slideUp();
.slideDown();
.animate({
    opacity: 0.5,
    margin: 0
})

//One after other animation
    .slideUp().slideDown().animate({
    opacity})
