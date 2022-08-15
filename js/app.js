//Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML.
const section=document.querySelectorAll(".section")
const nav = document.querySelector("ul")
for (let i = 1; i <=section.length; i++) {
    //creating the li element
    const list = document.createElement("li")
    //changing the li element for each index in the for loop
    list.innerHTML = `<li class="navItem" id="list${i}"><a href="#section${i}">SECTION${i}</a></li>`
    //append the list which contains the 4 li elements to the ul
    nav.appendChild(list)
}

//Highlight the first anchor in the nav
const activeSec1 = document.getElementById("list1");
activeSec1.addEventListener("click", function highlight() {
    activeSec1.style.backgroundColor = 'lightblue'
    activeSec2.style.backgroundColor = ''
    activeSec3.style.backgroundColor = ''
    activeSec4.style.backgroundColor = ''
});
//Highlight the second anchor in the nav
const activeSec2 = document.getElementById("list2");
activeSec2.addEventListener("click", function highlight() {
    activeSec2.style.backgroundColor = 'lightblue'
    activeSec1.style.backgroundColor = ''
    activeSec3.style.backgroundColor = ''
    activeSec4.style.backgroundColor = ''
});
//Highlight the third anchor in the nav
const activeSec3 = document.getElementById("list3");
activeSec3.addEventListener("click", function highlight() {
    activeSec3.style.backgroundColor = 'lightblue'
    activeSec1.style.backgroundColor = ''
    activeSec2.style.backgroundColor = ''
    activeSec4.style.backgroundColor = ''
});
//Highlight the fourth anchor in the nav
const activeSec4 = document.getElementById("list4");
activeSec4.addEventListener("click", function highlight() {
    activeSec4.style.backgroundColor = 'lightblue'
    activeSec1.style.backgroundColor = ''
    activeSec2.style.backgroundColor = ''
    activeSec3.style.backgroundColor = ''
});


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
/*
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
*/



//setting active state with class active when scrolling into view
//getting all elements by class name section
//using span method to turn the node list into an array
function update() {
    let sec = [...document.querySelectorAll(".section")]
    //the for loop will loop over each section
    for (let i = 0; i < sec.length; i++) {
        //rect builtin function
        const rect = sec[i].getBoundingClientRect()
        //condition if true add the class
        if (rect.left >= 0 && rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            sec[i].classList.add("active")
        } else {
            sec[i].classList.remove("active")
        }
    }
}
//the event listener for updating while scrolling
document.addEventListener("scroll", update)
update()



//get the button by the id btnUp
let btnUp = document.getElementById("btnUp")
//showing the btnUp after passing a threshold
//calling the function from the html onclick
function topFunction() {
    document.documentElement.scrollTop = 0
}