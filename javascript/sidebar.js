//Selecting sidebar buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

//toogle the lock state of the sidebar

const toggleLock = () =>{
    sidebar.classList.toggle("locked");
    if (!sidebar.classList.contains("locked")){
        sidebar.classList.add("unlocked");
        sidebarLockBtn.classList.replace("bx-lock-alt","bx-lock-open-alt");
    } else {
        sidebar.classList.remove("unlocked");
        sidebar.classList.add("locked");
        sidebarLockBtn.classList.replace("bx-lock-open-alt","bx-lock-alt");
    }
};

const hideSidebar= () => {
    if(sidebar.classList.contains("unlocked")) {
        sidebar.classList.add("close");
    }
};

const showSidebar= () => {
    if(sidebar.classList.contains("unlocked")){
        sidebar.classList.remove("close");
    }
}

const toggleSidebar = () => {
    sidebar.classList.toggle("close");
};

if (window.innerWidth<800){
    sidebar.classList.add("close");
    sidebar.classList.remove("unlocked");
    sidebar.classList.remove("locked");
}

sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);