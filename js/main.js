/*jshint esversion: 6 */
main = function(){
    setVideoLength();
};

//TODO scroll down makes header transparent, use RXJS
let scrollHideHeader = function(){

};

let setVideoLength = function(){
    let videoLength = document.querySelectorAll('.section.videos div div').length;
    console.log(videoLength);
    let section = document.querySelector('.section.videos .iframe-container');
    section.style.width = (videoLength * (25)) + '%';
};

window.addEventListener('DOMContentLoaded', main);

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
