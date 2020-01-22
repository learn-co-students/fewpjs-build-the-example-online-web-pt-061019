// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
 
  let like = document.getElementsByClassName("like")
  let h = document.getElementsByClassName("hidden")
  like.addEventListener("click", function(e){
    like.classList.remove("activated-heart")
    object = mimicServerCall()
    .then(function(object) {
      like.classList.add("activated-heart")
      console.log(object);
    })
    .catch(function(error) {
     
     
      h.removeAttribute("hidden")
     
      setTimeout(function() {
        console.log(error.message);
      }, 5000);
    });
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

})

