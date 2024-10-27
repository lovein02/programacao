document.addEventListener("DOMContentLoaded", function() {
    let submenus = document.querySelectorAll('.submenu');
    
    submenus.forEach(function(submenu) {
        let parentItem = submenu.previousElementSibling;

        parentItem.addEventListener('click', function() {
            submenu.classList.toggle('active');
        });
    });
});