const score = document.querySelectorAll(".btn-score");
const btnSubmit = document.querySelector(".btn-submit");
const select = document.querySelector("#select");
const imgSubmited = document.querySelectorAll(".score-submited");
const first = document.querySelector(".first");
const scoredNumber = document.querySelector(".scored-number");
const maxScore = document.querySelector(".max-score");

maxScore.textContent = score.length;

function giveStars () {
  for (let i = 0; i < score.length; i++) {
    score[i].addEventListener ("click", function () {
      let starValue = score[i].innerText;

      /* if there is no active class */

      let current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
      this.className += (" active");

      scoredNumber.textContent = starValue;

      /* ############################################################################# */
      
      /* if active class already exists */
      /*
      let current = document.getElementsByClassName("active");
      
      current[0].className = current[0].className.replace("active", "");
      this.className += " active"; 
      */

      /* ############################################################################## */

      /* if there is no active class */
      
      // document.querySelector(".active")?.classList.remove("active");
      // score[i].classList.add("active");
      // this.classList.add("active");
    });
  }
}

let valueOfScore = giveStars();

for (let i = 0; i < imgSubmited.length; i++) {
  btnSubmit.addEventListener ("click", function () {
    imgSubmited[i].classList.add("hide");
    imgSubmited[i].classList.toggle("hide")
    first.classList.add("hide");
    select.classList.add("hide");
  });
}

