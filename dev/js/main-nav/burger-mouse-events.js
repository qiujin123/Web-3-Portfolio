// gsap.set("#mid",{transformOrigin:"right center", alpha:0});
// gsap.set("#mid2",{transformOrigin:"right center"});


$("#burger").on("mouseenter", function(){
    if(canYouSeeTheMenu === false){
        console.log("burger to arrow");
        burgerAnimationTimeLine.play("burgerToDownArrow");
    }else{
        burgerAnimationTimeLine.play("xToUpArrow");
    }
})

$("#burger").on("mouseleave", function(){
    if(canYouSeeTheMenu === false){
        console.log("arrow to burger");
        burgerAnimationTimeLine.reverse("burgerToDownArrowReverse");
        
    }else{
        burgerAnimationTimeLine.reverse("xToUpArrowReverse");
    }
})