// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.getElementsByClassName('like-glyph');
const modal = document.getElementById('modal');

document.addEventListener("DOMContentLoaded", () => {
  hideBanner();
  heartListener();
})

function heartListener() {
  for (const e of heart) {e.addEventListener('click', (e) => {likePost(e)})}
}

function likePost(e) {
  mimicServerCall()
    .then((result) => {
      hideBanner();
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
      showBanner(error)
    })
}

function hideBanner() {
  modal.setAttribute('class', 'hidden');
}

function showBanner(error) {
  modal.removeAttribute('class', 'hidden');
  const message = document.getElementById('modal-message')
  setTimeout(() => {hideBanner()}, 10000)
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
