// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
 
  let hearts = document.querySelectorAll(".like-glyph")
  // let h = document.querySelector(".hidden")
  
  
  hearts.forEach(function(heart){
    heart.addEventListener("click", callBackFunc)
  })
    
    // if (e.innerText == EMPTY_HEART){
    //   e.target.className = "activated-heart"
    //   e.innerText = FULL_HEART
    // }
    // else if (e.innerText == FULL_HEART){
    //   e.target.className = "like-glyph"
    //   e.innerText = EMPTY_HEART
    // }
    function callBackFunc(e){
     console.log("click", e.target)
      mimicServerCall()
      .then(function(object) {
        if (e.target.innerText == EMPTY_HEART){
          e.target.className = "activated-heart"
          e.target.innerText = FULL_HEART
        }
        
      })
      .catch(function(error) {
        if (e.target.innerText == FULL_HEART){
          e.target.className = "like-glyph"
          e.target.innerText = EMPTY_HEART
        }
       
        let el = document.querySelector('#modal');
        if (el.classList.contains("hidden")) {
          el.classList.remove("hidden");
          let p = document.getElementById("modal-message")
          p.innerText = error
        }
        setTimeout(function() {
          el.classList.add("hidden");
        }, 5000);
      });

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



