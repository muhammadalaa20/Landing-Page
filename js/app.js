//Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML.
const nav=document.querySelector("ul")
console.log(nav)
for(let i=1;i<=4;i++){
    //creating the li element
    const list=document.createElement("li")
    //changing the li element for each index in the for loop
    list.innerHTML=`<li class="navItem" id="list${i}"><a href="#section${i}">SECTION${i}</a></li>`
    //append the list which contains the 4 li elements to the ul
    nav.appendChild(list)
}




//smooth scrolling using query selector to get all the anchors
//for of loop to loop over the four anchors
let anchorLinks = document.querySelectorAll('a[href^="#"]')
for (let activeSec of anchorLinks) {  
    activeSec.addEventListener('click', (e) => {
        //get the valueof the href
        let hashValue = activeSec.getAttribute('href')
        let target = document.querySelector(hashValue)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashValue)
        //.preventDefault to stop the old way of scrolling
        e.preventDefault()
    })
}


//needs scroll handling 

//window.pageYOffset returns the number of pixels scrolled up or down
let prevScrollPosition = window.pageYOffset;
window.onscroll = ()=> {
let currentScrollPos = window.pageYOffset;
//compare the prev and current position
//the if condition will be true while scrolling up
  if (prevScrollPosition > currentScrollPos) {
    //the navBar will appear while scrolling up by using top ="0"
    document.getElementById("container").style.top = "0";
  } else {
    //hide the navBar while scrolling down by using top = "-60px"
    document.getElementById("container").style.top = "-60px";
  }
  prevScrollPosition = currentScrollPos;
}




//setting active state with class active when scrolling into view
//getting all elements by class name section
//using span method to turn the node list into an array
function update(){
let sec=[...document.querySelectorAll(".section")]
//the for loop will loop over each section
for(let i=0; i<sec.length;i++){
      //rect builtin function
    const rect=sec[i].getBoundingClientRect()
        //condition if true add the class
    if(rect.left >= 0 && rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth||document.documentElement.clientWidth)){
            sec[i].classList.add("active")
           // document.getElementsByClassName("active").style.backgroundColor="yellow"
    }
    else{
            sec[i].classList.remove("active")
    }
}   
}
//the event listener for updating while scrolling
document.addEventListener("scroll",update)
update()



/*
//hide nav if idle
const navHide=document.querySelector("#container")
//every 10 idle seconds the nav bar will be hidden
function hideNavBar(){
  for(let i=1;i<2;i++){
  time=setTimeout((event)=>{
      console.log("started")
    navHide.style.top="-60px"
  },3000)
}
}
function clearTime(){
  let events=["scroll","mousemove","keypress"]
  events.forEach((eventName) => {
        document.addEventListener(eventName, ()=>{
          console.log("cleared")
          clearTimeout(time)
          navHide.style.top="0px"
        } )  
  });
  }
  
//clearTimeout will reset the timer
function clearTime(){
 // let events=["scroll","mousemove","keypress"]
      document.addEventListener("click", ()=>{
        console.log("cleared")
          clearTimeout(time)
          navHide.style.top="0px"
        } )  
}
//some eventListeners to clear the timer
hideNavBar()
clearTime()

*/


//get the button by the id btnUp
let btnUp = document.getElementById("btnUp")
//showing the btnUp after passing a threshold
//calling the function from the html onclick
function topFunction(){
  document.documentElement.scrollTop=0
}
