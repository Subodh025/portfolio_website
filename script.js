const sections = document.querySelectorAll("section");

function revealSections(){
sections.forEach(section=>{
const triggerPoint = window.innerHeight * 0.82;
const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < triggerPoint){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}
});
}

sections.forEach(section=>{
section.style.opacity = "0";
section.style.transform = "translateY(34px)";
section.style.transition = "opacity .8s ease, transform .8s ease";
});

window.addEventListener("scroll",revealSections);
window.addEventListener("load",revealSections);
revealSections();
