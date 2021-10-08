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
