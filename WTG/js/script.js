const paintandquestPreviewButton = document.querySelector("#BtnPlV");
const myTarget = document.querySelector('#mytarget');
const myTarget3 = document.querySelector('#mytarget3');
const Bar = document.querySelector('.viewer-container');
const LogoBar = document.querySelector('.logo-container');
const TrPhoto = document.querySelector('#example-scanning-overlay');
const Logo2 = document.querySelector('#example-scanning-overlay2');
const Sl1 = document.querySelector('#S1');
const Sl2 = document.querySelector('#S2');
const Sl3 = document.querySelector('#S3');
const Sl4 = document.querySelector('#S4');
const Sl5 = document.querySelector('#S5');
const BSt = document.querySelector('#BtS');
const BtN2 = document.querySelector('#BN2');
const BtB3 = document.querySelector('#BB3');
const BtE = document.querySelector('#BtE');
const BSoPl = document.querySelector('#BSP');
const BSOf = document.querySelector('#BSOf');
const BInfo = document.querySelector('#BInfo');
const BPLay = document.querySelector('#BpLay');
const PickInfo = document.querySelector('#INSlide');
const InfoEx = document.querySelector('#ExInf');
let track = 1;
/* document.querySelector("#paintandquest-video-mp42").pause(); */

/* document.querySelector("#paintandquest-video-mp4").pause(); */

/* paintandquestPreviewButton.addEventListener('click', () => {
        paintandquestPreviewButton.setAttribute("visible", false);
        const testVideo = document.createElement( "video" );
        const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
        document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
        document.querySelector("#paintandquest-video-mp4").play();
        document.querySelector("#paintandquest-video-mp4").pause();
        document.querySelector("#paintandquest-video-link2").setAttribute("src", "#paintandquest-video-mp42");
        document.querySelector("#paintandquest-video-mp42").play();
        document.querySelector("#paintandquest-video-mp42").pause();
        Bar.style.display = "none";
       
      }); */
 

      const sceneEl = document.querySelector('a-scene');
      sceneEl.addEventListener("arReady", (event) => {
          LogoBar.style.display = "none";   
      });
      function One (track) {
         if (track == 2) {
            BSt.setAttribute("visible", false);
            BtB3.setAttribute("visible", false);
            BtN2.setAttribute("visible", true);
            Sl1.setAttribute("visible", false);
            Sl2.setAttribute("visible", true);
            Sl3.setAttribute("visible", false);
            Sl4.setAttribute("visible", false);
            Sl5.setAttribute("visible", false);
         } else {
            if (track == 3) {
            BtB3.setAttribute("visible", true);
            Sl1.setAttribute("visible", false);
            Sl2.setAttribute("visible", false);
            Sl3.setAttribute("visible", true);
            Sl4.setAttribute("visible", false);
            Sl5.setAttribute("visible", false);
            } else {
                  if (track == 4) {
                  BtE.setAttribute("visible", false); 
                  BtB3.setAttribute("visible", true);
                  BtN2.setAttribute("visible", true);
                  Sl1.setAttribute("visible", false);
                  Sl2.setAttribute("visible", false);
                  Sl3.setAttribute("visible", false);
                  Sl4.setAttribute("visible", true);
                  Sl5.setAttribute("visible", false);
                  BF.setAttribute("visible", false);
                  } else {
                        if (track == 5) {
                        BtE.setAttribute("visible", true);     
                        BtB3.setAttribute("visible", true);
                        BtN2.setAttribute("visible", false);
                        Sl1.setAttribute("visible", false);
                        Sl2.setAttribute("visible", false);
                        Sl3.setAttribute("visible", false);
                        Sl4.setAttribute("visible", false);
                        Sl5.setAttribute("visible", true);
                        }else {
                              if (track == 1) {
                              BtE.setAttribute("visible", false); 
                              BSt.setAttribute("visible", true);
                              BtB3.setAttribute("visible", false);
                              BtN2.setAttribute("visible", false);
                              Sl1.setAttribute("visible", true);
                              Sl2.setAttribute("visible", false);
                              Sl3.setAttribute("visible", false);
                              Sl4.setAttribute("visible", false);
                              Sl5.setAttribute("visible", false);
                              }else {
                                    if (track == 6) {
                                    BtE.setAttribute("visible", false); 
                                    BtB3.setAttribute("visible", false);
                                    BtN2.setAttribute("visible", false);
                                    Sl1.setAttribute("visible", false);
                                    Sl2.setAttribute("visible", false);
                                    Sl3.setAttribute("visible", false);
                                    Sl4.setAttribute("visible", false);
                                    Sl5.setAttribute("visible", false);
                                    
                                    }
                                 }
                           }
                     }
               } 
               }
         } 
      
      BSt.addEventListener("click", event => {
            track++;
            console.log(track);
            One(track);
          });
      BtN2.addEventListener("click", event => {
            track++;
            console.log(track);
            One(track);
      });
      BtB3.addEventListener("click", event => {
            track--;
            console.log(track);
            One(track);
      });
      myTarget3.addEventListener("targetLost", event => {
            document.querySelector("#paintandquest-video-mp4").pause();
            document.querySelector("#paintandquest-video-mp42").pause();
            BSoPl.setAttribute("visible", true);
            BSOf.setAttribute("visible", false);
            });

      BSoPl.addEventListener("click", event => {
            const testVideo = document.createElement( "video" );
            const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
            if (canplayWebm == "") {

                  document.querySelector("#paintandquest-video-link2").setAttribute("src", "#paintandquest-video-mp42");
                  document.querySelector("#paintandquest-video-mp42").play();
                  document.querySelector("#paintandquest-video-mp42").pause();

                } else {
              
                   document.querySelector("#paintandquest-video-link2").setAttribute("src", "#paintandquest-video-webm");
                  document.querySelector("#paintandquest-video-webm").play();
                  document.querySelector("#paintandquest-video-webm").pause();

                }
            document.querySelector("#paintandquest-video-mp42").play();
            document.querySelector("#paintandquest-video-mp4").play();
            BSoPl.setAttribute("visible", false);
            BSOf.setAttribute("visible", true);
            BPLay.setAttribute("visible", false);
      });

      BSOf.addEventListener("click", event => {
            
            document.querySelector("#paintandquest-video-mp42").pause();
            BSoPl.setAttribute("visible", true);
            BSOf.setAttribute("visible", false);
            
      });

      BInfo.addEventListener("click", event => {
            
            PickInfo.setAttribute("visible", true);
            InfoEx.setAttribute("visible", true);
            
      });

      InfoEx.addEventListener("click", event => {
            
            PickInfo.setAttribute("visible", false);
            InfoEx.setAttribute("visible", false);
            
      });

