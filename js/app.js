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
    activeSec.addEventListener('click', function(e) {
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

//window.pageYOffset returns the number of pixels scrolled up or down
let prevScrollPosition = window.pageYOffset;
window.onscroll = function() {
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
//the function will update the class while scrolling
function update(){
let sec=[...document.querySelectorAll(".section")]
//the for loop will loop over each section
for(let i=0; i<sec.length;i++){
    //rect builtin function
    const rect=sec[i].getBoundingClientRect()
    //condition if true add the class
    if(rect.left >= 0 && rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth||document.documentElement.clientWidth)){
            sec[i].classList.add("active")
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
//Highlight the first anchor in the nav
const activeSec1 =document.getElementById("list1");
activeSec1.addEventListener("click", function highlight(){
    activeSec1.style.backgroundColor='aqua'
    activeSec2.style.backgroundColor=''
    activeSec3.style.backgroundColor=''
    activeSec4.style.backgroundColor=''
});
//Highlight the second anchor in the nav
const activeSec2 =document.getElementById("list2");
activeSec2.addEventListener("click",function highlight(){
    activeSec2.style.backgroundColor='aqua'
    activeSec1.style.backgroundColor=''
    activeSec3.style.backgroundColor=''
    activeSec4.style.backgroundColor=''
});
//Highlight the third anchor in the nav
const activeSec3 =document.getElementById("list3");
activeSec3.addEventListener("click",function highlight(){
    activeSec3.style.backgroundColor='aqua'
    activeSec1.style.backgroundColor=''
    activeSec2.style.backgroundColor=''
    activeSec4.style.backgroundColor=''
});
//Highlight the fourth anchor in the nav
const activeSec4 =document.getElementById("list4");
activeSec4.addEventListener("click",function highlight(){
    activeSec4.style.backgroundColor='aqua'
    activeSec1.style.backgroundColor=''
    activeSec2.style.backgroundColor=''
    activeSec3.style.backgroundColor=''
});
*/
