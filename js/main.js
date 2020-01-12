/*jshint esversion: 6 */
main = function(){
    setVideoLength();
    scrollVideoSection();
    getVideoThumbnails();
};

//TODO scroll down makes header transparent, use RXJS
let scrollHideHeader = function(){

};

let getVideoThumbnails = async function() {
    let videoContainers = document.querySelectorAll(".section.videos>.iframe-container>div");
    videoContainers.forEach(async container => {
        let vimeoId = container.getAttribute("vimeoId");
        let thumbnailReq = await fetch("https://vimeo.com/api/v2/video/" + vimeoId + '.json');
        let thumbnailJson = await thumbnailReq.json();
        let thumbnailUrl = thumbnailJson[0].thumbnail_large;
        container.style.backgroundImage = 'url(\'' + thumbnailUrl + '\')';
    });
}

let setVideoLength = function(){
    let videoLength = document.querySelectorAll('.section.videos div div').length;
    console.log(videoLength);
    let section = document.querySelector('.section.videos .iframe-container');
    section.style.width = (videoLength * (25)) + '%';
};

let scrollVideoSection = function(){
    let videoSection = document.querySelector('.section.videos');
    let moveObs = Rx.Observable.fromEvent(videoSection, 'mousemove');
    let exitObs = Rx.Observable.fromEvent(videoSection, 'mouseexit');

    let scrollLeft = false;
    let scrollRight = false;

    moveObs.debounceTime(16).subscribe((e)=>{
        if(e.pageX < 100){
            if(!scrollLeft){
                scrollLeft = true;
                fScrollLeft();
            }
            console.log('scrolling left');
            scrollRight = false;
        }else if(e.pageX > window.innerWidth - 100){
            if(!scrollRight){
                scrollRight = true;
                fScrollRight();
            }
                scrollLeft = false;
        }else{
            scrollLeft = false;
            scrollRight = false;
        }
    });

    exitObs.subscribe(()=>{
        console.log('exit');
        scrollLeft = false;
        scrollRight = false;
    });

    let fScrollLeft = function(){
        if(scrollLeft){
            videoSection.scrollLeft -= 10;
            setTimeout(fScrollLeft, 16);
        }
    };

    let fScrollRight = function(){
        if(scrollRight){
            videoSection.scrollLeft += 10;
            setTimeout(fScrollRight, 16);
        }
    };

};

let bindVideoClick = function(){
    let videos = document.querySelectorAll('.iframe-container>div');
    let mainVideo = document.querySelector('iframe.main-video');
    [...videos].map(v =>{
        let id = v.getAttribute('vimeoId');
        v.addEventListener('click', function(){
            let src = mainVideo.getAttribute('src');
            src = src.replace(/\d+/,id);
            src = src.replace(/autoplay=\d/,'autoplay=1');
            mainVideo.setAttribute('src',src);
        });
    });
};

/*----*/

window.addEventListener('DOMContentLoaded', main);

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});

bindVideoClick();

