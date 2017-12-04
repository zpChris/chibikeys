// Toggles the 3-line menu icon when screen size <768px
$(document).ready(function() {
    $('.header-dropdown-icon').click(function() {
        $('.header-dropdown').toggle();
    });
});