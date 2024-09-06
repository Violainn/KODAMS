console.log("Script loaded");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menuButton').addEventListener('click', function() {
        const menuDrawer = document.getElementById('menuDrawer');
        menuDrawer.classList.toggle('open');
    });
});

document.getElementById('closeButton').addEventListener('click', function() {
    const menuDrawer = document.getElementById('menuDrawer');
    menuDrawer.classList.remove('open');
});