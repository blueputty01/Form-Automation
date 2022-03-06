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

    if (options?.clear) {
      setTimeout(() => {
        this.form.clear();
      }, 1000);
    }
  }
  clear() {
    return this.form.clear();
  }
  fill(props = {}) {
    if (!('offset' in props)) {
      props.offset = this.human.promptOffset();
    }
    if (!('key' in props)) {
      props.key = this.human.promptKey(props);
    }
    if (!('keyForKey' in props)) {
      props.keyForKey = this.human.promptKeyForKey();
    }
    const totalChoices = props.keyForKey.length;

    let abcd;
    let num;

    const keyForKeyArr = props.keyForKey.split('');
    let scriptKey;
    if (!props.key.match(/\d/g)) {
      // output spreadsheet-ready key from answer key online
      abcd = props.key.split('');
      num = this.converter.get1234(abcd, keyForKeyArr);
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
    this.form.inputKey(totalChoices, props.offset, scriptKey);
  }
}

export default Wizard;
