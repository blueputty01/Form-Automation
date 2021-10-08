wizard();

function wizard() {
  //'12244241432442332123431124321232'
  //BCDCBCDDBADCDBBDCCADBDDABDBCCADAAACB
  offset = prompt("Offset (how many questions before start?): ", "");
  totalChoices = prompt("How many choices?");
  read = prompt("Paste answer key:", "");
  //convert to ABCD type key
  let filteredRead = "";
  if (read.indexOf("A") > 0) {
    filteredRead = read.replaceAll(/[^a-zA-Z]/g, "").toUpperCase();
    // console.log(filteredRead);
  } else {
    // output spreadsheet-ready key from answer key online
    for (i = 0; i < read.length; i++) {
      filteredRead += String.fromCharCode(
        read.charCodeAt(i) - "1".charCodeAt(0) + "A".charCodeAt(0)
      );
    }
  }

  spreadSheet();

  // converts ABCD based key to 1234 based
  let ca = filteredRead.split("");
  let key = [];
  ca.forEach((c) => {
    key.push(c.charCodeAt(0) - "A".charCodeAt(0));
  });

  inputKey(4);

  function spreadSheet() {
    //make string spreadsheet
    let answerKey = "";
    for (let i = 0; i < filteredRead.length; i++) {
      answerKey += filteredRead.charAt(i) + "	";
    }
    console.log(answerKey);
  }

  function inputKey() {
    const checkboxes = Array.from(
      document.getElementsByClassName(
        "quantumWizTogglePaperradioRadioContainer"
      )
    );
    for (
      let answerIndex = 0, checkboxIndex = parseInt(offset) * totalChoices;
      answerIndex < key.length;
      answerIndex++
    ) {
      const answer = key[answerIndex];
      checkboxIndex += answer;
      checkboxes[checkboxIndex].click();
      checkboxIndex += totalChoices - answer;
    }
  }

  function getAnswerKeys() {
    const questions = document.getElementsByClassName(
      "freebirdFormeditorViewItemContentWrapper"
    );
    for (const question of questions) {
      question.click();
      const [keyButton] = question.querySelectorAll(
        '[data-tooltip="Answer key and points"]'
      );
      keyButton.click();
    }
  }
}
