$('[data-fancybox="gallery"]').fancybox({}),$(document).ready((function(){tns({container:".my-slider",items:1,slideBy:"page",autoplay:!0,controls:!1,navPosition:"bottom"}),console.log("No TinySlider found!")}));var burgerAnimationTimeLine=gsap.timeline({paused:!0}),burgerAnimateSpeed=.25;function animateBurger(){!0===canYouSeeTheMenu?burgerAnimationTimeLine.play():burgerAnimationTimeLine.reverse()}gsap.set(".lines",{transformOrigin:"center"}),burgerAnimationTimeLine.to("#top-line",{duration:burgerAnimateSpeed,rotation:45,y:8,x:8},"burgerToX").to("#top-line-2",{duration:burgerAnimateSpeed,rotation:-135,y:29,x:15},"burgerToX").to("#mid-line",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#bot-line",{duration:burgerAnimateSpeed,rotation:-45,y:0,x:0},"burgerToX").to("#bot-line-2",{duration:burgerAnimateSpeed,rotation:135,y:0,x:13},"burgerToX");var burgerToArrowTimeline=gsap.timeline({paused:!0}),burgerArrowSpeed=.25;burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed,rotation:-90},"animateBurger").to("#bot-line",{duration:burgerArrowSpeed,y:5},"animateBurger").to("#bot-line-2",{duration:burgerArrowSpeed,y:5},"animateBurger").to("#top-line",{duration:burgerArrowSpeed,y:0},"animateBurger").to("#top-line-2",{duration:burgerArrowSpeed,y:0},"animateBurger"),$("#burger").on("mouseenter",(function(){console.log("mouse enter"),burgerToArrowTimeline.play()})),$("#burger").on("mouseleave",(function(){console.log("mouse leave"),burgerToArrowTimeline.reverse()}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(console.log("show me the menu!"),canYouSeeTheMenu=!0,animateBurger(),mainNavTimeline.play()):(console.log("hide the menu!"),canYouSeeTheMenu=!1,animateBurger(),mainNavTimeline.reverse())}mainNavTimeline.to("#main-nav",{duration:.25,y:0}),console.log($("#main-nav").outerHeight()+" is the outer height of the #main-nav");var menuBackground=document.querySelector("#main-nav");window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},$("#burger").on("click",hideShowMainNav);const logoTimeline=gsap.timeline();gsap.set(".photo",{alpha:0,yPercent:100}),logoTimeline.to(".photo",{duration:.5,alpha:1,yPercent:0,stagger:.25}),ScrollTrigger.create({animation:logoTimeline,toggleActions:"restart none none none",trigger:"#repeats-gallery",start:"top 60%",end:"bottom 60%",id:"photo"}),$(document).ready((function(){console.log("ready!")}));