/*       BPLay.addEventListener("click", event => {
            document.querySelector("#paintandquest-video-mp4").play();
            BSoPl.setAttribute("visible", true);
            BSOf.setAttribute("visible", false);
      }); */

      myTarget3.addEventListener("targetFound", event => {
            document.querySelector("#paintandquest-video-mp4").play();
           

            })
            myTarget.addEventListener("targetFound", event => {
                  if (track == 6) {
                        BtE.setAttribute("visible", false); 
                              BSt.setAttribute("visible", true);
                              BtB3.setAttribute("visible", false);
                              BtN2.setAttribute("visible", false);
                              Sl1.setAttribute("visible", true);
                              Sl2.setAttribute("visible", false);
                              Sl3.setAttribute("visible", false);
                              Sl4.setAttribute("visible", false);
                              Sl5.setAttribute("visible", false);
                              track = 1;
                  } else {
                        if (track == 7) {
                              BtE.setAttribute("visible", false); 
                                    BSt.setAttribute("visible", true);
                                    BtB3.setAttribute("visible", false);
                                    BtN2.setAttribute("visible", false);
                                    Sl1.setAttribute("visible", true);
                                    Sl2.setAttribute("visible", false);
                                    Sl3.setAttribute("visible", false);
                                    Sl4.setAttribute("visible", false);
                                    Sl5.setAttribute("visible", false);
                        }
                  }
                 
      
                  })
      

     

     
   
