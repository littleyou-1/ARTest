const paintandquestPreviewButton = document.querySelector("#BtnPlV");
const myTarget = document.querySelector('#mytarget');
const myTarget2 = document.querySelector('#mytarget2');
const myTarget3 = document.querySelector('#mytarget3');
const myTarget4 = document.querySelector('#mytarget4');
const myTarget5 = document.querySelector('#mytarget5');
const myTarget6 = document.querySelector('#mytarget6');
const Bar = document.querySelector('.viewer-container');
const LogoBar = document.querySelector('.logo-container');
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
const BInfo = document.querySelector('#BInfo');
const BPLay = document.querySelector('#BpLay');
const PickInfo = document.querySelector('#INSlide');
const InfoEx = document.querySelector('#ExInf');

const BInfo4 = document.querySelector('#BInfo4');
const BPLay4 = document.querySelector('#BpLay4');
const PickInfo4 = document.querySelector('#INSlide4');
const InfoEx4 = document.querySelector('#ExInf4');

const BInfo5 = document.querySelector('#BInfo5');
const PickInfo5 = document.querySelector('#INSlide5');
const InfoEx5 = document.querySelector('#ExInf5');

const BInfo6 = document.querySelector('#BInfo6');
const PickInfo6 = document.querySelector('#INSlide6');
const InfoEx6 = document.querySelector('#ExInf6');
let track = 1;
let trackSt = 0;
let trackSt4 = 0;


 document.querySelector("#paintandquest-video-mp4").pause(); 
 document.querySelector("#paintandquest-video-mp44").pause(); 


 

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
            document.querySelector(".mindar-ui-scanning").classList.remove("hidden");
            });

            BPLay.addEventListener("click", event => {
   
            document.querySelector("#paintandquest-video-mp4").play();
            trackSt = 1;
            BPLay.setAttribute("visible", false);
      });
      myTarget4.addEventListener("targetLost", event => {
            document.querySelector("#paintandquest-video-mp44").pause();
            document.querySelector(".mindar-ui-scanning").classList.remove("hidden");
            });

            BPLay4.addEventListener("click", event => {
   
            document.querySelector("#paintandquest-video-mp44").play();
            trackSt4 = 1;
            BPLay4.setAttribute("visible", false);
      });



      BInfo.addEventListener("click", event => {
            
            PickInfo.setAttribute("visible", true);
            InfoEx.setAttribute("visible", true);
            
      });

      InfoEx.addEventListener("click", event => {
            
            PickInfo.setAttribute("visible", false);
            InfoEx.setAttribute("visible", false);
            
      });

      BInfo4.addEventListener("click", event => {
            
            PickInfo4.setAttribute("visible", true);
            InfoEx4.setAttribute("visible", true);
            
      });

      InfoEx4.addEventListener("click", event => {
            
            PickInfo4.setAttribute("visible", false);
            InfoEx4.setAttribute("visible", false);
            
      });



      myTarget3.addEventListener("targetFound", event => {
            
            if (trackSt == 1) {
                  document.querySelector("#paintandquest-video-mp4").play();
            } else {
                  console.log('white');
            }
            
            })

            myTarget4.addEventListener("targetFound", event => {
                  
                  if (trackSt4 == 1) {
                        document.querySelector("#paintandquest-video-mp44").play();
                  } else {
                        console.log('white');
                  }
                  
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
      
                  myTarget.addEventListener("targetLost", event => {
                        
                        document.querySelector(".mindar-ui-scanning").classList.remove("hidden");
                        });
     
//target5
BInfo5.addEventListener("click", event => {
            
      PickInfo5.setAttribute("visible", true);
      InfoEx5.setAttribute("visible", true);
      BInfo5.setAttribute("visible", false);
      document.querySelector("#P1").setAttribute("visible", false);
      document.querySelector("#P2").setAttribute("visible", false);
      document.querySelector("#P3").setAttribute("visible", false);
      document.querySelector("#P4").setAttribute("visible", false);
      document.querySelector("#P5").setAttribute("visible", false);
      document.querySelector("#P6").setAttribute("visible", false);
      document.querySelector("#P7").setAttribute("visible", false);
      document.querySelector("#P8").setAttribute("visible", false);
      document.querySelector("#P9").setAttribute("visible", false);
      document.querySelector("#P10").setAttribute("visible", false);

});

InfoEx5.addEventListener("click", event => {
      
      PickInfo5.setAttribute("visible", false);
      InfoEx5.setAttribute("visible", false);
      BInfo5.setAttribute("visible", true);
      document.querySelector("#P1").setAttribute("visible", true);
      document.querySelector("#P2").setAttribute("visible", true);
      document.querySelector("#P3").setAttribute("visible", true);
      document.querySelector("#P4").setAttribute("visible", true);
      document.querySelector("#P5").setAttribute("visible", true);
      document.querySelector("#P6").setAttribute("visible", true);
      document.querySelector("#P7").setAttribute("visible", true);
      document.querySelector("#P8").setAttribute("visible", true);
      document.querySelector("#P9").setAttribute("visible", true);
      document.querySelector("#P10").setAttribute("visible", true);
      
});

myTarget5.addEventListener("targetLost", event => {
      document.querySelector(".mindar-ui-scanning").classList.remove("hidden");
     });


//target6

     BInfo6.addEventListener("click", event => {
            
      PickInfo6.setAttribute("visible", true);
      InfoEx6.setAttribute("visible", true);
      BInfo6.setAttribute("visible", false);
      document.querySelector("#Pictt6").setAttribute("visible", false);


});

InfoEx6.addEventListener("click", event => {
      
      PickInfo6.setAttribute("visible", false);
      InfoEx6.setAttribute("visible", false);
      BInfo6.setAttribute("visible", true);
      document.querySelector("#Pictt6").setAttribute("visible", true);

      
});

myTarget6.addEventListener("targetLost", event => {
      document.querySelector(".mindar-ui-scanning").classList.remove("hidden");
     });

     myTarget2.addEventListener("targetLost", event => {
      document.querySelector(".mindar-ui-scanning").classList.remove("hidden");
     });
