/*jshint esversion: 6 */
main = function(){
    let videoLength = document.querySelectorAll('.section.videos div iframe').length;
    let section = document.querySelector('.section.videos .iframe-container');
    console.log(section);
    section.style.width = (videoLength * (560 + 25)) + 'px';
};
window.onload = main;
