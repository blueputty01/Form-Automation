// @ts-nocheck
import Interactions from './FormInteractions';
import Converter from './Converter';
import HumanInteraction from './HumanInteraction';
class Wizard {
  form;
  converter;
  human;
  constructor(options) {
    this.form = new Interactions();
    this.converter = new Converter();
    this.human = new HumanInteraction();
    this.form.showAnswerKeys();
    if (options?.clear) {
      this.form.clear();
    }
  }
  fill(props) {
    if (!props.offset) {
      props.offset = human.promptOffset();
    }
    if (!props.key) {
      props.key = human.promptKey();
    }
    if (!props.keyForKey) {
      props.keyForKey = human.promptKeyForKey();
      props.totalChoices = props.keyForKey.length;
    }

    let abcd;
    let num;

    const keyForKeyArr = props.keyForKey.split('');
    let scriptKey;
    if (!props.key.match(/d/g)) {
      // output spreadsheet-ready key from answer key online
      abcd = props.key.split('');
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
    this.form.inputKey(props.totalChoices, props.offset, scriptKey);
  }
}

export default Wizard;
