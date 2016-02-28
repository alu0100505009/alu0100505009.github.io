/**
 * Created by NiSmO on 17/02/2016.
 */
$(document).ready(function(){

    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;
    var avatar = $("#avatar");

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 80){
            if(!flag){
                avatar.css({"margin-top": "-5px", "width": "50px", "height":"50px", "border": "0px solid #000"});
                avatar.attr("src","images/logo.png");
                $("header").css({"background-color": "#3C3C3C"});
                $("#intro").css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 400);
                flag = true;
            }
        }else{
            if(flag){
                avatar.css({"margin-top": "120px", "width": "150px","height":"150px", "border": "4px solid #000"});
                avatar.attr("src","images/avatar.png");
                $("header").css({"background-color": "transparent"});
                $("#intro").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 400);
                flag = false;
            }
        }
    });

});