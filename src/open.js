import Interactions from './components/FormInteractions';

function init() {
  const form = new Interactions();
  form.showAnswerKeys();
  const { offset, totalChoices, key, keyForKey } = readData();

  let abcd;
  let num;

  const keyForKeyArr = keyForKey.split('');
  let scriptKey;
  if (!key.match(/d/g)) {
    // output spreadsheet-ready key from answer key online
    abcd = key.split('');
    num = this.get1234(abcd, keyForKeyArr);
    console.log(num);
    scriptKey = this.getScriptKey(num);
  } else {
    num = num.split('');
    for (let i = 0; i < num.length; i++) {
      num[i] = parseInt(num[i]);
    }
    scriptKey = this.getScriptKey(num);
    abcd = this.getHuman(scriptKey, keyForKeyArr);
  }

  this.spreadSheet(abcd);
  console.log(scriptKey);
  this.inputKey(totalChoices, offset, scriptKey);
}

function readData() {
  var offset = parseInt(prompt('Offset (how many questions before start?): '));
  var key = prompt('Paste answer key:');
  //replace spaces
  key = key.replaceAll(' ', '');
  //replace next column characters
  key = key.replaceAll('	', '');
  var keyForKey = prompt('Key for key:');
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
