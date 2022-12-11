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

document.querySelector('model-viewer').addEventListener('progress', onProgress);
butFront.addEventListener('click', function() {
  butBack.click();
  alert("Hello");
  FrontPage.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', (event) => {
  butFront.addEventListener('click', function() {
    butBack.click();
  });

  FrontPage.style.display = 'none';
});
/* document.querySelector('model-viewer').addEventListener('progress', onProgress);
butFront.addEventListener('click', function() {
  butBack.click();
}); */

