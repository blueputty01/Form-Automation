// prettier-ignore
(() => {
  const string = "CDDCAD CDDCCD BBCDCD BADDAC BCCC";
  const formatted = string.replace(/ /g, "");
  const arr = formatted.split('');
  //make string spreadsheet
  console.log(arr);
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    out += c;
    out += "	";
  }
  console.log(out);
})();
