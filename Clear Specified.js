//uncheck all boxes
let checked = Array.from(document.getElementsByClassName('isChecked'));
for (let i = 36; i < checked.length; i++) {
    const ele = checked[i];
    if (ele.classList.contains('freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle')) {
        ele.click();
    }
}
