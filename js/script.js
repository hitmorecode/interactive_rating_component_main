const score = document.querySelectorAll(".btn-score");
const btnSubmit = document.querySelector(".btn-submit");
const scoredNumber = document.querySelector(".scored-number");
const maxScore = document.querySelector(".max-score");
const card = document.querySelector(".card-show");
const cardRated = document.querySelector(".card-rated");

maxScore.textContent = score.length;

function giveStars (num) {
  for (let i = 0; i < score.length; i++) {
    score[i].addEventListener ("click", function () {
      let num = score[i].innerText;

      let current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
      this.className += (" active");

      scoredNumber.textContent = num;
 
    });
  }
  return num;
}

let valueOfScore = giveStars();

btnSubmit.addEventListener ("click", function () {
  card.classList.add("hide");
  cardRated.classList.add("show");
});

