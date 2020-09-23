
let view = document.getElementById('faq1-click')
let moreInfo_1 = document.getElementById('faq1-answer')

/*
let clickFAQ_2 = document.getElementById('faq2-click')
let moreInfo_2 = document.getElementById('faq2-answer')


let clickFAQ_3 = document.getElementById('faq3-click')
let moreInfo_3 = document.getElementById('faq3-answer')


let clickFAQ_4 = document.getElementById('faq4-click')
let moreInfo_4 = document.getElementById('faq4-answer')
*/

let open = function() {
    moreInfo_1.style.display = 'block';
    
}

let hide = function() {
    moreInfo_1.style.display = 'none';
}

view.onclick = open;

/*
clickFAQ_1.onclick = function() {
    moreInfo_1.style.display='block';
}
*/

/*
clickFAQ_2.onclick = function() {
    moreInfo_2.style.display='block';
}

clickFAQ_3.onclick = function() {
    moreInfo_3.style.display='block';
}


clickFAQ_4.onclick = function() {
moreInfo_4.style.display='block';
}
*/
