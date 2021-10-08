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
      if (key.indexOf("A") > 0) {
        // output spreadsheet-ready key from answer key online
        abcd = key.split("");
        num = get1234(key, keyForKeyArr);
        scriptKey = getScriptKey(num);
      } else {
        num = key.replaceAll(" ", "");
        num = num.split("");
        for (let i = 0; i < num.length; i++) {
          num[i] = parseInt(num[i]);
        }
        scriptKey = getScriptKey(num);
        console.log(scriptKey);
        abcd = getHuman(scriptKey, keyForKeyArr);
      }

      spreadSheet(abcd);

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
      let abcdArr = abcd.split("");
      let key = [];
      abcdArr.forEach((c) => {
        keyForKey.findIndex(c);
        key.push();
      });
    }

    function getHuman(num, keyForKey) {
      //convert to ABCD type key
      let abcd = "";
      console.log(keyForKey);
      num.forEach((n) => {
        console.log(n);
        console.log(keyForKey[n]);
        abcd += keyForKey[n];
      });
      return abcd;
    }

    function readData() {
      var offset = parseInt(
        prompt("Offset (how many questions before start?): ", "")
      );
      var totalChoices = parseInt(prompt("How many choices?"));
      var key = prompt("Paste answer key:", "");
      var keyForKey = prompt("Key for key:", "");

      // offset = 0;
      // totalChoices = "2";
      // key = "1121212212";
      // keyForKey = "✔❌";

      return {
        offset,
        totalChoices,
        key,
        keyForKey,
      };
    }

    function spreadSheet(k) {
      //make string spreadsheet
      let answerKey = "";
      for (let i = 0; i < k.length; i++) {
        answerKey += k.charAt(i) + "	";
      }
      console.log(k);
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
