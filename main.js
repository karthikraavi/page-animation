const image = document.querySelector('.image')
const layer = document.querySelector('.layer')
const heading = document.querySelector('#heading')
const hamburger = document.querySelector('.hamburger')
const title = document.querySelector('.title')

var tl = gsap.timeline();
console.log(image);
tl.fromTo(image,{height:"0%"} ,{duration:1, height:'100%',ease:Power2.easeInOut})
.fromTo(image,{width:'100%'},{duration:1.2, width:'70%',ease:Power2.easeInOut},">")
.fromTo(title,{opacity:'0'},{duration:0.5, opacity:1},">")
.fromTo(layer,{x:'-100%'},{duration:1.2,x:'0%',ease:Power2.easeInOut },">-1.7")
.fromTo(heading,{opacity:'0'},{duration:0.5, opacity:1},">-0.8")
.fromTo(hamburger,{opacity:'0'},{duration:0.5, opacity:1},">-0.5")