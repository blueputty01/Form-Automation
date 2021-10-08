//uncheck all boxes
let checked = Array.from(document.getElementsByClassName('isChecked'));
checked.forEach(ele => {
    if (ele.classList.contains('freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle')) {
        ele.click();
    }
});

