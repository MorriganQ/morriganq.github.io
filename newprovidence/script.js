var body = document.body;
var header = document.getElementsByTagName('header')[0];
var out_side = document.getElementsByClassName('header_menu_out_side')[0]
var out_side_close = document.getElementsByClassName('out_menu_close')[0]

var out_menu = document.getElementsByClassName('out_menu_wrapper')[0]

var view_info_title = document.getElementsByClassName('view_info_title')[0];
var view_info_descr = document.getElementsByClassName('view_info_descr')[0];
var view_info_button_watchvideo = document.getElementsByClassName('view_info_button_watchvideo')[0];
var view_info_iphone = document.getElementsByClassName('view_info_iphone')[0];


var iphone_feature_wrapper = document.getElementsByClassName('iphone_feature_wrapper')[0];

var feature_box = document.getElementsByClassName('feature_box')[0];

var screens = document.getElementsByClassName('screens')[0];

var writers = document.getElementsByClassName('writers')[0]

//view
setTimeout(function(){body.style.opacity = '1'},0);

setTimeout(function(){view_info_title.style.top = '0'},300);
setTimeout(function(){view_info_descr.style.marginTop = '30px'},600);
setTimeout(function(){view_info_button_watchvideo.style.marginTop = '60px'},1000);
setTimeout(function(){view_info_iphone.style.top = '50px'},1300);


function mainScroll(){
    if(pageYOffset>0){
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 3px 5px #c5c7cb";
        header.style.padding = "40px 0";
    }
    else{
        header.style.backgroundColor = "";
        header.style.boxShadow = "none";
        header.style.padding = "50px 0";
    }
    
    if(pageYOffset>300){
        feature_box.style.top = '125px';
    }
    
    if(pageYOffset>1000){
        if(window.innerWidth>1500){
            iphone_feature_wrapper.style.background = "url(imgs/iphone_bg.png) no-repeat -410px 50%";
        }
        else{
            if(window.innerWidth>1300){
                iphone_feature_wrapper.style.background = "url(imgs/iphone_bg.png) no-repeat -490px 50%";
            }
            else{
                iphone_feature_wrapper.style.background = "url(imgs/iphone_bg.png) no-repeat -590px 50% ";
            }
        };
    }
    if(pageYOffset>3150){
        screens.style.top = '273px';
    }
}

//events
window.addEventListener('scroll',mainScroll);

out_side.onclick = function(){
    out_menu.style.left = '0';
}
out_side_close.onclick = function(){
    out_menu.style.left = '-385px';
}

//customers_userpics
var customersUserpic1 = document.getElementsByClassName('customers_userpic1')[0]
var customersUserpic2 = document.getElementsByClassName('customers_userpic2')[0]
var customersUserpic3 = document.getElementsByClassName('customers_userpic3')[0]

var customers_feedback_box1 = document.getElementsByClassName('customers_feedback_box1')[0]
var customers_feedback_box2 = document.getElementsByClassName('customers_feedback_box2')[0]
var customers_feedback_box3 = document.getElementsByClassName('customers_feedback_box3')[0]

var customersUserpic = 1;

function changeUserpic(){
    if(customersUserpic==1){
        customersUserpic1.style.opacity = '1';
        customersUserpic2.style.opacity = '0.2';
        customersUserpic3.style.opacity = '0.2';
    }
     if(customersUserpic==2){
        customersUserpic1.style.opacity = '0.2';
        customersUserpic2.style.opacity = '1';
        customersUserpic3.style.opacity = '0.2';
    }
     if(customersUserpic==3){
        customersUserpic1.style.opacity = '0.2';
        customersUserpic2.style.opacity = '0.2';
        customersUserpic3.style.opacity = '1';
    }
}

function changeFeedbackUserpic(){
    if(customersUserpic==1){
        customers_feedback_box1.style.marginTop = '0';
        customers_feedback_box1.style.opacity = '1';
        customers_feedback_box2.style.opacity = '0';
        customers_feedback_box3.style.opacity = '0';
    }
    if(customersUserpic==2){
        customers_feedback_box1.style.marginTop = '-300px';
        customers_feedback_box1.style.opacity = '0';
        customers_feedback_box2.style.opacity = '1';
        customers_feedback_box3.style.opacity = '0';
    }
    if(customersUserpic==3){
        customers_feedback_box1.style.marginTop = '-600px';
        customers_feedback_box1.style.opacity = '0';
        customers_feedback_box2.style.opacity = '0';
        customers_feedback_box3.style.opacity = '1';
    }
}


changeUserpic();



customersUserpic1.onclick = function(){
    customersUserpic = 1;
    changeUserpic();
    changeFeedbackUserpic();
}
customersUserpic2.onclick = function(){
    customersUserpic = 2;
    changeUserpic();
    changeFeedbackUserpic();
}
customersUserpic3.onclick = function(){
    customersUserpic = 3;
    changeUserpic();
    changeFeedbackUserpic();
}