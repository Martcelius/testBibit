
// result refactor code

function findFirstStringInBracket(str) {
    if (str) {
    const indexFirstBracketFound = str.indexOf("(");
    const indexClosingBracketFound = str.indexOf(")");
    const isStringExists = str.length > 0

    if (isStringExists && indexFirstBracketFound >= 0 && indexClosingBracketFound >= 0) {
        let wordsInBracket = str.substr( indexFirstBracketFound+1,  indexClosingBracketFound-1);
        return wordsInBracket;
    } else {
        return '';
    }
    } else {
        return ''
    }
    
}

console.log(findFirstStringInBracket('(test)'));
