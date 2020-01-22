// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalMessage = document.getElementById("modal-message")
const hidden = document.getElementById("modal")
hidden.className = "hidden"

const like = document.querySelector(".like")

function heart(){
  //if empty change likeglyph inner text to full heart and add class .activated heart
  //if activated change .activatedheart to likeglyph and innertext to empty heart
  let heart = like.firstElementChild
  mimicServerCall("url")
  .then(function(resolve){
    if (heart.innerText = EMPTY_HEART){
      heart.className = "activated-heart"
      heart.innerText = FULL_HEART
      modalMessage.innerText = resolve.message
    }
    else if (heart.innerText = FULL_HEART) {
      heart.className = "like-glyph"
      heart.innerText = EMPTY_HEART
      modalMessage.innerText = resolve.message
    }
  })
  
  .catch(function(reject){
      //append error message to p tag inner text
      //change hidden class name to visible
      //set timeout 5 seconds
    setTimeout(function(){
      hidden.className = "visible"
      modalMessage = reject.message
    }, 5000)
  })
}
like.addEventListener('click', function(){
  heart()
})

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
