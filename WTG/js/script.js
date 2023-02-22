const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
const myTarget = document.querySelector('#mytarget');
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
const BtF = document.querySelector('#BF');
let track = 1;

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
                        BF.setAttribute("visible", true);     
                        BtB3.setAttribute("visible", false);
                        BtN2.setAttribute("visible", false);
                        Sl1.setAttribute("visible", false);
                        Sl2.setAttribute("visible", false);
                        Sl3.setAttribute("visible", false);
                        Sl4.setAttribute("visible", false);
                        Sl5.setAttribute("visible", true);
                        }else {
                              if (track == 1) {
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
    /*   BtN3.addEventListener("click", event => {
            Sl3.setAttribute("visible", false);
            BtN3.setAttribute("visible", false);
            BtB3.setAttribute("visible", false);
            Sl4.setAttribute("visible", true);
            BtN4.setAttribute("visible", true);
            BtB4.setAttribute("visible", true);
      });
    BtN4.addEventListener("click", event => {
            Sl4.setAttribute("visible", false);
            BtN4.setAttribute("visible", false);
            BtB4.setAttribute("visible", false);
           Sl4.setAttribute("visible", true);
            BtN4.setAttribute("visible", true);
            BtB4.setAttribute("visible", true); 
      }); */
/*       BtB3.addEventListener("click", event => {
            Sl3.setAttribute("visible", false);
            BtN3.setAttribute("visible", false);
            BtB3.setAttribute("visible", false);
            Sl2.setAttribute("visible", true);
            BtN2.setAttribute("visible", true);
      }); */
 /*      BtN4.addEventListener("click", event => {
            Sl4.setAttribute("visible", false);
            BtN4.setAttribute("visible", false);
            BtB4.setAttribute("visible", false);
            Sl3.setAttribute("visible", true);
            BtN3.setAttribute("visible", true);
            BtB3.setAttribute("visible", true);
      }); */
         
/*       myTarget.addEventListener("targetFound", event => {
        TrPhoto.style.display = "none";
      }); */

/*       myTarget.addEventListener("targetLost", event => {
      
      }); */

     
   