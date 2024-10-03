document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        const offset = 120; 

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});



window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

const serviceModals = document.querySelectorAll(".service-modal")
const learnmoreBtns = document.querySelectorAll(".learn-more-btn")
const modalCloseBtns = document.querySelectorAll(".modal-close-btn")

var modal = function(modalClick){ 
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

const projectsModals = document.querySelectorAll(".project-modal")
const imgCards = document.querySelectorAll(".img-card")
const projectCloseBtns = document.querySelectorAll(".project-close-btn")

var projectsModal = function(modalClick){ 
    projectsModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projectsModal(i);
    });
});

projectCloseBtns.forEach((projectCloseBtn) => {
    projectCloseBtn.addEventListener("click", () => {
        projectsModals.forEach((projectsModalView) => {
            projectsModalView.classList.remove("active");
        });
    });
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});