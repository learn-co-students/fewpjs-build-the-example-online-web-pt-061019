// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalMessage = document.getElementById("modal-message")
const hidden = document.getElementById("modal")
hidden.className = "hidden"

const likes = document.getElementsByClassName("like")

function heart(){
  let hearts = document.getElementsByClassName("like-glyph")
  for(heart of hearts){
    heart.addEventListener('click', function(event){
      mimicServerCall("url")
      .then(function(){
        if (event.target.innerText === EMPTY_HEART){
        event.target.className = "activated-heart"
        event.target.innerText = FULL_HEART
        console.log(heart)
        }
        else if (event.target.innerText === FULL_HEART) {
        event.target.className = "like-glyph"
        event.target.innerText = EMPTY_HEART
        }
      })

      .catch(function(error){
        setTimeout(function(){
        hidden.className = "visible"
        modalMessage.innerText = error.message
        }, 5000)
    })
  }) 
  }
}

document.addEventListener("DOMContentLoaded", function(){
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
