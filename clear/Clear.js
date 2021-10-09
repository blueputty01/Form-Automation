function getAnswerKeys() {
  const questions = document.getElementsByClassName(
    "freebirdFormeditorViewItemContentWrapper"
  );
  for (const question of questions) {
    question.click();
    const [keyButton] = question.querySelectorAll(
      '[data-tooltip="Answer key and points"]'
    );
    if (keyButton != null) {
      keyButton.click();
    }
  }
}

getAnswerKeys();
//uncheck all boxes
let checked = Array.from(document.getElementsByClassName("isChecked"));
checked.forEach((ele) => {
  if (
    ele.classList.contains(
      "freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle"
    )
  ) {
    ele.click();
  }
});
