let butFront = document.querySelector('#ar-buttonFront');
let butBack = document.querySelector('#ar-button');
let FrontPage = document.querySelector('#LoadingPage');

// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');

    

  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');

    }
  }
};



document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('modelviw').addEventListener('load', function () { 
    modelViewer.activateAR(); 
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

