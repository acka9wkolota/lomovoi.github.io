$(document).ready(function(){
    $('[data-feature=switcher]').click(function () {
        $('.navigation-list').toggleClass("switcher-show");
        $('.quicklinks-menu').toggleClass("switcher-show");
    });
});
