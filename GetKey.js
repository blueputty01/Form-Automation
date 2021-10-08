read = prompt('Paste answer key:', '');
//convert to ABCD type key
let filteredRead = "";
if (read.indexOf('A') > 0) {
    filteredRead = read.replaceAll(/[^a-zA-Z]/g, "").toUpperCase();
    // console.log(filteredRead);
} else {
    // output spreadsheet-ready key from answer key online
    for (i = 0; i < read.length; i++) {
        const char = read.charCodeAt(i);
        if (char == " ".charCodeAt(0)) {
            filteredRead += " ";
        } else {
            filteredRead += String.fromCharCode(char - '1'.charCodeAt(0) + 'A'.charCodeAt(0));
        }
    }
}
//make string spreadsheet
let answerKey = "";
for (let i = 0; i < filteredRead.length; i++) {
    answerKey += filteredRead.charAt(i) + "	";
}
console.log(answerKey);