document.addEventListener("DOMContentLoaded", function() {
    var submenus = document.querySelectorAll('.submenu');
    
    submenus.forEach(function(submenu) {
        var parentItem = submenu.previousElementSibling;

        parentItem.addEventListener('click', function() {
            submenu.classList.toggle('active');
        });
    });
});