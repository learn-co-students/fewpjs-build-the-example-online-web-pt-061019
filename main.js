// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const heartBtns = document.getElementsByClassName('like-glyph')
  const modal = document.getElementById('modal')
  modal.classList.add('hidden')

  for (const like of heartBtns) {

    like.addEventListener('click', function(e){
      let heart = e.target
      if (heart.innerText === EMPTY_HEART) {  
        mimicServerCall() //acts like fetch()
          .then(() => {
              heart.className += '.activated-heart'
              heart.innerText = `${FULL_HEART}`
          })
          .catch(error => {
            modal.classList.remove('hidden')
            let errorMsg = document.getElementById("modal-message")
            errorMsg.innerText = error
            setTimeout(() => {
              modal.className = 'hidden'
            }, 5000) //1000 ms = 1 second
          })
      } else {
        heart.className -= '.activated-heart'
        heart.innerText = `${EMPTY_HEART}`
      }
    }) //END of addEventListener
  }//END of for (const like...)
}) //END of DOMContentLoaded

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
