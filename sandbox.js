(() => {
  const questions = document.getElementsByClassName(
    "freebirdFormeditorViewItemContentWrapper"
  );
  for (const question of questions) {
    question.click();
    console.log(question);
    const [keyButton] = question.querySelectorAll(
      '[data-tooltip="Answer key and points"]'
    );
    console.log(keyButton);
    keyButton.click();
    // break;
  }
})();
