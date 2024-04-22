var inputWord = document.getElementById("input-word");

inputWord.onkeyup = function (event) {
    if (event.key === "Enter") {
        var word = event.target.value;
        var reversedWord = word.split('').reverse().join('');
        var alert = document.getElementById("alert");
        alert.style.display = "block";

        if (word.toLowerCase() === reversedWord.toLowerCase()) {
            alert.innerText = `Het woord ${word} is een palindroom!`  ;
        } else {
            alert.innerText = `Het woord ${word} omgedraaid is ${reversedWord}.`;
        }
    }
}       