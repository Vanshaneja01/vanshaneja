/* ===========================================
   MOBILE NAVBAR TOGGLE
=========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click", ()=>{

        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("open");

    });

}


/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click", ()=>{

        navLinks.classList.remove("active");

    });

});



/* ===========================================
   HEADER CHANGE ON SCROLL
=========================================== */

const header = document.querySelector("header");


window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});



/* ===========================================
   SCROLL REVEAL ANIMATION
=========================================== */

const revealElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .zoom"
);


const revealOnScroll = ()=>{


    revealElements.forEach(element=>{


        const elementTop =
        element.getBoundingClientRect().top;


        const windowHeight =
        window.innerHeight;


        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }


    });


};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* ===========================================
   ACTIVE NAVBAR LINK
=========================================== */


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", ()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});



/* ===========================================
   TYPING EFFECT
=========================================== */


const typingText =
[
    "Software Engineer",
    "Full Stack Developer",
    "Marketing Lead",
    "Community Builder",
    "AI Enthusiast"
];


let textIndex = 0;

let charIndex = 0;


const typingElement =
document.querySelector(".typing");



function typeEffect(){


    if(!typingElement)
        return;



    if(charIndex < typingText[textIndex].length){


        typingElement.textContent +=
        typingText[textIndex].charAt(charIndex);


        charIndex++;

        setTimeout(typeEffect,100);


    }

    else{


        setTimeout(()=>{


            typingElement.textContent="";

            charIndex=0;


            textIndex++;


            if(textIndex >= typingText.length){

                textIndex=0;

            }


            typeEffect();


        },1500);


    }


}


typeEffect();



/* ===========================================
   ANIMATED COUNTERS
=========================================== */


const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


    counter.innerText="0";


    const updateCounter=()=>{


        const target =
        +counter.getAttribute("data-target");


        const current =
        +counter.innerText;


        const increment =
        target/100;



        if(current < target){


            counter.innerText =
            Math.ceil(current + increment);


            setTimeout(updateCounter,20);


        }

        else{


            counter.innerText = target + "+";


        }


    };


    updateCounter();


});



/* ===========================================
   SMOOTH SCROLLING
=========================================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        e.preventDefault();


        document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});



/* ===========================================
   CURSOR GLOW EFFECT
=========================================== */


const cursor =
document.createElement("div");


cursor.classList.add("cursor-glow");


document.body.appendChild(cursor);



document.addEventListener(
"mousemove",
(e)=>{


    cursor.style.left =
    e.clientX + "px";


    cursor.style.top =
    e.clientY + "px";


});
