(() => {
  wizard();

  function wizard() {
    main();

    function main() {
      getAnswerKeys();
      const { offset, totalChoices, key, keyForKey } = readData();

      let abcd;
      let num;

      const keyForKeyArr = keyForKey.split("");
      let scriptKey;
      if (!key.match(/d/g)) {
        // output spreadsheet-ready key from answer key online
        abcd = key.split("");
        num = get1234(abcd, keyForKeyArr);
        console.log(num);
        scriptKey = getScriptKey(num);
      } else {
        num = num.split("");
        for (let i = 0; i < num.length; i++) {
          num[i] = parseInt(num[i]);
        }
        scriptKey = getScriptKey(num);
        abcd = getHuman(scriptKey, keyForKeyArr);
      }

      spreadSheet(abcd);
      console.log(scriptKey);
      inputKey(totalChoices, offset, scriptKey);
    }

    function getScriptKey(numKey) {
      for (let i = 0; i < numKey.length; i++) {
        numKey[i]--;
      }
      return numKey;
    }

    function get1234(abcd, keyForKey) {
      // converts ABCD based key to 1234 based
      let key = [];
      console.log(keyForKey);
      abcd.forEach((c) => {
        key.push(keyForKey.findIndex((ele) => ele == c) + 1);
      });
      return key;
    }

    function getHuman(num, keyForKey) {
      //convert to ABCD type key
      let abcd = [];
      num.forEach((n) => {
        abcd.push(keyForKey[n]);
      });
      return abcd;
    }

    function readData() {
      var offset = parseInt(
        prompt("Offset (how many questions before start?): ")
      );
      var key = prompt("Paste answer key:");
      key = key.replaceAll(" ", "");
      var keyForKey = prompt("Key for key:");
      var totalChoices = keyForKey.length;

      // offset = 0;
      // totalChoices = "4";
      // key = "23331 44423 13331 24123";
      // keyForKey = "ABCD";

      return {
        offset,
        totalChoices,
        key,
        keyForKey,
      };
    }

    function spreadSheet(abcd) {
      //make string spreadsheet
      let answerKey = "";
      for (let i = 0; i < abcd.length; i++) {
        answerKey += abcd[i] + "	";
      }
      console.log(answerKey);
    }

    function inputKey(choices, offset, key) {
      const checkboxes = Array.from(
        document.getElementsByClassName(
          "quantumWizTogglePaperradioRadioContainer"
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
        if (keyButton != null) {
          keyButton.click();
        }
      }
    }
  }
})();
