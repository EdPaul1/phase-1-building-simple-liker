// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const onClick = document.getElementsByClassName('like');
for (let i = 0; i < onClick.length; i++) {
  onClick[i].addEventListener('click', function(){
    if (onClick[i].classList.contains('activated-heart')){
      onClick[i].classList.remove('activated-heart');
      onClick[i].innerHTML = EMPTY_HEART;
    } else {
      mimicServerCall()
      .then(() => {
        onClick[i].classList.add('activated-heart');
        onClick[i].innerHTML = FULL_HEART;
      })
      .catch(error => {
        const errorModal = document.getElementById('modal');
        const errorMessage = document.getElementById('modal-message');
        errorMessage.textContent = error;
        errorModal.classList.remove('hidden');
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
    }

  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
