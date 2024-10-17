let butFront = document.querySelector('#ar-buttonFront');
let butBack = document.querySelector('#ar-button');
let FrontPage = document.querySelector('#LoadingPage');
let MV = document.getElementById('modelviw')

// Handles loading the events for <model-viewer>'s slotted progress bar




document.addEventListener('DOMContentLoaded', (event) => {
 MV.addEventListener('load', function () { 
   /*  MV.activateAR();  */
    butBack.style.display = 'block';
    butBack.classList.add('show');
    setTimeout(() => {
      FrontPage.style.display = 'none';
    }, 4000);
    
});
});
  /* butFront.addEventListener('click', function() {
    butBack.click();
    document.getElementById('modelviw').activateAR();
    setTimeout(function(){
      FrontPage.style.display = 'none';
  }, 4000) // 5000 msec = 5 sec  
  });
  var modelViewer = document.getElementById('model-viewer');
  modelViewer.addEventListener('load', function () { 
      modelViewer.activateAR(); 
  }); */


/*   setTimeout(function(){
    butFront.click();
}, 2000)

}); */




/* document.querySelector('model-viewer').addEventListener('progress', onProgress);
butFront.addEventListener('click', function() {
  butBack.click();
}); */

