//uncheck all boxes
let checked = Array.from(document.getElementsByClassName("isChecked"));
// i starts from question number
for (let i = 200; i < checked.length; i++) {
  const ele = checked[i];
  if (
    ele.classList.contains(
      "freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle"
    )
  ) {
    ele.click();
  }
}
