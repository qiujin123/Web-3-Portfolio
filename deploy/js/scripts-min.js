$('[data-fancybox="gallery"]').fancybox({}),$(document).ready((function(){tns({container:".my-slider",items:1,slideBy:"page",autoplay:!0,controls:!1,navPosition:"bottom"}),console.log("No TinySlider found!")}));var burgerAnimateSpeed=.25,burgerAnimationTimeLine=gsap.timeline({paused:!0});burgerAnimationTimeLine.addLabel("burgerToDownArrow").to("#burger",{duration:burgerAnimateSpeed,rotation:-90},"animateBurger").to("#top",{duration:burgerAnimateSpeed},"animateBurger").to("#mid",{duration:burgerAnimateSpeed},"animateBurger").to("#mid2",{duration:burgerAnimateSpeed},"animateBurger").to("#bot",{duration:burgerAnimateSpeed,fill:"#EE1C4E"},"animateBurger").addLabel("burgerToDownArrowReverse").addPause().addLabel("downArrowToX").to("#top",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#mid",{duration:burgerAnimateSpeed,transformOrigin:"50% 50%",rotation:45,fill:"#EE1C4E"},"burgerToX").to("#mid2",{duration:burgerAnimateSpeed,transformOrigin:"50% 50%",rotation:-45,fill:"#EE1C4E"},"burgerToX").to("#bot",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").addLabel("downArrowToXReverse").addPause().addLabel("xToUpArrow").to("#top",{duration:burgerAnimateSpeed,rotation:0,alpha:1,fill:"#EE1C4E"},"upArrow").to("#mid",{duration:burgerAnimateSpeed,rotation:0,alpha:1,fill:"#fff"},"upArrow").to("#mid2",{duration:burgerAnimateSpeed,rotation:0,alpha:1,fill:"#fff"},"upArrow").to("#bot",{duration:burgerAnimateSpeed,rotation:0,alpha:1,fill:"#fff"},"upArrow").addLabel("xToUpArrowReverse").addPause(),$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?(console.log("burger to arrow"),burgerAnimationTimeLine.play("burgerToDownArrow")):burgerAnimationTimeLine.play("xToUpArrow")})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?(console.log("arrow to burger"),burgerAnimationTimeLine.reverse("burgerToDownArrowReverse")):burgerAnimationTimeLine.reverse("xToUpArrowReverse")}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){console.log("show me the menu!"),console.log(canYouSeeTheMenu+" can you see the menu value"),!1===canYouSeeTheMenu?(burgerAnimationTimeLine.play("downArrowToX"),mainNavTimeline.play(),canYouSeeTheMenu=!0):(console.log("burger click up"),burgerAnimationTimeLine.play("upArrowToBurger"),mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.25,y:0}),gsap.set(".lines",{transformOrigin:"center"});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#burger").on("click",hideShowMainNav);const logoTimeline=gsap.timeline();gsap.set(".photo",{alpha:0,yPercent:100}),logoTimeline.to(".photo",{duration:.5,alpha:1,yPercent:0,stagger:.25}),ScrollTrigger.create({animation:logoTimeline,toggleActions:"restart none none none",trigger:"#repeats-gallery",start:"top 60%",end:"bottom 60%",id:"photo"}),$(document).ready((function(){console.log("ready!")}));