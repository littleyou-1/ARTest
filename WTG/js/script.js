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
const BtE = document.querySelector('#BtE');
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

      myTarget.addEventListener("targetFound", event => {
            if (track == 6) {
                  console.log(track);
                  track = 1;
                  One(track);
               }
            })

/*       myTarget.addEventListener("targetLost", event => {
      
      }); */

     
   