const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
const myTarget = document.querySelector('#mytarget');
const Bar = document.querySelector('.viewer-container');
const LogoBar = document.querySelector('.logo-container');
const TrPhoto = document.querySelector('#example-scanning-overlay');
const Logo2 = document.querySelector('#example-scanning-overlay2');
const ClickWeb = document.querySelector('#Btn');
const Model1 = document.querySelector('#Model1');
const Model2 = document.querySelector('#Model2');
const Model3 = document.querySelector('#Model3');
const Model4 = document.querySelector('#Model4');
const Model5 = document.querySelector('#Model5');
const Model6 = document.querySelector('#Model6');
const Model7 = document.querySelector('#Model7');
const Model8 = document.querySelector('#Model8');
const Model9 = document.querySelector('#Model9');
const Model10 = document.querySelector('#Model10');
const Model11= document.querySelector('#Model11');
const Model12 = document.querySelector('#Model12');
const Model14 = document.querySelector('#Model14');
const Model15 = document.querySelector('#Model15');
const Model16 = document.querySelector('#Model16');
const Model17 = document.querySelector('#Model17');
const Model18 = document.querySelector('#Model18');
const Model19 = document.querySelector('#Model19');
const Model20 = document.querySelector('#Model20');
const Model21 = document.querySelector('#Model21');

let count = 1;
document.querySelector("#paintandquest-video-mp4").pause();

paintandquestPreviewButton.addEventListener('click', () => {
        paintandquestPreviewButton.setAttribute("visible", false);
        const testVideo = document.createElement( "video" );
        const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
        document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
        document.querySelector("#paintandquest-video-mp4").play();
        document.querySelector("#paintandquest-video-mp4").pause();
        Bar.style.display = "none";
       
      });
 

             const sceneEl = document.querySelector('a-scene');
               sceneEl.addEventListener("arReady", (event) => {
                 
                   Bar.style.display = "block";
                   LogoBar.style.display = "none"; 
                   
               });


      myTarget.addEventListener("targetFound", event => {
           Model1.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model2.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model3.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model4.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model5.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model6.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model7.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model8.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model9.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model10.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model11.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model12.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model14.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model15.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model16.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model17.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model18.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model19.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model20.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           Model21.setAttribute('animation-mixer', 'loop: once; clampWhenFinished: true; timeScale: 1');
           document.querySelector("#paintandquest-video-mp4").play();
           TrPhoto.style.display = "none";
           Logo2.style.display = "flex";
           
            });

      myTarget.addEventListener("targetLost", event => {
      
        document.querySelector("#paintandquest-video-mp4").pause();

     });

     
      ClickWeb.addEventListener("click", event => {
      document.location.href = "http://retzlaffvineyards.com/appdeal";
      });
     