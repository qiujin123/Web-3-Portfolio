var burgerAnimateSpeed = 0.25;

var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});

burgerAnimationTimeLine.addLabel("burgerToDownArrow")
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:-90}, "animateBurger")
                        .to("#top",{duration:burgerAnimateSpeed}, "animateBurger")
                        .to("#mid",{duration:burgerAnimateSpeed}, "animateBurger")
                        .to("#mid2",{duration:burgerAnimateSpeed}, "animateBurger")
                        .to("#bot",{duration:burgerAnimateSpeed, fill:"#EE1C4E"}, "animateBurger")
                        .addLabel("burgerToDownArrowReverse")
                        .addPause()
                        .addLabel("downArrowToX")
                        .to("#top",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#mid",{duration: burgerAnimateSpeed, transformOrigin:"50% 50%", rotation:45, fill:"#EE1C4E"},"burgerToX")
                        .to("#mid2",{duration: burgerAnimateSpeed, transformOrigin:"50% 50%", rotation:-45, fill:"#EE1C4E"},"burgerToX")
                        .to("#bot",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .addLabel("downArrowToXReverse")
                        .addPause()
                        .addLabel("xToUpArrow")
                        .to("#top",{duration:burgerAnimateSpeed, rotation: 0, alpha:1, fill:"#EE1C4E"}, "upArrow")
                        .to("#mid",{duration:burgerAnimateSpeed, rotation: 0, alpha:1, fill:"#fff"}, "upArrow")
                        .to("#mid2",{duration:burgerAnimateSpeed,rotation: 0, alpha:1, fill:"#fff"}, "upArrow")
                        .to("#bot",{duration:burgerAnimateSpeed,rotation: 0, alpha:1, fill:"#fff"}, "upArrow")
                        .addLabel("xToUpArrowReverse")
                        .addPause()
                        .addLabel("upArrowToBurger")
                        .to("#burger",{duration:burgerAnimateSpeed,rotation:0}, 'backToBurger')
                        .to("#top",{duration:burgerAnimateSpeed, fill:"#fff"}, "backToBurger")
                        
                        
                        