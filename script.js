gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });

var audio = new Audio("./african-savanna.mp3");
var h1 = document.querySelector("#timer h1")
var grow = 0;
locoScroll.stop();


var c = document.querySelector("#cursor");

window.addEventListener("mousemove",function(dets){
  gsap.to(c,{
    x:dets.x - c.clientWidth/2,
    y:dets.y - c.clientHeight/2
  })
})





setInterval(function () {
  if (grow < 95) {
    grow += Math.floor(Math.random() * 10)
    h1.textContent = grow + "%"
  }
  else {
    grow = 100 + "%"
    h1.textContent = grow
    gsap.to("#timer button,#timer h1", {
      y: "-100%"
    })
    clearInterval()
  }
}, Math.floor(Math.random() * 200))
var fog = 0;
var time;
document.querySelector("#timer button").addEventListener("click", function () {
  locoScroll.start();
  audio.play()
  function music() {
    time = setInterval(function () {
      document.querySelectorAll(".music .mus").forEach(function (elem) {
        gsap.to(elem, {
          height: Math.floor(Math.random() * 70) + 5 + "%"
        })
      })

    }, 100)
  }
  music();
  document.querySelector(".music").addEventListener("click", function () {

    if (fog === 0) {
      audio.pause();
      gsap.to(".music .mus", {
        height: 5
      })
      clearInterval(time);
      fog = 1;

    }
    else {
      audio.play()
      music();
      fog = 0;

    }
  })

  var tm = gsap.timeline();
  tm
    .to("#main", {
      backgroundColor: "linen"
    }, "a")
    .to("#page1", {
      scale: 1
    }, "a")
    .to("#timer button", {
      scale: 0,
      opacity: 0
    }, "a")
    .to(".patti", {
      rotate: -4
    })
    .to(".about", {
      display: "inline-block",
      opacity: 1
    }, "b")
    .to(".pep", {
      height: "100%",
      opacity: 1,
      duration: 1

    }, "b")
    .to(".scroll", {
      scale: 1
    })
    .from("#navbar", {
      y: "-100%"
    })

})

document.querySelector(".nav2 .lang").addEventListener("mouseenter", function () {
  gsap.to(".lang-1,.lang-2 ", {
    y: "-100%",
  })

})
document.querySelector(".nav2 .lang").addEventListener("mouseleave", function () {
  gsap.to(".lang-1,.lang-2 ", {
    y: "0%",
  })

})

var clutter = ``
document.querySelector("#page3 h1").textContent.split("").forEach(function (elem) {
  clutter += `<span>${elem}</span>`

})
document.querySelector("#page3 h1").innerHTML = clutter

var tl2 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3",
    start: "top 0%",
    end: "top -50%",
    pin: true,
    scrub: 2,
  }
})
tl2
  .to("#page3 h1 span", {
    color: "black",
    stagger: .3
  })
  .to("#page3pt1" ,{
    transform: "translateX(-100vw)",
    duration: 80
  },"a")
  .to(" #page3pt2",{
    transform: "translateX(-100vw)",
    duration: 80
  },"a")



  .to("#page3pt1 , #page3pt2", {
    transform: "translateX(-258vw)",
    duration: 80
  })
  gsap.from(".name h1",{
    y:"100%",
    stagger:.1,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page4-p1",
      start: "top 5%",
    }
  })

  gsap.to("#p1",{
    height:"100%",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3pt2",
    start:'100% 68%',
  }
})

  gsap.to("#p2",{
    height:"55%",
    scrollTrigger:{
    scroller:"#main",
    trigger:"#page3pt2",
    start:'100% 66%',
  }
    

  })
  gsap.to("#p3 ",{
    height:"100%",
    scrollTrigger:{
    scroller:"#main",
    trigger:"#page3pt2",
    start:'100% 64%',
  }
  
})
gsap.to("#p4 ",{
    height:"100%",
    scrollTrigger:{
    scroller:"#main",
    trigger:"#page3pt2",
    start:'100% 62%',
  }
  })
  var p4tm = gsap.timeline({
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page4-p2",
      start: "top 0",
      pin: true,
      scrub: 1,
    }
  })
p4tm
  .to("#box1 img", {
    y: 50,
  })
  .to("#p4box1 .p4para", {
    height: 0
  }, "p40")
  .to("#p4box1 h1", {
    opacity: .6
  }, "p40")
  .to("#box1 img", {
    y: 180,
  }, "p40")
  .to("#box1 img", {
    y: 280,
  }, "p41")
  .to("#p4box2 .p4para", {
    height: "100%",
  }, "p41")
  .to("#p4box2 h1", {
    opacity: 1
  }, "p41")
  .to("#p4box2 .p4para", {
    height: "0%",
  }, "p42")
  .to("#p4box2 h1", {
    opacity: 0.6,
  }, "p42")
  .to("#box1 img", {
    y: 430,
  }, "p42")
  .to("#box1 img", {
    y: 450,
  }, "p43")
  .to("#p4box3 .p4para", {
    height: "100%",
  }, "p43")
  .to("#p4box3 h1", {
    opacity: 1
  }, "p43")

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  grabCursor: true
});


var p10=document.querySelector(".inp:nth-last-child(1) .yo")
var num = 1;
var num1 = 2;
p10.addEventListener("click",function(){
  var n=document.querySelector(`.num span:nth-child(${num})`)//2
  var n1=document.querySelector(`.num span:nth-child(${num1})`)//3
  if(num1 <4){
    n.removeAttribute("class","nums");
    n.textContent="";
    num++;
    num1++;
  }
  console.log(num,num1)

 n1.setAttribute("class","nums");
 n1.textContent="0"+num;

 
})
