var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "60% 40%",
      scrub: true,
      //markers: true
    }
  });

tl.to("#fanta",{
    top:"130%",
    left:"13%"
},'orange')
tl.to("#orange-cut",{
    top:"161%",
    left:"20%",
},orange)
tl.to("#orange",{
    width:"20%",
    top:"165%",
    left:"60%"
},orange)

tl.to("#leaf3",{
 
    top:"120%",
    left:"85%"
},orange)
tl.to("#leaf2",{
    rotate:"-100deg",
    top:"120%",
    left:"0%"
},orange)


var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 40%",
      end: "50% 50%",
      scrub: true,
    //   markers: true
    }
  });


  tl2.from("#lemon1",{
    rotate:"-90deg",
    top:"50%",
    left:"-65%"
},'ca')
tl2.from("#cocacola",{
    rotate:"-90deg",
    top:"50%",
    left:"-20%"
},'ca')

tl2.from("#lemon2",{
    rotate:"90deg",
    top:"50%",
    left:"80%"
},'ca')
tl2.from("#pepsi",{
    rotate:"90deg",
    top:"50%",
    left:"75%"
},'ca')


tl2.to("#orange-cut",{
    // rotate:"90deg",
    width:"27vw",
    top:"208%",
    left:"36.6%"
},'ca')
tl2.to("#fanta",{
    // rotate:"90deg",
    top:"220%",
    left:"42%"
},'ca')