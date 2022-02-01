// @ts-nocheck
import Interactions from './FormInteractions';
import Converter from './Converter';
class Wizard {
  form;
  converter;
  constructor() {
    this.form = new Interactions();
    this.converter = new Converter();
    this.form.showAnswerKeys();
  }
  fill(props) {
    // { offset, totalChoices, key, keyForKey }

    let abcd;
    let num;

    const keyForKeyArr = props.keyForKey.split('');
    let scriptKey;
    if (!props.key.match(/d/g)) {
      // output spreadsheet-ready key from answer key online
      abcd = key.split('');
      num = this.converter.get1234(abcd, keyForKeyArr);
      console.log(num);
      scriptKey = this.converter.getScriptKey(num);
    } else {
      num = props.key.split('');
      for (let i = 0; i < num.length; i++) {
        num[i] = parseInt(num[i]);
      }
      scriptKey = this.converter.getScriptKey(num);
      abcd = this.converter.getHuman(scriptKey, keyForKeyArr);
    }

    this.converter.spreadSheet(abcd);
    console.log(scriptKey);
    this.converter.inputKey(props.totalChoices, props.offset, props.scriptKey);
  }

  readData() {
    var offset = parseInt(
      prompt('Offset (how many questions before start?): ')
    );
    var key = prompt('Paste answer key:');
    //replace spaces
    key = key.replaceAll(' ', '');
    //replace next column characters
    key = key.replaceAll('	', '');
    var keyForKey = prompt('Key for key:');
    var totalChoices = keyForKey.length;

    return {
      offset,
      totalChoices,
      key,
      keyForKey,
    };
  }
}

export default Wizard;
