(() => {
  //uncheck all boxes
  let checked = Array.from(
    document.getElementsByClassName("quantumWizTogglePaperradioRadioContainer")
  );
  console.log(checked);
  // i starts from question number
  for (let i = 60; i < checked.length; i++) {
    const ele = checked[i];
    if (ele.classList.contains("quantumWizTogglePaperradioRadioContainer")) {
      ele.click();
    }
  }
})();
