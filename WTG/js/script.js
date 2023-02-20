const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
const myTarget = document.querySelector('#mytarget');
const Bar = document.querySelector('.viewer-container');
const LogoBar = document.querySelector('.logo-container');
const TrPhoto = document.querySelector('#example-scanning-overlay');
const Logo2 = document.querySelector('#example-scanning-overlay2');
const ClickWeb = document.querySelector('#Btn');


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
     