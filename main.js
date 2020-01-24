// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// But this only works for the first glyph
// const likeGlyph = document.querySelectorAll('.like-glyph');
// const likeGlyph = document.getElementsByClassName("like-glyph")
const likeGlyph = document.getElementsByClassName('like-glyph');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("The DOM has loaded")
  //
  // console.log(likeGlyph)

  addLikeListener();



  // document.addEventListener("click", (event) => {
  //   console.log("A like has been clicked!")
  //   // console.log(event.target.innerText)
  //
  //   if (event.target.innerHTML == EMPTY_HEART) {
  //     // console.log("SAD")
  //     mimicServerCall();
  //   } else if (event.target.innerHTML == FULL_HEART) {
  //     // console.log("Happy" )
  //   }
  //
  // })

})

function addLikeListener() {
  for (const e of likeGlyph) {
    // console.log(e)
    e.addEventListener("click", (e) => {
      console.log("A like has been clicked!")
      // console.log(event.target.innerText)

      if (event.target.innerHTML == EMPTY_HEART) {
        // console.log("SAD")
        mimicServerCall()
        .then((result) => {
          updateHeart(e);
        })
        .catch((error) => {
          console.log("Error!")
          updateModel(e);
        })
      } else if (event.target.innerHTML == FULL_HEART) {
        // console.log("Happy" )
        updateHeart(e);
      }
    })
  }
}

function updateHeart(e) {
  // console.log(e.target.innerHTML);
  if (e.target.innerHTML == FULL_HEART) {
    e.target.innerHTML = EMPTY_HEART;
    e.target.classList.remove("activated-heart");
  } else if (e.target.innerHTML == EMPTY_HEART) {
    e.target.innerHTML = FULL_HEART;
    e.target.classList.add("activated-heart");
  }


}

const model = document.querySelector('#modal')

function updateModel() {


  if (model.classList == "hidden") {
    model.classList.remove("hidden");
    setTimeout(hideModel, 5000)
  } else {
    model.classList.add("hidden");
  }
}

function hideModel() {
  console.log("...hiding model..")
  model.classList.add("hidden");
  console.log("...the model is now hidden..")
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
