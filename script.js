
// Variables
let view_1 = document.getElementById('faq1-click');
let moreInfo_1 = document.getElementById('faq1-answer');
let close_1 = document.getElementById('faq1-rotate');


let view_2 = document.getElementById('faq2-click');
let moreInfo_2 = document.getElementById('faq2-answer');
let close_2 = document.getElementById('faq2-rotate');

let view_3 = document.getElementById('faq3-click');
let moreInfo_3 = document.getElementById('faq3-answer');
let close_3 = document.getElementById('faq3-rotate');

let view_4 = document.getElementById('faq4-click');
let moreInfo_4 = document.getElementById('faq4-answer');
let close_4 = document.getElementById('faq4-rotate');



// Functions
let open_1 = function() {
    moreInfo_1.style.display = 'block';
    close_1.style.display = 'inline-block';
    view_1.style.display = 'none'; 
    
}

let hide_1 = function() {
    moreInfo_1.style.display = 'none';
    close_1.style.display = 'none';
    view_1.style.display = 'block';  
}

let open_2 = function() {
    moreInfo_2.style.display = 'block';
    close_2.style.display = 'inline-block';
    view_2.style.display = 'none'; 
    
}

let hide_2 = function() {
    moreInfo_2.style.display = 'none';
    close_2.style.display = 'none';
    view_2.style.display = 'block';  
}

let open_3 = function() {
    moreInfo_3.style.display = 'block';
    close_3.style.display = 'inline-block';
    view_3.style.display = 'none'; 
    
}

let hide_3 = function() {
    moreInfo_3.style.display = 'none';
    close_3.style.display = 'none';
    view_3.style.display = 'block';  
}

let open_4 = function() {
    moreInfo_4.style.display = 'block';
    close_4.style.display = 'inline-block';
    view_4.style.display = 'none'; 
    
}

let hide_4 = function() {
    moreInfo_4.style.display = 'none';
    close_4.style.display = 'none';
    view_4.style.display = 'block';  
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
