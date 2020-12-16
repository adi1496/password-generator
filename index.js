const dom = {
    inputRange: document.getElementById('length-range'),
    inputLength: document.getElementById('length'),
    passowrdOutput: document.getElementById('generated-password'),
    bigLetters: document.getElementById('include-big-letters'),
    numbers: document.getElementById('include-numbers'),
    symbols: document.getElementById('include-symbols'),

    generateBtn: document.getElementById('btn')
}

const smallLettersRange = [97, 122];
const bigLettersRange = [65, 90];
const numbersRange = [48, 57];
const symbolsRange = [33 ,47];


dom.inputRange.addEventListener('change', e => {
    dom.inputLength.value = dom.inputRange.value;
});

dom.inputLength.addEventListener('change', e => {
    dom.inputRange.value = dom.inputLength.value;
});

const includeFromASCII = (range) => {
    const arr = [];
    for(let i = range[0]; i <= range[1]; i++) {
        arr.push(String.fromCharCode(i));
    }

    return arr;
}

const createPassword = (symbolsArray) => {
    const passwordArray = [];
    const passwordLength = parseInt(dom.inputLength.value);

    for(let i = 0; i <= passwordLength; i++){
        passwordArray.push(symbolsArray[Math.floor(Math.random() * symbolsArray.length)]);
    }

    return passwordArray.join('');
}

dom.generateBtn.addEventListener('click', event => {
    event.preventDefault();

    let symbolsArray = [...includeFromASCII(smallLettersRange)];
    if(dom.bigLetters.checked) symbolsArray = [...symbolsArray, ...includeFromASCII(bigLettersRange)];
    if(dom.numbers.checked) symbolsArray = [...symbolsArray, ...includeFromASCII(numbersRange)];
    if(dom.symbols.checked) symbolsArray = [...symbolsArray, ...includeFromASCII(symbolsRange)];

    const password = createPassword(symbolsArray);

    dom.passowrdOutput.textContent = password;
})