// @ts-nocheck
class FormInteractions {
  inputKey = (choices, offset, key) => {
    const checkboxes = Array.from(
      document.getElementsByClassName(
        'quantumWizTogglePaperradioRadioContainer'
      )
    );
    console.log(choices, offset, key);
    for (
      let answerIndex = 0, checkboxIndex = offset;
      answerIndex < key.length;
      answerIndex++
    ) {
      const answer = key[answerIndex];
      checkboxIndex += answer;
      checkboxes[checkboxIndex].click();
      checkboxIndex += choices - answer;
    }
  };

  showAnswerKeys = () => {
    const questions = document.getElementsByClassName(
      'freebirdFormeditorViewItemContentWrapper'
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
  };

  clear = (start = 0, end = -1) => {
    //uncheck all boxes
    let checked = Array.from(
      document.getElementsByClassName(
        'freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle '
      )
    );

    if (end === -1) {
      end = checked.length;
    }
    // i starts from question number
    for (let i = start; i < end; i++) {
      const ele = checked[i];
      if (ele.classList.contains('isChecked')) {
        ele.click();
      }
    }
  };
}

export default FormInteractions;
