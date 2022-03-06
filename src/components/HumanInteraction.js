class HumanInteraction {
  promptKey(props = {}) {
    let key = prompt('Paste answer key:');

    if (props?.letters) {
      key = key.replaceAll(/[^a-zA-Z]/g, '');
    } else {
      //replace spaces
      key = key.replaceAll(' ', '');
      //replace next column characters
      key = key.replaceAll('	', '');
    }
    return key;
  }
  promptKeyForKey() {
    return prompt('Key for key:');
  }
  promptOffset() {
    return parseInt(prompt('Offset (how many questions before start?): '));
  }
}

export default HumanInteraction;
