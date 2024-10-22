var rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", function (details) {
    var RectLocation = rectangle.getBoundingClientRect();
    var insideRectVal = details.clientX - RectLocation.left;

    if (insideRectVal < RectLocation.width / 2) {
        // console.log("Left");
        var redColor = gsap.utils.mapRange(0, RectLocation.width / 2, 255, 0, insideRectVal);
        gsap.to(rectangle, { backgroundColor: `rgb(${redColor} , 0 , 0 )`, ease: Power4 });
    }
    else {
        var BlueColor = gsap.utils.mapRange(RectLocation.width / 2, RectLocation.width, 0, 255, insideRectVal);
        gsap.to(rectangle, { backgroundColor: `rgb(0 , 0 , ${BlueColor})`, ease: Power4 });
    }


})


rectangle.addEventListener("mouseleave", function () {
    gsap.to(rectangle, {
        backgroundColor: `white`    
    })
})



// mapRange(inMin, inMax, outMin, outMax, valueToMap)
// gsap.utils.mapRange(-10, 10, 100, 200, 0); // 150