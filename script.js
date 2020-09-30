// Variables
let view_1 = document.getElementById('faq1-click');
let q1 = document.getElementById('q1');
let moreInfo_1 = document.getElementById('faq1-answer');
let close_1 = document.getElementById('faq1-rotate');
let view_2 = document.getElementById('faq2-click');
let q2 = document.getElementById('q2');
let moreInfo_2 = document.getElementById('faq2-answer');
let close_2 = document.getElementById('faq2-rotate');
let view_3 = document.getElementById('faq3-click');
let q3 = document.getElementById('q3');
let moreInfo_3 = document.getElementById('faq3-answer');
let close_3 = document.getElementById('faq3-rotate');
let view_4 = document.getElementById('faq4-click');
let q4 = document.getElementById('q4');
let moreInfo_4 = document.getElementById('faq4-answer');
let close_4 = document.getElementById('faq4-rotate');
let view_5 = document.getElementById('faq5-click');
let q5 = document.getElementById('q5');
let moreInfo_5 = document.getElementById('faq5-answer');
let close_5 = document.getElementById('faq5-rotate');
// Functions
let open_1 = function() {
    moreInfo_1.style.display = 'inline-block';
    close_1.style.display = 'inline-block';
    q1.style.color = "#537ABB";
    view_1.style.display = 'none';
}
let hide_1 = function() {
    moreInfo_1.style.display = 'none';
    close_1.style.display = 'none';
    q1.style.color = "#4C4C4C";
    view_1.style.display = 'block';
}
let open_2 = function() {
    moreInfo_2.style.display = 'inline-block';
    close_2.style.display = 'inline-block';
    q2.style.color = "#537ABB";
    view_2.style.display = 'none';
}
let hide_2 = function() {
    moreInfo_2.style.display = 'none';
    close_2.style.display = 'none';
    q2.style.color = "#4C4C4C";
    view_2.style.display = 'block';
}
let open_3 = function() {
    moreInfo_3.style.display = 'inline-block';
    close_3.style.display = 'inline-block';
    q3.style.color = "#537ABB";
    view_3.style.display = 'none';
}
let hide_3 = function() {
    moreInfo_3.style.display = 'none';
    close_3.style.display = 'none';
    q3.style.color = "#4C4C4C";
    view_3.style.display = 'block';
}
let open_4 = function() {
    moreInfo_4.style.display = 'inline-block';
    close_4.style.display = 'inline-block';
    q4.style.color = "#537ABB";
    view_4.style.display = 'none';
}
let hide_4 = function() {
    moreInfo_4.style.display = 'none';
    close_4.style.display = 'none';
    q4.style.color = "#4C4C4C";
    view_4.style.display = 'block';
}
let open_5 = function() {
    moreInfo_5.style.display = 'inline-block';
    close_5.style.display = 'inline-block';
    q5.style.color = "#537ABB";
    view_5.style.display = 'none';
}
let hide_5 = function() {
    moreInfo_5.style.display = 'none';
    close_5.style.display = 'none';
    q5.style.color = "#4C4C4C";
    view_5.style.display = 'block';
}
// Calls
view_1.onclick = open_1;
close_1.onclick = hide_1;
view_2.onclick = open_2;
close_2.onclick = hide_2;
view_3.onclick = open_3;
close_3.onclick = hide_3;
view_4.onclick = open_4;
close_4.onclick = hide_4;
view_5.onclick = open_5;
close_5.onclick = hide_5;

function phone() { // getter runs when you ask for the property
    var md = new MobileDetect(window.navigator.userAgent);
    return md.mobile() ? true : false;
}

$(document).ready(function() {

    if (phone()) { // asking for subj.phone will detect phone
        $("#loading div").css("width", "80%");
        $("#loading div").html('hahahah.It seems that you are using a touchscreen device or a phone. Please use a laptop or desktop instead to view the page content.<br><br>Sorry about the inconvenience!');
    } else {
        $(window).on("load", function(){
            setTimeout(function() {
            $("#loading").fadeOut("slow");
            }, 1000);
        }); 
    }
});
