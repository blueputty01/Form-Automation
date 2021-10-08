read();

function read() {
    offset = prompt('Offset (how many questions before start?): ', '');
    read = prompt('Paste answer key:', '');
    let filteredRead = "";
    if (read.indexOf('A') > 0) {
        filteredRead = read.replaceAll(/[^a-zA-Z]/g, "").toUpperCase();
    } else {
        for (i = 0; i < read.length; i++) {
            filteredRead += String.fromCharCode(read.charCodeAt(i) - '1'.charCodeAt(0) + 'A'.charCodeAt(0));
        }
    }
    let answerKey = "";
    for (let i = 0; i < filteredRead.length; i++) {
        answerKey += filteredRead.charAt(i) + "\u0009";
    }

    let out = document.createElement('div');
    out.style.position = 'absolute';
    out.style.top = 0;
    out.style.left = 0;
    out.style.padding = '10px';
    out.style.zIndex = 5;
    out.style.background = "#fff";
    out.style.borderRadius = "10px";
    out.style.boxShadow = "0 1px 2px 0 hsla(206, 6%, 25%, 0.3), 0 2px 6px 2px hsla(206, 6%, 25%, 0.1)";
    out.innerText = answerKey;
    document.body.append(out);

    let ca = filteredRead.split("");
    let key = [];
    ca.forEach(c => {
        key.push(c.charCodeAt(0) - 'A'.charCodeAt(0));
    });

    let checkboxes = Array.from(document.getElementsByClassName('freebirdFormeditorViewAssessmentGridbodyCorrectAnswerToggle'));
    for (let answerIndex = 0, checkboxIndex = parseInt(offset) * 4; answerIndex < key.length; answerIndex++) {
        const answer = key[answerIndex];
        checkboxIndex += answer;
        checkboxes[checkboxIndex].click();
        checkboxIndex += 4 - answer;
    }
}
