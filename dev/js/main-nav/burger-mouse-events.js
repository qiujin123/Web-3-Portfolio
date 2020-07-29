
var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;


burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bot-line",{duration:burgerArrowSpeed, y:5}, "animateBurger")
                        .to("#bot-line-2",{duration:burgerArrowSpeed, y:5}, "animateBurger")
                        .to("#top-line",{duration:burgerArrowSpeed, y:0}, "animateBurger")
                        .to("#top-line-2",{duration:burgerArrowSpeed, y:0}, "animateBurger")
                     




$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    burgerToArrowTimeline.play();
})



$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    burgerToArrowTimeline.reverse();
})