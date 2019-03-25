const navColor = document.getElementById("colorNav");
const subNav = document.getElementById("hiddenEle");
const mobileSubNav = document.getElementById("projOpen");

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrollY > 200) {
        navColor.style.backgroundColor = "white";
        navColor.classList.add("black");
        navColor.style.transition = ".2s";
    } else {
        navColor.style.backgroundColor = "";
        navColor.classList.remove("black");
        navColor.style.transition = ".2s";
    }
});

document.getElementById('projects').addEventListener('mouseenter', openMenu);

function openMenu() {
    document.getElementById('subNav').classList.toggle('active');
};

document.getElementById('projects').addEventListener('mouseleave', closeMenu);

function closeMenu() {
    document.getElementById('subNav').classList.toggle('active');
};

function openNav() {
    document.getElementById('fun').style.width = "100%";
    document.getElementById('openBtn').style.opacity = "0";
};

function closeNav() {
    document.getElementById('fun').style.width = "0";
    document.getElementById('openBtn').style.opacity = "1";
};

mobileSubNav.addEventListener('click', ()=> {

const subItems = document.getElementById("subSection")
subItems.classList.toggle("active");

});