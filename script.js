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
let view_6 = document.getElementById('faq6-click');
let q6 = document.getElementById('q6');
let moreInfo_6 = document.getElementById('faq6-answer');
let close_6 = document.getElementById('faq6-rotate');
let view_7 = document.getElementById('faq7-click');
let q7 = document.getElementById('q7');
let moreInfo_7 = document.getElementById('faq7-answer');
let close_7 = document.getElementById('faq7-rotate');


// Functions
let open_1 = function() {
    moreInfo_1.style.display = 'inline-block';
    close_1.style.display = 'inline-block';
    q1.style.position = "absolute";
    q1.style.right = "15px";
    view_1.style.display = 'none';
}
let hide_1 = function() {
    moreInfo_1.style.display = 'none';
    close_1.style.display = 'none';
    q1.style.position = "relative";
    q1.style.right = "0px";
    view_1.style.display = 'block';
}
let open_2 = function() {
    moreInfo_2.style.display = 'inline-block';
    close_2.style.display = 'inline-block';
    q2.style.position = "absolute";
    q2.style.right = "15px";
    view_2.style.display = 'none';
}
let hide_2 = function() {
    moreInfo_2.style.display = 'none';
    close_2.style.display = 'none';
    q2.style.position = "relative";
    q2.style.right = "0px";
    view_2.style.display = 'block';
}
let open_3 = function() {
    moreInfo_3.style.display = 'inline-block';
    close_3.style.display = 'inline-block';
    q3.style.position = "absolute";
    q3.style.right = "15px";
    view_3.style.display = 'none';
}
let hide_3 = function() {
    moreInfo_3.style.display = 'none';
    close_3.style.display = 'none';
    q3.style.position = "relative";
    q3.style.right = "0px";
    view_3.style.display = 'block';
}
let open_4 = function() {
    moreInfo_4.style.display = 'inline-block';
    close_4.style.display = 'inline-block';
    q4.style.position = "absolute";
    q4.style.right = "15px";
    view_4.style.display = 'none';
}
let hide_4 = function() {
    moreInfo_4.style.display = 'none';
    close_4.style.display = 'none';
    q4.style.position = "relative";
    q4.style.right = "0px";
    view_4.style.display = 'block';
}
let open_5 = function() {
    moreInfo_5.style.display = 'inline-block';
    close_5.style.display = 'inline-block';
    q5.style.position = "absolute";
    q5.style.right = "15px";
    view_5.style.display = 'none';
}
let hide_5 = function() {
    moreInfo_5.style.display = 'none';
    close_5.style.display = 'none';
    q5.style.position = "relative";
    q5.style.right = "0px";
    view_5.style.display = 'block';
}

let open_6 = function() {
    moreInfo_6.style.display = 'inline-block';
    close_6.style.display = 'inline-block';
    q6.style.position = "absolute";
    q6.style.right = "15px";
    view_6.style.display = 'none';
}
let hide_6 = function() {
    moreInfo_6.style.display = 'none';
    close_6.style.display = 'none';
    q6.style.position = "relative";
    q6.style.right = "0px";
    view_6.style.display = 'block';
}

let open_7 = function() {
    moreInfo_7.style.display = 'inline-block';
    close_7.style.display = 'inline-block';
    q7.style.position = "absolute";
    q7.style.right = "15px";
    view_7.style.display = 'none';
}
let hide_7 = function() {
    moreInfo_7.style.display = 'none';
    close_7.style.display = 'none';
    q7.style.position = "relative";
    q7.style.right = "0px";
    view_7.style.display = 'block';
}

//let open_nav = function() {
//    view_nav.style.display = 'inline-block';
//   nav_dropdown.style.display =  'inline-block';

//}

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
view_6.onclick = open_6;
close_6.onclick = hide_6;
view_7.onclick = open_7;
close_7.onclick = hide_7;
