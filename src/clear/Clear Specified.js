(() => {
  //uncheck all boxes
  let checked = Array.from(
    document.getElementsByClassName(
      "freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle "
    )
  );
  console.log(checked);
  // i starts from question number
  for (let i = 220; i < checked.length; i++) {
    const ele = checked[i];
    if (ele.classList.contains("isChecked")) {
      ele.click();
    }
  }
})();
