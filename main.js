// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const heart = document.getElementsByClassName('like-glyph');

document.addEventListener("DOMContentLoaded", () => {
  hideError();
  heartListener();
})

function heartListener() {
  for (const e of heart) {e.addEventListener('click', (e) => {likePost(e)})}
}

function likePost(e) {
  mimicServerCall()
    .then((result) => {
      hideError();
      if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART;
        e.target.setAttribute("class", 'activated-heart');
      } else {
        e.target.innerText = EMPTY_HEART
        e.target.removeAttribute('class', 'activated-heart');
      }
      console.log(result)
    })
    .catch((error) => {
      showError(error)
    })
}

function hideError() {
  modal.setAttribute('class', 'hidden');
}

function showError(error) {
  modal.removeAttribute('class', 'hidden');
  const message = document.getElementById('modal-message')
  setTimeout(() => {hideError()}, 10000)
  message.innerText = error;
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
