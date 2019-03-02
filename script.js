$(function(){
    menu=$('#nav_bar nav');
    $('#mobile-link').on('click',function(e){
        e.preventDefault();
        if($('#mobile-link i').attr('class')=="fa fa-bars")
        {
        $('#mobile-link i').removeClass("fa fa-bars");
        $('#mobile-link i').addClass("fa fa-times");
        menu.css('left','0%');
        menu.css('opacity','1');
        }
        else
        {
        $('#mobile-link i').removeClass("fa fa-times");
        $('#mobile-link i').addClass("fa fa-bars");
        menu.css('left','100%');
        menu.css('opacity','0');
        }
    });
});