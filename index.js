document.querySelector(".menubar").addEventListener("click",()=>{
  document.querySelector(".mobilemenudiv").classList.add("left");
})
document.querySelector(".closebar").addEventListener("click",()=>{
  document.querySelector(".mobilemenudiv").classList.remove("left");
})


const form = document.getElementById('formbox');

form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Clear all form input fields after successful submission
      form.reset();
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
});


// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.body;

//   // Disable scrolling on the body
//   body.classList.add('no-scroll');
  
//   // Re-enable scrolling after 5 seconds
//   setTimeout(() => {
//     body.classList.remove('no-scroll');
//   }, 9000); // 5 seconds
// });

































gsap.registerPlugin(ScrollTrigger);


////////////////////////////////////////////SECONDDIV////////////////////
gsap.from(".headingandlogo1 h1",{
  scrollTrigger: {
    trigger: ".seconddiv h1",
    start: "top 60%", // when the top of the trigger hits 80% of the viewport height
    end: "bottom 20%", // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  opacity:0,
  y:50
},"same")
gsap.to(".seconddiv hr",{
  scrollTrigger: {
    trigger: ".seconddiv h1",
    start: "top 60%", // when the top of the trigger hits 80% of the viewport height
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  width:"100%",
  
  
},"same")
gsap.from(".seconddiv p",{
  scrollTrigger: {
    trigger: ".seconddiv p",
    start: "top 80%",
    // markers:true,
    // markers:true, // when the top of the trigger hits 80% of the viewport height
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  
  delay:0.5,
  opacity:0,
  y:10,
  
},"same")
/////////////////////////////////////////////////////////////////////////

/////////////////////////////THIRDDIV///////////////////////////////////////////

gsap.from(".headingandlogo2 h1,#greytext1",{
  scrollTrigger: {
    trigger: ".thirddiv h1",
    start: "top 60%", // when the top of the trigger hits 80% of the viewport height
    end: "bottom 20%",
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  opacity:0,
  y:50
},"same")
gsap.to(".thirddiv hr",{
  scrollTrigger: {
    trigger: ".thirddiv h1",
    start: "top 60%",
    // when the top of the trigger hits 80% of the viewport height
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  width:"100%", 
},"same")


gsap.from(".a",{
  scrollTrigger: {
    trigger: ".thirddiv hr",
    start: "top 80%",
    scrub:true,
  },
  opacity:0.7,
  x:-30,
  
},"together")
gsap.from(".b",{
  scrollTrigger: {
    trigger: ".thirddiv hr",
    start: "top 80%",
    scrub:true,
  },
  opacity:0.7,
  y:30,
  
},"together")
gsap.from(".c",{
  scrollTrigger: {
    trigger: ".thirddiv hr",
    start: "top 80%",
    scrub:true,
  },
  opacity:0.7,
  x:30,
  
},"together")
////////////////////////////////////////////////////////////////////////////
//////////////////////////////////FOURRTH DIV///////////////////////////
gsap.from(".headingandlogo3 h1,#greytext2",{
  scrollTrigger: {
    trigger: ".fourthdiv h1",
    start: "top 60%", // when the top of the trigger hits 80% of the viewport height
    end: "bottom 20%",
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  opacity:0,
  y:50
},"same")
gsap.to(".fourthdiv hr",{
  scrollTrigger: {
    trigger: ".fourthdiv h1",
    start: "top 60%",
    // when the top of the trigger hits 80% of the viewport height
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  width:"100%", 
},"same")
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////FIFTHDIV////////////////////////////////////////////
gsap.from(".headingandlogo4 h1,#greytext3",{
  scrollTrigger: {
    trigger: ".fifthdiv h1",
    start: "top 60%", // when the top of the trigger hits 80% of the viewport height
    end: "bottom 20%",
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  opacity:0,
  y:50
},"same")
gsap.to(".fifthdiv hr",{
  scrollTrigger: {
    trigger: ".fifthdiv h1",
    start: "top 60%",
    
    // when the top of the trigger hits 80% of the viewport height
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  width:"100%", 
},"same")



///////////////////////////////////////////////////////////////////
/////////////////////////////SIXTHDIV//////////////////////////////
gsap.from(".headingandlogo5 h1,#greytext4",{
  scrollTrigger: {
    trigger: ".sixthdiv h1",
    start: "top 60%", // when the top of the trigger hits 80% of the viewport height
    end: "bottom 20%",
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  opacity:0,
  y:50
},"same")
gsap.to(".sixthdiv hr",{
  scrollTrigger: {
    trigger: ".sixthdiv h1",
    start: "top 60%",
    
    // when the top of the trigger hits 80% of the viewport height
   // when the bottom of the trigger hits 20% of the viewport height
    // scrub: true, // smooth scrubbing
    // enable markers for debugging
  },
  width:"100%", 
},"same")
// script.js

function updateTime() {
  // Get current UTC time
  const now = new Date();

  // Get the offset of the local time in milliseconds
  const localOffset = now.getTimezoneOffset() * 60000;

  // Convert UTC time to IST (Indian Standard Time)
  const istOffset = 5.5 * 60 * 60 * 1000; // Offset in milliseconds
  const istTime = new Date(now.getTime() + localOffset + istOffset);

  // Extract hours, minutes, seconds in IST
  let hours = istTime.getHours();
  const minutes = istTime.getMinutes().toString().padStart(2, '0');
  

  // Convert hours to 12-hour format and determine AM/PM
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Format the time string
  const timeString = `${hours}:${minutes} ${ampm}`;

  // Update the clock element with id 'liveTime'
  document.getElementById('liveTime').textContent = timeString + " (IST)";
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();




/********************************************** */

var tl = gsap.timeline();


// t1.from(".navbar",{
//   top:-10,
//   duration: 0.5,
//   delay: 1,
// })

tl.from(".contents,.navbar h2,.navbar", {
  y: -100,
  duration: 0.5,
  stagger:{
    from:"center",
    amount:0.2,
  },
  delay: 1,/********************** */
});


tl.from(".together>.separatediv>p ,.web ,.developer,.separatediv", {
    y:20,
    duration: 0.5,
    opacity:0,
    stagger:0.2
    
  },"same");
  tl.from("#lottie", {
    opacity:0,
    delay:1
    
  },"same");


  /************************************************** */

  // const animationContainer = document.getElementsByClassName('lottie');

  // // Load animation using Lottie
  // const anim = lottie.loadAnimation({
  //     container: animationContainer, // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: './Untitled.json' // the path to the animation json
  // });