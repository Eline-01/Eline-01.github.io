function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("main").style.marginLeft = "0";
}