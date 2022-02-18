const sidebarButton = document.querySelector(".sidebar-arrow");
const sidebarLinks = document.querySelectorAll(".sidebar-list-item");
const sidebarDisplay = document.querySelector(".sidebar-display");
const sidebarMobileDisplay = document.querySelector(".sidebar-mobile-display");
const documentDisplay = document.querySelector(".main");
const footer = document.querySelector(".footer");

const arrayOfClickableItems = [sidebarButton,...sidebarLinks];

arrayOfClickableItems.forEach((button)=>{
    button.addEventListener("click",()=>{
        sidebarDisplay.classList.toggle("sidebar-active");
        documentDisplay.classList.toggle("main-hide");
        sidebarButton.classList.toggle("sidebar-arrow-rotate");
        sidebarMobileDisplay.classList.toggle("sidebar-mobile-display-open")
        footer.classList.toggle("footer-hide");
    })
})
