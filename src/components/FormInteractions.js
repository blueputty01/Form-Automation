// @ts-nocheck
class FormInteractions {
  inputKey = (choices, offset, key) => {
    const checkboxes = Array.from(
      document.getElementsByClassName(
        'quantumWizTogglePaperradioRadioContainer'
      )
    );
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

  clear = (start, end) => {
    //uncheck all boxes
    let checked = Array.from(
      document.getElementsByClassName(
        'freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle '
      )
    );
    // i starts from question number
    for (let i = start ? start : 0; i < end ? end : checked.length; i++) {
      const ele = checked[i];
      if (ele.classList.contains('isChecked')) {
        ele.click();
      }
    }
  };
}

export default FormInteractions;