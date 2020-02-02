// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
const hidden = document.querySelector("#modal")
hidden.className = "hidden"
const modalMsg = document.getElementById("modal-message")

function heart() {
  let hearts = document.getElementsByClassName("like-glyph")
  for(heart of hearts){
    heart.addEventListener('click', function(e){
      mimicServerCall("url")
      .then(function(){
        if (e.target.innerText === EMPTY_HEART) {
          e.target.className = "activated-heart"
          e.target.innerText = FULL_HEART
        }
        else if (e.target.innerText === FULL_HEART) {
          e.target.className = "like-glyph"
          e.target.innerText = EMPTY_HEART 
        }
      })
      .catch(function(error) {
        setTimeout(function() {
          hidden.className = "notHidden" 
          modalMsg.innerText = error.message
        }, 5000);
      })
    })
  }
};

document.addEventListener("DOMContentLoaded", function() {
  heart()
});


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
};