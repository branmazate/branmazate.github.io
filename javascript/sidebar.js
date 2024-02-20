//Selecting sidebar buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const shade = document.querySelector("#shade")

//toogle the lock state of the sidebar

const toggleLock = () =>{
    sidebar.classList.toggle("locked");
    if (!sidebar.classList.contains("locked")){
        sidebar.classList.add("unlocked");
        sidebarLockBtn.classList.replace("bx-lock-alt","bx-lock-open-alt");
        shade.classList.add("blurred");
        shade.classList.remove("not-blurred");

    } else {
        sidebar.classList.remove("unlocked");
        sidebar.classList.add("locked");
        sidebarLockBtn.classList.replace("bx-lock-open-alt","bx-lock-alt");
        shade.classList.remove("blurred");
        shade.classList.add("not-blurred");
    }
};

const hideSidebar= () => {
    if(sidebar.classList.contains("unlocked")) {
        sidebar.classList.add("close");
        shade.classList.remove("blurred");
        shade.classList.add("not-blurred");
    }
};

const showSidebar= () => {
    if(sidebar.classList.contains("unlocked")){
        sidebar.classList.remove("close");
        shade.classList.add("blurred");
        shade.classList.remove("not-blurred");
    }
}

const toggleSidebar = () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        shade.classList.remove("blurred");
        shade.classList.add("not-blurred");
    } else {
        shade.classList.add("blurred");
        shade.classList.remove("not-blurred");
    }
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