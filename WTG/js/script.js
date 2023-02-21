const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
const myTarget = document.querySelector('#mytarget');
const Bar = document.querySelector('.viewer-container');
const LogoBar = document.querySelector('.logo-container');
const TrPhoto = document.querySelector('#example-scanning-overlay');
const Logo2 = document.querySelector('#example-scanning-overlay2');
const ClickWeb = document.querySelector('#Btn');
const Sl1 = document.querySelector('#S1');
const Sl2 = document.querySelector('#S2');

const BSt = document.querySelector('#BS');
const BtN2 = document.querySelector('#BN2');


      const sceneEl = document.querySelector('a-scene');
      sceneEl.addEventListener("arReady", (event) => {
          LogoBar.style.display = "none";   
      });

/*       myTarget.addEventListener("targetFound", event => {
        TrPhoto.style.display = "none";
      }); */

/*       myTarget.addEventListener("targetLost", event => {
      
      }); */

     
      BSt.addEventListener("click", event => {
        Sl1.setAttribute("visible", false);
        BSt.setAttribute("visible", false);
        Sl2.setAttribute("visible", true);
        BtN2.setAttribute("visible", true);

      });
     