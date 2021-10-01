const questionBox = document.querySelectorAll(".question-box");
const body = document.querySelector("body");
const flexContainer = document.querySelector(".flex-container");

questionBox.forEach((question) => {
  const questionBtn = question.querySelector(".arrow-btn");
  const title = question.querySelector("h2");
  questionBtn.classList.toggle("rotate");

  function showAnswer() {
    questionBox.forEach((item) => {
      if (item != question) {
        item.classList.remove("show");
      }
    });
    question.classList.toggle("show");
  }

  title.addEventListener("click", () => {
    showAnswer();
  });

  questionBtn.addEventListener("click", () => {
    showAnswer();
  });
});

flexContainer.onclick = function () {
  body.classList.add("background-active");
};
