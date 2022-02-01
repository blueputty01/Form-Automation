class Converter {
  getScriptKey = (numKey) => {
    for (let i = 0; i < numKey.length; i++) {
      numKey[i]--;
    }
    return numKey;
  };

  get1234 = (abcd, keyForKey) => {
    // converts ABCD based key to 1234 based
    let key = [];
    console.log(keyForKey);
    abcd.forEach((c) => {
      key.push(keyForKey.findIndex((ele) => ele == c) + 1);
    });
    return key;
  };

  getHuman = (num, keyForKey) => {
    //convert to ABCD type key
    let abcd = [];
    num.forEach((n) => {
      abcd.push(keyForKey[n]);
    });
    return abcd;
  };

  spreadSheet = (abcd) => {
    //make string spreadsheet
    let answerKey = '';
    for (let i = 0; i < abcd.length; i++) {
      answerKey += abcd[i] + '	';
    }
    console.log(answerKey);
  };
}

export default Converter;
