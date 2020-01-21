// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// But this only works for the first glyph
// const likeGlyph = document.querySelector('.like-glyph');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("The DOM has loaded")

  document.addEventListener("click", (event) => {
    console.log("A like has been clicked!")
    // console.log(event.target.innerText)

    if (event.target.innerHTML == EMPTY_HEART) {
      console.log("SAD")
      mimicServerCall();
    } else if (event.target.innerHTML == FULL_HEART) {
      console.log("Happy" )
    }

  })

})

function like() {
  mimicServerCall();
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
