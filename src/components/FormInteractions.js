// @ts-nocheck
const mcqClass = 'P93BCe';
const checkedClass = 'N2RpBe';
const inputSelector = '[aria-label="Add a correct answer"]';

const questionClass = 'gk8i6';
const answerKeyButtonSelector = '[data-tooltip="Answer key and points"]';

class FormInteractions {
  checkboxes;

  constructor() {
    this.showAnswerKeys();
    this.checkboxes = Array.from(document.getElementsByClassName(mcqClass));
  }

  inputKey = (choices, offset, key) => {
    console.log(choices, offset, key);
    for (
      let answerIndex = 0, checkboxIndex = offset;
      answerIndex < key.length;
      answerIndex++
    ) {
      const answer = key[answerIndex];
      checkboxIndex += answer;
      this.checkboxes[checkboxIndex].click();
      checkboxIndex += choices - answer;
    }
  };

  setShortAnswer = (correct) => {
    let inputs = document.querySelectorAll(inputSelector);
    // for (let i = 0; i < correct.length; i++) {
    inputs[0].click();
    // }
  };

  showAnswerKeys = () => {
    const questions = Array.from(
      document.getElementsByClassName(questionClass)
    );
    questions.forEach((question) => {
      question.click();
      const [keyButton] = question.querySelectorAll(answerKeyButtonSelector);
      if (keyButton != null) {
        keyButton.click();
      }
    });
  };

  clear = async (start = 0, end = -1) => {
    console.log('hi');
    //uncheck all boxes
    if (end === -1) {
      end = this.checkboxes.length;
    }
    // i starts from question number
    for (let i = start; i < end; i++) {
      const ele = this.checkboxes[i];
      if (ele.classList.contains(checkedClass)) {
        ele.click();
      }
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };
}

export default FormInteractions;
