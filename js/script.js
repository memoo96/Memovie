var x = document.getElementById('check-class');
var bar_icon = document.getElementById('bar_icon');
bar_icon.addEventListener("click", function () {
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
});

$(document).ready(function(){

    // Scroll top
    var scrollButton = $(".scroll_top");
    $(window).scroll(function(){
        $(this).scrollTop() > 500 ? scrollButton.show() : scrollButton.hide();
    });

    scrollButton.click(function(){
        $("html,body").animate({scrollTop : 0},2000);
    });

});