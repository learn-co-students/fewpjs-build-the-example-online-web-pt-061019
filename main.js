// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const body = document.querySelector("body");
body.addEventListener("click", function(e) {
  if (e.target.classList.contains('like-glyph')) {
    mimicServerCall()
    .then(res => {
      if (e.target.innerText == EMPTY_HEART) {
        e.target.innerText = FULL_HEART;
        e.target.classList.add("activated-heart");
      } else if (e.target.innerText == FULL_HEART) {
        e.target.innerText = EMPTY_HEART;
        e.target.classList.remove("activated-heart");
      }

    })
    .catch(function(error) {
      let modal = document.querySelector("#modal");
      modal.classList.remove("hidden");
      modal.innerText = error;
      setTimeout(() => modal.classList.add("hidden"), 5000)
      console.log("Error occurred!")
    })
  }
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
