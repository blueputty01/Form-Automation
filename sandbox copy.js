(() => {
  const questions = document.getElementsByClassName(
    "freebirdFormeditorViewItemContentWrapper"
  );
  for (const question of questions) {
    console.log(question);
    question.click();
    const [answerKeyButton] = question.getElementsByClassName(
      "appsMaterialWizButtonEl hasIcon appsMaterialWizButtonPaperbuttonEl appsMaterialWizButtonPaperbuttonText appsMaterialWizButtonPaperbuttonTextColored freebirdFormeditorViewAssessmentFeedbackAddFeedbackButton isUndragged"
    );

    question.querySelectorAll('[data-tooltip="Answer key and points"]');
    console.log(answerKeyButton);
    answerKeyButton.click();
  }
})();
