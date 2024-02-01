function smoothScroll() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


    ScrollTrigger.refresh();
}
smoothScroll();

var cursorr = document.querySelector("#cursor");
var cursorHeader = document.querySelector("#cursor > h1");
var mainn = document.querySelector("#main");
var videoo = document.querySelector("video");

// Set initial styles for cursor and cursorHeader
gsap.set(cursorr, { scale: 1 });
gsap.set(cursorHeader, { opacity: 0 });

document.addEventListener("mousemove", function(dets) {
    gsap.to(cursorr, { left: dets.x, top: dets.y });
});

videoo.addEventListener("mouseenter", function() {
    gsap.to(cursorr, { scale: 10 });
    gsap.to(cursorHeader, { opacity: 1 });
});

videoo.addEventListener("mouseleave", function() {
    gsap.to(cursorr, { scale: 1 });
    gsap.to(cursorHeader, { opacity: 0 });
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 27%",
        end: "end 0%",
        scrub: 3
    }
})

tl.to(".page1 h1", {
    x: -100,
    duration: 1
}, "sameVar")

tl.to(".page1 h2", {
        x: 100,
        duration: 1

    }, "sameVar") //by giving same name it wil run together or at same time

tl.to(".page1 video", {
    width: "90%",
    duration: 1

}, "sameVar")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top -100%",
        end: "end -110%%",
        scrub: 5
    }
})

tl2.to("#main", {
    backgroundColor: "#fff"

})
tl2.to(".page2 h1", {
    y: 50,
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        // markers: true,
        start: "top -230%",
        end: "end -250%",
        scrub: 5
    }
})

tl3.to("#main", {
    backgroundColor: "#111"
})

var boxes = document.querySelectorAll(".page5-box")
boxes.forEach(function(elems) {

    elems.addEventListener("mouseenter", function() {
        var att = elems.getAttribute("data-image")
            // console.log(att)
        cursorr.style.width = "250px"
        cursorr.style.height = "150px"
        cursorr.style.borderRadius = "0"
        cursorr.style.backgroundImage = `url(${att})`

    })
    elems.addEventListener("mouseleave", function() {
        elems.style.backgroundColor = "transparent"
        cursorr.style.width = "10px"
        cursorr.style.height = "10px"
        cursorr.style.borderRadius = "50%"
        cursorr.style.backgroundImage = 'none'
    })
})

var banner = document.querySelector("#index-banner");
var indexLinks = document.querySelectorAll(".indexs a");
var h2Containers = document.querySelectorAll(".h2-container");
var isMouseMoving = false;

indexLinks.forEach(function(link, index) {
    link.addEventListener("mouseenter", function() {
        hideAllContainers();
        h2Containers[index].style.display = "flex";
        banner.style.display = "block";
        banner.style.opacity = "1";
        banner.style.transition = "all ease-in-out .5s";
    });

    link.addEventListener("mouseleave", function() {
        hideAllContainers();
        banner.style.display = "none";
        banner.style.opacity = "0";
    });
});

document.addEventListener("mousemove", function() {
    isMouseMoving = true;

   
});

document.addEventListener("mouseleave", function() {
    isMouseMoving = false;

    
});

function hideAllContainers() {
    h2Containers.forEach(function(container) {
        container.style.display = "none";
    });
}

// Check the flag and activate/deactivate banner animations as needed
function handleMouseMovement() {
    if (isMouseMoving) {
        // Activate banner animations here
    } else {
        // Deactivate banner animations here
    }
}

// Call the function periodically (adjust the interval as needed)
setInterval(handleMouseMovement, 100);
