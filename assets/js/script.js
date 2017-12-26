$(function(){
    function sideStuffs(){
        $("#side-bar").toggleClass("Vis");
        $(".page-content").toggleClass("ml-220");
    }
    if ($(window).width() < 768){
        sideStuffs();
    }
    $(".sidebar-toggler").click(function(){
        sideStuffs();
    })
})