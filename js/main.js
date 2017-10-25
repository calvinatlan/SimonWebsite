/*jshint esversion: 6 */
main = function(){
    setVideoLength();
};

//TODO scroll down makes header transparent, use RXJS
let scrollHideHeader = function(){

};

let setVideoLength = function(){
    let videoLength = document.querySelectorAll('.section.videos div iframe').length;
    let section = document.querySelector('.section.videos .iframe-container');
    section.style.width = (videoLength * (560 + 25)) + 'px';
};

window.onload = main;
