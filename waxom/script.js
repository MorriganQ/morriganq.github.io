//without camelCase!

var bg_slider = document.getElementById('bg_slider');
var slider_arrows = document.getElementById('slider_arrows');
var wrapper_middle = document.getElementById('wrapper_middle');
var slides = document.getElementsByClassName('slide');
var info_develepment = document.getElementsByClassName('develepment_info')[0].children;
var categories = document.getElementById('articles_categories').children;
var articles = document.getElementById('articles').children;

/*BEGIN window.onload*/

setTimeout(function(){
    wrapper_middle.style.opacity = '1';
    wrapper_middle.style.left = '50%';
},100)

/*END window.onload*/

/*BEGIN SLIDER*/
bg_slider.check = 1;

function slide_active(number){
    slides[number].background = "none";
    slides[number].border = "2px solid #d3c1ad";
    if(number == 0){
        slides[number].marginLeft = "0";
    }
    else{
        slides[number].marginLeft = "6px";
    }
}

function colorSlide(){
    if(bg_slider.check==1){
        slide_active(0);
    }
    if(bg_slider.check==2){
        slide_active(1);
    }
     if(bg_slider.check==3){
        slide_active(2);
    }
     if(bg_slider.check==4){
        slide_active(3);
    }
     if(bg_slider.check==5){
         slide_active(4);
    }
}
colorSlide();

/*END SLIDER*/
bg_slider.onmouseover = function(){
    slider_arrows.style.opacity = '1';
}
bg_slider.onmouseout = function(){
    slider_arrows.style.opacity = '0';
}

