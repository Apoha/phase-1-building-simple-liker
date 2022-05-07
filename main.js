// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const hidden = document.querySelector('#modal')
hidden.removeAttribute("class")
hidden.className = "hidden"



const heartButton = document.getElementsByClassName("like-glyph")
for (let i = 0; i < heartButton.length; i++) {
  heartButton[i].addEventListener("click", (e) => {
    mimicServerCall()

      .then(function (response) {
        // When the "server" returns a success status:
        // Change the heart to a full heart
        // Add the .activated-heart class to make the heart appear red
        // When a user clicks on a full heart:
        // Change the heart back to an empty heart
        // Remove the .activated-heart class

        // console.log(e.target)

       if(heartButton[i].textContent = FULL_HEART){
        console.log("Full_Heart❤️")
        heartButton[i].classList.add('activated-heart')
       }else if(
        heartButton[i].textContent = EMPTY_HEART){
        console.log("Empty_Heart🤍")
        heartButton[i].classList.remove('activated-heart')
       }

       /* if (e.target.textContent = FULL_HEART) {
          //e.target.setAttribute('style', 'color: red;')
          e.target.getElementsByClassName("like-glyph")
          e.target.setAttribute('class', 'activated-heart;')
        
          console.log("Full_Heart❤️")
        } else if (e.target.textContent = EMPTY_HEART) {
          console.log("Empty_Heart🤍")
        }*/

        console.log(response)



      })
      .catch(function (error) {
      
        //  Display the error modal by removing the .hidden class
        //  Display the server error message in the modal
        //  Use setTimeout to hide the modal after 3 seconds (add the .hidden class)


        const errorMessage = document.querySelector("#modal-message")
        errorMessage.textContent = error
        console.log(error)
        const hiddenClass = document.querySelector('#modal')
        hiddenClass.className = "hidden"
        hiddenClass.removeAttribute("class")
        setTimeout(() => hiddenClass.className = "hidden", 3000)

      })

  })

}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
