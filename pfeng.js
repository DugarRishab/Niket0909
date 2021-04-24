let menu_button = document.getElementById('menu-button');

menu_button.addEventListener('click', function () {
    menu_button.classList.toggle('menu-button-clicked');
});

let menubar = document.getElementById('menubar');
let main_content = document.getElementById('main-content');

menu_button.addEventListener('click', function () {
    menubar.classList.toggle('active-menubar');
    main_content.classList.toggle('main-content-active');
});

let down_arrow = document.getElementById('down-arrow');

$(function () {
    var lastScrollTop = 0, delta = 0;
    $(window).scroll(function () {
        var nowScrollTop = $(this).scrollTop();
        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
            if (nowScrollTop > lastScrollTop) {
                // ACTION ON
                // SCROLLING DOWN 
                down_arrow.classList.remove('down-arrow-up');
            } else {
                // ACTION ON
                // SCROLLING UP 
                down_arrow.classList.add('down-arrow-up');
            }
            lastScrollTop = nowScrollTop;
            if (nowScrollTop == 0)
                down_arrow.classList.remove('down-arrow-up');
        }
    });
});