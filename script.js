const typingBox = document.getElementById("typing-box");

const text = ["Web Developer", "UI/UX Designer", "Freelancer"];

let i = 0;
let j = 0;

function typing() {
    if (j < text[i].length) {
        typingBox.innerHTML += text[i][j];
        j++;
        setTimeout(typing, 100);
    } else {
        setTimeout(() => {
            typingBox.innerHTML = "";
            j = 0;
            i = (i + 1) % text.length;
            typing();
        }, 1000);
    }
}

typing();

const links =
document.querySelectorAll("nav a");
links.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();

        const section =
        DocumentFragment.querySelector(link.getAttribute("href"));

        section.scrollIntoView({
            behavior:"smooth"
        });
    });
});
const menuBtn =document.querySelector("menu.btn");
const mobileMenu =document.querySelector(".nav-lists");

mobileButton.addEventListener("click",function(){
    mobileMenu.classList.toggle("active");
});
 